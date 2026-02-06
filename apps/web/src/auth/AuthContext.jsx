import { createContext, useState, useEffect, useCallback, useMemo } from 'react'
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
  clearTokens,
} from './auth-storage'
import * as authApi from '../api/auth'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = user !== null

  // On mount: if we have an access token, fetch the current user
  useEffect(() => {
    const token = getAccessToken()
    if (!token) {
      setIsLoading(false)
      return
    }

    authApi.getMe()
      .then(setUser)
      .catch(() => {
        clearTokens()
        setUser(null)
      })
      .finally(() => setIsLoading(false))
  }, [])

  // Listen for auth:expired from the API client
  useEffect(() => {
    const handleExpired = () => {
      setUser(null)
      clearTokens()
    }

    window.addEventListener('auth:expired', handleExpired)
    return () => window.removeEventListener('auth:expired', handleExpired)
  }, [])

  const login = useCallback(async (code, redirectUri) => {
    const data = await authApi.githubCallback(code, redirectUri)
    setAccessToken(data.access)
    setRefreshToken(data.refresh)
    setUser(data.user)
    return data.user
  }, [])

  const registerUser = useCallback(async (username, email, password, passwordConfirm) => {
    const data = await authApi.register(username, email, password, passwordConfirm)
    setAccessToken(data.access)
    setRefreshToken(data.refresh)
    setUser(data.user)
    return data.user
  }, [])

  const loginUser = useCallback(async (loginValue, password) => {
    const data = await authApi.login(loginValue, password)
    setAccessToken(data.access)
    setRefreshToken(data.refresh)
    setUser(data.user)
    return data.user
  }, [])

  const refreshUser = useCallback(async () => {
    try {
      const freshUser = await authApi.getMe()
      setUser(freshUser)
    } catch { /* stale data better than no data */ }
  }, [])

  const logout = useCallback(() => {
    clearTokens()
    setUser(null)
  }, [])

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
    login,
    registerUser,
    loginUser,
    refreshUser,
    logout,
  }), [user, isAuthenticated, isLoading, login, registerUser, loginUser, refreshUser, logout])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
