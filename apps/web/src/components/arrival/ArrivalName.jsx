import { useState } from 'react'

const NAME_PATTERN = /^[a-zA-ZäöüÄÖÜß\s'-]*$/

const ArrivalName = ({ names, loading, onFinalize }) => {
  const [customName, setCustomName] = useState('')
  const [selectedName, setSelectedName] = useState(null)

  const activeName = customName.trim() || selectedName

  const handleFinalize = () => {
    if (!activeName || loading) return
    onFinalize(activeName)
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-cyan font-round-bold text-xl md:text-2xl text-center">
        Waehle deinen Namen
      </h2>
      <p className="text-white/40 text-sm text-center max-w-sm">
        Captain Kid hat Vorschlaege fuer dich. Du kannst auch einen eigenen Namen waehlen.
      </p>

      <div className="flex flex-wrap justify-center gap-3 max-w-md">
        {names.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={selectedName === name && !customName.trim()}
            onClick={() => {
              setSelectedName(name)
              setCustomName('')
            }}
            className={`px-5 py-2.5 rounded-lg font-round-bold text-sm transition-colors ${
              selectedName === name && !customName.trim()
                ? 'bg-cyan/30 text-cyan border border-cyan/50'
                : 'bg-white/5 text-white/60 border border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="w-full max-w-sm">
        <input
          type="text"
          value={customName}
          onChange={(e) => {
            const val = e.target.value
            if (val === '' || NAME_PATTERN.test(val)) {
              setCustomName(val)
              if (val.trim()) setSelectedName(null)
            }
          }}
          placeholder="Oder gib deinen eigenen Namen ein..."
          maxLength={50}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
        />
      </div>

      <button
        type="button"
        onClick={handleFinalize}
        disabled={!activeName || loading}
        className="px-8 py-3 bg-cyan text-[#0d0d0d] rounded-lg font-round-bold text-sm hover:bg-cyan/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
      >
        {loading ? 'Erstelle Charakter...' : 'Charakter erstellen'}
      </button>

      <p className="text-white/20 text-xs text-center">
        Hinweis: Zum Finalisieren ist ein Login erforderlich.
      </p>
    </div>
  )
}

export default ArrivalName
