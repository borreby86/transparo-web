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

        {/* Steps - Apple style: minimal, big typography, lots of whitespace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group relative"
            >
              {/* Giant number as design element */}
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[96px] md:text-[128px] font-bold leading-none tracking-tighter bg-gradient-to-b from-gold via-gold/80 to-gold/40 bg-clip-text text-transparent select-none">
                  {step.label}
                </span>

                {/* Subtle connecting line - only on desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    style={{
                      background: 'linear-gradient(90deg, rgba(184,146,69,0.4), transparent)',
                      transformOrigin: 'left'
                    }}
                  />
                )}
              </motion.div>

              {/* Content */}
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-tight mb-3">
                {step.title}
              </h3>
              <p className="text-white/50 text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
