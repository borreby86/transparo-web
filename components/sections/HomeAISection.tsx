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

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div {...fade} className="lg:col-span-5 relative max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/team/christina.jpg"
                alt={t('name')}
                fill
                className="object-cover grayscale"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
            <span
              aria-hidden="true"
              className="hidden md:block absolute -bottom-8 -right-6 lg:-right-10 text-[140px] lg:text-[180px] font-bold leading-none tracking-tighter bg-gradient-to-b from-gold via-gold/80 to-gold/30 bg-clip-text text-transparent select-none"
            >
              10+
            </span>
          </motion.div>

          <div className="lg:col-span-7 lg:pl-8">
            <motion.p {...fade} className="text-xl md:text-2xl lg:text-[1.75rem] leading-[1.45] text-black/80 mb-12">
              {t('lead')}
            </motion.p>
            <motion.figure {...fade} className="border-l-2 border-gold pl-6 md:pl-8">
              <blockquote className="text-lg md:text-xl text-black/75 leading-relaxed mb-5">“{t('quote')}”</blockquote>
              <figcaption className="text-sm font-semibold text-black">
                {t('name')} <span className="font-normal text-black/60">· {t('role')}</span>
              </figcaption>
              <Link
                href="/om-os"
                className="inline-block mt-4 text-sm font-semibold text-black border-b border-black/30 pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
              >
                {t('aboutLink')} →
              </Link>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  )
}
