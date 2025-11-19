'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'

const clients = [
  {
    name: 'Louise Kjær',
    company: 'Sundhedskonsortiet',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    quote: 'Transparo leverede langt over forventning.'
  },
  {
    name: 'Mikkel Juul',
    company: 'WalterAI',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
    quote: 'Professionelt og effektivt samarbejde.'
  },
  {
    name: 'Camilla Højland',
    company: 'Flotte Fødder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    quote: 'Min nye hjemmeside er perfekt!'
  },
  {
    name: 'Thomas Kjeldsen',
    company: 'VAT 85',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80',
    quote: 'Bedste investering i år.'
  },
  {
    name: 'Alex Morgan',
    company: 'Fotograf',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    quote: 'Fantastisk resultat på rekordtid.'
  },
  {
    name: 'Christina Borreby',
    company: 'Coach & Konsulent',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80',
    quote: 'De forstod præcis hvad jeg havde brug for.'
  }
]

export function HappyClientsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-navy-dark py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          >
            Vores kunder
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.1 }}
          >
            Glade <span className="text-gold">Kunder</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {clients.map((client, index) => {
            // Vary sizes for bento effect
            const isLarge = index === 0 || index === 3
            const isMedium = index === 2 || index === 5

            return (
              <motion.div
                key={index}
                className={`relative group cursor-pointer ${
                  isLarge ? 'row-span-2' : ''
                } ${isMedium ? 'md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: index * 0.1 }}
              >
                <div className={`relative overflow-hidden rounded-2xl ${
                  isLarge ? 'h-[400px] md:h-[500px]' : isMedium ? 'h-[250px] md:h-[300px]' : 'h-[200px] md:h-[240px]'
                }`}>
                  {/* Image */}
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Quote */}
                    <p className="text-white/80 text-sm mb-3 line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      &ldquo;{client.quote}&rdquo;
                    </p>

                    {/* Name & Company */}
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {client.name}
                    </h3>
                    <p className="text-gold text-sm font-medium">
                      {client.company}
                    </p>
                  </div>

                  {/* Gold border on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-white/40 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.6 }}
        >
          Og mange flere tilfredse kunder...
        </motion.p>
      </div>
    </section>
  )
}
