'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Image from 'next/image'

const team = [
  {
    name: 'Dennis Enghave',
    role: 'Udvikler',
    image: '/images/team/dennis.jpg',
    bio: 'Dennis bygger det hele. Han sørger for, at dit website er hurtigt, sikkert og kodet fra bunden — ingen genveje.',
  },
  {
    name: 'Christina Borreby',
    role: 'Design & Strategi',
    image: '/images/team/christina.png',
    bio: 'Christina sikrer, at dit website ser rigtigt ud og taler til de rigtige. Hun styrer proces, design og kundekontakt.',
  },
]

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

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
              Om os
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] tracking-tight mb-8">
              To mennesker.
              <br />
              <span className="text-navy/40">Ét mål.</span>
            </h2>

            <div className="space-y-4 text-black/50 text-base md:text-lg leading-relaxed">
              <p>
                Transparo er os to. Vi startede bureauet, fordi vi selv har oplevet, hvor frustrerende det kan være at købe en hjemmeside — uklare priser, manglende kommunikation og et resultat der ikke ligner det, man blev lovet.
              </p>
              <p>
                Vi gør det anderledes. Du får én fast pris, en proces du kan følge med i, og et website du rent faktisk er stolt af.
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
                <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    sizes="112px"
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
