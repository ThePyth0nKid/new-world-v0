/**
 * Token storage and pending-finalize state management.
 *
 * Access/refresh tokens go to localStorage (persist across tabs).
 * Pending-finalize data goes to sessionStorage (survives OAuth redirect
 * but is scoped to one tab).
 */

const ACCESS_KEY = 'access_token'
const REFRESH_KEY = 'refresh_token'
const PENDING_KEY = 'nw_pending_finalize'

// ── Access token ──────────────────────────────────────────────────

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY)
}

export function setAccessToken(token) {
  localStorage.setItem(ACCESS_KEY, token)
}

// ── Refresh token ─────────────────────────────────────────────────

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY)
}

export function setRefreshToken(token) {
  localStorage.setItem(REFRESH_KEY, token)
}

// ── Clear all ─────────────────────────────────────────────────────

export function clearTokens() {
  localStorage.removeItem(ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
}

// ── Pending finalize (localStorage with 10-min TTL) ───────────────
// Uses localStorage instead of sessionStorage so the data survives
// if the browser opens the OAuth callback in a new tab.

const PENDING_TTL = 10 * 60 * 1000 // 10 minutes

export function setPendingFinalize({ sessionId, name }) {
  const data = { sessionId, name, expiresAt: Date.now() + PENDING_TTL }
  localStorage.setItem(PENDING_KEY, JSON.stringify(data))
}

export function getPendingFinalize() {
  const raw = localStorage.getItem(PENDING_KEY)
  if (!raw) return null
  try {
    const data = JSON.parse(raw)
    if (Date.now() > data.expiresAt) {
      clearPendingFinalize()
      return null
    }
    return { sessionId: data.sessionId, name: data.name }
  } catch {
    clearPendingFinalize()
    return null
  }
}

export function clearPendingFinalize() {
  localStorage.removeItem(PENDING_KEY)
}
