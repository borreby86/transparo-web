'use client'

import { motion } from 'motion/react'

export function PackagesHeroSection() {
  const appleEase = [0.25, 0.1, 0.25, 1] as const

  return (
    <section className="relative bg-navy min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.03, 0.05, 0.03],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-gold rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[15%] left-[15%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gold/60 rounded-full blur-3xl"
        />
      </div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: appleEase }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-block px-5 py-2 border border-gold/40 text-gold rounded-full text-xs font-bold uppercase tracking-widest">
              Transparente Priser
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8 leading-[1.1] tracking-tight"
          >
            Vælg <span className="text-gold">kvalitet</span>.
            <br />
            Vælg sikkerhed.
            <br />
            Vælg din pakke.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: appleEase }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
          >
            Fast pris. Ingen overraskelser. Garanteret kvalitet. Vi leverer moderne websites der konverterer — til en pris du kan stole på.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: appleEase }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-2">
                3
              </div>
              <div className="text-white/70 text-sm sm:text-base uppercase tracking-wide">
                Pakker at vælge
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-2">
                0%
              </div>
              <div className="text-white/70 text-sm sm:text-base uppercase tracking-wide">
                Scope creep
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-2">
                2-4
              </div>
              <div className="text-white/70 text-sm sm:text-base uppercase tracking-wide">
                Ugers levering
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
