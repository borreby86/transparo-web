'use client'

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { Calendar, Pencil, Code, Rocket, CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'

export function HowItWorksSection() {
  const steps = [
    {
      week: 'Uge 1',
      icon: Calendar,
      title: 'Discovery & Design',
      description:
        'Vi starter med et discovery call for at forstå din virksomhed, målgruppe, og vision. Derefter designer vi din hjemmeside.',
      signoff: 'Sign-off efter design godkendelse',
      timeline: '5-7 dage',
    },
    {
      week: 'Uge 2',
      icon: Code,
      title: 'Udvikling',
      description:
        'Vi bygger din hjemmeside med moderne teknologi. Du får en test-URL hvor du kan følge med i processen.',
      signoff: 'Midtvejs tjek',
      timeline: '7-10 dage',
    },
    {
      week: 'Uge 3',
      icon: Pencil,
      title: 'Revisioner',
      description:
        'Nu er det tid til dine revisioner (2-4 runder alt efter pakke). Vi finjusterer baseret på din feedback.',
      signoff: 'Sign-off efter hver revisionsrunde',
      timeline: '3-5 dage',
    },
    {
      week: 'Uge 4',
      icon: Rocket,
      title: 'Launch',
      description:
        'Final QA, performance optimering, og så går vi live! Du får en komplet vejledning og fuld adgang til dit site.',
      signoff: 'Final godkendelse og launch',
      timeline: '2-3 dage',
    },
  ]

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
            Sådan <span className="text-gold">Virker Det</span>
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            Vores strukturerede 4-ugers proces med klare milepæle og sign-off
            punkter—derfor får vi projekterne færdige til tiden.
          </p>
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
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
          Vil du vide mere om vores proces? Book et uforpligtende discovery
          call.
        </p>
        <Button href="/kontakt" variant="primary" size="lg">
          Book Discovery Call
        </Button>
      </motion.div>
    </Section>
  )
}
