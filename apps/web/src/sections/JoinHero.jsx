const JoinHero = () => {
  return (
    <section className="min-h-dvh flex flex-col items-center justify-center gap-8 px-5 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(179, 245, 255, 0.03) 0%, transparent 60%)',
        }}
      />

      {/* Neon Logo */}
      <div className="relative">
        <img
          src="/images/nw-logo.svg"
          alt="New World"
          className="w-40 md:w-48 neon-pulse"
        />
      </div>

      {/* Headline */}
      <h1 className="font-long text-5xl md:text-7xl lg:text-8xl uppercase tracking-wider text-center bg-gradient-to-r from-cyan via-white to-amber bg-clip-text text-transparent">
        Join the Crew
      </h1>

      {/* Scroll hint with typing effect */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <p className="text-cyan/70 text-sm md:text-base uppercase tracking-[0.3em] typing-text">
          Scroll, wenn du dich traust
        </p>
        <span className="text-white/30 text-xl animate-bounce">↓</span>
      </div>

      {/* Animations */}
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

        .typing-text {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid rgba(179, 245, 255, 0.5);
          animation:
            typing 2.5s steps(26) 1s forwards,
            blink 0.7s step-end infinite;
          width: 0;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </section>
  )
}

export default JoinHero
