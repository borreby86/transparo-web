'use client'

import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ProcessFinalCTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-navy px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-32 md:py-48">
      <div className="max-w-[1800px] mx-auto">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Klar til at starte
            <br />
            jeres projekt?
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.0,
              delay: shouldReduceMotion ? 0 : 0.3
            }}
          >
            Professionel udvikling. Faste priser. Lancering på 2-4 uger.
          </motion.p>
        </motion.div>

        {/* Simple 3-step process */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="grid md:grid-cols-3 gap-px bg-white/10 mb-20 max-w-6xl mx-auto"
        >
          {[
            { num: '1', title: 'Book møde', desc: 'Gratis 30 min konsultation' },
            { num: '2', title: 'Få tilbud', desc: 'Fast pris, ingen skjulte omkostninger' },
            { num: '3', title: 'Vi starter', desc: 'Lancering om 2-4 uger' }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.0,
                delay: shouldReduceMotion ? 0 : 0.4 + i * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="bg-navy p-8 text-center"
            >
              <motion.div
                className="text-5xl font-bold text-white/10 mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.6 + i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {step.num}
              </motion.div>
              <div className="text-lg font-bold text-white mb-2">{step.title}</div>
              <div className="text-sm text-white/50">{step.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 80, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-10 py-5 bg-gold text-navy font-bold text-lg hover:bg-gold-light transition-colors"
            >
              <span className="flex items-center justify-center gap-3">
                Book Gratis Konsultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>

        </motion.div>

        {/* Contact info */}
        <motion.div
          className="text-center pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.0,
            delay: shouldReduceMotion ? 0 : 1.4,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <p className="text-white/40 text-sm mb-6">Har du spørgsmål? Kontakt os direkte</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+4512345678"
              className="text-white/60 hover:text-gold transition-colors"
            >
              +45 123 45 678
            </a>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <a
              href="mailto:hej@transparo.dk"
              className="text-white/60 hover:text-gold transition-colors"
            >
              hej@transparo.dk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
