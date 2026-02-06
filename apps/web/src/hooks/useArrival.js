import { useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as api from '../api/arrival'
import { usePolling } from './usePolling'
import { useAuth } from '../auth/useAuth'
import { getPendingFinalize, clearPendingFinalize } from '../auth/auth-storage'

const POLL_INTERVAL_MS = 2000

const INITIAL_STATE = {
  phase: 'idle',
  sessionId: null,
  traits: null,
  messages: [],          // { role: 'user'|'assistant', content: string }
  images: [],            // generated portrait URLs
  selectedImage: null,
  refinementCount: 0,
  names: [],
  character: null,       // finalized character data
  error: null,
  loading: false,
  showLoginPrompt: false,
  pendingName: null,     // name waiting for auth before finalize
}

export function useArrival() {
  const [state, setState] = useState(INITIAL_STATE)
  const sessionIdRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { isAuthenticated, refreshUser } = useAuth()
  const autoFinalizeRef = useRef(false)

  // Keep ref in sync with state
  useEffect(() => {
    sessionIdRef.current = state.sessionId
  }, [state.sessionId])

  // ── Helpers ──────────────────────────────────────────────────────

  const setField = useCallback((patch) => {
    setState((prev) => ({ ...prev, ...patch }))
  }, [])

  const setError = useCallback((error) => {
    setField({ error: typeof error === 'string' ? error : error.message, loading: false })
  }, [setField])

  const clearError = useCallback(() => {
    setField({ error: null })
  }, [setField])

  // ── Polling for portrait generation / refinement ─────────────────

  const isGenerating = state.phase === 'vision' && state.loading
  const isRefining = state.phase === 'forge' && state.loading

  const pollFn = useCallback(() => {
    const sid = sessionIdRef.current
    if (!sid) return Promise.resolve(null)
    return api.getProgress(sid)
  }, [])

  const { data: progressData } = usePolling(
    pollFn,
    POLL_INTERVAL_MS,
    isGenerating || isRefining,
  )

  // React to progress updates
  useEffect(() => {
    if (!progressData || (!isGenerating && !isRefining)) return

    if (progressData.status !== 'done') return
    const imgs = progressData.images || []

    if (isGenerating && imgs.length > 0) {
      setState((prev) => ({
        ...prev,
        images: imgs,
        loading: false,
      }))
    } else if (isRefining && imgs.length > 0) {
      setState((prev) => ({
        ...prev,
        selectedImage: imgs[0],
        refinementCount: prev.refinementCount + 1,
        loading: false,
      }))
    }
  }, [progressData, isGenerating, isRefining])

  // ── Actions ──────────────────────────────────────────────────────

  const start = useCallback(async () => {
    setField({ loading: true, error: null })
    try {
      const data = await api.startSession()
      const phase = data.phase || 'interview'

      // Hydrate state when resuming an existing session
      const resumed = phase !== 'interview'
      setField({
        sessionId: data.session_id,
        phase,
        traits: data.traits || null,
        messages: data.interview_history || [],
        images: data.generated_images || [],
        selectedImage: data.selected_image || null,
        refinementCount: data.refinement_count || 0,
        loading: false,
        ...(resumed ? { error: null } : {}),
      })
    } catch (err) {
      setError(err)
    }
  }, [setField, setError])

  const sendMessage = useCallback(async (message) => {
    const sid = sessionIdRef.current
    if (!sid) return
    const userMsg = { role: 'user', content: message }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMsg],
      loading: true,
      error: null,
    }))

    try {
      const data = await api.sendMessage(sid, message)

      setState((prev) => {
        const assistantMsg = { role: 'assistant', content: data.reply }
        const nextPhase = data.phase === 'vision' ? 'vision' : prev.phase
        return {
          ...prev,
          messages: [...prev.messages, assistantMsg],
          traits: data.traits || prev.traits,
          phase: nextPhase,
          loading: false,
        }
      })
    } catch (err) {
      setError(err)
    }
  }, [setError])

  const generate = useCallback(async () => {
    const sid = sessionIdRef.current
    if (!sid) return
    setField({ loading: true, error: null })
    try {
      await api.triggerGenerate(sid)
    } catch (err) {
      setError(err)
    }
  }, [setField, setError])

  const select = useCallback(async (index) => {
    const sid = sessionIdRef.current
    if (!sid) return
    setField({ loading: true, error: null })
    try {
      const data = await api.selectPortrait(sid, index)
      setField({
        selectedImage: data.selected_image,
        phase: 'forge',
        loading: false,
      })
    } catch (err) {
      setError(err)
    }
  }, [setField, setError])

  const refine = useCallback(async (feedback) => {
    const sid = sessionIdRef.current
    if (!sid) return
    setField({ loading: true, error: null })
    try {
      await api.sendRefine(sid, feedback)
    } catch (err) {
      setError(err)
    }
  }, [setField, setError])

  const requestNames = useCallback(async () => {
    const sid = sessionIdRef.current
    if (!sid) return
    setField({ loading: true, error: null })
    try {
      const data = await api.getNames(sid)
      setField({
        names: data.names,
        phase: 'name',
        loading: false,
      })
    } catch (err) {
      setError(err)
    }
  }, [setField, setError])

  const doFinalize = useCallback(async (sid, name) => {
    setField({ loading: true, error: null, showLoginPrompt: false })
    try {
      const data = await api.finalize(sid, name)
      setField({
        character: data,
        phase: 'completed',
        loading: false,
        pendingName: null,
      })
      clearPendingFinalize()
      refreshUser()
    } catch (err) {
      setError(err)
    }
  }, [setField, setError, refreshUser])

  const finalizeCharacter = useCallback(async (name) => {
    const sid = sessionIdRef.current
    if (!sid) return

    if (!isAuthenticated) {
      setField({ showLoginPrompt: true, pendingName: name })
      return
    }

    await doFinalize(sid, name)
  }, [isAuthenticated, setField, doFinalize])

  const dismissLoginPrompt = useCallback(() => {
    setField({ showLoginPrompt: false })
  }, [setField])

  const pendingNameRef = useRef(null)

  useEffect(() => {
    pendingNameRef.current = state.pendingName
  }, [state.pendingName])

  const onLoginPromptAuth = useCallback(() => {
    const sid = sessionIdRef.current
    const name = pendingNameRef.current
    if (sid && name) {
      doFinalize(sid, name)
    }
  }, [doFinalize])

  // ── Auto-finalize after OAuth redirect ──────────────────────────

  useEffect(() => {
    if (autoFinalizeRef.current) return
    if (searchParams.get('finalize') !== 'true') return
    if (!isAuthenticated) return

    const pending = getPendingFinalize()
    if (!pending) return

    autoFinalizeRef.current = true

    // Clean up the query param
    setSearchParams({}, { replace: true })

    // Use the pending session to finalize
    sessionIdRef.current = pending.sessionId
    setState((prev) => ({
      ...prev,
      sessionId: pending.sessionId,
      phase: 'name',
    }))

    doFinalize(pending.sessionId, pending.name)
  }, [searchParams, isAuthenticated, setSearchParams, doFinalize])

  // ── Progress info (exposed for UI) ───────────────────────────────

  const progress = useMemo(() => {
    if (!progressData) return null
    return {
      status: progressData.status,
      completed: progressData.completed ?? 0,
      total: progressData.total ?? 4,
      currentStep: progressData.current_step ?? '',
    }
  }, [progressData])

  return {
    ...state,
    progress,
    clearError,
    start,
    sendMessage,
    generate,
    select,
    refine,
    requestNames,
    finalizeCharacter,
    dismissLoginPrompt,
    onLoginPromptAuth,
  }
}
