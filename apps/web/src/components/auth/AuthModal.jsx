import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useAuth } from '../../auth/useAuth'

const TAB_LOGIN = 'login'
const TAB_REGISTER = 'register'

const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const DiscordIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
  </svg>
)

const ComingSoonBadge = () => (
  <span className="bg-amber text-[#0d0d0d] text-[10px] font-round-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
    Coming Soon
  </span>
)

const INPUT_CLASS = 'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:border-cyan/40 focus:outline-none transition-colors'

const AuthModal = ({ isOpen, onClose, onSuccess, title = 'Anmelden' }) => {
  const { registerUser, loginUser } = useAuth()
  const [activeTab, setActiveTab] = useState(TAB_LOGIN)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const [loginValue, setLoginValue] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [regEmail, setRegEmail] = useState('')
  const [regUsername, setRegUsername] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('')

  useEffect(() => {
    if (isOpen) {
      setActiveTab(TAB_LOGIN)
      setError('')
      setLoginValue('')
      setLoginPassword('')
      setRegEmail('')
      setRegUsername('')
      setRegPassword('')
      setRegPasswordConfirm('')
      setSubmitting(false)
    }
  }, [isOpen])

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
      onSuccess?.()
    } catch (err) {
      setError(err.body?.detail || err.body?.error || err.message || 'Login fehlgeschlagen.')
    } finally {
      setSubmitting(false)
    }
  }, [loginValue, loginPassword, loginUser, onSuccess])

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
      setError('Passwort: mindestens 8 Zeichen.')
      return
    }

    if (regPassword !== regPasswordConfirm) {
      setError('Passwoerter stimmen nicht ueberein.')
      return
    }

    setSubmitting(true)
    try {
      await registerUser(regUsername.trim(), regEmail.trim(), regPassword, regPasswordConfirm)
      onSuccess?.()
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
  }, [regEmail, regUsername, regPassword, regPasswordConfirm, registerUser, onSuccess])

  const switchTab = useCallback((tab) => {
    setActiveTab(tab)
    setError('')
  }, [])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="mx-4 max-w-md w-full rounded-xl border border-cyan/20 bg-[#0d0d0d] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-cyan text-xl font-round-bold uppercase tracking-wide mb-6">
          {title}
        </h2>

        {/* Tabs */}
        <div className="flex gap-1 mb-6 bg-white/5 rounded-lg p-1">
          <button
            onClick={() => switchTab(TAB_LOGIN)}
            className={`flex-1 py-2 text-sm font-round-bold uppercase tracking-wider rounded-md transition-colors ${
              activeTab === TAB_LOGIN
                ? 'bg-cyan text-[#0d0d0d]'
                : 'text-white/50 hover:text-white/70'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchTab(TAB_REGISTER)}
            className={`flex-1 py-2 text-sm font-round-bold uppercase tracking-wider rounded-md transition-colors ${
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
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        {activeTab === TAB_LOGIN && (
          <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-6">
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
              className="w-full rounded-lg bg-cyan px-6 py-3 text-[#0d0d0d] font-round-bold uppercase tracking-wider text-sm hover:bg-cyan/90 transition-colors disabled:opacity-50"
            >
              {submitting ? 'Anmelden...' : 'Anmelden'}
            </button>
          </form>
        )}

        {/* Register Form */}
        {activeTab === TAB_REGISTER && (
          <form onSubmit={handleRegister} className="flex flex-col gap-4 mb-6">
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
              className="w-full rounded-lg bg-cyan px-6 py-3 text-[#0d0d0d] font-round-bold uppercase tracking-wider text-sm hover:bg-cyan/90 transition-colors disabled:opacity-50"
            >
              {submitting ? 'Account erstellen...' : 'Account erstellen'}
            </button>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-xs uppercase tracking-wider">oder</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* OAuth Buttons (Coming Soon) */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            disabled
            className="w-full flex items-center justify-center gap-3 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-white/30 text-sm cursor-not-allowed"
          >
            <GitHubIcon />
            GitHub
            <ComingSoonBadge />
          </button>
          <button
            disabled
            className="w-full flex items-center justify-center gap-3 rounded-lg bg-white/5 border border-white/10 px-6 py-3 text-white/30 text-sm cursor-not-allowed"
          >
            <DiscordIcon />
            Discord
            <ComingSoonBadge />
          </button>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full text-white/40 text-sm hover:text-white/60 transition-colors"
        >
          Schliessen
        </button>
      </div>
    </div>,
    document.body
  )
}

export default AuthModal
