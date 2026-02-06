import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import {
  BOOK_DIMENSIONS,
  SPREAD_DIMENSIONS,
  SPREAD_BREAKPOINT,
  SPREAD_DEFS,
  TOTAL_SPREADS,
  TOTAL_PAGES,
} from './book-constants'
import { animateCoverEntrance, animateBookOpen, animatePageFlip, animateSpreadFlip, animateClose } from './book-animations'
import { useBookSwipe } from './useBookSwipe'
import BookCover from './BookCover'
import BookPage from './BookPage'
import BookSpread from './BookSpread'
import AuthPage from './pages/AuthPage'
import NavPage from './pages/NavPage'
import VersionPage from './pages/VersionPage'
import CrewPage from './pages/CrewPage'
import RoadmapPage from './pages/RoadmapPage'
import BackCover from './pages/BackCover'

const PAGES = [AuthPage, NavPage, VersionPage, CrewPage, RoadmapPage, BackCover]

function useMediaSpread() {
  const [isSpread, setIsSpread] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= SPREAD_BREAKPOINT,
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SPREAD_BREAKPOINT}px)`)
    const handler = (e) => setIsSpread(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isSpread
}

const BookMenu = ({ isOpen, onClose }) => {
  const [state, setState] = useState('closed')
  const [currentPage, setCurrentPage] = useState(0)
  const [currentSpread, setCurrentSpread] = useState(0)
  const [mounted, setMounted] = useState(false)
  const location = useLocation()
  const isSpread = useMediaSpread()

  const backdropRef = useRef(null)
  const bookRef = useRef(null)
  const coverRef = useRef(null)
  const pageRefs = useRef([])
  const spreadRefs = useRef([])
  const timelineRef = useRef(null)
  const animatingRef = useRef(false)
  const routeMountedRef = useRef(false)

  // Refs to always hold latest values — avoids stale closures
  const stateRef = useRef(state)
  const currentPageRef = useRef(currentPage)
  const currentSpreadRef = useRef(currentSpread)
  const isSpreadRef = useRef(isSpread)
  const onCloseRef = useRef(onClose)
  stateRef.current = state
  currentPageRef.current = currentPage
  currentSpreadRef.current = currentSpread
  isSpreadRef.current = isSpread
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
      setCurrentSpread(0)
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

  // Reset if isSpread changes while book is open
  useEffect(() => {
    if (stateRef.current !== 'closed' && stateRef.current !== 'cover') {
      resetImmediate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpread])

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
        if (isSpreadRef.current) {
          flipSpread('backward')
        } else {
          flipPage('backward')
        }
      } else if (e.key === 'ArrowRight') {
        if (stateRef.current === 'cover') {
          handleOpenBook()
        } else if (stateRef.current === 'open') {
          if (isSpreadRef.current) {
            flipSpread('forward')
          } else {
            flipPage('forward')
          }
        }
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, currentPage, currentSpread])

  // Immediate reset (no animation) — used for route changes and mode switches
  const resetImmediate = useCallback(() => {
    timelineRef.current?.revert()
    timelineRef.current = null
    animatingRef.current = false

    pageRefs.current.forEach((el) => {
      if (el) gsap.set(el, { clearProps: 'all' })
    })
    spreadRefs.current.forEach((el) => {
      if (el) gsap.set(el, { clearProps: 'all' })
    })
    if (coverRef.current) gsap.set(coverRef.current, { clearProps: 'all' })
    if (bookRef.current) gsap.set(bookRef.current, { clearProps: 'all' })
    if (backdropRef.current) gsap.set(backdropRef.current, { clearProps: 'all' })

    setState('closed')
    setCurrentPage(0)
    setCurrentSpread(0)
    onCloseRef.current()
  }, [])

  const handleOpenBook = useCallback(() => {
    if (stateRef.current !== 'cover' || animatingRef.current) return
    animatingRef.current = true
    setState('opening')

    const cover = coverRef.current
    const spread = isSpreadRef.current
    const firstEl = spread ? spreadRefs.current[0] : pageRefs.current[0]
    const book = bookRef.current

    if (!cover || !firstEl) {
      animatingRef.current = false
      setState('open')
      if (spread) {
        setCurrentSpread(1)
      } else {
        setCurrentPage(1)
      }
      return
    }

    gsap.set(firstEl, { visibility: 'visible' })

    timelineRef.current?.kill()
    timelineRef.current = animateBookOpen(cover, firstEl, {
      bookEl: book,
      isSpread: spread,
    })
    timelineRef.current.eventCallback('onComplete', () => {
      setState('open')
      if (spread) {
        setCurrentSpread(1)
      } else {
        setCurrentPage(1)
      }
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

  const flipSpread = useCallback((direction) => {
    if (stateRef.current !== 'open' || animatingRef.current) return

    const spread = currentSpreadRef.current
    const nextIdx = direction === 'forward' ? spread + 1 : spread - 1
    if (nextIdx < 1 || nextIdx > TOTAL_SPREADS) return

    animatingRef.current = true
    setState('flipping')

    const currEl = spreadRefs.current[spread - 1]
    const nextEl = spreadRefs.current[nextIdx - 1]

    if (!currEl || !nextEl) {
      animatingRef.current = false
      setState('open')
      setCurrentSpread(nextIdx)
      return
    }

    timelineRef.current?.kill()
    timelineRef.current = animateSpreadFlip(currEl, nextEl, direction)
    timelineRef.current.eventCallback('onComplete', () => {
      setState('open')
      setCurrentSpread(nextIdx)
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
    timelineRef.current = animateClose(book, backdrop, {
      isSpread: isSpreadRef.current,
    })
    timelineRef.current.eventCallback('onComplete', () => {
      setState('closed')
      setCurrentPage(0)
      setCurrentSpread(0)
      animatingRef.current = false

      pageRefs.current.forEach((el) => {
        if (el) gsap.set(el, { clearProps: 'all' })
      })
      spreadRefs.current.forEach((el) => {
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
      if (isSpreadRef.current) {
        flipSpread('forward')
      } else {
        flipPage('forward')
      }
    }
  }, [handleOpenBook, flipPage, flipSpread])

  const handleSwipeRight = useCallback(() => {
    if (stateRef.current === 'open') {
      const atFirst = isSpreadRef.current
        ? currentSpreadRef.current === 1
        : currentPageRef.current === 1
      if (atFirst) {
        handleClose()
      } else if (isSpreadRef.current) {
        flipSpread('backward')
      } else {
        flipPage('backward')
      }
    }
  }, [handleClose, flipPage, flipSpread])

  const swipeHandlers = useBookSwipe({
    onSwipeLeft: handleSwipeLeft,
    onSwipeRight: handleSwipeRight,
  })

  const showBook = state !== 'closed'

  if (!mounted || !showBook) return null

  const isBookOpen = state === 'open' || state === 'flipping' || state === 'opening'

  // --- SPREAD MODE (desktop >= 768px) ---
  if (isSpread) {
    const totalNav = TOTAL_SPREADS
    const currentNav = currentSpread

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

        {/* Outer container — always spread width, centered */}
        <div
          className="book-container book-container--spread absolute top-1/2 left-1/2"
          style={{
            transform: 'translate(-50%, -50%)',
            width: SPREAD_DIMENSIONS.width,
            aspectRatio: SPREAD_DIMENSIONS.aspectRatio,
            maxHeight: SPREAD_DIMENSIONS.maxHeight,
          }}
          {...swipeHandlers}
        >
          {/* Book element — starts at 50% width, right-aligned (cover = right half) */}
          <div
            ref={bookRef}
            className="h-full relative rounded-r-sm"
            style={{
              width: '50%',
              marginLeft: '50%',
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
            {/* Cover — fills the bookRef (right half when closed) */}
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

            {/* Spreads */}
            {SPREAD_DEFS.map((def, i) => {
              const spreadNum = i + 1
              const leftIdx = def.left
              const rightIdx = def.right
              const LeftComp = leftIdx !== null ? PAGES[leftIdx] : null
              const RightComp = rightIdx !== null ? PAGES[rightIdx] : null

              const leftIsAuth = leftIdx === 0
              const leftIsNav = leftIdx === 1
              const leftIsBack = leftIdx === TOTAL_PAGES - 1
              const rightIsAuth = rightIdx === 0
              const rightIsNav = rightIdx === 1
              const rightIsBack = rightIdx === TOTAL_PAGES - 1

              const leftClose = (leftIsAuth || leftIsNav || leftIsBack) ? handleClose : undefined
              const rightClose = (rightIsAuth || rightIsNav || rightIsBack) ? handleClose : undefined

              return (
                <div
                  key={i}
                  ref={(el) => { spreadRefs.current[i] = el }}
                  className="book-spread absolute inset-0 rounded-r-sm overflow-hidden"
                  style={{
                    visibility: currentSpread === spreadNum ? 'visible' : 'hidden',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <BookSpread
                    leftPage={LeftComp ? <LeftComp onClose={leftClose} /> : null}
                    rightPage={RightComp ? <RightComp onClose={rightClose} /> : null}
                    leftPageNum={leftIdx !== null ? leftIdx + 1 : null}
                    rightPageNum={rightIdx !== null ? rightIdx + 1 : null}
                  />
                </div>
              )
            })}

            {/* Nav arrows */}
            {state === 'open' && currentNav >= 1 && (
              <>
                {currentNav > 1 && (
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center
                               justify-center text-white/30 hover:text-cyan/60 transition-colors
                               cursor-pointer z-20"
                    onClick={() => flipSpread('backward')}
                    aria-label="Previous spread"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
                {currentNav < totalNav && (
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center
                               justify-center text-white/30 hover:text-cyan/60 transition-colors
                               cursor-pointer z-20"
                    onClick={() => flipSpread('forward')}
                    aria-label="Next spread"
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

  // --- SINGLE PAGE MODE (mobile < 768px) — unchanged ---
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
            const isNavOrBack = pageNum === 1 || pageNum === 2 || pageNum === TOTAL_PAGES
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
