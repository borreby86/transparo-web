'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'

export function CTASection() {
  const shouldReduceMotion = useReducedMotion()

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: "easeOut" as const
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#c9a961]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-950/40" />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Centered content */}
      <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={shouldReduceMotion ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Overline */}
          <motion.p
            variants={fadeInVariants}
            transition={transition}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-gray-400 font-light"
          >
            Klar til at transformere din virksomhed?
          </motion.p>

          {/* Main heading - Centered, elegant serif-style */}
          <motion.h2
            variants={fadeInVariants}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight italic"
          >
            Din digitale
            <br />
            <span className="text-[#c9a961]">succes</span> starter
            <br />
            her
          </motion.h2>

          {/* CTA Button - Bordered style */}
          <motion.div
            variants={fadeInVariants}
            transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="pt-6"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-12 py-4 text-sm md:text-base tracking-[0.2em] uppercase font-medium text-[#c9a961] bg-transparent border-2 border-[#c9a961] rounded-none hover:bg-[#c9a961] hover:text-gray-950 transition-all duration-300"
              >
                Book et møde
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
