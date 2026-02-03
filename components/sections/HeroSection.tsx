'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Image from 'next/image'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-optimized.webp"
          alt="Transparo workspace"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-6 sm:px-8 md:px-12">
        <div className="w-full max-w-[1400px] mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="text-white">
                Vi designer websites
              </span>
              <br />
              <span className="text-white/60">
                du kan stå inde for.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/50 leading-relaxed max-w-2xl mx-auto">
              Fast pris. Tydelig proces. Ingen overraskelser.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.a
              href="/cases"
              className="inline-block px-10 py-4 bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors duration-300"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              Se portfolio
            </motion.a>
            <motion.a
              href="/prisberegner"
              className="inline-block px-10 py-4 border border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-colors duration-300"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              Beregn din pris
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 1 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
