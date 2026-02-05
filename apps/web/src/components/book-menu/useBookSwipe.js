import { useRef, useCallback } from 'react'
import { SWIPE_CONFIG } from './book-constants'

export function useBookSwipe({ onSwipeLeft, onSwipeRight }) {
  const startRef = useRef(null)

  const handleStart = useCallback((e) => {
    const point = e.touches ? e.touches[0] : e
    startRef.current = { x: point.clientX, y: point.clientY, time: Date.now() }
  }, [])

  const handleEnd = useCallback((e) => {
    if (!startRef.current) return

    const point = e.changedTouches ? e.changedTouches[0] : e
    const deltaX = point.clientX - startRef.current.x
    const deltaY = point.clientY - startRef.current.y
    const elapsed = Date.now() - startRef.current.time

    startRef.current = null

    const absX = Math.abs(deltaX)
    const absY = Math.abs(deltaY)

    if (absX < SWIPE_CONFIG.minDistance) return
    if (absX < absY) return
    if (elapsed > SWIPE_CONFIG.maxDuration) return

    if (deltaX < 0) {
      onSwipeLeft()
    } else {
      onSwipeRight()
    }
  }, [onSwipeLeft, onSwipeRight])

  const swipeHandlers = {
    onTouchStart: handleStart,
    onTouchEnd: handleEnd,
    onMouseDown: handleStart,
    onMouseUp: handleEnd,
  }

  return swipeHandlers
}
