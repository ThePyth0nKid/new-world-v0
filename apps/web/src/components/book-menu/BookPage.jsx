import { TOTAL_PAGES, PAGE_TITLES } from './book-constants'

const BookPage = ({ pageNumber, children }) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#0a0a0a] overflow-hidden">
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

      {/* Page footer with dots */}
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

      {/* Corner fold */}
      <div
        className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.03) 50%)',
        }}
      />
    </div>
  )
}

export default BookPage
