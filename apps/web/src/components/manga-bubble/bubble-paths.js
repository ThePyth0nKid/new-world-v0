import { TYPE_CONFIG } from './bubble-constants'

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

function wobbleEllipsePath(cx, cy, rx, ry, roughness, rng, segments = 64) {
  const points = []
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2
    const wobble = 1 + (rng() - 0.5) * roughness * 0.06
    const x = cx + Math.cos(angle) * rx * wobble
    const y = cy + Math.sin(angle) * ry * wobble
    points.push({ x, y })
  }
  return pointsToSmoothPath(points, true)
}

function wobbleRectPath(x, y, w, h, roughness, rng) {
  const corners = [
    { x, y },
    { x: x + w, y },
    { x: x + w, y: y + h },
    { x, y: y + h },
  ]
  const jitter = roughness * 1.5
  const wobbled = corners.map(c => ({
    x: c.x + (rng() - 0.5) * jitter,
    y: c.y + (rng() - 0.5) * jitter,
  }))
  return `M ${wobbled[0].x} ${wobbled[0].y} L ${wobbled[1].x} ${wobbled[1].y} L ${wobbled[2].x} ${wobbled[2].y} L ${wobbled[3].x} ${wobbled[3].y} Z`
}

function wobbleCirclePath(cx, cy, r, roughness, rng) {
  return wobbleEllipsePath(cx, cy, r, r, roughness, rng, 32)
}

function pointsToSmoothPath(points, closed = false) {
  if (points.length < 2) return ''
  const parts = [`M ${points[0].x} ${points[0].y}`]
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const cpx = (prev.x + curr.x) / 2
    const cpy = (prev.y + curr.y) / 2
    parts.push(`Q ${prev.x} ${prev.y} ${cpx} ${cpy}`)
  }
  if (closed) {
    const last = points[points.length - 1]
    const first = points[0]
    const cpx = (last.x + first.x) / 2
    const cpy = (last.y + first.y) / 2
    parts.push(`Q ${last.x} ${last.y} ${cpx} ${cpy}`)
    parts.push('Z')
  }
  return parts.join(' ')
}

function createSvgPath(d, fill, stroke, strokeWidth) {
  const ns = 'http://www.w3.org/2000/svg'
  const path = document.createElementNS(ns, 'path')
  path.setAttribute('d', d)
  path.setAttribute('fill', fill)
  path.setAttribute('stroke', stroke)
  path.setAttribute('stroke-width', String(strokeWidth))
  path.setAttribute('stroke-linejoin', 'round')
  return path
}

const TAIL_DIR_MAP = {
  'bottom-left':   Math.PI * 0.75,
  'bottom-center': Math.PI * 0.5,
  'bottom-right':  Math.PI * 0.25,
  'top-left':      Math.PI * 1.25,
  'top-center':    Math.PI * 1.5,
  'top-right':     Math.PI * 1.75,
  'center-left':   Math.PI,
  'center-right':  0,
}

function buildTailPath(cx, cy, rx, ry, tailDirection) {
  const angle = TAIL_DIR_MAP[tailDirection] ?? Math.PI * 0.75
  const tipX = cx + Math.cos(angle) * rx * 1.4
  const tipY = cy - Math.sin(angle) * ry * 1.4
  const spread = 0.15
  const b1x = cx + Math.cos(angle + spread) * rx * 0.85
  const b1y = cy - Math.sin(angle + spread) * ry * 0.85
  const b2x = cx + Math.cos(angle - spread) * rx * 0.85
  const b2y = cy - Math.sin(angle - spread) * ry * 0.85
  return `M ${b1x} ${b1y} L ${tipX} ${tipY} L ${b2x} ${b2y}`
}

function drawNormalBubble(svgEl, w, h, tailDirection, seed) {
  const cfg = TYPE_CONFIG.normal
  const rng = seededRandom(seed)
  const cx = w / 2, cy = h / 2
  const rx = w * 0.42, ry = h * 0.38

  const ellipseD = wobbleEllipsePath(cx, cy, rx, ry, cfg.roughness, rng)
  svgEl.appendChild(createSvgPath(ellipseD, cfg.fill, cfg.stroke, cfg.strokeWidth))

  if (tailDirection) {
    const tailD = buildTailPath(cx, cy, rx, ry, tailDirection)
    svgEl.appendChild(createSvgPath(tailD, cfg.fill, cfg.stroke, cfg.strokeWidth))
  }
}

function drawShoutBubble(svgEl, w, h, seed) {
  const cfg = TYPE_CONFIG.shout
  const rng = seededRandom(seed)
  const cx = w / 2, cy = h / 2
  const rx = w * 0.44, ry = h * 0.4
  const points = 12
  const verts = []

  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2
    const isOuter = i % 2 === 0
    const scale = isOuter ? 1.15 : 0.8
    const wobble = 1 + (rng() - 0.5) * cfg.roughness * 0.04
    verts.push({
      x: cx + Math.cos(angle) * rx * scale * wobble,
      y: cy + Math.sin(angle) * ry * scale * wobble,
    })
  }

  const d = verts.map((v, i) => `${i === 0 ? 'M' : 'L'} ${v.x} ${v.y}`).join(' ') + ' Z'
  svgEl.appendChild(createSvgPath(d, cfg.fill, cfg.stroke, cfg.strokeWidth))
}

function drawThoughtBubble(svgEl, w, h, tailDirection, seed) {
  const cfg = TYPE_CONFIG.thought
  const rng = seededRandom(seed)
  const cx = w / 2, cy = h / 2
  const rx = w * 0.4, ry = h * 0.35

  const mainD = wobbleEllipsePath(cx, cy, rx, ry, cfg.roughness, rng)
  svgEl.appendChild(createSvgPath(mainD, cfg.fill, cfg.stroke, cfg.strokeWidth))

  const bumpCount = 8
  for (let i = 0; i < bumpCount; i++) {
    const angle = (i * 2 * Math.PI) / bumpCount
    const bx = cx + Math.cos(angle) * rx * 0.95
    const by = cy + Math.sin(angle) * ry * 0.95
    const br = Math.min(rx, ry) * 0.3
    const bumpD = wobbleCirclePath(bx, by, br, cfg.roughness, rng)
    svgEl.appendChild(createSvgPath(bumpD, cfg.fill, cfg.stroke, cfg.strokeWidth))
  }

  if (tailDirection) {
    const angle = TAIL_DIR_MAP[tailDirection] ?? Math.PI * 0.75
    const sizes = [6, 4, 2.5]
    for (let i = 0; i < 3; i++) {
      const dist = 1.2 + i * 0.25
      const dx = cx + Math.cos(angle) * rx * dist
      const dy = cy - Math.sin(angle) * ry * dist
      const dotD = wobbleCirclePath(dx, dy, sizes[i], cfg.roughness, rng)
      svgEl.appendChild(createSvgPath(dotD, cfg.fill, cfg.stroke, cfg.strokeWidth))
    }
  }
}

function drawNarrationBubble(svgEl, w, h, seed) {
  const cfg = TYPE_CONFIG.narration
  const rng = seededRandom(seed)
  const pad = 8
  const d = wobbleRectPath(pad, pad, w - pad * 2, h - pad * 2, cfg.roughness, rng)
  svgEl.appendChild(createSvgPath(d, cfg.fill, cfg.stroke, cfg.strokeWidth))
}

export function drawBubble(svgEl, type, width, height, tailDirection, seed) {
  while (svgEl.firstChild) {
    svgEl.removeChild(svgEl.firstChild)
  }

  switch (type) {
    case 'shout':
      return drawShoutBubble(svgEl, width, height, seed)
    case 'thought':
      return drawThoughtBubble(svgEl, width, height, tailDirection, seed)
    case 'narration':
      return drawNarrationBubble(svgEl, width, height, seed)
    default:
      return drawNormalBubble(svgEl, width, height, tailDirection, seed)
  }
}
