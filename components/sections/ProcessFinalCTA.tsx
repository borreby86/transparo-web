'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ProcessFinalCTA() {
  return (
    <section className="relative bg-navy px-6 md:px-12 lg:px-24 py-32 md:py-48">
      <div className="max-w-6xl mx-auto">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Klar til at starte
            <br />
            jeres projekt?
          </h2>

          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Professionel udvikling. Faste priser. Lancering på 2-4 uger.
          </p>
        </motion.div>

        {/* Simple 3-step process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-px bg-white/10 mb-20"
        >
          {[
            { num: '1', title: 'Book møde', desc: 'Gratis 30 min konsultation' },
            { num: '2', title: 'Få tilbud', desc: 'Fast pris, ingen skjulte omkostninger' },
            { num: '3', title: 'Vi starter', desc: 'Lancering om 2-4 uger' }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="bg-navy p-8 text-center"
            >
              <div className="text-5xl font-bold text-white/10 mb-4">{step.num}</div>
              <div className="text-lg font-bold text-white mb-2">{step.title}</div>
              <div className="text-sm text-white/50">{step.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
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

          <Link href="/pakker" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-bold text-lg hover:border-white/40 transition-colors"
            >
              <span className="flex items-center justify-center gap-3">
                Se Vores Pakker
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          {['Faste priser', '2-4 ugers levering', '7 godkendelsespunkter', 'Premium kvalitet'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-gold" />
              {item}
            </div>
          ))}
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="text-center pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
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
