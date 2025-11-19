'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { Zap, Shield, Users, TrendingUp, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'AI-Drevet',
    stat: '50%',
    statLabel: 'hurtigere',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  {
    icon: Shield,
    title: 'Fast Pris',
    stat: '100%',
    statLabel: 'transparent',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  {
    icon: TrendingUp,
    title: 'Performance',
    stat: '90+',
    statLabel: 'lighthouse',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    icon: Clock,
    title: 'Levering',
    stat: '15',
    statLabel: 'dage',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80'
  }
]

export function WhyUsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-black text-white py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">

        {/* Main Layout - Split screen */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left - Giant Typography */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-8 block">
                Hvorfor os
              </span>

              <h2 className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] tracking-tighter">
                Derfor
                <br />
                Vælger
                <br />
                <span className="text-gold">SMV&apos;er</span>
                <br />
                Os
              </h2>

              {/* Decorative line */}
              <div className="mt-12 w-24 h-1 bg-gold" />

              <p className="mt-8 text-white/50 text-lg max-w-md leading-relaxed">
                Få en professionel hjemmeside der konverterer besøgende til kunder - uden at vente måneder eller betale formuer.
              </p>
            </motion.div>

            {/* Background number */}
            <div className="absolute -top-20 -left-10 text-[30vw] lg:text-[20vw] font-bold text-white/[0.02] leading-none pointer-events-none select-none">
              06
            </div>
          </div>

          {/* Right - Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              const isLarge = index === 0 || index === 3

              return (
                <motion.div
                  key={index}
                  className={`relative group cursor-pointer ${
                    isLarge ? 'row-span-2' : ''
                  }`}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: index * 0.1 }}
                >
                  <div className={`relative overflow-hidden rounded-2xl ${
                    isLarge ? 'h-[400px] md:h-[500px]' : 'h-[190px] md:h-[240px]'
                  }`}>
                    {/* Image */}
                    <Image
                      src={reason.image}
                      alt={reason.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      {/* Icon */}
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors" strokeWidth={2} />
                      </div>

                      {/* Stat */}
                      <div className="mb-2">
                        <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold">
                          {reason.stat}
                        </span>
                        <span className="text-white/60 text-sm ml-2">
                          {reason.statLabel}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {reason.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="mt-24 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">100+</div>
              <div className="text-white/40 text-sm mt-1">Projekter</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">98%</div>
              <div className="text-white/40 text-sm mt-1">Tilfredse kunder</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">15</div>
              <div className="text-white/40 text-sm mt-1">Dages levering</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gold">24/7</div>
              <div className="text-white/40 text-sm mt-1">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
