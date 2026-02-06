import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookMenu } from '../components/book-menu'
import { useAuth } from '../auth/useAuth'

const AvatarCircle = ({ user }) => {
  const char = user?.nw_character

  if (char?.portrait_url) {
    return (
      <Link to="/dashboard" className="block w-9 h-9 rounded-full overflow-hidden border border-cyan/30 hover:border-cyan/60 transition-colors">
        <img src={char.portrait_url} alt={char.name} className="w-full h-full object-cover" />
      </Link>
    )
  }

  const initials = (user?.username || '?').slice(0, 2).toUpperCase()
  return (
    <Link to="/dashboard" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-cyan/40 transition-colors text-white text-xs font-round-bold">
      {initials}
    </Link>
  )
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth()

  return (
    <nav>
      <Link to="/">
        <img src="/images/nw-logo.svg" alt="Neue Welt" className="h-8" />
      </Link>

      <div className="flex items-center gap-3">
        {!isLoading && isAuthenticated && (
          <AvatarCircle user={user} />
        )}

        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
          aria-label="Men\u00fc \u00f6ffnen"
        >
          <img src="/images/menu.svg" className="w-10" alt="" />
        </button>
      </div>

      <BookMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  )
}

export default NavBar
