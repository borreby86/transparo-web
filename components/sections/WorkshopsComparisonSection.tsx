'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { X, Check } from 'lucide-react'

export function WorkshopsComparisonSection() {
  const shouldReduceMotion = useReducedMotion()

  const bureauItems = [
    { label: 'Oprettelse', value: '25-40.000 kr.' },
    { label: 'Månedlig vedligeholdelse', value: '200-500 kr.' },
    { label: 'Smårettelser', value: '500-2.500 kr. pr. gang' },
  ]

  const kursusItems = [
    { label: 'Kursus inkl. opfølgning', value: '6.500 kr.' },
    { label: 'Hosting', value: 'Gratis' },
    { label: 'Domæne', value: 'ca. 100 kr./år' },
    { label: 'Smårettelser', value: 'Gratis (du gør det selv)' },
  ]

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-white overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,29,61,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,29,61,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Sammenligning
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy">
            Hvad du sparer
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bureau løsning */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-full bg-warmgray-light/20 rounded-3xl p-8 md:p-10 border border-navy/5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center">
                  <X className="w-6 h-6 text-navy/40" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-navy/60">
                  Bureauløsning
                </h3>
              </div>

              <div className="space-y-5">
                {bureauItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-navy/5 last:border-0">
                    <span className="text-navy/60">{item.label}</span>
                    <span className="font-bold text-navy/70">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-10 pt-8 border-t-2 border-navy/10">
                <div className="flex justify-between items-center">
                  <span className="text-navy/60 font-medium">Efter 3 år</span>
                  <span className="text-3xl font-bold text-navy/70">35-60.000 kr.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Med dette kursus */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Savings badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -top-5 -right-3 md:-right-5 z-10"
            >
              <div className="bg-gradient-to-r from-gold to-gold-light text-navy px-5 py-2 rounded-full font-bold text-sm shadow-xl shadow-gold/30">
                Spar op til 53.000 kr.
              </div>
            </motion.div>

            <div className="relative h-full bg-navy rounded-3xl p-8 md:p-10 text-white overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center">
                    <Check className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-white">
                    Med dette kursus
                  </h3>
                </div>

                <div className="space-y-5">
                  {kursusItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0">
                      <span className="text-white/70">{item.label}</span>
                      <span className="font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="mt-10 pt-8 border-t-2 border-white/20">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70 font-medium">Efter 3 år</span>
                    <span className="text-3xl font-bold text-gold">Under 7.000 kr.</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
