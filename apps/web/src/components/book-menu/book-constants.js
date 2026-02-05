export const BOOK_DIMENSIONS = {
  width: 'clamp(280px, 85vw, 420px)',
  aspectRatio: '3 / 4',
  maxHeight: '80vh',
}

export const SPREAD_DIMENSIONS = {
  width: 'clamp(560px, 85vw, 840px)',
  aspectRatio: '3 / 2',
  maxHeight: '85vh',
}

export const SPREAD_BREAKPOINT = 768

export const SPREAD_DEFS = [
  { left: 0, right: 1 },  // NavPage + VersionPage
  { left: 2, right: 3 },  // CrewPage + RoadmapPage
  { left: null, right: 4 }, // EmptyPage + BackCover
]

export const TOTAL_SPREADS = SPREAD_DEFS.length

export const BOOK_TIMING = {
  coverEntrance: 0.5,
  coverEntranceBackdrop: 0.3,
  bookOpen: 0.7,
  bookExpand: 0.6,
  pageFlipHalf: 0.25,
  close: 0.3,
  closeBackdrop: 0.2,
}

export const BOOK_EASING = {
  coverEntrance: 'back.out(1.4)',
  coverEntranceBackdrop: 'power2.out',
  bookOpen: 'power2.inOut',
  pageFlipIn: 'power2.in',
  pageFlipOut: 'power2.out',
  close: 'power2.in',
}

export const SWIPE_CONFIG = {
  minDistance: 50,
  maxDuration: 300,
}

export const TOTAL_PAGES = 5

export const PAGE_TITLES = [
  'Navigation',
  'Versionslog',
  'Die Crew',
  'Roadmap',
  'Connect',
]
