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
  const hasSeenLoader = typeof window !== 'undefined' && sessionStorage.getItem('transparo_loader_seen') === 'true'
  const [showLoader, setShowLoader] = useState(!hasSeenLoader)

  // Startskærm: "transparo." og eyebrow fader blødt ind, står et øjeblik og fader ud til forsiden
  useEffect(() => {
    if (hasSeenLoader) return
    const hold = setTimeout(() => {
      setShowLoader(false)
      sessionStorage.setItem('transparo_loader_seen', 'true')
    }, shouldReduceMotion ? 0 : 2600)
    return () => clearTimeout(hold)
  }, [shouldReduceMotion, hasSeenLoader])

  return (
    <section className="relative overflow-hidden bg-[#faf9f6]">
      {/* Startskærm: blød fade-in af "transparo." med eyebrow */}
      <AnimatePresence>
        {showLoader && (
          <motion.div
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center px-6 text-center"
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: 'easeInOut' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.4, ease: 'easeInOut' }}
              className="font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-black tracking-tight"
            >
              transparo<span className="text-gold">.</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.9, ease: 'easeOut' }}
              className="mt-6 text-[11px] sm:text-xs font-medium uppercase tracking-[0.25em] text-black/55"
            >
              Unique designs – built on trust
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Black hero – same format as the case pages, kept compact so the cases are visible straight away */}
      <div className="relative bg-black px-6 md:px-12 pt-28 pb-8 md:pt-32 md:pb-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10 grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] gap-8 lg:gap-16 lg:items-end">
          <div>
            <span
              className="text-xs font-medium uppercase tracking-[0.15em] text-gold block mb-4"
            >
              {t('overline')}
            </span>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.05] tracking-tight"
            >
              <span className="text-white">{t('headlinePart1')}</span>
              <br />
              <span className="text-gold">{t('headlinePart2')}</span>
            </h1>
          </div>

          <div>
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
          </div>
        </div>
      </div>

      {/* Cases are the hero's main message */}
      <div>
        <CaseShowcase />
      </div>
    </section>
  )
}
