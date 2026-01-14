'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function WorkshopsHeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-navy overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gold/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] bg-white/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-20 flex-1 flex flex-col justify-center pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="text-center">

            {/* Gold label */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="mb-10 md:mb-12"
            >
              <span className="inline-block text-gold text-sm font-bold uppercase tracking-[0.3em]">
                Kursus / 1 dag / 6.500 kr.
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.2,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="font-display leading-[0.95] tracking-[-0.03em] mb-10 md:mb-12"
            >
              <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4">
                En hjemmeside der rangerer.
              </span>
              <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Til en pris der giver mening.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-white/70 font-medium leading-relaxed mb-14"
            >
              Lær at bygge en professionel, SEO-optimeret hjemmeside med samme teknologi som bureauerne tager 25-40.000 kr. for – og betal en brøkdel.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1,
                delay: shouldReduceMotion ? 0 : 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.a
                href="#tilmeld"
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold text-navy rounded-full font-bold text-lg overflow-hidden shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                <span className="relative z-10">Tilmeld dig kurset</span>
                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          delay: shouldReduceMotion ? 0 : 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold">Scroll</span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
