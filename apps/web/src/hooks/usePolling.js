import { useState, useEffect, useRef, useCallback } from 'react'

const MAX_CONSECUTIVE_ERRORS = 5

/**
 * Generic polling hook using setTimeout chaining (no overlapping ticks).
 *
 * @param {() => Promise<T>} fetchFn  — async function to call each tick
 * @param {number}           intervalMs — milliseconds between polls
 * @param {boolean}          enabled    — start / stop polling
 * @returns {{ data: T|null, error: Error|null, isPolling: boolean }}
 */
export function usePolling(fetchFn, intervalMs, enabled) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isPolling, setIsPolling] = useState(false)
  const timerRef = useRef(null)
  const fetchRef = useRef(fetchFn)
  const errorCountRef = useRef(0)

  useEffect(() => {
    fetchRef.current = fetchFn
  }, [fetchFn])

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setIsPolling(false)
  }, [])

  useEffect(() => {
    if (!enabled) {
      stop()
      return
    }

    let cancelled = false
    errorCountRef.current = 0
    setIsPolling(true)
    setError(null)

    async function tick() {
      try {
        const result = await fetchRef.current()
        if (!cancelled) {
          setData(result)
          errorCountRef.current = 0
        }
      } catch (err) {
        if (!cancelled) {
          errorCountRef.current += 1
          setError(err)
          if (errorCountRef.current >= MAX_CONSECUTIVE_ERRORS) {
            stop()
            return
          }
        }
      }
      if (!cancelled) {
        timerRef.current = setTimeout(tick, intervalMs)
      }
    }

    tick()

    return () => {
      cancelled = true
      stop()
    }
  }, [enabled, intervalMs, stop])

  return { data, error, isPolling }
}
