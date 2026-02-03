'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Shield, Zap, DollarSign } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

export function DifferentiatorSection() {
  const t = useTranslations('differentiator')

  const icons = [Shield, Zap, DollarSign]
  const items = t.raw('items') as Array<{
    title: string
    description: string
    solution: string
    stat: string
    statLabel: string
  }>

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
            {t.rich('heading', {
              gold: (chunks) => <span className="text-gold">{chunks}</span>
            })}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {t('subheading')}
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((diff, index) => {
          const Icon = icons[index]
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card padding="lg" className="h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-navy/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-navy" />
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
