import { useEffect, useRef } from 'react'
import { asset } from '../../constants/config'

const SOUND_DURATION = 16 // Sekunden
const SCROLL_END = 3000 // Pixel für 16 Sekunden Audio

// ===== DUAL-LAYER GRAIN SYSTEM =====
// Stream A: Primär
const GRAIN_A_DURATION_FWD = 0.18 // 180ms
const GRAIN_A_DURATION_REV = 0.24 // 240ms
const GRAIN_A_VOLUME = 0.7 // 70% - Hauptspur

// Stream B: Sekundär (versetzt, leicht anders)
const GRAIN_B_DURATION_FWD = 0.20 // 200ms - etwas länger
const GRAIN_B_DURATION_REV = 0.28 // 280ms
const GRAIN_B_VOLUME = 0.45 // 45% - versetzt lauter

// Timing
const GRAIN_INTERVAL_FWD = 50 // 50ms zwischen Grains
const GRAIN_INTERVAL_REV = 45 // 45ms
const STREAM_B_OFFSET = 0.5 // Stream B startet bei 50% des Intervalls

// Fades
const FADE_TIME_FWD = 0.06 // 60ms
const FADE_TIME_REV = 0.09 // 90ms

// Reverb Settings
const REVERB_TIME = 1.5 // Sekunden Nachhall
const REVERB_DECAY = 0.35 // Decay-Stärke
const REVERB_MIX = 0.35 // 35% Wet

// Stop Fade-out
const STOP_FADE_TIME = 0.4 // 400ms langsamer Fade-out beim Stoppen

/**
 * Scroll-Scrubbing Audio - wie in einer DAW
 * Überlappende Grains mit Crossfade für smoothen Sound
 */
