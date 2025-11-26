'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function InvestmentSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-32 md:py-48 bg-navy overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orbs */}
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.12, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[150px]"
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-center mb-16"
        >
          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.1 }}
            className="text-gold/80 text-lg md:text-xl italic mb-8 max-w-2xl mx-auto"
          >
            "You only have one chance to make a first impression"
          </motion.p>

          {/* Eyebrow label */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Din Investering
            <Sparkles className="w-4 h-4" />
          </motion.span>

          {/* Main price statement */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 leading-[0.9]">
            Fra{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                DKK 12.000
              </span>
              {/* Underline decoration */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 via-gold to-gold/50 origin-left rounded-full"
              />
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            En hjemmeside er dit ansigt udadtil. En investering i dit brand og i din digitale fremtid.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          >
            <Link
              href="/pakker"
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-gold via-gold-light to-gold text-navy rounded-full font-bold text-lg shadow-2xl shadow-gold/30 hover:shadow-gold/50 transition-all duration-300"
            >
              <span>Se vores pakker</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
