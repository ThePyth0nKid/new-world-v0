import { TOTAL_PAGES, PAGE_TITLES } from './book-constants'

const BookPage = ({ pageNumber, side, children }) => {
  const isSpread = !!side

  return (
    <div className="w-full h-full flex flex-col bg-[#0a0a0a] overflow-hidden relative">
      {/* Spine shadow — inner edge glow in spread mode */}
      {side === 'left' && (
        <div
          className="absolute right-0 top-0 bottom-0 w-6 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to left, rgba(0,0,0,0.4), transparent)',
          }}
        />
      )}
      {side === 'right' && (
        <div
          className="absolute left-0 top-0 bottom-0 w-6 pointer-events-none z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)',
          }}
        />
      )}

      {/* Page header */}
      <div className="px-6 pt-5 pb-3 border-b border-white/8 flex items-center justify-between">
        <span className="text-cyan/50 font-long text-[10px] uppercase tracking-[0.2em]">
          {PAGE_TITLES[pageNumber - 1] || ''}
        </span>
        <span className="text-white/20 text-[10px] font-round-bold tracking-wider">
          {pageNumber}/{TOTAL_PAGES}
        </span>
      </div>

      {/* Page content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-4">
        {children}
      </div>

      {/* Page footer with dots — only in single-page mode */}
      {!isSpread && (
        <div className="px-6 py-3 border-t border-white/8 flex justify-center gap-2">
          {Array.from({ length: TOTAL_PAGES }, (_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i + 1 === pageNumber ? 'bg-cyan/60' : 'bg-white/15'
              }`}
            />
          ))}
        </div>
      )}

      {/* Spread mode: thin footer border only */}
      {isSpread && (
        <div className="px-6 py-2 border-t border-white/8" />
      )}

      {/* Corner fold — direction depends on side */}
      <div
        className={`absolute bottom-0 ${side === 'left' ? 'left-0' : 'right-0'} w-8 h-8 pointer-events-none`}
        style={{
          background: side === 'left'
            ? 'linear-gradient(-135deg, transparent 50%, rgba(255,255,255,0.03) 50%)'
            : 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.03) 50%)',
        }}
      />
    </div>
  )
}

export default BookPage
