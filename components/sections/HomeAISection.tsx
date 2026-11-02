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

        <div className="grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-start">
          <motion.p {...fade} className="text-xl md:text-2xl lg:text-[1.75rem] leading-[1.45] text-black/80">
            {t('lead')}
          </motion.p>

          <motion.figure {...fade} className="flex gap-5 items-start max-w-md">
            <Image
              src="/images/team/christina.jpg"
              alt={t('name')}
              width={88}
              height={88}
              className="w-[88px] h-[88px] rounded-full object-cover grayscale shrink-0"
            />
            <div>
              <blockquote className="text-black/75 leading-relaxed mb-4">“{t('quote')}”</blockquote>
              <figcaption className="text-sm font-semibold text-black">
                {t('name')} <span className="font-normal text-black/60">· {t('role')}</span>
              </figcaption>
              <Link
                href="/om-os"
                className="inline-block mt-3 text-sm font-semibold text-black border-b border-black/30 pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
              >
                {t('aboutLink')} →
              </Link>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
