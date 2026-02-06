import { useEffect, useRef, useState } from 'react'
import PortraitCard from './PortraitCard'
import ProgressBar from './ProgressBar'

const TIMEOUT_WARNING_MS = 45000

const ArrivalVision = ({ images, progress, loading, onGenerate, onSelect }) => {
  const hasImages = images.length > 0
  const hasTriggered = useRef(false)
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false)

  useEffect(() => {
    if (!hasTriggered.current && !hasImages && !loading) {
      hasTriggered.current = true
      onGenerate()
    }
  }, [hasImages, loading, onGenerate])

  useEffect(() => {
    if (!loading || hasImages) {
      setShowTimeoutWarning(false)
      return
    }

    const timer = setTimeout(() => setShowTimeoutWarning(true), TIMEOUT_WARNING_MS)
    return () => clearTimeout(timer)
  }, [loading, hasImages])

  if (!hasImages) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <h2 className="text-cyan font-round-bold text-xl md:text-2xl text-center">
          Deine Vision nimmt Gestalt an...
        </h2>
        <ProgressBar
          completed={progress?.completed ?? 0}
          total={progress?.total ?? 2}
          status={progress?.currentStep || 'Generiere Portraits...'}
        />
        <p className="text-white/30 text-sm text-center max-w-sm">
          Captain Kid formt dein Abbild aus den Eigenschaften, die er in dir erkannt hat.
        </p>
        {showTimeoutWarning && (
          <p className="text-amber text-sm animate-pulse">
            Dauert laenger als erwartet...
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-cyan font-round-bold text-xl md:text-2xl text-center">
        Waehle dein Portrait
      </h2>
      <p className="text-white/40 text-sm text-center">
        Captain Kid hat {images.length} Visionen von dir erschaffen. Welche passt am besten?
      </p>
      <div className="arrival-portrait-grid">
        {images.map((src, i) => (
          <PortraitCard
            key={src}
            src={src}
            index={i}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default ArrivalVision
