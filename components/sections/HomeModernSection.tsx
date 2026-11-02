'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HomeModernSection() {
  const t = useTranslations('homeModern')
  const shouldReduceMotion = useReducedMotion()
  const fade = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' as const },
  }
  const benefits = [0, 1, 2, 3].map((i) => ({
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`),
  }))
  const strengths = [0, 1, 2].map((i) => t(`strengths.${i}`))

  return (
    <section className="bg-white px-6 md:px-12 py-20 md:py-32 border-t border-black/[0.05]">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 lg:gap-24">
        <motion.div {...fade}>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-black/55 mb-5">{t('overline')}</span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight text-black mb-10">
            {t('headingLine1')}
            <br />
            {t('headingLine2')}
          </h2>
          <ol className="border-t border-black/10">
            {benefits.map((b, i) => (
              <li key={b.title} className="flex gap-6 py-6 border-b border-black/10">
                <span className="text-[13px] font-semibold text-gold-dark min-w-6">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-1.5">{b.title}</h3>
                  <p className="text-black/65 leading-relaxed">{b.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        <motion.div {...fade} className="flex flex-col gap-6 lg:pt-2">
          <div className="bg-black text-white p-8 md:p-11">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-gold mb-5">{t('notSameOverline')}</span>
            <h3 className="text-2xl md:text-[1.65rem] font-bold leading-tight tracking-tight mb-4">{t('notSameHeading')}</h3>
            <p className="text-white/70 leading-relaxed mb-6">{t('notSameText')}</p>
            <ul className="space-y-3 text-white/85">
              {strengths.map((s) => (
                <li key={s} className="flex gap-3 items-baseline">
                  <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 translate-y-[-2px]" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-black/10 bg-[#faf8f5] p-7 md:p-8">
            <h3 className="text-[17px] font-semibold text-black mb-2.5">{t('wpHeading')}</h3>
            <p className="text-black/70 leading-relaxed">{t('wpText')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
