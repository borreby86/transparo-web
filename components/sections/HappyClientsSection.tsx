'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Louise Kjær',
    company: 'Sundhedskonsortiet',
    role: 'CEO',
    quote: 'Transparo leverede langt over forventning. Processen var transparent fra start til slut, og de holdt alle deadlines. Det er sjældent at opleve sådan et professionelt samarbejde.',
    rating: 5
  },
  {
    name: 'Mikkel Juul',
    company: 'WalterAI',
    role: 'Founder',
    quote: 'Endelig et bureau der forstår betydningen af klare aftaler. Ingen overraskelser, kun fremragende resultater.',
    rating: 5
  },
  {
    name: 'Camilla Højland',
    company: 'Flotte Fødder',
    role: 'Indehaver',
    quote: 'Min nye hjemmeside er perfekt! De lyttede til mine ønsker og leverede præcis hvad vi aftalte - intet mere, intet mindre.',
    rating: 5
  },
  {
    name: 'Thomas Kjeldsen',
    company: 'VAT 85',
    role: 'Partner',
    quote: 'Bedste investering i år. Fast pris, hurtig levering, og kvalitet der matcher store bureauer til en brøkdel af prisen.',
    rating: 5
  },
  {
    name: 'Alex Morgan',
    company: 'Fotograf',
    role: 'Selvstændig',
    quote: 'Fantastisk resultat på rekordtid. De forstod min vision med det samme og udførte den til perfektion.',
    rating: 5
  },
  {
    name: 'Christina Borreby',
    company: 'Coach & Konsulent',
    role: 'Konsulent',
    quote: 'De forstod præcis hvad jeg havde brug for. Kommunikationen var klar, processen smidig, og resultatet overraskende godt.',
    rating: 5
  }
]

const stats = [
  { value: '100+', label: 'Projekter Leveret' },
  { value: '98%', label: 'Kundetilfredshed' },
  { value: '15', label: 'Dages Gennemsnitlig Levering' },
  { value: '0', label: 'Skjulte Omkostninger' }
]

export function HappyClientsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-gradient-to-b from-offwhite via-white to-offwhite py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            Vores Kunder
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 }}
          >
            Hvad Glade Kunder <span className="text-gold">Siger</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
          >
            Real kunder. Real resultater. Real transparens.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg shadow-black/5 border border-warmgray-light/20 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-black/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl shadow-black/5 border border-warmgray-light/20 hover:shadow-2xl hover:border-gold/30 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1 * index }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/10 group-hover:text-gold/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-black/80 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-warmgray-light/20">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-navy">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-black/60">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.8 }}
        >
          <p className="text-black/70 text-lg mb-6">
            Vil du også være en tilfreds kunde?
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-navy rounded-full font-bold text-lg shadow-xl shadow-gold/20 hover:shadow-2xl hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
          >
            Start Dit Projekt
          </a>
        </motion.div>
      </div>
    </section>
  )
}
