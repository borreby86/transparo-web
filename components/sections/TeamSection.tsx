'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function TeamSection() {
  const t = useTranslations('team')
  const shouldReduceMotion = useReducedMotion()

  const teamMembers = (t.raw('members') as Array<{name: string; role: string; bio: string}>) || []
  const teamMemberImages = [
    '/images/team/dennis.jpg',
    '/images/team/christina.jpg'
  ]

  return (
    <section className="bg-offwhite py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          >
            {t('overline')}
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy tracking-tight"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.1 }}
          >
            {t('heading')} <span className="text-gold">{t('headingAccent')}</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-navy/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.2 }}
          >
            {t('description')}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={teamMemberImages[index] || '/images/unsplash/team-1.webp'}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />

                {/* Gold accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-navy mb-1">
                {member.name}
              </h3>
              <p className="text-gold text-sm font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-navy/60 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
