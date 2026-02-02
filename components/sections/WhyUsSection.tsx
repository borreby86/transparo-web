'use client'

import { motion, useReducedMotion } from 'motion/react'

const reasons = [
  {
    number: '01',
    title: 'Faste priser',
    description: 'Du kender den endelige pris fra dag ét. Ingen timeregnskaber, ingen tillæg, ingen "det blev lidt dyrere end forventet".',
  },
  {
    number: '02',
    title: 'Unikt design',
    description: 'Vi bruger ikke templates. Dit website bliver tegnet fra bunden, så det passer til din virksomhed — ikke omvendt.',
  },
  {
    number: '03',
    title: 'Du ejer det hele',
    description: 'Koden, domænet, indholdet. Alt er dit. Du er aldrig låst til os, og du kan tage det med videre, hvis du vil.',
  },
  {
    number: '04',
    title: 'Klar kommunikation',
    description: 'Du ved altid, hvor vi er i processen. Vi siger til, hvis noget tager længere tid — og vi forklarer hvorfor.',
  }
]

export function WhyUsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="mb-20 md:mb-24 max-w-2xl"
        >
          <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
            Hvorfor os
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Vi gør det
            <br />
            <span className="text-white/40">anderledes.</span>
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Vi tror på, at et godt samarbejde kræver ærlighed — om hvad der kan lade sig gøre, hvad det koster, og hvornår det er færdigt.
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
              className="group relative p-8 md:p-10 rounded-2xl border border-white/[0.08] hover:border-white/[0.15] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500"
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
                <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
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
