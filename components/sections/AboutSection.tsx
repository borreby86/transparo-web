'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('about')

  return (
    <section className="bg-white py-28 md:py-36 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Overline */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          className="text-gold text-sm font-medium uppercase tracking-[0.25em] mb-10 block"
        >
          {t('overline')}
        </motion.span>

        {/* Editorial layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left column - Heading + Dennis */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-bold text-navy leading-[0.95] tracking-tight mb-10"
            >
              {t('headingLine1')}
              <br />
              <span className="text-navy/30">{t('headingLine2')}</span>
            </motion.h2>

            {/* Dennis */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[1/1] w-full max-w-[280px] overflow-hidden rounded-xl">
                <Image
                  src="/images/team/dennis.jpg"
                  alt={t('team.0.name')}
                  fill
                  className="object-cover object-top scale-[1.3] grayscale"
                  sizes="280px"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-bold text-navy">
                  {t('team.0.name')}
                </h3>
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] block mt-1 mb-3">
                  {t('team.0.role')}
                </span>
                <p className="text-black/40 text-sm leading-relaxed">
                  {t('team.0.bio')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right column - Description + Christina */}
          <div className="lg:pt-20">

            {/* Description text */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="mb-10 lg:mb-16"
            >
              <div className="w-10 h-px bg-gold mb-6" />
              <p className="text-black/50 text-base md:text-lg leading-relaxed">
                {t('descriptions.0')}
              </p>
              <p className="text-gold font-semibold text-base md:text-lg leading-relaxed mt-4">
                {t('descriptions.1')}
              </p>
              <p className="text-black/40 text-sm leading-relaxed mt-4">
                {t('descriptions.2')}
              </p>
            </motion.div>

            {/* Christina */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[1/1] w-full max-w-[280px] overflow-hidden rounded-xl">
                <Image
                  src="/images/team/christina.jpg"
                  alt={t('team.1.name')}
                  fill
                  className="object-cover grayscale"
                  sizes="280px"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-xl md:text-2xl font-bold text-navy">
                  {t('team.1.name')}
                </h3>
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] block mt-1 mb-3">
                  {t('team.1.role')}
                </span>
                <p className="text-black/40 text-sm leading-relaxed">
                  {t('team.1.bio')}
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
