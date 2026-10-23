'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { caseStudies } from '@/data/caseStudies'
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


  const showcase = caseStudies.slice(0, 7)
  // Duplicated so the marquee loops seamlessly
  const loop = [...showcase, ...showcase]

  return (
    <section className="relative min-h-dvh flex flex-col overflow-hidden bg-[#faf9f6]">
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

      {/* Black hero – same format as the case pages */}
      <div className="relative bg-black px-6 md:px-12 pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.span
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="text-xs font-medium uppercase tracking-[0.15em] text-gold block mb-8"
          >
            {t('overline')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 max-w-4xl"
          >
            <span className="text-white">{t('headlinePart1')}</span>
            <br />
            <span className="text-gold">{t('headlinePart2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/cases"
              className="inline-block px-6 py-3 bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors duration-300"
            >
              {t('ctaPortfolio')}
            </Link>
            <button
              onClick={openDesignProposal}
              className="inline-block px-6 py-3 bg-gold text-black text-sm font-semibold hover:bg-gold/90 transition-colors duration-300"
            >
              {t('ctaDesignProposal')}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Cases – drifting collage banner */}
      <motion.div
        className="relative py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={showHero ? { opacity: 1 } : {}}
        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.3 }}
      >
        <div className="flex items-end justify-between px-6 sm:px-8 md:px-12 lg:px-16 mb-6 max-w-[1400px] w-full mx-auto">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-black/40">
            {t('ctaPortfolio')}
          </span>
          <Link
            href="/cases"
            className="text-sm text-black/50 hover:text-gold transition-colors duration-300 inline-flex items-center gap-2"
          >
            {t('ctaPortfolio')} <span className="text-gold">→</span>
          </Link>
        </div>

        <div className="hero-marquee overflow-hidden">
          <div className="hero-marquee-track flex items-center w-max">
            {loop.map((study, i) => {
              const tall = i % 2 === 0
              return (
                <Link
                  key={`${study.slug}-${i}`}
                  href={`/cases/${study.slug}` as '/cases'}
                  aria-hidden={i >= showcase.length ? true : undefined}
                  tabIndex={i >= showcase.length ? -1 : undefined}
                  className="group relative block shrink-0 overflow-hidden bg-black/5 w-[220px] md:w-[300px] mr-4 md:mr-6"
                  style={{ height: tall ? 'clamp(260px, 42dvh, 460px)' : 'clamp(200px, 32dvh, 360px)' }}
                >
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    sizes="300px"
                    className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-xs font-medium tracking-wide">
                      {study.title.split(' – ')[0]}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
