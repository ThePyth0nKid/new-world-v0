const PortraitCard = ({ src, index, selected = false, onSelect, loading = false }) => {
  if (loading) {
    return (
      <div className="arrival-portrait-card arrival-portrait-card--loading">
        <div className="w-full aspect-square bg-white/5 animate-pulse rounded-lg" />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      aria-label={`Portrait ${index + 1} auswaehlen`}
      className={`arrival-portrait-card ${selected ? 'arrival-portrait-card--selected' : ''}`}
    >
      <img
        src={src}
        alt={`Portrait ${index + 1}`}
        className="w-full aspect-square object-cover rounded-lg"
        draggable={false}
      />
    </button>
  )
}

export default PortraitCard
