import { useEffect, useState } from 'react'

const Preloader = ({ isLoaded }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    if (isLoaded) {
      // Start fade out
      setIsFading(true)
      // Remove from DOM after animation
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isLoaded])

  if (!isVisible) return null

  return (
    <div
      className={`preloader ${isFading ? 'preloader-fade-out' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0d0d0d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.8s ease-out',
        opacity: isFading ? 0 : 1,
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
            filter: 'drop-shadow(0 0 20px #b3f5ff) drop-shadow(0 0 40px #b3f5ff) drop-shadow(0 0 60px rgba(179, 245, 255, 0.5))',
          }}
        />
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
