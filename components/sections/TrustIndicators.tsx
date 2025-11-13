'use client'

import { DollarSign, Clock, Sparkles, RefreshCcw } from 'lucide-react'
import { motion } from 'motion/react'

export function TrustIndicators() {
  const indicators = [
    {
      icon: DollarSign,
      title: 'Fast Pris',
      description: 'Ingen skjulte omkostninger',
    },
    {
      icon: Clock,
      title: '10-28 Dage',
      description: 'Leveret som lovet—garanteret',
    },
    {
      icon: Sparkles,
      title: 'Custom Design',
      description: 'Ingen skabeloner eller templates',
    },
    {
      icon: RefreshCcw,
      title: '2-4 Revisionsrunder',
      description: 'Inkluderet i alle pakker',
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-b border-warmgray-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-navy/5 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-navy" />
                </div>
                <h3 className="font-display font-semibold text-lg text-navy mb-2">
                  {indicator.title}
                </h3>
                <p className="text-sm text-black/60">
                  {indicator.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
