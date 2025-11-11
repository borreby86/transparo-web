'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Shield, Zap, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export function DifferentiatorSection() {
  const differentiators = [
    {
      icon: Shield,
      title: 'Zero Scope Creep Garanti',
      description:
        '73% af webdesign-projekter oplever scope creep—hvor projektet bare fortsætter uden klart slutpunkt.',
      solution:
        'Vores løsning: Strukturerede revisionsrunder (2-4 alt efter pakke) med klare sign-off punkter. Efter design godkendelse koster ændringer ekstra. Klare grænser = projekter der faktisk bliver færdige.',
      stat: '0%',
      statLabel: 'scope creep',
    },
    {
      icon: Zap,
      title: 'AI + Ekspert Hybrid Model',
      description:
        'Vi bruger AI-værktøjer til effektivitet—research, content drafts, kodestruktur.',
      solution:
        'Men eksperter perfektionerer alt. Resultatet: Bureau-kvalitet leveret 3-5x hurtigere end traditionelle bureauer (2-4 uger vs. 8-16 uger). Du får det bedste fra begge verdener.',
      stat: '3-5x',
      statLabel: 'hurtigere',
    },
    {
      icon: DollarSign,
      title: 'Fast Pris, Fuld Transparens',
      description:
        'Ingen "bare lige én ting mere" opkrævninger. Ingen skjulte omkostninger.',
      solution:
        'Vores løfte: Én pris. Alt er inkluderet. Du ved præcis hvad du får, og hvad det koster, før vi starter. Transparens skaber tillid—det er kernen i vores forretningsmodel.',
      stat: '100%',
      statLabel: 'transparent',
    },
  ]

  return (
    <Section id="differentiators" background="navy" spacing="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Hvorfor Vælge <span className="text-gold">Transparo?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Vi løser de tre største problemer med traditionelle webdesign
            bureauer
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {differentiators.map((diff, index) => {
          const Icon = diff.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card padding="lg" className="h-full">
                <div className="w-14 h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-navy" />
                </div>

                <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-4">
                  {diff.title}
                </h3>

                <p className="text-black/70 mb-4">{diff.description}</p>

                <div className="bg-offwhite rounded-lg p-4 mb-4">
                  <p className="text-sm text-black/80 italic">
                    {diff.solution}
                  </p>
                </div>

                <div className="text-center pt-4 border-t border-warmgray-light/20">
                  <div className="text-4xl font-bold text-gold mb-1">
                    {diff.stat}
                  </div>
                  <div className="text-sm text-black/60 uppercase tracking-wide">
                    {diff.statLabel}
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
