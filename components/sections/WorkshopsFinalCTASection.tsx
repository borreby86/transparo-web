'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ArrowRight } from 'lucide-react'

export function WorkshopsFinalCTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-navy overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold label */}
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-8 block">
            Klar til at starte?
          </span>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1]">
            Premium-teknologi.
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]">
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
              Fuld kontrol.
            </span>
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-[1.1]">
            Fast pris.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Spar 20-30.000 kr. sammenlignet med en bureauløsning – og stå med en hjemmeside, du selv kan vedligeholde resten af livet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            <motion.a
              href="#tilmeld"
              className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-gold via-gold-light to-gold text-navy font-bold text-xl overflow-hidden shadow-xl shadow-gold/30 hover:shadow-2xl hover:shadow-gold/40 transition-all duration-300"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <span className="relative z-10">Tilmeld dig kurset</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <p className="text-white/50">
              Har du spørgsmål? Skriv til mig på{' '}
              <a
                href="mailto:din@email.dk"
                className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
              >
                din@email.dk
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
