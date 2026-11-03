'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HomeModernSection() {
  const t = useTranslations('homeModern')
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : delay, ease: 'easeOut' as const },
  })
  const benefits = [0, 1, 2, 3].map((i) => ({
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`),
  }))

  return (
    <section className="bg-black text-white px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16">
        <motion.div {...reveal()} className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold mb-6">{t('overline')}</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.06] tracking-tight text-white mb-10">
            {t('headingLine1')}
            <br />
            <span className="text-white/40">{t('headingLine2')}</span>
          </h2>
          <div className="rounded-2xl border border-gold/30 bg-white/[0.04] p-7 md:p-8">
            <h3 className="text-[17px] font-semibold text-white mb-2.5">{t('wpHeading')}</h3>
            <p className="text-white/65 leading-relaxed">{t('wpText')}</p>
          </div>
        </motion.div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-14 md:gap-y-16">
          {benefits.map((b, i) => (
            <motion.div key={b.title} {...reveal((i % 2) * 0.1)} className="border-t border-white/15 pt-8">
              <span className="block text-6xl md:text-7xl font-bold leading-none tracking-tighter mb-6 bg-gradient-to-b from-gold via-gold/80 to-gold/40 bg-clip-text text-transparent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-bold text-white leading-tight mb-3">{b.title}</h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
