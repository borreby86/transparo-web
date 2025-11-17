'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const packages = [
  {
    id: 'essentials',
    name: 'Essentials',
    price: '8.995',
    duration: '10-14 dage',
    description: 'Perfekt til startups',
    features: [
      '5 professionelle sider',
      'Mobil-optimeret design',
      'Basis SEO-opsætning',
      'Kontaktformular',
      'Payload CMS',
      '2 revisionsrunder'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '16.995',
    duration: '14-21 dage',
    description: 'For voksende virksomheder',
    popular: true,
    features: [
      '10 sider inkluderet',
      'Avancerede animationer',
      'Blog & portfolio',
      'Fuld SEO-pakke',
      'Analytics integration',
      '3 revisionsrunder'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    price: '27.995',
    duration: '21-28 dage',
    description: 'Enterprise-niveau',
    features: [
      '20+ sider',
      'Multi-language support',
      'E-commerce ready',
      'Premium animationer',
      'Dedikeret support',
      '4 revisionsrunder'
    ]
  }
]

export function PackageCardsMinimal() {
  return (
    <section className="bg-white px-6 md:px-12 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Grid - Simple 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <Link href={`/packages/${pkg.id}`}>
                <div
                  className={`
                    relative p-8 md:p-10 lg:p-12
                    ${
                      pkg.popular
                        ? 'bg-navy text-white'
                        : 'bg-white border border-gray-100'
                    }
                    transition-all duration-300
                    hover:shadow-lg
                  `}
                >
                  {/* Popular badge - minimal */}
                  {pkg.popular && (
                    <div className="absolute -top-px left-8 md:left-10 lg:left-12">
                      <span className="inline-block bg-gold text-navy px-4 py-1 text-xs font-bold uppercase tracking-wider">
                        Populær
                      </span>
                    </div>
                  )}

                  {/* Package name */}
                  <div className="mb-8">
                    <h3
                      className={`text-2xl md:text-3xl font-bold mb-2 ${
                        pkg.popular ? 'text-white' : 'text-navy'
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        pkg.popular ? 'text-white/60' : 'text-navy/50'
                      }`}
                    >
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price - Large and bold */}
                  <div className="mb-8 pb-8 border-b border-current/10">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-5xl md:text-6xl font-black ${
                          pkg.popular ? 'text-gold' : 'text-navy'
                        }`}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={`text-lg ${
                          pkg.popular ? 'text-white/60' : 'text-navy/50'
                        }`}
                      >
                        DKK
                      </span>
                    </div>
                    <p
                      className={`text-sm mt-2 ${
                        pkg.popular ? 'text-white/50' : 'text-navy/40'
                      }`}
                    >
                      {pkg.duration}
                    </p>
                  </div>

                  {/* Features - Clean list */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            pkg.popular ? 'text-gold' : 'text-navy'
                          }`}
                        />
                        <span
                          className={`text-base ${
                            pkg.popular ? 'text-white/90' : 'text-navy/80'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA - Minimal button */}
                  <div
                    className={`
                      flex items-center justify-between py-4 border-t
                      ${pkg.popular ? 'border-white/10' : 'border-gray-100'}
                      group-hover:translate-x-1 transition-transform
                    `}
                  >
                    <span
                      className={`font-semibold ${
                        pkg.popular ? 'text-white' : 'text-navy'
                      }`}
                    >
                      Se detaljer
                    </span>
                    <ArrowRight
                      className={`w-5 h-5 ${
                        pkg.popular ? 'text-gold' : 'text-navy'
                      }`}
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Simple comparison link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/packages/compare"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm font-medium"
          >
            <span>Sammenlign alle features</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
