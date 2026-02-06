import { useState } from 'react'
import ProgressBar from './ProgressBar'

const MAX_FEEDBACK_LENGTH = 500
const MAX_REFINEMENTS = 10

const ArrivalForge = ({
  selectedImage,
  refinementCount,
  progress,
  loading,
  onRefine,
  onRequestNames,
}) => {
  const [feedback, setFeedback] = useState('')
  const canRefine = refinementCount < MAX_REFINEMENTS && !loading

  const handleRefine = (e) => {
    e.preventDefault()
    const trimmed = feedback.trim()
    if (!trimmed || !canRefine) return
    onRefine(trimmed)
    setFeedback('')
  }

  if (loading && progress) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <h2 className="text-cyan font-round-bold text-xl md:text-2xl text-center">
          Portrait wird verfeinert...
        </h2>
        <ProgressBar
          completed={progress.completed ?? 0}
          total={progress.total ?? 1}
          status={progress.currentStep || 'Verfeinere...'}
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-cyan font-round-bold text-xl md:text-2xl text-center">
        Die Schmiede
      </h2>

      <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-2 border-cyan/30">
        <img
          src={selectedImage}
          alt="Dein Portrait"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-white/40 text-sm text-center">
        Verfeinerungen: {refinementCount} / {MAX_REFINEMENTS}
      </p>

      {canRefine && (
        <form onSubmit={handleRefine} className="w-full max-w-md flex flex-col gap-3">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Was soll angepasst werden? z.B. 'Dunklere Haare' oder 'Mehr Narben'"
            maxLength={MAX_FEEDBACK_LENGTH}
            rows={3}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors resize-none"
          />
          <div className="flex justify-between text-white/30 text-xs px-1">
            <span>{feedback.length} / {MAX_FEEDBACK_LENGTH}</span>
          </div>
          <button
            type="submit"
            disabled={!feedback.trim()}
            className="px-6 py-3 bg-cyan/20 text-cyan rounded-lg font-round-bold text-sm hover:bg-cyan/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Verfeinern
          </button>
        </form>
      )}

      <button
        type="button"
        onClick={onRequestNames}
        disabled={loading}
        className="px-8 py-3 bg-amber/20 text-amber rounded-lg font-round-bold text-sm hover:bg-amber/30 transition-colors disabled:opacity-30"
      >
        Weiter zu Namen
      </button>
    </div>
  )
}

export default ArrivalForge
