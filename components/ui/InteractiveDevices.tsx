'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import manifest from '@/data/screenManifest.json'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * iMac + iPad + iPhone hvor hele sitet kan scrolles gennem – hver skærm har sin egen play-knap.
 * Lag: færdig ramme (skærmene udfyldt mørkt) → tre skærmlag, hvert maskeret til sin egen skærm.
 * Mål (1536×1024) og masker er de samme som i scripts/build-mockups.mjs.
 * Billeder: /public/portfolio-images/screens/full/{slug}-{desktop|tablet|mobile}.webp
 */
const W = 1536
const H = 1024
const PAD = 8
const SCREENS = {
  // btnBottom: afstand fra skærmens underkant til knappens bund (i mockup-px)
  desktop: { x: 387, y: 106, w: 918, h: 498, speed: 340, btnBottom: 22, label: 'computer' },
  tablet: { x: 111, y: 469, w: 508, h: 398, speed: 300, btnBottom: 20, label: 'tablet' },
  mobile: { x: 1240, y: 468, w: 196, h: 433, speed: 240, btnBottom: 44, label: 'mobil' },
} as const
type Device = keyof typeof SCREENS
type Status = 'idle' | 'playing' | 'paused' | 'done'

type Manifest = Record<string, Partial<Record<Device, { w: number; h: number }>>>
const sizes = manifest as Manifest

const FEATHER =
  'linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), linear-gradient(to bottom, transparent, #000 9%, #000 91%, transparent)'

const pct = (v: number, t: number) => `${(v / t) * 100}%`
const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)
const invEase = (u: number) => (u < 0.5 ? Math.sqrt(u / 2) : 1 - Math.sqrt((1 - u) / 2))

// Rolig "teaser" før nogen har trykket play: computeren ruller langsomt lidt ned og op,
// tablet og mobil vugger blidt – så man kan se, at der er en animation.
// amp = hvor langt (mockup-px), period = sek. for én frem-og-tilbage, delay = sek. før start
const TEASER: Record<Device, { amp: number; period: number; delay: number }> = {
  desktop: { amp: 560, period: 26, delay: 1.2 },
  tablet: { amp: 46, period: 7.5, delay: 2.4 },
  mobile: { amp: 40, period: 7, delay: 3.4 },
}

