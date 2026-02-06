import { useState, useCallback } from 'react'
import { useAuth } from '../../../auth/useAuth'

const TAB_LOGIN = 'login'
const TAB_REGISTER = 'register'

const INPUT_CLASS = 'w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-xs placeholder:text-white/30 focus:border-cyan/40 focus:outline-none transition-colors'

const AuthPage = ({ onClose }) => {
  const { user, isAuthenticated, registerUser, loginUser, logout } = useAuth()
  const [activeTab, setActiveTab] = useState(TAB_LOGIN)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [loginValue, setLoginValue] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [regEmail, setRegEmail] = useState('')
  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('')

  const handleLogin = useCallback(async (e) => {
    e.preventDefault()
    setError('')

    if (!loginValue.trim() || !loginPassword) {
      setError('Bitte alle Felder ausfuellen.')
      return
    }

    setSubmitting(true)
    try {
      await loginUser(loginValue.trim(), loginPassword)
    } catch (err) {
      setError(err.body?.detail || err.body?.error || err.message || 'Login fehlgeschlagen.')
    } finally {
      setSubmitting(false)
    }
  }, [loginValue, loginPassword, loginUser])

  const handleRegister = useCallback(async (e) => {
    e.preventDefault()
    setError('')

    if (!regEmail.trim() || !regUsername.trim() || !regPassword || !regPasswordConfirm) {
      setError('Bitte alle Felder ausfuellen.')
      return
    }

    if (regUsername.trim().length < 3 || regUsername.trim().length > 30) {
      setError('Username: 3-30 Zeichen.')
      return
    }

    if (regPassword.length < 8) {
      setError('Passwort: min. 8 Zeichen.')
      return
    }

    if (regPassword !== regPasswordConfirm) {
      setError('Passwoerter stimmen nicht ueberein.')
      return
    }

    setSubmitting(true)
    try {
      await registerUser(regUsername.trim(), regEmail.trim(), regPassword, regPasswordConfirm)
    } catch (err) {
      const body = err.body
      const msg = body?.detail
        || body?.error
        || body?.username?.[0]
        || body?.email?.[0]
        || body?.password?.[0]
        || err.message
        || 'Registrierung fehlgeschlagen.'
      setError(msg)
    } finally {
      setSubmitting(false)
    }
  }, [regEmail, regUsername, regPassword, regPasswordConfirm, registerUser])

  const switchTab = useCallback((tab) => {
    setActiveTab(tab)
    setError('')
  }, [])

  // Logged-in state: show user info
  if (isAuthenticated) {
    const char = user?.nw_character
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        {char?.portrait_url ? (
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan/40">
            <img src={char.portrait_url} alt={char.name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg font-round-bold">
            {(user?.username || '?').slice(0, 2).toUpperCase()}
          </div>
        )}

        <div className="text-center">
          <p className="text-white font-round-bold text-sm">
            {char?.name || user?.username}
          </p>
          {char?.archetype && (
            <p className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5">
              {char.archetype}
            </p>
          )}
        </div>

        <button
          onClick={logout}
          className="text-white/30 text-[10px] uppercase tracking-wider hover:text-white/50 transition-colors mt-2"
        >
          Abmelden
        </button>
      </div>
    )
  }

  // Logged-out state: login/register forms
  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="flex gap-1 mb-3 bg-white/5 rounded-lg p-0.5">
        <button
          onClick={() => switchTab(TAB_LOGIN)}
          className={`flex-1 py-1.5 text-[10px] font-round-bold uppercase tracking-wider rounded-md transition-colors ${
            activeTab === TAB_LOGIN
              ? 'bg-cyan text-[#0d0d0d]'
              : 'text-white/50 hover:text-white/70'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => switchTab(TAB_REGISTER)}
          className={`flex-1 py-1.5 text-[10px] font-round-bold uppercase tracking-wider rounded-md transition-colors ${
            activeTab === TAB_REGISTER
              ? 'bg-cyan text-[#0d0d0d]'
              : 'text-white/50 hover:text-white/70'
          }`}
        >
          Registrieren
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-2 rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-1.5 text-red-400 text-[10px]">
          {error}
        </div>
      )}

      {/* Login Form */}
      {activeTab === TAB_LOGIN && (
        <form onSubmit={handleLogin} className="flex flex-col gap-2.5">
          <input
            type="text"
            placeholder="Email oder Username"
            value={loginValue}
            onChange={(e) => setLoginValue(e.target.value)}
            className={INPUT_CLASS}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Passwort"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className={INPUT_CLASS}
            autoComplete="current-password"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-cyan px-4 py-2 text-[#0d0d0d] font-round-bold uppercase tracking-wider text-[10px] hover:bg-cyan/90 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Anmelden...' : 'Anmelden'}
          </button>
        </form>
      )}

      {/* Register Form */}
      {activeTab === TAB_REGISTER && (
        <form onSubmit={handleRegister} className="flex flex-col gap-2.5">
          <input
            type="email"
            placeholder="Email"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            className={INPUT_CLASS}
            autoComplete="email"
          />
          <input
            type="text"
            placeholder="Username (3-30 Zeichen)"
            value={regUsername}
            onChange={(e) => setRegUsername(e.target.value)}
            className={INPUT_CLASS}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Passwort (min. 8 Zeichen)"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            className={INPUT_CLASS}
            autoComplete="new-password"
          />
          <input
            type="password"
            placeholder="Passwort bestaetigen"
            value={regPasswordConfirm}
            onChange={(e) => setRegPasswordConfirm(e.target.value)}
            className={INPUT_CLASS}
            autoComplete="new-password"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-cyan px-4 py-2 text-[#0d0d0d] font-round-bold uppercase tracking-wider text-[10px] hover:bg-cyan/90 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Erstellen...' : 'Account erstellen'}
          </button>
        </form>
      )}
    </div>
  )
}

export default AuthPage
