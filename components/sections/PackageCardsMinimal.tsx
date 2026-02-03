'use client'

import { motion } from 'motion/react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Check, ArrowRight } from 'lucide-react'

interface PackageData {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export function PackageCardsMinimal() {
  const t = useTranslations('packages.cardsMinimal')

  const packages = t.raw('packages') as PackageData[]

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
              <Link href="/pakker">
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
                        {t('popularBadge')}
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
                      {t('seeDetails')}
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
            href="/pakker"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm font-medium"
          >
            <span>{t('compareLink')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
