import gsap from 'gsap'
import { BOOK_TIMING, BOOK_EASING } from './book-constants'

export function animateCoverEntrance(backdropEl, coverEl) {
  const tl = gsap.timeline()

  tl.fromTo(
    backdropEl,
    { opacity: 0 },
    {
      opacity: 1,
      duration: BOOK_TIMING.coverEntranceBackdrop,
      ease: BOOK_EASING.coverEntranceBackdrop,
    },
  )

  tl.fromTo(
    coverEl,
    { scale: 0.85, opacity: 0, rotateY: 5 },
    {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      duration: BOOK_TIMING.coverEntrance,
      ease: BOOK_EASING.coverEntrance,
    },
    '<0.1',
  )

  return tl
}

export function animateBookOpen(coverEl, firstPageEl, { bookEl, isSpread } = {}) {
  const tl = gsap.timeline()

  // In spread mode: expand the book from right-half to full width
  if (isSpread && bookEl) {
    tl.to(bookEl, {
      width: '100%',
      marginLeft: '0%',
      duration: BOOK_TIMING.bookExpand,
      ease: BOOK_EASING.bookOpen,
    }, 0)
  }

  tl.to(coverEl, {
    rotateY: -180,
    duration: BOOK_TIMING.bookOpen,
    ease: BOOK_EASING.bookOpen,
    transformOrigin: 'left center',
  }, 0)

  tl.fromTo(
    firstPageEl,
    { opacity: 0, x: 20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    },
    '-=0.3',
  )

  return tl
}

export function animatePageFlip(currentPageEl, nextPageEl, direction) {
  const isForward = direction === 'forward'
  const tl = gsap.timeline()

  // Current page flips away
  tl.to(currentPageEl, {
    rotateY: isForward ? -90 : 90,
    opacity: 0.5,
    scale: 0.98,
    duration: BOOK_TIMING.pageFlipHalf,
    ease: BOOK_EASING.pageFlipIn,
    transformOrigin: isForward ? 'left center' : 'right center',
  })

  // Swap at midpoint
  tl.set(currentPageEl, { visibility: 'hidden' })
  tl.set(nextPageEl, { visibility: 'visible', rotateY: isForward ? 90 : -90, opacity: 0.5, scale: 0.98 })

  // New page flips in
  tl.to(nextPageEl, {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    duration: BOOK_TIMING.pageFlipHalf,
    ease: BOOK_EASING.pageFlipOut,
    transformOrigin: isForward ? 'right center' : 'left center',
  })

  return tl
}

export function animateSpreadFlip(currentSpreadEl, nextSpreadEl, direction) {
  const isForward = direction === 'forward'
  const tl = gsap.timeline()

  // Spread flips from the center spine (like a real book)
  tl.to(currentSpreadEl, {
    rotateY: isForward ? -90 : 90,
    opacity: 0.5,
    scale: 0.98,
    duration: BOOK_TIMING.pageFlipHalf,
    ease: BOOK_EASING.pageFlipIn,
    transformOrigin: 'center center',
  })

  // Swap at midpoint
  tl.set(currentSpreadEl, { visibility: 'hidden' })
  tl.set(nextSpreadEl, {
    visibility: 'visible',
    rotateY: isForward ? 90 : -90,
    opacity: 0.5,
    scale: 0.98,
  })

  // New spread flips in from center
  tl.to(nextSpreadEl, {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    duration: BOOK_TIMING.pageFlipHalf,
    ease: BOOK_EASING.pageFlipOut,
    transformOrigin: 'center center',
  })

  return tl
}

export function animateClose(bookEl, backdropEl, { isSpread } = {}) {
  const tl = gsap.timeline()

  // In spread mode: collapse book back to right-half first
  if (isSpread) {
    tl.to(bookEl, {
      width: '50%',
      marginLeft: '50%',
      duration: 0.2,
      ease: 'power2.in',
    })
  }

  tl.to(bookEl, {
    scale: 0.85,
    opacity: 0,
    duration: BOOK_TIMING.close,
    ease: BOOK_EASING.close,
  })

  tl.to(
    backdropEl,
    {
      opacity: 0,
      duration: BOOK_TIMING.closeBackdrop,
    },
    '-=0.15',
  )

  return tl
}
