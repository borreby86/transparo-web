'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function ProjectCTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden mt-24 md:mt-32 laptop:mt-24 laptop-l:mt-32 py-24 md:py-32 laptop:py-24 laptop-l:py-28" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-[120px]"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-white/5 to-transparent blur-[100px]"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12">
        {/* CTA Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl laptop:text-5xl laptop-l:text-6xl font-bold text-white mb-6 leading-tight">
            Klar til at starte
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold to-amber-300">jeres projekt?</span>
          </h2>

          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            Professionel udvikling. Faste priser. Lancering på 2-4 uger.
          </p>
        </motion.div>

        {/* Simple 3-step process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-px bg-white/10 max-w-4xl mx-auto mb-10"
        >
          {[
            { num: '1', title: 'Book møde', desc: 'Gratis 30 min konsultation' },
            { num: '2', title: 'Få tilbud', desc: 'Fast pris, ingen skjulte omkostninger' },
            { num: '3', title: 'Vi starter', desc: 'Lancering om 2-4 uger' }
          ].map((step, i) => (
            <div key={i} className="bg-[#1A1A1A] p-6 text-center">
              <div className="text-4xl font-bold text-white/10 mb-3">{step.num}</div>
              <div className="text-base font-bold text-white mb-1">{step.title}</div>
              <div className="text-sm text-white/50">{step.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {['Faste priser', '2-4 ugers levering', '7 godkendelsespunkter', 'Premium kvalitet'].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-white/60 text-sm font-medium">
              <div className="w-1.5 h-1.5 bg-gold" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
