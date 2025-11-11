'use client'

import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function PackagesSection() {
  const packages = [
    {
      name: 'Essentials',
      price: '8.995',
      period: 'Fast pris',
      description: 'Perfekt til små virksomheder der vil i gang hurtigt',
      features: [
        '5 sider',
        '2 revisionsrunder',
        '10-14 dages levering',
        'Basis SEO optimering',
        'Mobilvenligt design',
        'Kontaktformular',
        'Google Analytics',
      ],
      cta: 'Vælg Essentials',
      popular: false,
    },
    {
      name: 'Professional',
      price: '16.995',
      period: 'Fast pris',
      description: 'Vores mest populære løsning til voksende virksomheder',
      features: [
        '10 sider',
        '3 revisionsrunder',
        '14-21 dages levering',
        'Avanceret SEO + blog',
        'Premium animationer',
        'CMS adgang',
        'Email support (24t)',
        'Performance optimering',
      ],
      cta: 'Vælg Professional',
      popular: true,
    },
    {
      name: 'Business',
      price: '27.995',
      period: 'Fast pris',
      description: 'Komplet løsning med avancerede funktioner',
      features: [
        '20 sider',
        '4 revisionsrunder',
        '21-28 dages levering',
        'Alt fra Professional',
        'CRM integration',
        'Brugerdatabase',
        'Priority support',
        '3 måneders vedligeholdelse',
      ],
      cta: 'Vælg Business',
      popular: false,
    },
  ]

  return (
    <Section id="pakker" background="offwhite" spacing="xl">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Tre Pakker. Fast Pris. <span className="text-gold">Nul Overraskelser.</span>
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            Vælg den pakke der passer til din virksomhed. Alle pakker inkluderer
            custom design, ingen skabeloner, og vores zero scope creep garanti.
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              variant={pkg.popular ? 'highlighted' : 'hover'}
              padding="lg"
              className="h-full flex flex-col relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mest Populær
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display font-bold text-2xl text-navy mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-navy">
                    {pkg.price}
                  </span>
                  <span className="text-lg text-black/60 ml-2">DKK</span>
                </div>
                <p className="text-sm text-gold font-medium mb-3">
                  {pkg.period}
                </p>
                <p className="text-sm text-black/70">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-black/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/kontakt"
                variant={pkg.popular ? 'primary' : 'outline'}
                size="lg"
                fullWidth
              >
                {pkg.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add-ons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-black/60 mb-4">
          <span className="font-semibold">Tilvalg:</span> Webshop (+6.995 DKK)
          • Multi-sprog (+5.995 DKK) • Booking system (+3.995 DKK)
        </p>
        <Button href="/pakker" variant="outline" size="md">
          Se Fuld Funktionsoversigt
        </Button>
      </motion.div>
    </Section>
  )
}
