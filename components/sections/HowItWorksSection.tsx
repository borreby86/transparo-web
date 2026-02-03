'use client'

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Calendar, Pencil, Code, Rocket, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export function HowItWorksSection() {
  const t = useTranslations('howItWorks')

  const stepIcons = [Calendar, Code, Pencil, Rocket]
  const steps = t.raw('steps') as Array<{
    week: string
    title: string
    description: string
    signoff: string
    timeline: string
  }>

  return (
    <Section id="proces" background="white" spacing="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            {t.rich('heading', {
              gold: (chunks) => <span className="text-gold">{chunks}</span>
            })}
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            {t('subheading')}
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-navy via-gold to-transparent opacity-20" />
                )}

                <div className="flex flex-col md:flex-row gap-6 bg-offwhite rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300">
                  {/* Icon & Week */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-navy rounded-xl flex items-center justify-center mb-3">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <div className="text-sm font-semibold text-navy text-center">
                      {step.week}
                    </div>
                    <div className="text-xs text-black/60 text-center mt-1">
                      {step.timeline}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-3">
                      {step.title}
                    </h3>
                    <p className="text-black/70 mb-4">{step.description}</p>
                    <div className="flex items-start space-x-2 bg-white rounded-lg p-3">
                      <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-navy">
                        {step.signoff}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-black/60 mb-6">
          {t('ctaText')}
        </p>
        <Button href="/kontakt" variant="primary" size="lg">
          {t('ctaButton')}
        </Button>
      </motion.div>
    </Section>
  )
}