export function useScrollSound() {
  const ctxRef = useRef(null)
  const forwardBufferRef = useRef(null)
  const reverseBufferRef = useRef(null)
  const reverbRef = useRef(null)
  const dryGainRef = useRef(null)
  const wetGainRef = useRef(null)
  const activeSourcesRef = useRef([])
  const lastScrollY = useRef(0)
  const lastGrainTimeA = useRef(0) // Stream A timing
  const lastGrainTimeB = useRef(0) // Stream B timing
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef(null)

  useEffect(() => {
    let mounted = true

    // Buffer umkehren für Rückwärts
    const createReversedBuffer = (ctx, buffer) => {
      const reversed = ctx.createBuffer(
        buffer.numberOfChannels,
        buffer.length,
        buffer.sampleRate
      )
      for (let ch = 0; ch < buffer.numberOfChannels; ch++) {
        const orig = buffer.getChannelData(ch)
        const rev = reversed.getChannelData(ch)
        for (let i = 0; i < buffer.length; i++) {
          rev[i] = orig[buffer.length - 1 - i]
        }
      }
      return reversed
    }

    // Reverb Impuls-Response generieren
    const createReverbImpulse = (ctx, duration, decay) => {
      const sampleRate = ctx.sampleRate
      const length = sampleRate * duration
      const impulse = ctx.createBuffer(2, length, sampleRate)

      for (let channel = 0; channel < 2; channel++) {
        const channelData = impulse.getChannelData(channel)
        for (let i = 0; i < length; i++) {
          // Exponentieller Decay mit etwas Rauschen
          const env = Math.pow(1 - i / length, decay * 3)
          channelData[i] = (Math.random() * 2 - 1) * env
        }
      }
      return impulse
    }

    // Audio initialisieren
    const init = async () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        const ctx = new AudioContext()
        ctxRef.current = ctx

        // Reverb Setup
        const convolver = ctx.createConvolver()
        convolver.buffer = createReverbImpulse(ctx, REVERB_TIME, REVERB_DECAY)
        reverbRef.current = convolver

        // Dry/Wet Mix
        const dryGain = ctx.createGain()
        const wetGain = ctx.createGain()
        dryGain.gain.value = 1 - REVERB_MIX
        wetGain.gain.value = REVERB_MIX
        dryGainRef.current = dryGain
        wetGainRef.current = wetGain

        // Routing: Source -> Dry -> Destination
        //          Source -> Reverb -> Wet -> Destination
        dryGain.connect(ctx.destination)
        convolver.connect(wetGain)
        wetGain.connect(ctx.destination)

        const response = await fetch(asset('/audio/intro-scroll.mp3'))
        const arrayBuffer = await response.arrayBuffer()
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer)

        if (mounted) {
          forwardBufferRef.current = audioBuffer
          reverseBufferRef.current = createReversedBuffer(ctx, audioBuffer)
        }
      } catch (e) {
        console.error('Audio init error:', e)
      }
    }

    // Grain mit Fade abspielen - durch Reverb geroutet
    // stream: 'A' oder 'B' für Dual-Layer
    const playGrain = (position, isReverse, stream = 'A') => {
      const ctx = ctxRef.current
      const buffer = isReverse ? reverseBufferRef.current : forwardBufferRef.current
      const dryGain = dryGainRef.current
      const reverb = reverbRef.current

      if (!ctx || !buffer || !dryGain || !reverb) return
      if (ctx.state === 'suspended') ctx.resume()

      // Parameter je nach Stream und Richtung
      const isStreamA = stream === 'A'
      const grainDuration = isReverse
        ? (isStreamA ? GRAIN_A_DURATION_REV : GRAIN_B_DURATION_REV)
        : (isStreamA ? GRAIN_A_DURATION_FWD : GRAIN_B_DURATION_FWD)
      const fadeTime = isReverse ? FADE_TIME_REV : FADE_TIME_FWD
      const volume = isStreamA ? GRAIN_A_VOLUME : GRAIN_B_VOLUME

      // Position im Buffer berechnen
      let startPos = isReverse
        ? SOUND_DURATION - position
        : position
      startPos = Math.max(0, Math.min(startPos, SOUND_DURATION - grainDuration))

      // Source + Gain für diesen Grain
      const source = ctx.createBufferSource()
      const gainNode = ctx.createGain()

      source.buffer = buffer
      source.connect(gainNode)

      // Routing: Grain -> Dry (direct) + Reverb (wet)
      gainNode.connect(dryGain)
      gainNode.connect(reverb)

      // Fade Envelope: smooth in → hold → smooth out
      const now = ctx.currentTime
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(volume, now + fadeTime)
      gainNode.gain.setValueAtTime(volume, now + grainDuration - fadeTime)
      gainNode.gain.linearRampToValueAtTime(0, now + grainDuration)

      source.start(0, startPos, grainDuration)

      // Cleanup nach Grain Ende
      activeSourcesRef.current.push({ source, gainNode })
      setTimeout(() => {
        activeSourcesRef.current = activeSourcesRef.current.filter(s => s.source !== source)
      }, grainDuration * 1000 + 50)
    }

    // Sounds smooth ausfaden - Reverb klingt nach
    const stopAllSounds = () => {
      const ctx = ctxRef.current
      if (!ctx) return

      activeSourcesRef.current.forEach(({ source, gainNode }) => {
        try {
          // Langsamer Fade-out - Sound verklingt sanft
          const now = ctx.currentTime
          gainNode.gain.cancelScheduledValues(now)
          gainNode.gain.setValueAtTime(gainNode.gain.value, now)
          // Exponentieller Fade für natürlicheres Ausklingen
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + STOP_FADE_TIME)
          setTimeout(() => {
            try { source.stop() } catch (e) {}
          }, STOP_FADE_TIME * 1000 + 50)
        } catch (e) {}
      })
      // Nicht sofort leeren - lassen bis Fade fertig
      setTimeout(() => {
        activeSourcesRef.current = []
      }, STOP_FADE_TIME * 1000 + 100)
    }

    // Scroll Handler - DUAL-LAYER
    const handleScroll = () => {
      const now = performance.now()
      const scrollY = window.scrollY
      const deltaScroll = scrollY - lastScrollY.current

      // Scroll aktiv markieren
      isScrollingRef.current = true

      // Scroll-Stop Detection: Nach 80ms ohne Scroll = Stop
      clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
        stopAllSounds()
      }, 80)

      // Richtung bestimmen
      const isReverse = deltaScroll < 0
      if (Math.abs(deltaScroll) < 2) return // Minimale Bewegung ignorieren

      // Grain-Interval je nach Richtung
      const grainInterval = isReverse ? GRAIN_INTERVAL_REV : GRAIN_INTERVAL_FWD
      const streamBDelay = grainInterval * STREAM_B_OFFSET

      // Audio-Position aus Scroll berechnen - mit LOOP
      const rawProgress = scrollY / SCROLL_END
      const loopedProgress = ((rawProgress % 1) + 1) % 1 // Immer 0-1, auch bei negativen Werten
      const audioPosition = loopedProgress * SOUND_DURATION

      // Stream A: Primärer Grain
      if (now - lastGrainTimeA.current >= grainInterval) {
        playGrain(audioPosition, isReverse, 'A')
        lastGrainTimeA.current = now
      }

      // Stream B: Sekundärer Grain (versetzt um 50%)
      if (now - lastGrainTimeB.current >= grainInterval) {
        // Stream B startet versetzt
        setTimeout(() => {
          if (isScrollingRef.current) {
            playGrain(audioPosition, isReverse, 'B')
          }
        }, streamBDelay)
        lastGrainTimeB.current = now
      }

      lastScrollY.current = scrollY
    }

    init()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      mounted = false
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeoutRef.current)
      stopAllSounds()
      if (ctxRef.current) {
        ctxRef.current.close()
      }
    }
  }, [])
}
