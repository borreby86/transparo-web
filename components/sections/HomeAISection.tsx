'use client'

import Image from 'next/image'
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
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fade}>
          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">
            {t('overline')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-black max-w-5xl mb-10">
            {t('headingLine1')}
            <br />
            <span className="text-black/40">{t('headingLine2')}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.p {...fade} className="lg:col-span-7 text-xl md:text-2xl lg:text-[1.75rem] leading-[1.45] text-black/80">
            {t('lead')}
          </motion.p>

          <motion.figure
            {...fade}
            className="lg:col-span-5 rounded-2xl bg-white border border-black/[0.06] p-6 md:p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-20 shrink-0 overflow-hidden rounded-lg">
                <Image src="/images/team/christina.jpg" alt={t('name')} fill className="object-cover grayscale" sizes="64px" />
              </div>
              <figcaption>
                <span className="block font-semibold text-black">{t('name')}</span>
                <span className="block text-xs font-medium uppercase tracking-[0.15em] text-gold-dark mt-1">{t('role')}</span>
              </figcaption>
            </div>
            <blockquote className="text-base md:text-lg text-black/75 leading-relaxed">“{t('quote')}”</blockquote>
            <Link
              href="/om-os"
              className="inline-block mt-6 text-sm font-semibold text-black border-b border-black/30 pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
            >
              {t('aboutLink')} →
            </Link>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
