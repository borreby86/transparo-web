'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useDesignProposal } from '@/components/ui/DesignProposalContext'

export function HeroSection() {
  const t = useTranslations('hero')
  const shouldReduceMotion = useReducedMotion()
  const { open: openDesignProposal } = useDesignProposal()
  const word = 'transparo.'
  const hasSeenLoader = typeof window !== 'undefined' && sessionStorage.getItem('transparo_loader_seen') === 'true'
  const [displayedText, setDisplayedText] = useState(hasSeenLoader ? word : '')
  const [charIndex, setCharIndex] = useState(hasSeenLoader ? word.length : 0)
  const [showLoader, setShowLoader] = useState(!hasSeenLoader)
  const [showHero, setShowHero] = useState(hasSeenLoader)

  // Typewriter
  useEffect(() => {
    if (hasSeenLoader) return

    if (shouldReduceMotion) {
      setDisplayedText(word)
      setCharIndex(word.length)
      return
    }

    if (charIndex < word.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(word.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 120)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, shouldReduceMotion, word, hasSeenLoader])

  // After typing, fade out loader → show hero
  useEffect(() => {
    if (hasSeenLoader) return

    if (charIndex >= word.length) {
      const timeout = setTimeout(() => {
        setShowLoader(false)
        sessionStorage.setItem('transparo_loader_seen', 'true')
        setTimeout(() => setShowHero(true), 200)
      }, shouldReduceMotion ? 0 : 600)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, shouldReduceMotion, word.length, hasSeenLoader])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/unsplash/why-us-3.webp"
          alt="Transparo workspace"
          fill
          className="object-cover"
          priority
          quality={80}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/60" />
      </div>

      {/* Loader: "transparo." typewriter on black */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight">
              {displayedText.slice(0, -1)}
              <span className="text-gold">
                {displayedText.endsWith('.') ? '.' : ''}
              </span>
              <motion.span
                className="inline-block w-[3px] h-14 sm:h-16 md:h-20 lg:h-24 bg-gold ml-2 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
              />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-6 sm:px-8 md:px-12">
        <div className="w-full max-w-[1400px] mx-auto text-center">
          {/* Gold Overline */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mb-8"
          >
            <span className="text-gold text-xs font-medium uppercase tracking-[0.3em]">
              {t('overline')}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-[-0.02em]">
              <span className="text-white">
                {t('headlinePart1')}
              </span>
              <br />
              <span className="text-gold">
                {t('headlinePart2')}
              </span>
            </h1>
          </motion.div>

          {/* Gold accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={showHero ? { scaleX: 1, opacity: 1 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="w-16 h-[2px] bg-gold mx-auto mb-10 md:mb-14"
          />

          {/* Subtitle - simplified */}
          <motion.div
            className="mb-14 md:mb-18"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.25,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-white/60 leading-relaxed max-w-xl mx-auto font-light tracking-wide">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link
                href="/prisberegner"
                className="inline-block px-10 py-4 bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors duration-300"
              >
                {t('ctaPriceCalculator')}
              </Link>
            </motion.div>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <Link
                href="/cases"
                className="inline-block px-10 py-4 border border-gold text-gold font-semibold text-lg hover:bg-gold/10 transition-colors duration-300"
              >
                {t('ctaPortfolio')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Free design proposal link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showHero ? { opacity: 1 } : {}}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="mt-8"
          >
            <button
              onClick={openDesignProposal}
              className="text-white/40 hover:text-gold text-sm font-medium transition-colors duration-300 inline-flex items-center gap-2"
            >
              {t('ctaFreeDesign')}
              <span className="text-gold">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={showHero ? { opacity: 1 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.6 }}
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
