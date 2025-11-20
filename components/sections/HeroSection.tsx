'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect, useTransition } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Image from 'next/image'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const [isPending, startTransition] = useTransition()

  // Animation timing
  const mainWord = "transparo."

  // State management
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLoader, setShowLoader] = useState(true)
  const [showHeroContent, setShowHeroContent] = useState(false)

  // Typewriter effect for "transparo."
  useEffect(() => {
    if (currentIndex < mainWord.length && !shouldReduceMotion) {
      const timeout = setTimeout(() => {
        startTransition(() => {
          setDisplayedText(prev => prev + mainWord[currentIndex])
          setCurrentIndex(prev => prev + 1)
        })
      }, 100)
      return () => clearTimeout(timeout)
    } else if (shouldReduceMotion && currentIndex === 0) {
      // Show all text immediately if reduced motion
      setDisplayedText(mainWord)
      setCurrentIndex(mainWord.length)
    }
  }, [currentIndex, mainWord, shouldReduceMotion])

  // After typewriter completes, wait 500ms then fade out loader and show hero
  useEffect(() => {
    if (currentIndex >= mainWord.length) {
      const hideTimeout = setTimeout(() => {
        setShowLoader(false)
        // Small delay before showing hero content
        setTimeout(() => {
          setShowHeroContent(true)
        }, 300)
      }, shouldReduceMotion ? 0 : 500)
      return () => clearTimeout(hideTimeout)
    }
  }, [currentIndex, mainWord.length, shouldReduceMotion])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Hero img.jpg"
          alt="Transparo workspace"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
        {/* Subtle color overlay for brand consistency */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/30 via-transparent to-gold/10" />
      </div>

      {/* Animated gradient orbs - subtle on top of image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.06, 0.04],
            x: [0, -30, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-navy/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Loading Animation - "transparo." */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="absolute inset-0 z-20 bg-white flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeInOut" }}
          >
            <motion.h1
              className="font-display font-black text-black leading-[0.85] tracking-tighter"
              style={{
                fontSize: 'clamp(3rem, 12vw, 16rem)',
                letterSpacing: '-0.04em',
              }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.2,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {displayedText}
              {currentIndex < mainWord.length && !shouldReduceMotion && (
                <span className="text-gold animate-pulse">|</span>
              )}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content */}
      <AnimatePresence>
        {showHeroContent && (
          <motion.div
            className="relative z-10 w-full flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut" }}
          >
            <div className="w-full max-w-[1800px] mx-auto text-center">
              {/* Main Headline */}
              <motion.div
                className="mb-6 md:mb-8"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] max-w-6xl mx-auto">
                  <span className="text-white drop-shadow-2xl">
                    Professionelle websites der konverterer.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent drop-shadow-2xl">
                    Klare priser. Fast timing.
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                className="mb-12 md:mb-16"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className="relative max-w-4xl mx-auto">
                  {/* Decorative accent */}
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold to-transparent opacity-50" />
                  <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-gold to-transparent opacity-50" />

                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-medium px-4 drop-shadow-lg">
                    High-end webdesign bygget på fuld transparens. <span className="text-gold font-semibold">Ingen skjulte omkostninger,</span> <span className="text-gold font-semibold">ingen scope creep,</span> <span className="text-gold font-semibold">ingen bullshit.</span> Kun resultater du kan måle.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <motion.a
                  href="/kontakt"
                  className="group relative px-10 py-5 bg-gradient-to-r from-gold via-gold-light to-gold text-navy rounded-full font-bold text-lg overflow-hidden shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  <span className="relative z-10">Book et uforpligtende møde</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <motion.a
                  href="/cases"
                  className="group relative px-10 py-5 bg-white border-2 border-white text-navy rounded-full font-bold text-lg hover:bg-navy hover:border-navy hover:text-white hover:shadow-lg hover:shadow-navy/30 transition-all duration-300"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  <span className="relative z-10">Se portfolio</span>
                </motion.a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 1,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-xs uppercase tracking-wider text-white/60 font-semibold">Scroll</span>
                  <div className="w-[2px] h-12 bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
