'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'

export function SocialProofSection() {
  // Placeholder testimonials - will be replaced with real ones later
  const testimonials = [
    {
      quote:
        'Transparo leverede præcis hvad de lovede—til tiden og uden ekstra omkostninger. Det var en forfriskende oplevelse.',
      author: 'Kommende Kunde',
      company: 'Dansk Virksomhed',
      role: 'CEO',
    },
    {
      quote:
        'Endelig et webdesign bureau der forstår vigtigheden af klare grænser og deadlines. Kan varmt anbefales!',
      author: 'Kommende Kunde',
      company: 'SMB Partner',
      role: 'Marketing Chef',
    },
    {
      quote:
        'Fantastisk kvalitet til prisen. Vi fik et professionelt website på rekordtid, og processen var helt smertefri.',
      author: 'Kommende Kunde',
      company: 'Startup Danmark',
      role: 'Founder',
    },
  ]

  return (
    <Section id="testimonials" background="offwhite" spacing="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Hvad Vores Kunder <span className="text-gold">Siger</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Vi er i gang med at opbygge vores portefølje. Her er hvad vores
            første kunder forventer.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card padding="lg" className="h-full relative">
              <Quote className="h-10 w-10 text-gold/20 absolute top-6 right-6" />
              <p className="text-black/80 mb-6 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-warmgray-light/20">
                <p className="font-display font-semibold text-navy mb-1">
                  {testimonial.author}
                </p>
                <p className="text-sm text-black/60">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-black/50 italic">
          * Vi er et nyt bureau og arbejder på at opbygge vores case studies.
          Rigtige testimonials kommer snart!
        </p>
      </motion.div>
    </Section>
  )
}
