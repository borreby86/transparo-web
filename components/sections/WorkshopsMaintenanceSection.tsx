'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Github, Bot, PlayCircle } from 'lucide-react'

const maintenanceOptions = [
  {
    icon: Github,
    title: 'Små ændringer – helt gratis',
    description: 'Ret en tekst eller opdater en pris direkte i GitHub via din browser. Ingen abonnementer.',
    tag: 'Gratis',
    tagColor: 'bg-green-500',
  },
  {
    icon: Bot,
    title: 'Større ændringer – med AI-hjælp',
    description: 'Tilføj en ny side eller ændre layoutet med Claude Code eller lignende værktøjer. En ny underside koster et par kroner i API-forbrug.',
    tag: 'Få kroner',
    tagColor: 'bg-gold',
  },
  {
    icon: PlayCircle,
    title: 'Videovejledninger inkluderet',
    description: 'Du får adgang til korte videoer, der viser præcis hvordan du gør de mest almindelige ting.',
    tag: 'Inkluderet',
    tagColor: 'bg-navy',
  },
]

export function WorkshopsMaintenanceSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/30 rounded-full blur-[120px]"
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(14,29,61,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,29,61,.1) 1px, transparent 1px)`,
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
            Løbende vedligeholdelse
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
            Hold din side opdateret
          </h2>
          <p className="text-xl md:text-2xl text-navy/60 max-w-2xl mx-auto">
            Jeg lærer dig flere måder at holde din side opdateret
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {maintenanceOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div
                className="relative h-full bg-offwhite rounded-3xl p-8 md:p-10 overflow-hidden group"
                whileHover={shouldReduceMotion ? {} : {
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Tag */}
                <div className={`absolute top-6 right-6 ${option.tagColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {option.tag}
                </div>

                {/* Accent line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gold"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                />

                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-6"
                    whileHover={shouldReduceMotion ? {} : { rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <option.icon className="w-8 h-8 text-navy" />
                  </motion.div>
                  <h3 className="font-display text-xl md:text-2xl text-navy mb-4 pr-20">
                    {option.title}
                  </h3>
                  <p className="text-navy/60 leading-relaxed text-lg">
                    {option.description}
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
