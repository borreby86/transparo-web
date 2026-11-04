'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useDesignProposal } from '@/components/ui/DesignProposalContext'

export function HomeProposalSection() {
  const t = useTranslations('homeProposal')
  const shouldReduceMotion = useReducedMotion()
  const { open } = useDesignProposal()
  const fade = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' as const },
  }

  return (
    <section id="designforslag" className="bg-[#ece6e2] px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fade} className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 lg:gap-24 items-end">
          <div>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">{t('overline')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-black">
              {t('headingLine1')}
              <br />
              <span className="text-black/40">{t('headingLine2')}</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg leading-relaxed text-black/70 mb-7">{t('text')}</p>
            <button
              type="button"
              onClick={open}
              className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 text-[15px] font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
            >
              {t('cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
