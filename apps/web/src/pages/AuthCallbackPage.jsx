import { useEffect, useState, useRef } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { getPendingFinalize } from '../auth/auth-storage'
import { verifyOAuthState } from '../auth/github-oauth'

const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { login } = useAuth()
  const [error, setError] = useState(null)
  const calledRef = useRef(false)

  useEffect(() => {
    if (calledRef.current) return
    calledRef.current = true

    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (!code) {
      setError('Kein Autorisierungscode erhalten.')
      return
    }

    if (!state || !verifyOAuthState(state)) {
      setError('Ungueltige Anfrage (CSRF).')
      return
    }

    const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI

    login(code, redirectUri)
      .then(() => {
        const pending = getPendingFinalize()
        if (pending) {
          navigate('/arrival?finalize=true', { replace: true })
        } else {
          navigate('/', { replace: true })
        }
      })
      .catch((err) => {
        setError(err.message || 'Login fehlgeschlagen.')
      })
  }, [searchParams, login, navigate])

  if (error) {
    return (
      <div className="min-h-dvh flex-center bg-[#0d0d0d]">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <Link to="/" className="text-cyan hover:underline">
            Zurueck zur Startseite
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh flex-center bg-[#0d0d0d]">
      <div className="text-center">
        <div className="arrival-typing mb-4 justify-center">
          <span /><span /><span />
        </div>
        <p className="text-white/60 text-sm uppercase tracking-wider">
          Anmeldung wird verarbeitet...
        </p>
      </div>
    </div>
  )
}

export default AuthCallbackPage
