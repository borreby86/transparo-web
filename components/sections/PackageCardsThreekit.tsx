'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

const packages = [
  {
    id: 'essentials',
    name: 'Essentials',
    tagline: 'Vores standard pakke',
    price: '8.995',
    period: 'DKK',
    description: 'Perfekt til startups og små virksomheder der skal i gang',
    features: ['5 sider', 'Mobil-optimeret', 'Basis SEO', 'CMS'],
    color: {
      bg: 'bg-warmgray-light', // Transparo warmgray light
      text: 'text-navy-dark', // Transparo navy dark
      button: 'bg-navy-dark text-white hover:bg-navy'
    }
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Bedst til at tilbyde flere oplevelser',
    price: '16.995',
    period: 'DKK',
    description: 'Den komplette løsning for voksende virksomheder',
    features: ['10 sider', 'Avancerede animationer', 'Blog & portfolio', 'Fuld SEO'],
    popular: true,
    color: {
      bg: 'bg-navy', // Transparo navy
      text: 'text-white',
      button: 'bg-gold text-navy hover:bg-gold-light'
    }
  },
  {
    id: 'business',
    name: 'Enterprise',
    tagline: 'Bedst til globale komplekse use cases',
    price: '27.995',
    period: 'DKK',
    description: 'Enterprise-niveau løsning med fuld kontrol',
    features: ['20+ sider', 'Multi-language', 'E-commerce', 'Premium support'],
    color: {
      bg: 'bg-gold', // Transparo gold
      text: 'text-navy-dark', // Transparo navy dark
      button: 'bg-navy-dark text-white hover:bg-navy'
    }
  }
]

export function PackageCardsThreekit() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50/30 via-white to-white px-6 md:px-16 lg:px-24 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Cards Grid - Tighter, more immersive */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="relative group"
            >
              {/* Popular Badge - More prominent */}
              {pkg.popular && (
                <div className="absolute -top-4 left-8 z-10">
                  <span className="inline-block px-5 py-2 bg-white text-navy text-xs font-bold rounded-full shadow-lg border border-navy/10 uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card - Less rounded, more depth */}
              <div className={`${pkg.color.bg} ${pkg.color.text} rounded-3xl p-10 md:p-12 lg:p-14 h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03] ${pkg.popular ? 'shadow-xl scale-105' : 'shadow-lg'}`}>
                {/* Header */}
                <div className="mb-10">
                  <h3 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{pkg.name}</h3>
                  <p className="text-sm md:text-base opacity-90 font-medium">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price - More dramatic */}
                <div className="mb-10">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-6xl md:text-7xl font-bold tracking-tight">{pkg.price}</span>
                    <span className="text-xl opacity-85 font-medium">{pkg.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg mb-10 leading-relaxed opacity-95 font-normal">
                  {pkg.description}
                </p>

                {/* Features - More spacious */}
                <ul className="space-y-4 mb-12 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="text-base md:text-lg opacity-95 flex items-start gap-3">
                      <span className="text-xl font-bold">•</span>
                      <span className="font-normal">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - More prominent */}
                <Link href={`/packages/${pkg.id}`}>
                  <button className={`w-full py-5 px-8 rounded-full font-bold text-base transition-all duration-300 ${pkg.color.button} hover:shadow-xl hover:scale-105 uppercase tracking-wider`}>
                    Get started
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
