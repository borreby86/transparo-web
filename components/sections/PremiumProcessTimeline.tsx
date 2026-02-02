'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const steps = [
  { number: '01', title: 'Samtale', description: 'Vi lytter til dig og forstår din virksomhed.' },
  { number: '02', title: 'Design', description: 'Du ser de første udkast og giver feedback.' },
  { number: '03', title: 'Tilretning', description: 'Vi justerer indtil du er tilfreds.' },
  { number: '04', title: 'Udvikling', description: 'Vi koder og tester på alle enheder.' },
  { number: '05', title: 'Review', description: 'Du godkender det færdige resultat.' },
  { number: '06', title: 'Lancering', description: 'Dit website går live. Alt overdrages til dig.' },
]

export function PremiumProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-navy py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
            Sådan arbejder vi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            Fra samtale
            <br />
            <span className="text-white/40">til lancering.</span>
          </h2>
        </motion.div>

        {/* Horizontal steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.08 }}
              className="bg-navy p-6 md:p-8"
            >
              <span className="text-gold/30 text-4xl md:text-5xl font-bold block mb-4 select-none">
                {step.number}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">
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
