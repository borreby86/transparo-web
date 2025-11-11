'use client'

import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function FinalCTASection() {
  return (
    <Section background="white" spacing="xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-navy via-navy-dark to-black rounded-2xl p-8 md:p-12 lg:p-16 text-center text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Klar Til At Komme I Gang?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Book et uforpligtende discovery call på 30 minutter. Vi
              diskuterer din virksomhed, dine mål, og hvordan vi kan hjælpe
              dig.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Calendar className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">30 minutter</p>
                <p className="text-xs text-white/70">Uforpligtende samtale</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MessageCircle className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Få svar</p>
                <p className="text-xs text-white/70">På alle dine spørgsmål</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <ArrowRight className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-sm font-medium">Kom i gang</p>
                <p className="text-xs text-white/70">Hvis det giver mening</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                href="/kontakt"
                variant="secondary"
                size="lg"
                className="bg-gold hover:bg-gold-light"
              >
                Book Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/pakker"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Se Alle Pakker
              </Button>
            </div>

            <p className="text-sm text-white/60 mt-8">
              Typisk responstid: Under 24 timer
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
