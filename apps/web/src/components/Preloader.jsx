import { useEffect, useState, useCallback } from 'react'

const SESSION_KEY = 'nw-entered'
const AUDIO_TIMEOUT_MS = 4000

const Preloader = ({ isLoaded, onEnter }) => {
  const hasEntered = typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)

  const [isVisible, setIsVisible] = useState(!hasEntered)
  const [isFading, setIsFading] = useState(false)
  const [showEnter, setShowEnter] = useState(false)

  useEffect(() => {
    if (hasEntered) {
      onEnter?.()
      return
    }

    if (isLoaded) {
      setShowEnter(true)
      return
    }

    // Fallback: show Enter after timeout even if audio hasn't loaded
    const timer = setTimeout(() => {
      setShowEnter(true)
    }, AUDIO_TIMEOUT_MS)

    return () => clearTimeout(timer)
  }, [isLoaded, hasEntered, onEnter])

  const handleEnter = useCallback(() => {
    if (!showEnter || isFading) return
    sessionStorage.setItem(SESSION_KEY, 'true')
    onEnter?.()
    setIsFading(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 800)
  }, [showEnter, isFading, onEnter])

  // Keyboard: Enter or Space to enter
  useEffect(() => {
    if (!showEnter || isFading) return

    const handleKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleEnter()
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [showEnter, isFading, handleEnter])

  if (!isVisible) return null

  return (
    <div
      className={`preloader ${isFading ? 'preloader-fade-out' : ''}`}
      onClick={showEnter ? handleEnter : undefined}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0d0d0d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        transition: 'opacity 0.8s ease-out',
        opacity: isFading ? 0 : 1,
        cursor: showEnter ? 'pointer' : 'default',
      }}
    >
      {/* Neon Glow Logo */}
      <div className="preloader-logo">
        <img
          src="/images/nw-logo.svg"
          alt="New World"
          className="neon-pulse"
          style={{
            width: '200px',
            height: 'auto',
          }}
        />
      </div>

      {/* Enter Text */}
      <div
        style={{
          color: '#b3f5ff',
          fontFamily: 'Round, sans-serif',
          fontSize: showEnter ? '1.2rem' : '0.8rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: showEnter ? 1 : 0.4,
          transition: 'opacity 0.5s ease-in, font-size 0.3s ease',
          textShadow: showEnter
            ? '0 0 10px #b3f5ff, 0 0 20px rgba(179, 245, 255, 0.5)'
            : 'none',
        }}
      >
        {showEnter ? 'Press Enter' : 'Loading...'}
      </div>

      {/* CSS Animation */}
      <style>{`
        .neon-pulse {
          animation: neonPulse 1.5s ease-in-out infinite;
        }

        @keyframes neonPulse {
          0%, 100% {
            filter:
              drop-shadow(0 0 10px #b3f5ff)
              drop-shadow(0 0 20px #b3f5ff)
              drop-shadow(0 0 30px rgba(179, 245, 255, 0.4));
            opacity: 0.8;
          }
          50% {
            filter:
              drop-shadow(0 0 25px #b3f5ff)
              drop-shadow(0 0 50px #b3f5ff)
              drop-shadow(0 0 80px rgba(179, 245, 255, 0.7))
              drop-shadow(0 0 100px rgba(179, 245, 255, 0.3));
            opacity: 1;
          }
        }

        .preloader-fade-out .neon-pulse {
          animation: neonFadeOut 0.8s ease-out forwards;
        }

        @keyframes neonFadeOut {
          0% {
            filter:
              drop-shadow(0 0 25px #b3f5ff)
              drop-shadow(0 0 50px #b3f5ff)
              drop-shadow(0 0 80px rgba(179, 245, 255, 0.7));
            opacity: 1;
            transform: scale(1);
          }
          100% {
            filter:
              drop-shadow(0 0 100px #b3f5ff)
              drop-shadow(0 0 150px #b3f5ff);
            opacity: 0;
            transform: scale(1.2);
          }
        }
      `}</style>
    </div>
  )
}

export default Preloader
