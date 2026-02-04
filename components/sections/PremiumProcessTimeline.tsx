'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function PremiumProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('processTimeline')

  const steps = [
    { number: t('steps.0.number'), title: t('steps.0.title'), description: t('steps.0.description') },
    { number: t('steps.1.number'), title: t('steps.1.title'), description: t('steps.1.description') },
    { number: t('steps.2.number'), title: t('steps.2.title'), description: t('steps.2.description') },
    { number: t('steps.3.number'), title: t('steps.3.title'), description: t('steps.3.description') },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-section background image */}
      <Image
        src="/images/workspace-dennis.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
            {t('overline')}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            {t('headingLine1')}
            <br />
            <span className="text-white/40">{t('headingLine2')}</span>
          </h2>
        </motion.div>

        {/* Horizontal steps */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.08 }}
              className="group relative p-8 md:p-10 border-r border-b border-white/[0.06] last:border-r-0 md:[&:nth-child(n+3)]:border-b-0 hover:bg-white/[0.03] transition-all duration-500"
            >
              {/* Gold accent line */}
              <div className="w-8 h-[2px] bg-gold/40 mb-8 group-hover:w-12 group-hover:bg-gold transition-all duration-500" />

              <span className="text-gold/25 text-5xl md:text-6xl font-bold absolute top-6 right-6 select-none group-hover:text-gold/40 transition-colors duration-500">
                {step.number}
              </span>

              <h3 className="text-white font-semibold text-lg tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
