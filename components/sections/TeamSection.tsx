'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Alexander Nielsen',
    role: 'Founder & Lead Developer',
    bio: 'Full-stack udvikler med passion for moderne webteknologi og AI-drevet udvikling.',
    image: '/images/unsplash/team-1.webp'
  },
  {
    name: 'Maria Christensen',
    role: 'Creative Director',
    bio: 'Designer med øje for detaljer og 10+ års erfaring med brand identitet.',
    image: '/images/unsplash/team-2.webp'
  },
  {
    name: 'Thomas Andersen',
    role: 'Senior Developer',
    bio: 'Ekspert i Next.js og performance optimering. Lighthouse-nørd.',
    image: '/images/unsplash/team-3.webp'
  },
  {
    name: 'Sophie Larsen',
    role: 'Project Manager',
    bio: 'Holder styr på deadlines og sikrer glade kunder hver gang.',
    image: '/images/unsplash/team-4.webp'
  }
]

export function TeamSection() {
  const shouldReduceMotion = useReducedMotion()

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
            Holdet
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy tracking-tight"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.1 }}
          >
            Mød <span className="text-gold">Holdet</span>
          </motion.h2>
          <motion.p
            className="mt-6 text-navy/60 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.2 }}
          >
            Et dedikeret team af eksperter der brænder for at skabe exceptionelle digitale oplevelser
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
