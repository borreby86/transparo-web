'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useDesignProposal } from '@/components/ui/DesignProposalContext'

export function FinalCTASection() {
  const t = useTranslations('finalCTA')
  const shouldReduceMotion = useReducedMotion()
  const { open: openDesignProposal } = useDesignProposal()

  return (
    <section className="relative bg-gradient-to-b from-navy-dark via-navy to-black py-32 md:py-40 lg:py-48 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            {t('heading')}
          </h2>

          <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            {t('body')}
          </p>

          <motion.button
            onClick={openDesignProposal}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-block px-10 py-4 bg-white text-black font-semibold text-lg hover:bg-white/90 transition-colors duration-300"
          >
            {t('ctaButton')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
