/**
 * GitHub OAuth URL builder.
 *
 * Reads client ID and redirect URI from Vite env vars so the same
 * code works in dev (localhost:3050) and production (neueswelt.dev).
 *
 * Includes a CSRF `state` parameter stored in sessionStorage and
 * verified in AuthCallbackPage.
 */

const CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_GITHUB_REDIRECT_URI

const OAUTH_STATE_KEY = 'nw_oauth_state'

export function buildGitHubAuthUrl() {
  const state = crypto.randomUUID()
  sessionStorage.setItem(OAUTH_STATE_KEY, state)

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    scope: 'read:user user:email',
    state,
  })

  return `https://github.com/login/oauth/authorize?${params}`
}

export function verifyOAuthState(state) {
  const saved = sessionStorage.getItem(OAUTH_STATE_KEY)
  sessionStorage.removeItem(OAUTH_STATE_KEY)
  return saved !== null && saved === state
}
