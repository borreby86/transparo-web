'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function BrandStorySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-offwhite via-white to-offwhite" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em]">
            Vores Historie
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-16 leading-tight"
        >
          Transparo – Webdesign bygget på tillid, ikke bindinger
        </motion.h2>

        {/* Story Content */}
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-black/80">
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="text-xl md:text-2xl"
          >
            Alt for mange går igennem webprojekter med en dårlig smag i munden. <span className="text-navy font-semibold">Skjulte omkostninger. Udskudte deadlines. Websites du ikke engang ejer.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.3 }}
            className="font-bold text-navy text-2xl md:text-3xl"
          >
            Vi startede Transparo for at gøre det modsatte.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.4 }}
            className="w-24 h-1 bg-gold my-12"
          />

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.5 }}
            className="font-bold text-navy text-xl md:text-2xl"
          >
            Sådan arbejder vi:
          </motion.p>

          {/* 4 Key Points as Cards */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.6 }}
            className="grid md:grid-cols-2 gap-6 my-12"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-warmgray-light/20">
              <h3 className="font-bold text-navy text-xl mb-3">Fast pris fra start.</h3>
              <p className="text-base text-black/70">Ingen skjulte omkostninger. Du ved præcis hvad du betaler for.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-warmgray-light/20">
              <h3 className="font-bold text-navy text-xl mb-3">Du ejer dit website.</h3>
              <p className="text-base text-black/70">Ingen bindinger. Ingen gidsler-hosting. Dit website, dine rettigheder, fra dag ét.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-warmgray-light/20">
              <h3 className="font-bold text-navy text-xl mb-3">Klar kommunikation.</h3>
              <p className="text-base text-black/70">Fast kontaktperson. Konkrete milepæle. Ingen gætværk.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-warmgray-light/20">
              <h3 className="font-bold text-navy text-xl mb-3">Deadline vi holder.</h3>
              <p className="text-base text-black/70">Vi lover kun hvad vi kan levere. Og så leverer vi det.</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: shouldReduceMotion ? 0 : 0.7 }}
            className="text-xl font-medium text-navy"
          >
            Det er ikke rocket science. Det er bare ærligt håndværk.
          </motion.p>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: shouldReduceMotion ? 0 : 0.8 }}
            className="mt-16 pt-12 border-t border-gold/20"
          >
            <p className="text-3xl md:text-4xl font-light text-navy mb-4 italic">
              Unique designs. Built on trust.
            </p>
            <p className="text-2xl font-bold text-gold">
              Det er ikke et slogan. Det er vores kontrakt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
