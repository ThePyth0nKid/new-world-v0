/**
 * Fetch wrapper with JWT support for the NW API.
 *
 * In dev mode the Vite proxy forwards /api → host.docker.internal:8060,
 * so we use a relative path. In production, VITE_API_URL points at the
 * real backend.
 *
 * On 401 the client transparently attempts a token refresh before
 * dispatching auth:expired.
 */

import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from '../auth/auth-storage'

const BASE_URL = import.meta.env.VITE_API_URL || ''

let refreshPromise = null

function authHeaders() {
  const token = getAccessToken()
  if (!token) return {}
  return { Authorization: `Bearer ${token}` }
}

async function tryRefresh() {
  const refresh = getRefreshToken()
  if (!refresh) return false

  try {
    const res = await fetch(`${BASE_URL}/api/v1/auth/jwt/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh }),
    })

    if (!res.ok) return false

    const data = await res.json()
    setAccessToken(data.access)
    if (data.refresh) setRefreshToken(data.refresh)
    return true
  } catch {
    return false
  }
}

async function handleResponse(res, retryFn) {
  if (res.status === 401 && retryFn) {
    if (!refreshPromise) {
      refreshPromise = tryRefresh().finally(() => { refreshPromise = null })
    }

    const refreshed = await refreshPromise
    if (refreshed) return retryFn()

    clearTokens()
    window.dispatchEvent(new CustomEvent('auth:expired'))
  }

  if (!res.ok) {
    const body = await res.json().catch(() => null)
    const message = body?.error || body?.detail || `HTTP ${res.status}`
    const err = new Error(message)
    err.status = res.status
    err.body = body
    throw err
  }

  return res.json()
}

export async function apiGet(path) {
  const doFetch = () =>
    fetch(`${BASE_URL}${path}`, {
      headers: {
        Accept: 'application/json',
        ...authHeaders(),
      },
    })

  const res = await doFetch()
  return handleResponse(res, async () => {
    const retry = await doFetch()
    return handleResponse(retry, null)
  })
}

export async function apiPost(path, body = {}) {
  const doFetch = () =>
    fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...authHeaders(),
      },
      body: JSON.stringify(body),
    })

  const res = await doFetch()
  return handleResponse(res, async () => {
    const retry = await doFetch()
    return handleResponse(retry, null)
  })
}
