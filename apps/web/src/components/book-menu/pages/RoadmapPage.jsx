import { ROADMAP_ITEMS } from '../book-data'

const STATUS_CONFIG = {
  'in-progress': { dot: 'bg-cyan', label: 'In Progress', labelColor: 'text-cyan' },
  planned: { dot: 'bg-white/30', label: 'Planned', labelColor: 'text-white/40' },
  done: { dot: 'bg-amber', label: 'Done', labelColor: 'text-amber' },
}

const RoadmapPage = () => {
  return (
    <div className="flex flex-col gap-1 h-full justify-center">
      {ROADMAP_ITEMS.map((item, index) => {
        const config = STATUS_CONFIG[item.status] || STATUS_CONFIG.planned
        const isLast = index === ROADMAP_ITEMS.length - 1

        return (
          <div key={item.title} className="flex gap-4">
            {/* Timeline track */}
            <div className="flex flex-col items-center">
              <div className={`w-3 h-3 rounded-full ${config.dot} shrink-0 mt-1`} />
              {!isLast && <div className="w-px flex-1 bg-white/10 my-1" />}
            </div>

            {/* Content */}
            <div className="pb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-white font-round-bold text-base uppercase">
                  {item.title}
                </h3>
                <span className={`text-[10px] uppercase tracking-wider ${config.labelColor}`}>
                  {config.label}
                </span>
              </div>
              <p className="text-white/40 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RoadmapPage
