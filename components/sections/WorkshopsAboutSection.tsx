'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function WorkshopsAboutSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/30 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,29,61,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,29,61,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Din underviser
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy">
            Om mig
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-12 md:gap-16 items-center"
        >
          {/* Image placeholder */}
          <motion.div
            className="relative flex-shrink-0"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-3xl bg-offwhite border-2 border-gold/20 flex items-center justify-center overflow-hidden shadow-xl">
              {/* Replace with actual image */}
              <div className="text-navy/20 text-center">
                <svg className="w-24 h-24 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Dit billede</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-navy/5 rounded-2xl -z-10" />
          </motion.div>

          {/* Bio text */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-navy/70 leading-relaxed mb-8"
            >
              Jeg er psykoterapeut og har gennem mange år hjulpet kolleger med deres hjemmesider. Jeg har set, hvordan bureauer tager premium-priser for teknologi, der nu er tilgængelig for alle – og hvordan terapeuter sidder fast i dyre aftaler uden reel kontrol.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-navy leading-relaxed font-medium"
            >
              Dette kursus giver dig det bedste fra begge verdener:{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold">Professionel teknologi</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-2 bg-gold/20 -z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
              </span>
              {' '}og{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold">fuld ejerskab</span>
                <motion.span
                  className="absolute bottom-1 left-0 right-0 h-2 bg-gold/20 -z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
              </span>.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
