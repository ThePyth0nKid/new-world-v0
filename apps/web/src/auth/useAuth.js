import { useContext } from 'react'
import { AuthContext } from './AuthContext'
import { buildGitHubAuthUrl } from './github-oauth'

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return ctx
}

export function loginWithGitHub() {
  window.location.href = buildGitHubAuthUrl()
}
