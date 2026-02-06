import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../../auth/useAuth'

const ACTIVE_COLOR_MAP = {
  cyan: 'bg-cyan/10 border-cyan/30 text-cyan',
  amber: 'bg-amber/10 border-amber/30 text-amber',
}

const INACTIVE_CLASSES = 'bg-white/5 border-transparent text-white hover:bg-white/10 hover:border-white/10'

const NavPage = ({ onClose }) => {
  const location = useLocation()
  const { user, isAuthenticated } = useAuth()

  const hasCharacter = isAuthenticated && user?.nw_character

  const navItems = [
    { to: '/', label: 'Playbook', subtitle: 'Home', activeColor: 'cyan' },
    { to: '/about', label: 'Manifest', subtitle: 'Mission', activeColor: 'cyan' },
    hasCharacter
      ? { to: '/dashboard', label: 'Dashboard', subtitle: 'Charakter', activeColor: 'cyan' }
      : { to: '/arrival', label: 'Arrival', subtitle: 'Charakter', activeColor: 'cyan' },
    { to: '/join', label: 'Join', subtitle: 'Crew', activeColor: 'amber' },
  ]

  return (
    <div className="flex flex-col gap-4 h-full justify-center">
      {navItems.map(({ to, label, subtitle, activeColor }) => {
        const isActive = location.pathname === to
        const activeClasses = isActive
          ? ACTIVE_COLOR_MAP[activeColor]
          : INACTIVE_CLASSES

        return (
          <Link
            key={to}
            to={to}
            onClick={onClose}
            className={`block p-5 rounded-lg border transition-all duration-200 ${activeClasses}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl font-round-bold uppercase tracking-wide">
                {label}
              </span>
              <span className="text-white/30 text-xs uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default NavPage
