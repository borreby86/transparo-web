'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('about')

  const team = [
    {
      name: t('team.0.name'),
      role: t('team.0.role'),
      image: '/images/team/dennis.jpg',
      bio: t('team.0.bio'),
    },
    {
      name: t('team.1.name'),
      role: t('team.1.role'),
      image: '/images/team/christina.jpg',
      bio: t('team.1.bio'),
    },
  ]

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
              {t('overline')}
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight mb-8">
              {t('headingLine1')}
              <br />
              <span className="text-navy/40">{t('headingLine2')}</span>
            </h2>

            <div className="space-y-4 text-black/50 text-base md:text-lg leading-relaxed">
              <p>
                {t('descriptions.0')}
              </p>
              <p>
                {t('descriptions.1')}
              </p>
              <p>
                {t('descriptions.2')}
              </p>
            </div>
          </motion.div>

          {/* Right: Team */}
          <div className="space-y-10">
            {team.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: index * 0.15 }}
                className="flex items-start gap-6"
              >
                {/* Photo */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl flex-shrink-0 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="144px"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-navy">
                    {person.name}
                  </h3>
                  <span className="text-gold text-sm font-medium block mb-3">
                    {person.role}
                  </span>
                  <p className="text-black/50 text-sm md:text-base leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
