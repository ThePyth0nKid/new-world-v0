import { VERSION_LOG } from '../book-data'

const VersionPage = () => {
  return (
    <div className="space-y-5">
      {VERSION_LOG.map((entry) => (
        <div key={entry.version} className="border-l-2 border-cyan/20 pl-4">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-cyan font-round-bold text-sm">
              {entry.version}
            </span>
            <span className="text-white/25 text-[10px] tracking-wider">
              {entry.date}
            </span>
          </div>
          <p className="text-white/70 text-sm font-round-bold mb-1.5">
            {entry.title}
          </p>
          <ul className="space-y-0.5">
            {entry.changes.map((change, i) => (
              <li key={i} className="text-white/40 text-xs pl-2 flex gap-2">
                <span className="text-cyan/40">&bull;</span>
                {change}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default VersionPage
