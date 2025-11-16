'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef, useEffect, useState } from 'react'

export function ExclusiveSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const scrollAccumulator = useRef(0)

  // Handle scroll locking
  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100

      if (isInView && scrollProgress < 1) {
        e.preventDefault()
        setIsLocked(true)

        // Accumulate scroll
        scrollAccumulator.current += e.deltaY * 0.001
        scrollAccumulator.current = Math.max(0, Math.min(1, scrollAccumulator.current))
        setScrollProgress(scrollAccumulator.current)

        // Lock scroll position
        window.scrollTo(0, containerRef.current.offsetTop - 50)
      } else {
        setIsLocked(false)
      }
    }

    window.addEventListener('wheel', handleScroll, { passive: false })
    return () => window.removeEventListener('wheel', handleScroll)
  }, [scrollProgress])

  // Text reveal based on scroll progress
  const line1Opacity = scrollProgress * 6 > 1 ? 1 : scrollProgress * 6
  const line2Opacity = Math.max(0, Math.min(0.7, (scrollProgress - 0.16) * 4))
  const line3Opacity = Math.max(0, Math.min(0.7, (scrollProgress - 0.33) * 4))
  const line4Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.5) * 4))
  const line5Opacity = Math.max(0, Math.min(0.7, (scrollProgress - 0.66) * 4))
  const line6Opacity = Math.max(0, Math.min(1, (scrollProgress - 0.83) * 4))
  const subtextOpacity = Math.max(0, Math.min(0.9, (scrollProgress - 0.9) * 10))

  return (
    <section ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden py-24">
      <div
        className="min-h-screen flex items-center justify-center"
      >
        {/* Dark gradient background - static, no animation */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #030712 0%, #0a1628 50%, #030712 100%)',
          }}
        />

        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div>
          {/* Main text with scroll-triggered reveals */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
            {/* Line 1 - "Det er ikke for alle." */}
            <span
              style={{
                opacity: shouldReduceMotion ? 1 : line1Opacity,
                transition: 'opacity 0.3s ease-out'
              }}
              className="block font-light mb-4 text-white"
            >
              Det er ikke for alle.
            </span>

            {/* Line 2 */}
            <span
              style={{
                opacity: shouldReduceMotion ? 0.7 : line2Opacity,
                transition: 'opacity 0.3s ease-out'
              }}
              className="block font-light text-white"
            >
              Vi identificerer og samarbejder med
            </span>

            {/* Line 3 */}
            <span
              style={{
                opacity: shouldReduceMotion ? 0.7 : line3Opacity,
                transition: 'opacity 0.3s ease-out'
              }}
              className="block font-light text-white"
            >
              ekstraordinære virksomheder med
            </span>

            {/* Line 4 - Contains gold accent */}
            <span
              style={{
                opacity: shouldReduceMotion ? 1 : line4Opacity,
                transition: 'opacity 0.3s ease-out'
              }}
              className="block font-light"
            >
              <span className="text-gold">seriøse ambitioner</span>
              <span className="text-white">, de få</span>
            </span>

            {/* Line 5 */}
            <span
              style={{
                opacity: shouldReduceMotion ? 0.7 : line5Opacity,
                transition: 'opacity 0.3s ease-out'
              }}
              className="block font-light text-white"
            >
              udvalgte hvis tilstedeværelse
            </span>

            {/* Line 6 - "styrker helheden." */}
            <span
              style={{
                opacity: shouldReduceMotion ? 1 : line6Opacity,
                transition: 'opacity 0.3s ease-out'
              }}
              className="block font-light text-white"
            >
              styrker helheden.
            </span>
          </h2>

          {/* Subtle divider */}
          <div
            style={{
              transform: `scaleX(${shouldReduceMotion ? 1 : Math.max(0, Math.min(1, (scrollProgress - 0.85) * 7))})`,
              transition: 'transform 0.3s ease-out',
              transformOrigin: 'left'
            }}
            className="w-24 h-px bg-gold mt-12 mb-8"
          />

          {/* Subtext */}
          <p
            style={{
              opacity: shouldReduceMotion ? 0.9 : subtextOpacity,
              transition: 'opacity 0.3s ease-out'
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl font-light leading-relaxed text-white/90"
          >
            Vi arbejder kun med virksomheder, der forstår værdien af
            exceptionelt design og er klar til at investere i deres digitale fremtid.
          </p>
        </div>
      </div>

      {/* Scroll indicator - shows when locked */}
      {isLocked && scrollProgress < 0.9 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm"
        >
          <div className="flex flex-col items-center gap-2">
            <span>Scroll to reveal</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to top, rgb(17, 24, 39) 0%, transparent 100%)',
        }}
      />
      </div>
    </section>
  )
}