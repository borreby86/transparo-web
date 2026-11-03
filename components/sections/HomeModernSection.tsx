'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { KeyRound, Code2, Search, Camera, Users, ShieldCheck, Check } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const ICONS = [KeyRound, Code2, Search, Camera, Users, ShieldCheck]

export function HomeModernSection() {
  const t = useTranslations('homeModern')
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : delay, ease: 'easeOut' as const },
  })
  const benefits = ICONS.map((Icon, i) => ({
    Icon,
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`),
    details: [0, 1, 2].map((j) => t(`benefits.${i}.details.${j}`)),
  }))

  return (
    <section className="bg-black text-white px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-14 lg:gap-16">
        <motion.div {...reveal()} className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold mb-6">{t('overline')}</span>
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.06] tracking-tight text-white mb-6">
            {t('headingLine1')}
            <br />
            <span className="text-white/40">{t('headingLine2')}</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-10">{t('intro')}</p>
          <div className="rounded-2xl border border-gold/30 bg-white/[0.04] p-7 md:p-8">
            <h3 className="text-[17px] font-semibold text-white mb-2.5">{t('wpHeading')}</h3>
            <p className="text-white/65 leading-relaxed">{t('wpText')}</p>
          </div>
        </motion.div>

        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-14">
          {benefits.map(({ Icon, title, description, details }, i) => (
            <motion.div key={title} {...reveal((i % 2) * 0.1)} className="border-t border-white/15 pt-8">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-gold/40 text-gold mb-6">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight mb-3">{title}</h3>
              <p className="text-white/65 leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2.5">
                {details.map((d) => (
                  <li key={d} className="flex gap-3 text-sm text-white/80 leading-snug">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
