'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { Sparkles, Zap, Rocket, Check, ArrowDown } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Kickoff & Discovery',
    description: 'Vi starter med et dybtgående møde for at forstå din vision, mål og målgruppe.',
    details: [
      'Vision & målsætning',
      'Målgruppe analyse',
      'Konkurrent research',
      'Scope definition'
    ],
    icon: Sparkles,
    duration: '3-5 dage',
    color: 'gold',
    gradient: 'from-gold/20 to-transparent'
  },
  {
    number: '02',
    title: 'Design & Wireframes',
    description: 'Vi skaber et unikt design der matcher dit brand og konverterer besøgende.',
    details: [
      'Moodboards & stil',
      'Wireframe layouts',
      'UI/UX design',
      'Responsive design'
    ],
    icon: Zap,
    duration: '5-7 dage',
    color: 'navy',
    gradient: 'from-navy/20 to-transparent'
  },
  {
    number: '03',
    title: 'Udvikling & Launch',
    description: 'Din hjemmeside bygges med moderne teknologi og lanceres professionelt.',
    details: [
      'Next.js udvikling',
      'Payload CMS setup',
      'Performance optimering',
      'Launch & support'
    ],
    icon: Rocket,
    duration: '7-10 dage',
    color: 'black',
    gradient: 'from-black/20 to-transparent'
  }
]

export function ProcessTimelineSection() {
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="relative bg-offwhite py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-navy blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-12 sm:mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-navy mb-4 sm:mb-6">
            Fra idé til lancering
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black/60 max-w-3xl mx-auto">
            En struktureret proces på 2-4 uger der sikrer et perfekt resultat
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto px-8">
        {/* Vertical line connector */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent hidden md:block" />

        {/* Steps */}
        <div className="space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
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
                    <span className="absolute -top-8 -left-4 font-display text-[60px] sm:text-[80px] md:text-[120px] lg:text-[160px] font-black text-black/5 select-none">
                      {step.number}
                    </span>

                    {/* Content card */}
                    <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-black/5">
                      {/* Icon */}
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                        style={{
                          backgroundColor: step.color === 'gold' ? '#B89245' :
                                         step.color === 'navy' ? '#0E1D3D' : '#1A1A1A'
                        }}
                        whileHover={{ rotate: shouldReduceMotion ? 0 : 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
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
                                color: step.color === 'gold' ? '#B89245' :
                                       step.color === 'navy' ? '#0E1D3D' : '#1A1A1A'
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <div className="relative mx-auto w-full max-w-sm">
                    {/* Animated background circle */}
                    <motion.div
                      className="absolute inset-0 rounded-full blur-3xl opacity-20"
                      style={{
                        background: step.color === 'gold' ? '#B89245' :
                                   step.color === 'navy' ? '#0E1D3D' : '#1A1A1A'
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
                          step.color === 'gold' ? '#B89245' :
                          step.color === 'navy' ? '#0E1D3D' : '#1A1A1A'
                        } 0%, ${
                          step.color === 'gold' ? '#D4A853' :
                          step.color === 'navy' ? '#1A2B4D' : '#2A2A2A'
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
                {index < processSteps.length - 1 && (
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mt-20"
      >
        <p className="text-lg text-black/60 mb-8">
          Klar til at starte din digitale transformation?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-bold text-lg hover:bg-navy/90 transition-colors"
        >
          Start dit projekt
          <Rocket className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}