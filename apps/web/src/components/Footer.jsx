import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-5">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <img src="/images/nw-logo.svg" alt="New World" className="h-12 opacity-60" />
          <p className="text-white/40 text-sm uppercase tracking-[0.3em]">Playbook V0</p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-4">Playbook</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-white/60 hover:text-cyan transition-colors">Home</Link>
              <Link to="/about" className="text-white/60 hover:text-cyan transition-colors">Manifest</Link>
              <Link to="/join" className="text-white/60 hover:text-cyan transition-colors">Join</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-4">Projekte</h4>
            <div className="flex flex-col gap-2">
              <a href="https://civ.newworld.systems/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan transition-colors">
                Agents Civilization
              </a>
              <a href="https://www.igoultra.de/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan transition-colors">
                IGOULTRA
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-4">Firma</h4>
            <div className="flex flex-col gap-2">
              <a href="https://ultranova.io/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan transition-colors">
                ultranova.io
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white/30 text-xs uppercase tracking-wider mb-4">Social</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/ThePyth0nKid" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan transition-colors">
                GitHub
              </a>
              <a href="https://x.com/nelsonanane_" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan transition-colors">
                X
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">
            &copy; 2026 Nelson Mehlis &middot; Crafted with Claude
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
