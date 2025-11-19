'use client'

import { useEffect, useRef, useState } from 'react'

type ScrollState = 'before' | 'sticky' | 'after'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

const progressBetween = (value: number, start: number, end: number) => {
  if (value <= start) return 0
  if (value >= end) return 1
  return (value - start) / (end - start)
}

export function ExclusiveSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState<ScrollState>('before')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [visibleElements, setVisibleElements] = useState({
    line1: false,
    line2: false,
    line3: false,
    line4: false,
    line5: false,
    divider: false,
    subtext: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Use scroll progress to reveal the text lines progressively
      const scrollableDistance = Math.max(1, containerHeight - viewportHeight)
      const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance))
      setScrollProgress(progress)

      const releaseProgress = 0.975

      // Determine how the sticky wrapper should behave
      let state: ScrollState
      if (rect.top > 0) {
        state = 'before'
      } else if (progress >= releaseProgress || rect.bottom <= viewportHeight) {
        state = 'after'
      } else {
        state = 'sticky'
      }
      setScrollState(state)

      setVisibleElements({
        line1: progress >= 0,
        line2: progress >= 0.15,
        line3: progress >= 0.3,
        line4: progress >= 0.45,
        line5: progress >= 0.65,
        divider: progress >= 0.8,
        subtext: progress >= 0.8,
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInWindow = progressBetween(scrollProgress, 0.02, 0.16)
  const stickyOpacity = clamp01(fadeInWindow)
  const entryShift = (1 - fadeInWindow) * 70

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        height: '350vh',
        background: 'linear-gradient(135deg, #030712 0%, #0a1628 50%, #030712 100%)',
      }}
    >
      {/* Noise texture overlay on container */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Sticky content wrapper */}
      <div
        className="flex items-center justify-center"
        style={{
          position: scrollState === 'sticky' ? 'fixed' : 'absolute',
          top: scrollState === 'after' ? undefined : 0,
          bottom: scrollState === 'after' ? 0 : undefined,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 10,
          opacity: stickyOpacity,
          transform: `translateY(${entryShift}px)`,
          pointerEvents: stickyOpacity > 0.05 ? 'auto' : 'none',
          transition: 'opacity 0.35s ease, transform 0.6s ease-out',
        }}
      >
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h1
              className={`
                font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light
                text-white mb-2 sm:mb-3 transition-all duration-300 ease-out
                ${visibleElements.line1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
              `}
            >
              Vi bygger websites der
            </h1>

            <h2
              className={`
                font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light
                text-gray-300 mb-2 sm:mb-3 transition-all duration-300 ease-out
                ${visibleElements.line2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
              `}
            >
              konverterer besøgende til
            </h2>

            <h2
              className={`
                font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light
                text-gray-300 mb-2 sm:mb-3 transition-all duration-300 ease-out
                ${visibleElements.line3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
              `}
            >
              betalende kunder for
            </h2>

            <div
              className={`
                font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light
                mb-2 sm:mb-3 transition-all duration-300 ease-out
                ${visibleElements.line4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
              `}
            >
              <span className="text-[#c9a961]">ambitiøse virksomheder</span>
            </div>

            <h2
              className={`
                font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light
                text-gray-300 transition-all duration-300 ease-out
                ${visibleElements.line5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
              `}
            >
              der vil vokse online.
            </h2>
          </div>

          <div
            className={`
              h-px bg-[#c9a961] mb-12 transition-all duration-500 ease-out
              ${visibleElements.divider ? 'w-24' : 'w-0'}
            `}
          />

          <p
            className={`
              text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl font-light
              leading-relaxed transition-all duration-300 ease-out
              ${visibleElements.subtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}
            `}
          >
            100+ projekter leveret. 98% kundetilfredshed.
            Din succes er vores mission.
          </p>
        </div>
      </div>
    </div>
  )
}