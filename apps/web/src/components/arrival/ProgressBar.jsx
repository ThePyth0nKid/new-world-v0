const ProgressBar = ({ completed = 0, total = 4, status = '' }) => {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="arrival-progress"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={status || 'Fortschritt'}
      >
        <div
          className="arrival-progress__fill"
          style={{ width: `${pct}%` }}
        />
      </div>
      {status && (
        <p className="text-white/50 text-sm text-center mt-2">{status}</p>
      )}
    </div>
  )
}

export default ProgressBar
