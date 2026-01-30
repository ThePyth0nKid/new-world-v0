export const POSITION_MAP = {
  'top-left':      { top: '5%',  left: '5%'  },
  'top-center':    { top: '5%',  left: '50%', transform: 'translateX(-50%)' },
  'top-right':     { top: '5%',  right: '5%' },
  'center-left':   { top: '50%', left: '5%',  transform: 'translateY(-50%)' },
  'center-center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
  'center-right':  { top: '50%', right: '5%', transform: 'translateY(-50%)' },
  'bottom-left':   { bottom: '5%',  left: '5%'  },
  'bottom-center': { bottom: '5%',  left: '50%', transform: 'translateX(-50%)' },
  'bottom-right':  { bottom: '5%',  right: '5%' },
}

export const TAIL_ORIGIN_MAP = {
  'top-left':     'top left',
  'top-center':   'top center',
  'top-right':    'top right',
  'center-left':  'center left',
  'center-right': 'center right',
  'bottom-left':  'bottom left',
  'bottom-center':'bottom center',
  'bottom-right': 'bottom right',
}

export const BUBBLE_DEFAULTS = {
  type: 'normal',
  position: 'top-right',
  tailDirection: 'bottom-left',
  width: 35,
  delay: 0,
  seed: 42,
}

export const TYPE_CONFIG = {
  normal: {
    roughness: 1.5,
    strokeWidth: 2,
    fill: 'rgba(255, 255, 255, 0.95)',
    stroke: '#0d0d0d',
    fillStyle: 'solid',
  },
  shout: {
    roughness: 2.5,
    strokeWidth: 3,
    fill: 'rgba(255, 255, 255, 0.97)',
    stroke: '#0d0d0d',
    fillStyle: 'solid',
  },
  thought: {
    roughness: 0.8,
    strokeWidth: 1.5,
    fill: 'rgba(255, 255, 255, 0.9)',
    stroke: '#0d0d0d',
    fillStyle: 'solid',
  },
  narration: {
    roughness: 0.3,
    strokeWidth: 1,
    fill: 'rgba(13, 13, 13, 0.85)',
    stroke: 'rgba(179, 245, 255, 0.6)',
    fillStyle: 'solid',
    textColor: '#b3f5ff',
  },
}
