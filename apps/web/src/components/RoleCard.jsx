const RoleCard = ({ title, description, color = 'cyan' }) => {
  const colorClasses = {
    cyan: 'border-cyan/20 hover:border-cyan/60',
    amber: 'border-amber/20 hover:border-amber/60',
    gradient: 'border-white/20 hover:border-white/40',
  }

  const titleClasses = {
    cyan: 'text-cyan',
    amber: 'text-amber',
    gradient: 'bg-gradient-to-r from-cyan to-amber bg-clip-text text-transparent',
  }

  return (
    <div
      className={`bg-white/5 border rounded-lg p-8 transition-all duration-300 hover:scale-[0.98] ${colorClasses[color]}`}
    >
      <h3 className={`text-2xl font-round-bold mb-4 ${titleClasses[color]}`}>
        {title}
      </h3>
      <p className="text-white/80">{description}</p>
    </div>
  )
}

export default RoleCard
