const BookCover = ({ onOpen }) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center cursor-pointer select-none"
      onClick={onOpen}
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(179, 245, 255, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 80%, rgba(179, 245, 255, 0.03) 0%, transparent 40%),
          #0a0a0a
        `,
      }}
    >
      {/* Spine edge glow */}
      <div
        className="absolute left-0 top-0 bottom-0 w-4"
        style={{
          background: 'linear-gradient(to right, rgba(179, 245, 255, 0.1), transparent)',
        }}
      />

      {/* Logo */}
      <img
        src="/images/nw-logo.svg"
        alt=""
        className="w-20 opacity-50 mb-6"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(179, 245, 255, 0.15))',
        }}
      />

      {/* Title */}
      <h2
        className="text-cyan/60 font-long text-sm uppercase tracking-[0.3em] mb-2"
        style={{
          textShadow: '0 0 20px rgba(179, 245, 255, 0.2)',
        }}
      >
        Neue Welt
      </h2>
      <p className="text-white/30 font-round-bold text-xs uppercase tracking-[0.2em]">
        Playbook V0
      </p>

      {/* Subtle hint */}
      <p className="absolute bottom-6 text-white/20 text-[10px] uppercase tracking-widest">
        Tap to open
      </p>

      {/* Corner fold */}
      <div
        className="absolute bottom-0 right-0 w-10 h-10"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(179, 245, 255, 0.04) 50%)',
        }}
      />
    </div>
  )
}

export default BookCover
