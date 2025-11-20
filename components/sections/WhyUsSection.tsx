'use client'

import { motion, useReducedMotion } from 'motion/react'
import Image from 'next/image'
import { Zap, Shield, Users, TrendingUp, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Transparente aftaler',
    stat: '01',
    statLabel: '',
    description: 'Vi siger tingene, som de er. Du får fuldt indblik i processer, deadlines og hvad du kan forvente — uden overraskelser undervejs.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
  },
  {
    icon: Zap,
    title: 'High-end design',
    stat: '02',
    statLabel: '',
    description: 'Dit website skal afspejle din kvalitet, dit brand og dine værdier. Vi designer unikt — aldrig "templates med makeup".',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80'
  },
  {
    icon: Award,
    title: 'Design der føles som dig',
    stat: '03',
    statLabel: '',
    description: 'Personligt, professionelt og ægte. Ingen generisk løsninger — kun design der matcher din identitet.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    icon: Clock,
    title: 'Levering til tiden',
    stat: '04',
    statLabel: '',
    description: 'Du skal kunne stole på os. Derfor arbejder vi struktureret, følger en fast projektmodel og leverer, når vi siger, vi gør.',
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
                Hvorfor Transparo
              </span>

              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
                Fordi du
                <br />
                fortjener et
                <br />
                <span className="text-gold">webbureau,</span>
                <br />
                der spiller med
                <br />
                åbne kort.
              </h2>

              {/* Decorative line */}
              <div className="w-24 h-1 bg-gold mb-8" />

              <div className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed space-y-6">
                <p>
                  Du har sikkert prøvet det før: Et projekt starter fint, men pludselig stiger prisen, deadlines rykker sig, og du ender med et site, der ikke helt rammer det, du så for dig.
                </p>
                <p className="text-white/90 font-medium">
                  Det er præcis det, vi vil væk fra.
                </p>
                <p>
                  Hos Transparo arbejder vi efter én grundregel: <span className="text-gold font-semibold">Tillid først. Design dernæst.</span>
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right - Bento Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            {/* Background number - positioned near 04 card */}
            <div className="absolute bottom-0 right-0 text-[7.84vw] lg:text-[4.9vw] font-bold text-white/[0.06] leading-none pointer-events-none select-none z-0">
              2025
            </div>
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

                      {/* Number */}
                      <div className="mb-3">
                        <span className="text-3xl md:text-4xl font-bold text-gold/60">
                          {reason.stat}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {reason.title}
                      </h3>

                      {/* Description - only visible on larger cards */}
                      {isLarge && reason.description && (
                        <p className="text-sm md:text-base text-white/70 leading-relaxed">
                          {reason.description}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom - What This Means */}
        <motion.div
          className="mt-24 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Det betyder:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-white/70">
            <div className="flex gap-3">
              <span className="text-gold">—</span>
              <p>Fast proces, faste aftaler</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold">—</span>
              <p>Klarhed om pris og omfang fra dag ét</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold">—</span>
              <p>Et team, der faktisk lytter</p>
            </div>
            <div className="flex gap-3">
              <span className="text-gold">—</span>
              <p>Løsninger der holder — også om to år</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