function Screen({ slug, dev, dim, title, reduce }: { slug: string; dev: Device; dim: { w: number; h: number }; title: string; reduce: boolean }) {
  const s = SCREENS[dev]
  const boxW = s.w + PAD * 2
  const boxH = s.h + PAD * 2
  const imgH = boxW * (dim.h / dim.w)
  const scrollable = Math.max(0, imgH - boxH)
  const shift = scrollable / imgH // andel af billedets egen højde
  const seconds = Math.min(24, Math.max(6, scrollable / s.speed))
  const mask = `url(/portfolio-images/device-mockup/mask-${dev}.png)`

  const imgRef = useRef<HTMLImageElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(layerRef, { margin: '150px' })
  const current = useRef(0) // nuværende position som andel (0..1) af hele scrollet
  const progress = useRef(0) // 0..1 (tid)
  const raf = useRef<number | null>(null)
  const [status, setStatus] = useState<Status>('idle')

  const setFraction = useCallback(
    (f: number) => {
      current.current = f
      if (imgRef.current) imgRef.current.style.transform = `translate3d(0, -${f * shift * 100}%, 0)`
    },
    [shift],
  )
  const apply = useCallback((t: number) => setFraction(ease(t)), [setFraction])
  const stop = useCallback(() => {
    if (raf.current !== null) cancelAnimationFrame(raf.current)
    raf.current = null
  }, [])
  useEffect(() => stop, [stop])

  // Teaser mens skærmen står i hvile og er synlig
  useEffect(() => {
    if (reduce || status !== 'idle' || !inView || scrollable <= 0) return
    const { amp, period, delay } = TEASER[dev]
    const ampF = Math.min(0.5, amp / scrollable)
    const start = performance.now() + delay * 1000
    let id = 0
    const tick = (now: number) => {
      const el = (now - start) / 1000
      // starter fra toppen og kommer jævnt ind i bevægelsen
      setFraction(el > 0 ? ampF * (0.5 - 0.5 * Math.cos((2 * Math.PI * el) / period)) : 0)
      id = requestAnimationFrame(tick)
    }
    id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [dev, reduce, status, inView, scrollable, setFraction])

  const play = useCallback(() => {
    stop()
    setStatus('playing')
    progress.current = invEase(current.current) // fortsæt jævnt fra teaser/pause
    let last = performance.now()
    const tick = (now: number) => {
      progress.current = Math.min(1, progress.current + (now - last) / 1000 / seconds)
      last = now
      apply(progress.current)
      if (progress.current >= 1) {
        raf.current = null
        setStatus('done')
        return
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
  }, [apply, seconds, stop])

  const onClick = () => {
    if (reduce) {
      // Ingen animation: hop mellem top og bund
      const toEnd = status !== 'done'
      progress.current = toEnd ? 1 : 0
      apply(progress.current)
      setStatus(toEnd ? 'done' : 'idle')
      return
    }
    if (status === 'playing') {
      stop()
      setStatus('paused')
    } else if (status === 'done') {
      progress.current = 0
      apply(0)
      play()
    } else {
      play()
    }
  }

  const label =
    status === 'playing' ? `Pause scroll på ${s.label}` : status === 'done' ? `Start forfra på ${s.label}` : `Scroll gennem siden på ${s.label}`
  const Icon = status === 'playing' ? Pause : status === 'done' ? RotateCcw : Play

  return (
    <>
      <div ref={layerRef} className="absolute inset-0" style={{ WebkitMaskImage: mask, maskImage: mask, WebkitMaskSize: '100% 100%', maskSize: '100% 100%' }}>
        <div
          className="absolute overflow-hidden bg-[#0e0e0e]"
          style={{ left: pct(s.x - PAD, W), top: pct(s.y - PAD, H), width: pct(boxW, W), height: pct(boxH, H) }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={`/portfolio-images/screens/full/${slug}-${dev}.webp`}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority={dev === 'desktop' ? 'high' : 'auto'}
            draggable={false}
            className="block w-full h-auto will-change-transform"
          />
        </div>
      </div>

      {/* Play-knap midt i skærmens underkant */}
      <button
        type="button"
        onClick={onClick}
        aria-label={`${label} – ${title}`}
        aria-pressed={status === 'playing'}
        className={`group absolute z-10 grid place-items-center rounded-full backdrop-blur-md ring-1 ring-white/30 shadow-lg shadow-black/30 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
          status === 'playing' ? 'bg-gold text-black' : 'bg-black/65 text-white hover:bg-gold hover:text-black'
        }`}
        style={{
          left: pct(s.x + s.w / 2, W),
          top: pct(s.y + s.h - s.btnBottom, H),
          width: 'clamp(26px, 3.3cqw, 46px)',
          height: 'clamp(26px, 3.3cqw, 46px)',
          transform: 'translate(-50%, -100%)',
        }}
      >
        <Icon className="relative w-[42%] h-[42%]" fill={Icon === RotateCcw ? 'none' : 'currentColor'} strokeWidth={Icon === RotateCcw ? 2.4 : 0} />
      </button>
    </>
  )
}

interface Props {
  slug: string
  title: string
  className?: string
}

export function InteractiveDevices({ slug, title, className = '' }: Props) {
  const reduce = useReducedMotion()

  return (
    <div className={className}>
      <p className="mb-2 text-center text-[11px] uppercase tracking-[0.2em] text-black/45" aria-hidden="true">
        Tryk på play på en skærm for at scrolle gennem hele siden
      </p>
      <div
        className="relative w-full select-none"
        style={{
          aspectRatio: `${W} / ${H}`,
          containerType: 'inline-size',
          // Fader mockup-baggrundens kanter ud, så den smelter sammen med siden
          WebkitMaskImage: FEATHER,
          maskImage: FEATHER,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
        role="group"
        aria-label={`${title} – på computer, tablet og mobil`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portfolio-images/device-mockup/frame.webp" alt="" className="absolute inset-0 w-full h-full" draggable={false} />

        {(Object.keys(SCREENS) as Device[]).map((dev) => {
          const dim = sizes[slug]?.[dev]
          return dim ? <Screen key={dev} slug={slug} dev={dev} dim={dim} title={title} reduce={reduce} /> : null
        })}
      </div>

    </div>
  )
}
