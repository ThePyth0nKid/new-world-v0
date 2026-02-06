import { useNavigate } from 'react-router-dom'

const ArrivalComplete = ({ character, selectedImage }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center gap-8">
      <h2 className="text-cyan font-round-bold text-2xl md:text-3xl text-center">
        Willkommen in der Neuen Welt
      </h2>

      <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden border-2 border-cyan/50 shadow-lg shadow-cyan/20">
        <img
          src={character?.portrait_url || selectedImage}
          alt={character?.name || 'Dein Charakter'}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="text-amber font-round-bold text-3xl md:text-4xl">
          {character?.name}
        </h3>
        {character?.archetype && (
          <p className="text-white/50 text-sm mt-2 uppercase tracking-wider">
            {character.archetype}
          </p>
        )}
      </div>

      <p className="text-white/60 text-sm text-center max-w-md leading-relaxed">
        Dein Charakter wurde erschaffen. Die Reise beginnt hier —
        in einer Welt, in der Code die Grundlage von allem ist.
      </p>

      <button
        type="button"
        onClick={() => navigate('/dashboard')}
        className="px-8 py-3 bg-white/10 text-white rounded-lg font-round-bold text-sm hover:bg-white/20 transition-colors"
      >
        Zum Dashboard
      </button>
    </div>
  )
}

export default ArrivalComplete
