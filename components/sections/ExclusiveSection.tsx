'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function ExclusiveSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-triggered animation with sticky behavior
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Create transforms for progressive text reveal - much more gradual
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.15], [0.15, 1])       // "Det er ikke for alle."
  const textOpacity2 = useTransform(scrollYProgress, [0.1, 0.25], [0.15, 0.7])   // "Vi identificerer..."
  const textOpacity3 = useTransform(scrollYProgress, [0.2, 0.35], [0.15, 0.7])   // "ekstraordinære..."
  const textOpacity4 = useTransform(scrollYProgress, [0.3, 0.45], [0.15, 1])     // "seriøse ambitioner, de få"
  const textOpacity5 = useTransform(scrollYProgress, [0.4, 0.55], [0.15, 0.7])   // "udvalgte hvis tilstedeværelse"
  const textOpacity6 = useTransform(scrollYProgress, [0.5, 0.65], [0.15, 1])     // "styrker helheden"
  const textOpacity7 = useTransform(scrollYProgress, [0.65, 0.8], [0.1, 0.9])    // Subtext

  // Gold accent color transform
  const goldColorProgress = useTransform(scrollYProgress, [0.3, 0.45], [0, 1])

  return (
    // Wrapper container for scroll height - creates the scroll area
    <div
      ref={containerRef}
      className="relative w-full min-h-screen"
      style={{ height: '300vh', minHeight: '300vh' }}
    >
      {/* Sticky section that stays in view during scroll */}
      <div
        ref={sectionRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden z-10"
        style={{ position: 'sticky', top: 0 }}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
          <div>
          {/* Main text with scroll-triggered color reveals */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
            {/* Line 1 - "Det er ikke for alle." - White text that lights up */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 1 : textOpacity1,
                color: shouldReduceMotion ? 'white' : useTransform(
                  textOpacity1,
                  [0.15, 1],
                  ['rgba(255,255,255,0.15)', 'rgba(255,255,255,1)']
                ),
              }}
              className="block font-light mb-4"
            >
              Det er ikke for alle.
            </motion.span>

            {/* Line 2 - Gray text that lights up */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 0.6 : textOpacity2,
                color: shouldReduceMotion ? 'rgba(255,255,255,0.6)' : useTransform(
                  textOpacity2,
                  [0.15, 0.6],
                  ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.6)']
                ),
              }}
              className="block font-light"
            >
              Vi identificerer og samarbejder med
            </motion.span>

            {/* Line 3 - Gray text that lights up */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 0.6 : textOpacity3,
                color: shouldReduceMotion ? 'rgba(255,255,255,0.6)' : useTransform(
                  textOpacity3,
                  [0.15, 0.6],
                  ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.6)']
                ),
              }}
              className="block font-light"
            >
              ekstraordinære virksomheder med
            </motion.span>

            {/* Line 4 - Contains gold accent that lights up progressively */}
            <motion.span
              className="block font-light"
            >
              <motion.span
                style={{
                  color: shouldReduceMotion ? '#B89245' : useTransform(
                    goldColorProgress,
                    [0, 1],
                    ['rgba(100,100,100,0.3)', '#B89245']
                  ),
                  opacity: shouldReduceMotion ? 1 : textOpacity4,
                }}
                className="inline"
              >
                seriøse ambitioner
              </motion.span>
              <motion.span
                style={{
                  opacity: shouldReduceMotion ? 0.6 : textOpacity4,
                  color: shouldReduceMotion ? 'rgba(255,255,255,0.6)' : useTransform(
                    textOpacity4,
                    [0.15, 1],
                    ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.6)']
                  ),
                }}
                className="inline"
              >
                , de få
              </motion.span>
            </motion.span>

            {/* Line 5 - Gray text that lights up */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 0.6 : textOpacity5,
                color: shouldReduceMotion ? 'rgba(255,255,255,0.6)' : useTransform(
                  textOpacity5,
                  [0.15, 0.6],
                  ['rgba(255,255,255,0.15)', 'rgba(255,255,255,0.6)']
                ),
              }}
              className="block font-light"
            >
              udvalgte hvis tilstedeværelse
            </motion.span>

            {/* Line 6 - "styrker helheden." - White text that lights up last */}
            <motion.span
              style={{
                opacity: shouldReduceMotion ? 1 : textOpacity6,
                color: shouldReduceMotion ? 'white' : useTransform(
                  textOpacity6,
                  [0.15, 1],
                  ['rgba(255,255,255,0.15)', 'rgba(255,255,255,1)']
                ),
              }}
              className="block font-light"
            >
              styrker helheden.
            </motion.span>
          </h2>

          {/* Subtle divider - also scroll triggered */}
          <motion.div
            style={{
              scaleX: shouldReduceMotion ? 1 : useTransform(scrollYProgress, [0.63, 0.68], [0, 1]),
              opacity: shouldReduceMotion ? 0.3 : useTransform(scrollYProgress, [0.63, 0.68], [0, 0.3]),
            }}
            className="w-24 h-px bg-gold mt-12 mb-8 origin-left"
          />

          {/* Subtext - also scroll triggered */}
          <motion.p
            style={{
              opacity: shouldReduceMotion ? 0.85 : textOpacity7,
              color: shouldReduceMotion ? 'rgba(255,255,255,0.85)' : useTransform(
                textOpacity7,
                [0.1, 0.85],
                ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.85)']
              ),
            }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl font-light leading-relaxed"
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
          background: 'linear-gradient(to top, #030712 0%, transparent 100%)',
        }}
      />
    </div>
    </div>
  )
}