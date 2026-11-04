'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HomeAISection() {
  const t = useTranslations('homeAI')
  const shouldReduceMotion = useReducedMotion()
  const fade = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' as const },
  }

  return (
    <section className="bg-[#f7f5f2] px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
        <motion.div {...fade} className="lg:col-span-6">
          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">
            {t('overline')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.06] tracking-tight text-black">
            {t('headingLine1')}
            <br />
            <span className="text-black/40">{t('headingLine2')}</span>
          </h2>
        </motion.div>

        <motion.div {...fade} className="lg:col-span-6 space-y-6 lg:pt-10">
          {[0, 1, 2, 3].map((i) => (
            <p key={i} className="text-lg md:text-xl leading-relaxed text-black/75">
              {t(`body.${i}`)}
            </p>
          ))}
          <Link
            href="/om-os"
            className="inline-block text-sm font-semibold text-black border-b border-black/30 pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
          >
            {t('aboutLink')} →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
