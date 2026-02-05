import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/', label: 'Playbook', subtitle: 'Home', activeColor: 'cyan' },
  { to: '/about', label: 'Manifest', subtitle: 'Mission', activeColor: 'cyan' },
  { to: '/join', label: 'Join', subtitle: 'Crew', activeColor: 'amber' },
]

const NavPage = ({ onClose }) => {
  const location = useLocation()

  return (
    <div className="flex flex-col gap-4 h-full justify-center">
      {NAV_ITEMS.map(({ to, label, subtitle, activeColor }) => {
        const isActive = location.pathname === to
        const activeClasses = isActive
          ? `bg-${activeColor}/10 border-${activeColor}/30 text-${activeColor}`
          : 'bg-white/5 border-transparent text-white hover:bg-white/10 hover:border-white/10'

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
