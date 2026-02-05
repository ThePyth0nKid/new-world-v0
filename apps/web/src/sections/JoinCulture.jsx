const culturePoints = [
  {
    icon: '⚡',
    title: '24/7 AI-Workflow',
    description: 'Wir leben das. Jeden Tag. AI ist kein Tool — es ist ein Teammitglied.',
  },
  {
    icon: '🔄',
    title: 'Learning by Doing',
    description: 'Niemand muss perfekt sein. Wir lernen gemeinsam, iterieren schnell, machen Fehler — und werden besser.',
  },
  {
    icon: '🌐',
    title: 'Open Source Mindset',
    description: 'Teilen > Horten. Was wir bauen, teilen wir. Was wir lernen, dokumentieren wir.',
  },
  {
    icon: '🌍',
    title: 'Remote & Async',
    description: 'Arbeite wann du willst, wo du willst. Ergebnisse zählen, nicht Stunden.',
  },
]

const JoinCulture = () => {
  return (
    <section className="py-20 px-5 md:px-16 lg:px-40 2xl:px-80">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-amber text-3xl md:text-5xl mb-12">
          Wie wir arbeiten
        </h2>

        {/* Culture Points */}
        <div className="space-y-8">
          {culturePoints.map((point, index) => (
            <div
              key={point.title}
              className="flex gap-6 items-start p-6 bg-white/5 rounded-lg border border-white/10 hover:border-cyan/30 transition-colors"
            >
              <span className="text-3xl">{point.icon}</span>
              <div>
                <h3 className="text-cyan text-xl md:text-2xl font-round-bold mb-2">
                  {point.title}
                </h3>
                <p className="text-white/70 text-lg">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinCulture
