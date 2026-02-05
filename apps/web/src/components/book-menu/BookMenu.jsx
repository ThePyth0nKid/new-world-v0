import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { BOOK_DIMENSIONS, TOTAL_PAGES } from './book-constants'
import { animateCoverEntrance, animateBookOpen, animatePageFlip, animateClose } from './book-animations'
import { useBookSwipe } from './useBookSwipe'
import BookCover from './BookCover'
import BookPage from './BookPage'
import NavPage from './pages/NavPage'
import VersionPage from './pages/VersionPage'
import CrewPage from './pages/CrewPage'
import RoadmapPage from './pages/RoadmapPage'
import BackCover from './pages/BackCover'

const PAGES = [NavPage, VersionPage, CrewPage, RoadmapPage, BackCover]

const BookMenu = ({ isOpen, onClose }) => {
  const [state, setState] = useState('closed')
  const [currentPage, setCurrentPage] = useState(0)
  const [mounted, setMounted] = useState(false)
  const location = useLocation()

  const backdropRef = useRef(null)
  const bookRef = useRef(null)
  const coverRef = useRef(null)
  const pageRefs = useRef([])
  const timelineRef = useRef(null)
  const animatingRef = useRef(false)
  const routeMountedRef = useRef(false)

  // Refs to always hold latest values — avoids stale closures
  const stateRef = useRef(state)
  const currentPageRef = useRef(currentPage)
  const onCloseRef = useRef(onClose)
  stateRef.current = state
  currentPageRef.current = currentPage
  onCloseRef.current = onClose

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // GSAP cleanup on unmount
  useEffect(() => {
    return () => {
      timelineRef.current?.revert()
      timelineRef.current = null
      animatingRef.current = false
      document.body.style.overflow = ''
    }
  }, [])

  // Open -> show cover
  useEffect(() => {
    if (isOpen && state === 'closed') {
      setState('cover')
      setCurrentPage(0)
    }
  }, [isOpen, state])

  // Close on route change (skip initial mount, uses ref to avoid stale closure)
  useEffect(() => {
    if (!routeMountedRef.current) {
      routeMountedRef.current = true
      return
    }
    if (stateRef.current !== 'closed') {
      resetImmediate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  // Prevent scroll when open
  useEffect(() => {
    if (state !== 'closed') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [state])

  // Cover entrance animation
  useEffect(() => {
    if (state !== 'cover') return
    const backdrop = backdropRef.current
    const book = bookRef.current
    if (!backdrop || !book) return

    timelineRef.current?.kill()
    timelineRef.current = animateCoverEntrance(backdrop, book)
  }, [state])

  // Keyboard navigation
  useEffect(() => {
    if (state === 'closed') return

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      } else if (e.key === 'ArrowLeft' && stateRef.current === 'open') {
        flipPage('backward')
      } else if (e.key === 'ArrowRight') {
        if (stateRef.current === 'cover') {
          handleOpenBook()
        } else if (stateRef.current === 'open') {
          flipPage('forward')
        }
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, currentPage])

  // Immediate reset (no animation) — used for route changes
  const resetImmediate = useCallback(() => {
    timelineRef.current?.revert()
    timelineRef.current = null
    animatingRef.current = false

    pageRefs.current.forEach((el) => {
      if (el) gsap.set(el, { clearProps: 'all' })
    })
    if (coverRef.current) gsap.set(coverRef.current, { clearProps: 'all' })
    if (bookRef.current) gsap.set(bookRef.current, { clearProps: 'all' })
    if (backdropRef.current) gsap.set(backdropRef.current, { clearProps: 'all' })

    setState('closed')
    setCurrentPage(0)
    onCloseRef.current()
  }, [])

  const handleOpenBook = useCallback(() => {
    if (stateRef.current !== 'cover' || animatingRef.current) return
    animatingRef.current = true
    setState('opening')

    const cover = coverRef.current
    const firstPage = pageRefs.current[0]
    if (!cover || !firstPage) {
      animatingRef.current = false
      setState('open')
      setCurrentPage(1)
      return
    }

    gsap.set(firstPage, { visibility: 'visible' })

    timelineRef.current?.kill()
    timelineRef.current = animateBookOpen(cover, firstPage)
    timelineRef.current.eventCallback('onComplete', () => {
      setState('open')
      setCurrentPage(1)
      animatingRef.current = false
    })
  }, [])

  const flipPage = useCallback((direction) => {
    if (stateRef.current !== 'open' || animatingRef.current) return

    const page = currentPageRef.current
    const nextIdx = direction === 'forward' ? page + 1 : page - 1
    if (nextIdx < 1 || nextIdx > TOTAL_PAGES) return

    animatingRef.current = true
    setState('flipping')

    const currEl = pageRefs.current[page - 1]
    const nextEl = pageRefs.current[nextIdx - 1]

    if (!currEl || !nextEl) {
      animatingRef.current = false
      setState('open')
      setCurrentPage(nextIdx)
      return
    }

    timelineRef.current?.kill()
    timelineRef.current = animatePageFlip(currEl, nextEl, direction)
    timelineRef.current.eventCallback('onComplete', () => {
      setState('open')
      setCurrentPage(nextIdx)
      animatingRef.current = false
    })
  }, [])

  const handleClose = useCallback(() => {
    const s = stateRef.current
    if (s === 'closed' || s === 'closing') return
    animatingRef.current = true
    setState('closing')

    const book = bookRef.current
    const backdrop = backdropRef.current

    if (!book || !backdrop) {
      setState('closed')
      animatingRef.current = false
      onCloseRef.current()
      return
    }

    timelineRef.current?.kill()
    timelineRef.current = animateClose(book, backdrop)
    timelineRef.current.eventCallback('onComplete', () => {
      setState('closed')
      setCurrentPage(0)
      animatingRef.current = false

      pageRefs.current.forEach((el) => {
        if (el) gsap.set(el, { clearProps: 'all' })
      })
      if (coverRef.current) gsap.set(coverRef.current, { clearProps: 'all' })

      onCloseRef.current()
    })
  }, [])

  const handleSwipeLeft = useCallback(() => {
    if (stateRef.current === 'cover') {
      handleOpenBook()
    } else if (stateRef.current === 'open') {
      flipPage('forward')
    }
  }, [handleOpenBook, flipPage])

  const handleSwipeRight = useCallback(() => {
    if (stateRef.current === 'open' && currentPageRef.current === 1) {
      handleClose()
    } else if (stateRef.current === 'open') {
      flipPage('backward')
    }
  }, [handleClose, flipPage])

  const swipeHandlers = useBookSwipe({
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
  })

  const showBook = state !== 'closed'

  if (!mounted || !showBook) return null

  const isBookOpen = state === 'open' || state === 'flipping' || state === 'opening'

  return createPortal(
    <div
      className="fixed inset-0 z-[200]"
      role="dialog"
      aria-label="Playbook Menu"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-black/85"
        style={{ opacity: 0 }}
        onClick={handleClose}
      />

      {/* Book container with 3D perspective */}
      <div
        className="book-container absolute top-1/2 left-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
          width: BOOK_DIMENSIONS.width,
          aspectRatio: BOOK_DIMENSIONS.aspectRatio,
          maxHeight: BOOK_DIMENSIONS.maxHeight,
        }}
        {...swipeHandlers}
      >
        <div
          ref={bookRef}
          className="w-full h-full relative rounded-r-sm"
          style={{
            border: '1px solid rgba(179, 245, 255, 0.12)',
            boxShadow: `
              -4px 0 0 #080808,
              -8px 0 0 #060606,
              0 20px 60px rgba(0,0,0,0.7),
              0 0 30px rgba(179, 245, 255, 0.05)
            `,
            opacity: 0,
          }}
        >
          {/* Cover */}
          <div
            ref={coverRef}
            className="book-page absolute inset-0 rounded-r-sm overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              zIndex: isBookOpen ? 0 : 10,
            }}
          >
            <BookCover onOpen={handleOpenBook} />
          </div>

          {/* Pages */}
          {PAGES.map((PageComponent, i) => {
            const pageNum = i + 1
            const isNavOrBack = pageNum === 1 || pageNum === TOTAL_PAGES
            const closeHandler = isNavOrBack ? handleClose : undefined

            return (
              <div
                key={i}
                ref={(el) => { pageRefs.current[i] = el }}
                className="book-page absolute inset-0 rounded-r-sm overflow-hidden"
                style={{
                  visibility: currentPage === pageNum ? 'visible' : 'hidden',
                  backfaceVisibility: 'hidden',
                }}
              >
                <BookPage pageNumber={pageNum}>
                  <PageComponent onClose={closeHandler} />
                </BookPage>
              </div>
            )
          })}

          {/* Nav arrows */}
          {state === 'open' && currentPage >= 1 && (
            <>
              {currentPage > 1 && (
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center
                             justify-center text-white/30 hover:text-cyan/60 transition-colors
                             cursor-pointer z-20"
                  onClick={() => flipPage('backward')}
                  aria-label="Previous page"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
              {currentPage < TOTAL_PAGES && (
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center
                             justify-center text-white/30 hover:text-cyan/60 transition-colors
                             cursor-pointer z-20"
                  onClick={() => flipPage('forward')}
                  aria-label="Next page"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default BookMenu
