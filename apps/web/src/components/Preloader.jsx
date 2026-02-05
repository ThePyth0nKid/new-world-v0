import { useEffect, useState } from 'react'

const SESSION_KEY = 'nw-entered'

const Preloader = ({ isLoaded, onEnter }) => {
  // Prüfe ob User schon eingetreten ist (in dieser Session)
  const hasEntered = typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)

  const [isVisible, setIsVisible] = useState(!hasEntered)
  const [isFading, setIsFading] = useState(false)
  const [showEnter, setShowEnter] = useState(false)

  useEffect(() => {
    // Wenn schon eingetreten, Audio direkt aktivieren
    if (hasEntered) {
      onEnter?.()
      return
    }

    if (isLoaded) {
      // Zeige "Enter" Button wenn Audio geladen
      setShowEnter(true)
    }
  }, [isLoaded, hasEntered, onEnter])

  const handleEnter = () => {
    // Merken dass User eingetreten ist
    sessionStorage.setItem(SESSION_KEY, 'true')
    // AudioContext aktivieren
    onEnter?.()
    // Fade out starten
    setIsFading(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 800)
  }

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
          fontSize: '1.2rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          opacity: showEnter ? 1 : 0,
          transition: 'opacity 0.5s ease-in',
          textShadow: '0 0 10px #b3f5ff, 0 0 20px rgba(179, 245, 255, 0.5)',
        }}
      >
        {showEnter ? 'Click to Enter' : 'Loading...'}
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
