import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  // Track mount state for portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Menu content rendered via portal
  const menuPortal = mounted && isOpen ? createPortal(
    <div className="fixed inset-0 z-[200]">
      {/* Backdrop - click to close */}
      <div
        className="absolute inset-0 bg-black/85"
        onClick={() => setIsOpen(false)}
      />

      {/* Book - A5 format centered */}
      <div
        className="absolute top-1/2 left-1/2 w-[320px] max-w-[90vw] bg-[#0a0a0a] rounded-r-sm"
        style={{
          transform: 'translate(-50%, -50%)',
          height: '460px',
          maxHeight: '80vh',
          border: '1px solid rgba(179, 245, 255, 0.12)',
          boxShadow: `
            -4px 0 0 #080808,
            -8px 0 0 #060606,
            0 20px 60px rgba(0,0,0,0.7),
            0 0 30px rgba(179, 245, 255, 0.05)
          `,
        }}
      >
        {/* Book Spine Effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-4"
          style={{
            background: 'linear-gradient(to right, rgba(179, 245, 255, 0.08), transparent)',
          }}
        />

        {/* Inner content wrapper */}
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3 pl-2">
              <img src="/images/nw-logo.svg" alt="" className="w-7 opacity-60" />
              <span className="text-cyan/70 font-long text-xs uppercase tracking-[0.2em]">
                Playbook V0
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center p-6 pl-8">
            {/* Nav Links */}
            <div className="space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block p-5 rounded-lg border transition-all duration-200 ${
                  location.pathname === '/'
                    ? 'bg-cyan/10 border-cyan/30 text-cyan'
                    : 'bg-white/5 border-transparent text-white hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-round-bold uppercase tracking-wide">
                    Playbook
                  </span>
                  <span className="text-white/30 text-xs uppercase tracking-wider">
                    Home
                  </span>
                </div>
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block p-5 rounded-lg border transition-all duration-200 ${
                  location.pathname === '/about'
                    ? 'bg-cyan/10 border-cyan/30 text-cyan'
                    : 'bg-white/5 border-transparent text-white hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-round-bold uppercase tracking-wide">
                    Manifest
                  </span>
                  <span className="text-white/30 text-xs uppercase tracking-wider">
                    Mission
                  </span>
                </div>
              </Link>

              <Link
                to="/join"
                onClick={() => setIsOpen(false)}
                className={`block p-5 rounded-lg border transition-all duration-200 ${
                  location.pathname === '/join'
                    ? 'bg-amber/10 border-amber/30 text-amber'
                    : 'bg-white/5 border-transparent text-white hover:bg-white/10 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-round-bold uppercase tracking-wide">
                    Join
                  </span>
                  <span className="text-white/30 text-xs uppercase tracking-wider">
                    Crew
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Footer - Social Links */}
          <div className="p-6 pt-4 border-t border-white/10">
            <p className="text-white/30 text-xs uppercase tracking-[0.15em] mb-4 pl-2">
              Connect
            </p>
            <div className="flex gap-5 pl-2">
              <a
                href="https://github.com/ThePyth0nKid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-cyan transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nelson-mehlis-2aa216278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-cyan transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://igoultra.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-cyan transition-colors text-sm"
              >
                IGOULTRA
              </a>
            </div>
          </div>
        </div>

        {/* Page Corner Effect */}
        <div
          className="absolute bottom-0 right-0 w-10 h-10"
          style={{
            background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.03) 50%)',
          }}
        />
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <nav>
      <Link to="/">
        <img src="/images/nw-logo.svg" alt="Neue Welt" className="h-8" />
      </Link>
      <button
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
        aria-label="Menü öffnen"
      >
        <img src="/images/menu.svg" className="w-10" alt="" />
      </button>
      {menuPortal}
    </nav>
  );
};

export default NavBar;
