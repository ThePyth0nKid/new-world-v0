/**
 * Auth API endpoints.
 *
 * These hit the IGOULTRAv0 backend auth routes:
 *   POST /api/v1/auth/register/
 *   POST /api/v1/auth/login/
 *   POST /api/v1/auth/github/callback/
 *   GET  /api/v1/auth/me/
 *   POST /api/v1/auth/jwt/refresh/
 */

import { apiGet, apiPost } from './client'

export function register(username, email, password, passwordConfirm) {
  return apiPost('/api/v1/auth/register/', {
    username,
    email,
    password,
    password_confirm: passwordConfirm,
  })
}

export function login(loginValue, password) {
  return apiPost('/api/v1/auth/login/', { login: loginValue, password })
}

export function githubCallback(code, redirectUri) {
  return apiPost('/api/v1/auth/github/callback/', {
    code,
    redirect_uri: redirectUri,
  })
}

export function getMe() {
  return apiGet('/api/v1/auth/me/')
}

export function refreshToken(refresh) {
  return apiPost('/api/v1/auth/jwt/refresh/', { refresh })
}
