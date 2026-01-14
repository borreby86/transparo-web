'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Edit3, PlusCircle, Coins, ArrowRight } from 'lucide-react'

const controlPoints = [
  {
    icon: Edit3,
    title: 'Du retter tekster selv',
    description: 'Direkte i browseren, på fem minutter.',
  },
  {
    icon: PlusCircle,
    title: 'Du tilføjer sider selv',
    description: 'Beskriv hvad du vil have, og AI\'en skriver koden.',
  },
  {
    icon: Coins,
    title: 'Du betaler ikke for småting',
    description: 'Aldrig mere 500 kr. for at skifte et billede.',
  },
  {
    icon: ArrowRight,
    title: 'Du kan tage det med dig',
    description: 'Skifter du hosting, tager du bare filerne med.',
  },
]

export function WorkshopsControlSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-navy overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Frihed & Kontrol
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Fuld kontrol betyder
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {controlPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div
                className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 overflow-hidden group"
                whileHover={shouldReduceMotion ? {} : {
                  y: -5,
                  borderColor: 'rgba(184, 146, 69, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center mb-6"
                    whileHover={shouldReduceMotion ? {} : { rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <point.icon className="w-7 h-7 text-gold" />
                  </motion.div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-3">
                    {point.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
