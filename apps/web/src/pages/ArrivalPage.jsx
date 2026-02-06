import { Navigate } from 'react-router-dom'
import NavBar from '../sections/NavBar'
import { useArrival } from '../hooks/useArrival'
import { useAuth } from '../auth/useAuth'
import {
  ArrivalInterview,
  ArrivalVision,
  ArrivalForge,
  ArrivalName,
  ArrivalComplete,
} from '../components/arrival'
import LoginPrompt from '../components/arrival/LoginPrompt'

const ArrivalPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth()
  const arrival = useArrival()

  if (!isLoading && isAuthenticated && user?.nw_character) {
    return <Navigate to="/dashboard" replace />
  }

  const renderStation = () => {
    switch (arrival.phase) {
      case 'idle':
        return (
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-cyan font-long uppercase text-4xl md:text-6xl text-center">
              Arrival
            </h1>
            <p className="text-white/60 text-sm md:text-base text-center max-w-md leading-relaxed">
              Willkommen, Wanderer. Captain Kid wird dich kennenlernen
              und dein Abbild in der Neuen Welt erschaffen.
            </p>
            <button
              type="button"
              onClick={arrival.start}
              disabled={arrival.loading}
              className="px-8 py-4 bg-cyan text-[#0d0d0d] rounded-lg font-round-bold text-base hover:bg-cyan/80 transition-colors disabled:opacity-50"
            >
              {arrival.loading ? 'Verbinde...' : 'Reise beginnen'}
            </button>
          </div>
        )

      case 'interview':
        return (
          <ArrivalInterview
            messages={arrival.messages}
            loading={arrival.loading}
            onSendMessage={arrival.sendMessage}
          />
        )

      case 'vision':
        return (
          <ArrivalVision
            images={arrival.images}
            progress={arrival.progress}
            loading={arrival.loading}
            onGenerate={arrival.generate}
            onSelect={arrival.select}
          />
        )

      case 'forge':
        return (
          <ArrivalForge
            selectedImage={arrival.selectedImage}
            refinementCount={arrival.refinementCount}
            progress={arrival.progress}
            loading={arrival.loading}
            onRefine={arrival.refine}
            onRequestNames={arrival.requestNames}
          />
        )

      case 'name':
        return (
          <ArrivalName
            names={arrival.names}
            loading={arrival.loading}
            onFinalize={arrival.finalizeCharacter}
          />
        )

      case 'completed':
        return (
          <ArrivalComplete
            character={arrival.character}
            selectedImage={arrival.selectedImage}
          />
        )

      default:
        return null
    }
  }

  return (
    <main className="min-h-dvh">
      <NavBar />
      <div className="arrival-container">
        {arrival.error && (
          <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center flex items-center justify-between" role="alert">
            <span>{arrival.error}</span>
            <button
              type="button"
              onClick={arrival.clearError}
              className="ml-3 text-red-400/60 hover:text-red-400 text-lg leading-none"
              aria-label="Fehler schliessen"
            >
              &times;
            </button>
          </div>
        )}
        {renderStation()}

        {arrival.showLoginPrompt && (
          <LoginPrompt
            onDismiss={arrival.dismissLoginPrompt}
            onAuth={arrival.onLoginPromptAuth}
          />
        )}
      </div>
    </main>
  )
}

export default ArrivalPage
