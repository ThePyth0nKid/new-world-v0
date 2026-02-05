import RoleCard from '../components/RoleCard'

const roles = [
  {
    title: 'Bild-Generierung',
    description: 'Midjourney, DALL-E, Stable Diffusion. Konsistente Charaktere, Szenen, Welten erschaffen.',
    color: 'cyan',
  },
  {
    title: 'Video/Vision',
    description: 'Veo, Runway, Pika. Bewegtbild aus Standbildern. Animationen. Motion.',
    color: 'amber',
  },
  {
    title: 'Musik/Audio',
    description: 'Suno, ElevenLabs, Soundscapes. Stimmen, Soundtracks, Atmosphäre.',
    color: 'cyan',
  },
  {
    title: 'Prompt Engineering',
    description: 'Die Kunst, mit Maschinen zu sprechen. Pipelines, Workflows, Automatisierung.',
    color: 'amber',
  },
  {
    title: 'Framework-Dev',
    description: 'Das Fundament. Code, Tools, Infrastruktur — auf dem alles andere läuft.',
    color: 'cyan',
  },
  {
    title: 'Open für alle',
    description: 'Kein Experte? Kein Problem. Bock auf AI und Lernen reicht. Wir wachsen zusammen.',
    color: 'gradient',
  },
]

const JoinRoles = () => {
  return (
    <section className="py-20 px-5 md:px-16 lg:px-40 2xl:px-80 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-amber text-3xl md:text-5xl mb-6">
          Die Bereiche
        </h2>
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl">
          Verschiedene Wege, Teil der Crew zu werden. Such dir aus, was dich anzieht.
        </p>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role) => (
            <RoleCard
              key={role.title}
              title={role.title}
              description={role.description}
              color={role.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinRoles
