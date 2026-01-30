import gsap from 'gsap'
import { TAIL_ORIGIN_MAP } from './bubble-constants'

export function createBubbleAnimation(element, { tailDirection, delay = 0 }) {
  const origin = TAIL_ORIGIN_MAP[tailDirection] || 'bottom left'

  gsap.set(element, {
    scale: 0,
    opacity: 0,
    transformOrigin: origin,
  })

  gsap.to(element, {
    scale: 1,
    opacity: 1,
    duration: 0.6,
    delay,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })
}
