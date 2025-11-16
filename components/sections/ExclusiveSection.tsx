'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function ExclusiveSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll progress for the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Text reveal animations - more gradual progression
  const line1Opacity = useTransform(scrollYProgress, [0, 0.14], [0, 1])
  const line2Opacity = useTransform(scrollYProgress, [0.14, 0.28], [0, 0.7])
  const line3Opacity = useTransform(scrollYProgress, [0.28, 0.42], [0, 0.7])
  const line4Opacity = useTransform(scrollYProgress, [0.42, 0.56], [0, 1])
  const line5Opacity = useTransform(scrollYProgress, [0.56, 0.70], [0, 0.7])
  const line6Opacity = useTransform(scrollYProgress, [0.70, 0.84], [0, 1])
  const subtextOpacity = useTransform(scrollYProgress, [0.84, 1], [0, 0.9])

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
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 1 : line1Opacity
              }}
              className="block font-light mb-4 text-white"
            >
              Det er ikke for alle.
            </motion.span>

            {/* Line 2 */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 0.7 : line2Opacity
              }}
              className="block font-light text-white"
            >
              Vi identificerer og samarbejder med
            </motion.span>

            {/* Line 3 */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 0.7 : line3Opacity
              }}
              className="block font-light text-white"
            >
              ekstraordinære virksomheder med
            </motion.span>

            {/* Line 4 - Contains gold accent */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 1 : line4Opacity
              }}
              className="block font-light"
            >
              <span className="text-gold">seriøse ambitioner</span>
              <span className="text-white">, de få</span>
            </motion.span>

            {/* Line 5 */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 0.7 : line5Opacity
              }}
              className="block font-light text-white"
            >
              udvalgte hvis tilstedeværelse
            </motion.span>

            {/* Line 6 - "styrker helheden." */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 1 : line6Opacity
              }}
              className="block font-light text-white"
            >
              styrker helheden.
            </motion.span>
          </h2>

          {/* Subtle divider */}
          <motion.div
            style={{
              scaleX: shouldReduceMotion ? 1 : useTransform(scrollYProgress, [0.65, 0.7], [0, 1])
            }}
            className="w-24 h-px bg-gold mt-12 mb-8 origin-left"
          />

          {/* Subtext */}
          <motion.p
            style={{
              opacity: shouldReduceMotion ? 0.9 : subtextOpacity
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl font-light leading-relaxed text-white/90"
          >
            Vi arbejder kun med virksomheder, der forstår værdien af
            exceptionelt design og er klar til at investere i deres digitale fremtid.
          </motion.p>
        </div>
      </div>

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