'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Sparkles, Zap, Rocket, Check, ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

const stepIcons = [Sparkles, Zap, Rocket]

const stepColors = [
  { color: 'gold', gradient: 'from-gold/20 to-transparent' },
  { color: 'navy', gradient: 'from-navy/20 to-transparent' },
  { color: 'black', gradient: 'from-black/20 to-transparent' },
]

export function ProcessTimelineSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('processTimeline')

  const detailedSteps = t.raw('detailedSteps') as Array<{
    title: string
    description: string
    details: string[]
    duration: string
  }>

  const stepNumbers = ['01', '02', '03']

  return (
    <section ref={sectionRef} className="relative bg-offwhite py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-navy blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-12 sm:mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-navy mb-4 sm:mb-6">
            {t('sectionHeading')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 max-w-3xl mx-auto">
            {t('sectionSubheading')}
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Vertical line connector */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent hidden md:block" />

        {/* Steps */}
        <div className="space-y-24">
          {detailedSteps.map((step, index) => {
            const Icon = stepIcons[index]
            const stepColor = stepColors[index]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={stepNumbers[index]}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.2,
                  delay: shouldReduceMotion ? 0 : index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  isEven ? '' : 'md:text-right'
                }`}
              >
                {/* Content */}
                <motion.div
                  className={`${isEven ? 'md:order-1' : 'md:order-2 md:text-left'}`}
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    {/* Step number - large background */}
                    <span className="absolute -top-6 sm:-top-8 -left-2 sm:-left-4 font-display text-[50px] sm:text-[70px] md:text-[100px] lg:text-[140px] font-black text-black/5 select-none">
                      {stepNumbers[index]}
                    </span>

                    {/* Content card */}
                    <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-black/5">
                      {/* Icon */}
                      <motion.div
                        className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4 sm:mb-6"
                        style={{
                          backgroundColor: stepColor.color === 'gold' ? '#B89245' :
                                         stepColor.color === 'navy' ? '#000000' : '#1A1A1A'
                        }}
                        whileHover={{ rotate: shouldReduceMotion ? 0 : 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="font-display text-3xl md:text-4xl font-black text-navy mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-black/70 mb-6">
                        {step.description}
                      </p>

                      {/* Details list */}
                      <ul className="space-y-3 mb-6">
                        {step.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <Check
                              className="w-5 h-5 shrink-0"
                              style={{
                                color: stepColor.color === 'gold' ? '#B89245' :
                                       stepColor.color === 'navy' ? '#000000' : '#1A1A1A'
                              }}
                              strokeWidth={2.5}
                            />
                            <span className="text-black/80">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Duration badge */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-offwhite rounded-full">
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="text-sm font-semibold text-black/60">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Visual element */}
                <motion.div
                  className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}
                  initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.4,
                    delay: shouldReduceMotion ? 0 : index * 0.2 + 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="relative mx-auto w-full max-w-sm">
                    {/* Animated background circle */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-3xl opacity-20"
                      style={{
                        background: stepColor.color === 'gold' ? '#B89245' :
                                   stepColor.color === 'navy' ? '#000000' : '#1A1A1A'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />

                    {/* Main circle */}
                    <div
                      className="relative aspect-square rounded-full flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${
                          stepColor.color === 'gold' ? '#B89245' :
                          stepColor.color === 'navy' ? '#000000' : '#1A1A1A'
                        } 0%, ${
                          stepColor.color === 'gold' ? '#D4A853' :
                          stepColor.color === 'navy' ? '#1A2B4D' : '#2A2A2A'
                        } 100%)`
                      }}
                    >
                      <Icon className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 text-white/10" strokeWidth={1} />
                    </div>

                    {/* Connection dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 hidden md:block"
                      style={{
                        [isEven ? 'right' : 'left']: '-48px'
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-white border-2 border-black/20" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Arrow to next (except last) */}
                {index < detailedSteps.length - 1 && (
                  <motion.div
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  >
                    <ArrowDown className="w-8 h-8 text-black/20" strokeWidth={1.5} />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="text-center mt-20"
      >
        <motion.p
          className="text-lg text-black/60 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.0,
            delay: shouldReduceMotion ? 0 : 0.2
          }}
        >
          {t('ctaText')}
        </motion.p>
        <motion.button
          whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
          whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-bold text-lg hover:bg-navy/90 transition-colors"
        >
          {t('ctaButton')}
          <Rocket className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}
