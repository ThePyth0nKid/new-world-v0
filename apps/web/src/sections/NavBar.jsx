import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  return (
    <>
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
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] transition-all duration-500 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full md:w-[400px] bg-[#0d0d0d] transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 md:top-16 md:right-16 text-white text-4xl cursor-pointer hover:text-cyan transition-colors"
            aria-label="Menü schließen"
          >
            &times;
          </button>

          {/* Menu Content */}
          <div className="h-full flex flex-col justify-center px-10 md:px-16">
            <nav className="space-y-8">
              <Link
                to="/"
                className={`block text-4xl md:text-5xl font-round-bold uppercase tracking-wider transition-colors ${
                  location.pathname === '/'
                    ? 'text-cyan'
                    : 'text-white hover:text-cyan'
                }`}
              >
                Playbook
              </Link>
              <Link
                to="/about"
                className={`block text-4xl md:text-5xl font-round-bold uppercase tracking-wider transition-colors ${
                  location.pathname === '/about'
                    ? 'text-cyan'
                    : 'text-white hover:text-cyan'
                }`}
              >
                About
              </Link>
            </nav>

            {/* Social Links */}
            <div className="mt-20 pt-10 border-t border-white/20">
              <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
                Connect
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/nelsonanane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/nelsonanane_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan transition-colors"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
