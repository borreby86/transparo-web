'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { CaseShowcase } from '@/components/sections/CaseShowcase'
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
    <section className="relative overflow-hidden bg-[#faf9f6]">
      {/* Loader: "transparo." typewriter */}
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

      {/* Black hero – same format as the case pages, kept compact so the cases are visible straight away */}
      <div className="relative bg-black px-6 md:px-12 pt-28 pb-8 md:pt-32 md:pb-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 lg:gap-16 lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={showHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.15em] text-gold block mb-4"
            >
              {t('overline')}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={showHero ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-white">{t('headlinePart1')}</span>
              <br />
              <span className="text-white">{t('headlinePart2')}</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-6">{t('subtitle')}</p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={openDesignProposal}
                className="inline-block px-6 py-3 bg-gold text-black text-sm font-semibold hover:bg-gold/90 transition-colors duration-300"
              >
                {t('ctaDesignProposal')}
              </button>
              <Link
                href="/cases"
                className="inline-block px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors duration-300"
              >
                {t('ctaPortfolio')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cases are the hero's main message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showHero ? { opacity: 1 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.3 }}
      >
        <CaseShowcase />
      </motion.div>
    </section>
  )
}
