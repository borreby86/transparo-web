'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'

export function WorkshopsIntroSection() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('workshops.intro')
  const benefits = t.raw('benefits') as string[]

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-offwhite overflow-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Gold label */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em]">
            {t('label')}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-10"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl text-navy leading-[1.4] font-medium text-center">
            {t('paragraph1')}{' '}
            <span className="text-navy/40">{t('paragraph1Price')}</span> {t('paragraph1Suffix')}
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl text-navy leading-[1.4] text-center">
            {t('paragraph2Prefix')}{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold font-bold">{t('paragraph2Price')}</span>
              <motion.span
                className="absolute bottom-1 left-0 right-0 h-3 bg-gold/20 -z-0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </span>
            {' '}{t('paragraph2Suffix')}
          </p>
        </motion.div>

        {/* Benefit points */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-center gap-3 py-4 px-6 bg-white rounded-full shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-navy font-medium">{benefit}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Code editor style block */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="relative bg-[#1a1612] rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/20 rounded-full blur-[80px]" />

            {/* Window controls */}
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <pre className="font-mono text-sm md:text-base lg:text-lg leading-relaxed">
              <code>
                <span className="text-warmgray/60">{t('codeComment')}</span>
                {"\n\n"}
                <span className="text-gold">{t('codeLine1')}</span>
                {"\n"}
                <span className="text-gold">{t('codeLine2')}</span>
                {"\n"}
                <span className="text-gold">{t('codeLine3')}</span>
                {"\n\n"}
                <span className="text-green-400/80">{t('codeResult')}</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
