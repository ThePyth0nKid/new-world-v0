import { CREW_MEMBERS } from '../book-data'

const COLOR_MAP = {
  cyan: { border: 'border-cyan/30', text: 'text-cyan' },
  amber: { border: 'border-amber/30', text: 'text-amber' },
  white: { border: 'border-white/20', text: 'text-white' },
}

const CrewPage = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center">
      {CREW_MEMBERS.map((member) => {
        const colors = COLOR_MAP[member.color] || COLOR_MAP.white

        return (
          <div
            key={member.name}
            className={`flex items-center gap-4 p-4 rounded-lg bg-white/3 border ${colors.border}`}
          >
            <div
              className={`w-12 h-12 rounded-full bg-white/5 border ${colors.border} flex items-center justify-center shrink-0`}
            >
              <img src="/images/nw-logo.svg" alt="" className="w-6 opacity-50" />
            </div>
            <div className="min-w-0">
              <h3 className={`${colors.text} font-round-bold uppercase text-lg leading-tight`}>
                {member.name}
              </h3>
              <p className="text-white/40 text-xs uppercase tracking-wider mt-0.5">
                {member.role}
              </p>
              {member.github && (
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/25 text-[10px] hover:text-cyan transition-colors"
                >
                  @{member.github}
                </a>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CrewPage
