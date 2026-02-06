import { Link, Navigate } from 'react-router-dom'
import NavBar from '../sections/NavBar'
import { useAuth } from '../auth/useAuth'

const PlaceholderCard = ({ title }) => (
  <div className="rounded-lg bg-white/5 border border-white/10 p-6">
    <h3 className="text-white/40 text-sm font-round-bold uppercase tracking-wider mb-2">{title}</h3>
    <p className="text-white/20 text-xs">Coming Soon</p>
  </div>
)

const DashboardPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return (
      <main className="min-h-dvh">
        <NavBar />
        <div className="arrival-container">
          <div className="flex items-center justify-center py-20">
            <span className="text-white/40 text-sm">Laden...</span>
          </div>
        </div>
      </main>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const char = user?.nw_character

  return (
    <main className="min-h-dvh">
      <NavBar />
      <div className="arrival-container">
        {!char ? (
          <div className="flex flex-col items-center gap-6 py-12">
            <h1 className="text-cyan font-long uppercase text-3xl md:text-4xl text-center">
              Dashboard
            </h1>
            <p className="text-white/60 text-sm text-center max-w-md">
              Du hast noch keinen Charakter. Starte die Arrival, um dein Abbild
              in der Neuen Welt zu erschaffen.
            </p>
            <Link
              to="/arrival"
              className="px-8 py-3 bg-cyan text-[#0d0d0d] rounded-lg font-round-bold text-sm hover:bg-cyan/80 transition-colors"
            >
              Arrival starten
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8 py-8">
            <h1 className="text-cyan font-long uppercase text-3xl md:text-4xl text-center">
              Dashboard
            </h1>

            <div className="w-36 h-36 md:w-48 md:h-48 rounded-xl overflow-hidden border-2 border-cyan/50 shadow-lg shadow-cyan/20">
              <img
                src={char.portrait_url}
                alt={char.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center">
              <h2 className="text-amber font-round-bold text-2xl md:text-3xl">
                {char.name}
              </h2>
              {char.archetype && (
                <p className="text-white/50 text-sm mt-1 uppercase tracking-wider">
                  {char.archetype}
                </p>
              )}
            </div>

            <div className="w-full max-w-lg grid grid-cols-2 gap-4 mt-4">
              <PlaceholderCard title="Episoden" />
              <PlaceholderCard title="Skills" />
              <PlaceholderCard title="Inventar" />
              <PlaceholderCard title="Logbuch" />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default DashboardPage
