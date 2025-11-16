'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'

export function ExclusiveSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32"
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
          {/* Main text with simple fade-in animations */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
            {/* Line 1 - "Det er ikke for alle." */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              className="block font-light mb-4 text-white"
            >
              Det er ikke for alle.
            </motion.span>

            {/* Line 2 */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="block font-light text-white/70"
            >
              Vi identificerer og samarbejder med
            </motion.span>

            {/* Line 3 */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block font-light text-white/70"
            >
              ekstraordinære virksomheder med
            </motion.span>

            {/* Line 4 - Contains gold accent */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block font-light"
            >
              <span className="text-gold">seriøse ambitioner</span>
              <span className="text-white/70">, de få</span>
            </motion.span>

            {/* Line 5 */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block font-light text-white/70"
            >
              udvalgte hvis tilstedeværelse
            </motion.span>

            {/* Line 6 - "styrker helheden." */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block font-light text-white"
            >
              styrker helheden.
            </motion.span>
          </h2>

          {/* Subtle divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-px bg-gold mt-12 mb-8 origin-left"
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
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
          background: 'linear-gradient(to top, #030712 0%, transparent 100%)',
        }}
      />
    </section>
  )
}