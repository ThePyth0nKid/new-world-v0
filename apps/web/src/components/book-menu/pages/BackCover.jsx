const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ThePyth0nKid' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nelson-mehlis-2aa216278/' },
  { label: 'IGOULTRA', href: 'https://igoultra.de' },
]

const BackCover = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      {/* Logo */}
      <img
        src="/images/nw-logo.svg"
        alt=""
        className="w-16 opacity-40 mb-6"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(179, 245, 255, 0.1))',
        }}
      />

      {/* Connect */}
      <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-5">
        Connect
      </p>

      <div className="flex gap-6 mb-10">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-cyan transition-colors text-sm"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="px-6 py-2.5 rounded-lg border border-white/10 text-white/50 text-xs
                   uppercase tracking-wider hover:border-cyan/30 hover:text-cyan
                   transition-all duration-200 cursor-pointer"
      >
        Close Book
      </button>

      {/* Version stamp */}
      <p className="absolute bottom-5 text-white/15 text-[9px] uppercase tracking-widest">
        NW-V0 &middot; 2026
      </p>
    </div>
  )
}

export default BackCover
