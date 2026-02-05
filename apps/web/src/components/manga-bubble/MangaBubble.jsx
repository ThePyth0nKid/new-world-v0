import { useRef, useEffect, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import { drawBubble } from './bubble-paths'
import { createBubbleAnimation } from './bubble-animations'
import { POSITION_MAP, BUBBLE_DEFAULTS, TYPE_CONFIG } from './bubble-constants'

const MangaBubble = ({
  text,
  type = BUBBLE_DEFAULTS.type,
  position = BUBBLE_DEFAULTS.position,
  tailDirection = BUBBLE_DEFAULTS.tailDirection,
  width = BUBBLE_DEFAULTS.width,
  delay = BUBBLE_DEFAULTS.delay,
  seed = BUBBLE_DEFAULTS.seed,
}) => {
  const containerRef = useRef(null)
  const svgRef = useRef(null)
  const drawnRef = useRef(false)

  const positionStyles = POSITION_MAP[position] || POSITION_MAP['top-right']
  const config = TYPE_CONFIG[type] || TYPE_CONFIG.normal
  const textColor = config.textColor || '#0d0d0d'

  const draw = useCallback(() => {
    const svg = svgRef.current
    const container = containerRef.current
    if (!svg || !container || drawnRef.current) return

    const w = container.offsetWidth
    const h = container.offsetHeight
    if (w === 0 || h === 0) return

    svg.setAttribute('viewBox', `0 0 ${w} ${h}`)
    drawBubble(svg, type, w, h, tailDirection, seed)
    drawnRef.current = true
  }, [type, tailDirection, seed])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    draw()

    const observer = new ResizeObserver(() => {
      if (!drawnRef.current) draw()
    })
    observer.observe(container)
    return () => observer.disconnect()
  }, [draw])

  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    createBubbleAnimation(el, { tailDirection, delay })
  }, { scope: containerRef })

  return (
    <div
      ref={containerRef}
      className="manga-bubble"
      style={{
        ...positionStyles,
        width: `${width}%`,
      }}
    >
      <svg
        ref={svgRef}
        className="manga-bubble-svg"
        preserveAspectRatio="none"
      />
      <span
        className="manga-bubble-text"
        style={{ color: textColor }}
      >
        {text}
      </span>
    </div>
  )
}

export default MangaBubble
