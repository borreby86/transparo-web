'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Check, Sparkles } from 'lucide-react'

const included = [
  '1 times online intro',
  'Fuld kursusdag (10:00-16:30)',
  '1 times individuel opfølgning',
  'Adgang til videovejledninger',
]

export function WorkshopsPricingSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-navy overflow-hidden" id="tilmeld">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Investering
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Pris
          </h2>
        </motion.div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 text-center overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-navy/5 to-transparent rounded-tr-full" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-bold">Alt inkluderet</span>
            </motion.div>

            {/* Price */}
            <div className="mb-10">
              <motion.span
                className="text-7xl md:text-8xl lg:text-9xl font-display text-navy"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
              >
                6.500
              </motion.span>
              <span className="text-2xl md:text-3xl text-navy/60 ml-2">kr.</span>
              <p className="text-navy/50 mt-2">ekskl. moms</p>
            </div>

            {/* Divider */}
            <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full mx-auto mb-10" />

            {/* Inclusions */}
            <div className="mb-10">
              <p className="text-lg text-navy/60 mb-6 font-medium">Inkluderer:</p>
              <ul className="space-y-4 max-w-sm mx-auto">
                {included.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <span className="text-navy text-left text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Comparison note */}
            <div className="bg-offwhite rounded-2xl p-5 mb-10">
              <p className="text-navy/60">
                Sammenlign med <span className="font-bold text-navy">25-40.000 kr.</span> for en tilsvarende bureauløsning.
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#tilmeld"
              className="group relative inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-gold via-gold-light to-gold text-navy rounded-full font-bold text-lg overflow-hidden shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10">Tilmeld dig kurset</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
