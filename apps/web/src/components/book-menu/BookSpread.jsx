import BookPage from './BookPage'

const EmptyPage = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a]">
    <img
      src="/images/nw-logo.svg"
      alt=""
      className="w-16 opacity-15"
      style={{ filter: 'drop-shadow(0 0 20px rgba(179, 245, 255, 0.08))' }}
    />
  </div>
)

const BookSpread = ({ leftPage, rightPage, leftPageNum, rightPageNum, onClose }) => {
  return (
    <div className="book-spread w-full h-full flex">
      {/* Left half */}
      <div className="w-1/2 h-full relative overflow-hidden">
        {leftPage ? (
          <BookPage pageNumber={leftPageNum} side="left">
            {leftPage}
          </BookPage>
        ) : (
          <EmptyPage />
        )}
      </div>

      {/* Spine divider */}
      <div
        className="w-px h-full flex-shrink-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 5%, rgba(179, 245, 255, 0.15) 30%, rgba(179, 245, 255, 0.15) 70%, transparent 95%)',
          boxShadow: '0 0 8px rgba(179, 245, 255, 0.06)',
        }}
      />

      {/* Right half */}
      <div className="w-1/2 h-full relative overflow-hidden">
        {rightPage ? (
          <BookPage pageNumber={rightPageNum} side="right">
            {rightPage}
          </BookPage>
        ) : (
          <EmptyPage />
        )}
      </div>
    </div>
  )
}

export default BookSpread
