'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useDesignProposal } from '@/components/ui/DesignProposalContext'
import { ArrowRight } from 'lucide-react'

export function FinalCTASection() {
  const t = useTranslations('finalCTA')
  const shouldReduceMotion = useReducedMotion()
  const { open: openDesignProposal } = useDesignProposal()

  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-black">
      <div className="max-w-[1000px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
            {t('label')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            {t('heading')}
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
            {t('body')}
          </p>

          <motion.button
            onClick={openDesignProposal}
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 font-bold text-sm uppercase tracking-[0.15em] hover:bg-gold/90 transition-colors"
          >
            {t('ctaButton')}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
