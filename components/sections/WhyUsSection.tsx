'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useTranslations } from 'next-intl'

export function WhyUsSection() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('whyUs')

  const reasons = [
    { number: t('reasons.0.number'), title: t('reasons.0.title'), description: t('reasons.0.description') },
    { number: t('reasons.1.number'), title: t('reasons.1.title'), description: t('reasons.1.description') },
    { number: t('reasons.2.number'), title: t('reasons.2.title'), description: t('reasons.2.description') },
    { number: t('reasons.3.number'), title: t('reasons.3.title'), description: t('reasons.3.description') },
  ]

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-20 md:mb-24 max-w-2xl"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
            {t('overline')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            {t('headingLine1')}
            <br />
            <span className="text-white/40">{t('headingLine2')}</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.1 }}
              className="group relative p-8 md:p-10 border border-white/[0.08] hover:border-white/[0.15] bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-500"
            >
              {/* Number */}
              <span className="text-gold/15 text-6xl md:text-7xl font-bold absolute top-6 right-8 select-none group-hover:text-gold/25 transition-colors duration-500">
                {reason.number}
              </span>

              {/* Gold accent line */}
              <div className="w-10 h-[2px] bg-gold mb-6 group-hover:w-14 transition-all duration-500" />

              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
