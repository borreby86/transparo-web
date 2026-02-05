'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'

export function PremiumProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('processTimeline')

  const steps = [
    {
      label: '01',
      title: 'Indledende møde',
      description: 'Vi starter med en uforpligtende snak om dit projekt, dine mål og ønsker.'
    },
    {
      label: '02',
      title: 'Første udkast',
      description: 'Inden for 5 hverdage modtager du et konkret designforslag til din forside.'
    },
    {
      label: '03',
      title: 'Tilpasninger',
      description: 'Vi finpudser designet baseret på din feedback indtil du er 100% tilfreds.'
    },
    {
      label: '04',
      title: 'Lancering',
      description: 'Dit færdige website går live, og du får fuld adgang til alt.'
    },
  ]

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
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

        {/* Steps with circles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Circle with label */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-8 group-hover:border-gold/30 group-hover:bg-gold/[0.05] transition-all duration-500"
              >
                <span className="text-gold text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                  {step.label}
                </span>
              </motion.div>

              {/* Connecting line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[calc(50%+56px)] w-[calc(100%-112px)] h-px bg-gradient-to-r from-white/10 via-gold/20 to-white/10" />
              )}

              <h3 className="text-white font-semibold text-lg tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
