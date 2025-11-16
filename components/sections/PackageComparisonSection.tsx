'use client'

import { motion } from 'motion/react'
import { Check, X } from 'lucide-react'
import Link from 'next/link'

interface Feature {
  category: string
  items: {
    name: string
    essentials: boolean | string
    professional: boolean | string
    business: boolean | string
  }[]
}

const features: Feature[] = [
  {
    category: 'Design & Udvikling',
    items: [
      { name: 'Antal sider', essentials: '5 sider', professional: '10 sider', business: '20+ sider' },
      { name: 'Mobil-responsive design', essentials: true, professional: true, business: true },
      { name: 'Custom designsystem', essentials: false, professional: true, business: true },
      { name: 'Avancerede animationer', essentials: false, professional: true, business: true },
      { name: 'Premium Motion effects', essentials: false, professional: false, business: true }
    ]
  },
  {
    category: 'CMS & Content',
    items: [
      { name: 'Payload CMS', essentials: true, professional: true, business: true },
      { name: 'Blog funktionalitet', essentials: false, professional: true, business: true },
      { name: 'Portfolio system', essentials: false, professional: true, business: true },
      { name: 'Multi-language support', essentials: false, professional: false, business: true },
      { name: 'E-commerce integration', essentials: false, professional: false, business: true }
    ]
  },
  {
    category: 'SEO & Performance',
    items: [
      { name: 'Basis SEO-opsætning', essentials: true, professional: true, business: true },
      { name: 'Fuld SEO-pakke', essentials: false, professional: true, business: true },
      { name: 'Performance optimering', essentials: true, professional: true, business: true },
      { name: 'Analytics integration', essentials: false, professional: true, business: true },
      { name: 'Advanced tracking setup', essentials: false, professional: false, business: true }
    ]
  },
  {
    category: 'Support & Vedligeholdelse',
    items: [
      { name: 'CMS training', essentials: '30 min', professional: '45 min', business: '60 min' },
      { name: 'Dokumentation', essentials: 'Basis', professional: 'Fuld', business: 'Premium' },
      { name: 'Support efter lancering', essentials: '2 uger', professional: '4 uger', business: '8 uger' },
      { name: 'Revisionsrunder', essentials: '2 runder', professional: '3 runder', business: '4 runder' }
    ]
  },
  {
    category: 'Timeline & Levering',
    items: [
      { name: 'Leveringstid', essentials: '10-14 dage', professional: '14-21 dage', business: '21-28 dage' },
      { name: 'Prioriteret support', essentials: false, professional: true, business: true },
      { name: 'Dedikeret projektmanager', essentials: false, professional: false, business: true }
    ]
  }
]

export function PackageComparisonSection() {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-6 h-6 text-gold mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    return <span className="text-sm font-medium text-navy">{value}</span>
  }

  return (
    <section className="bg-navy px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
              Sammenlign <span className="text-gold">pakker</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
              Se præcis hvad der er inkluderet i hver pakke
            </p>
          </motion.div>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-offwhite border-b border-gray-200">
              <div className="font-display font-bold text-lg text-navy">Features</div>
              <div className="text-center">
                <div className="font-display font-bold text-xl text-navy mb-1">Essentials</div>
                <div className="text-3xl font-black text-navy">8.995</div>
                <div className="text-sm text-warmgray">DKK</div>
              </div>
              <div className="text-center bg-gold/10 -m-6 p-6 border-x-2 border-gold">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="font-display font-bold text-xl text-navy">Professional</div>
                  <span className="px-2 py-0.5 bg-gold text-white text-[10px] font-bold uppercase rounded">
                    Popular
                  </span>
                </div>
                <div className="text-3xl font-black text-gold">16.995</div>
                <div className="text-sm text-warmgray">DKK</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-xl text-navy mb-1">Business</div>
                <div className="text-3xl font-black text-navy">27.995</div>
                <div className="text-sm text-warmgray">DKK</div>
              </div>
            </div>

            {/* Table Body */}
            {features.map((featureGroup, groupIndex) => (
              <div key={groupIndex} className="border-b border-gray-100 last:border-b-0">
                {/* Category Header */}
                <div className="bg-navy/5 px-6 py-4">
                  <h3 className="font-display font-bold text-lg text-navy">{featureGroup.category}</h3>
                </div>

                {/* Features */}
                {featureGroup.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="text-navy font-medium">{item.name}</div>
                    <div className="text-center">{renderCell(item.essentials)}</div>
                    <div className="text-center bg-gold/5">{renderCell(item.professional)}</div>
                    <div className="text-center">{renderCell(item.business)}</div>
                  </motion.div>
                ))}
              </div>
            ))}

            {/* CTA Row */}
            <div className="grid grid-cols-4 gap-4 p-6 bg-offwhite">
              <div />
              <Link
                href="/packages/essentials"
                className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-all text-center text-sm"
              >
                Vælg Essentials
              </Link>
              <Link
                href="/packages/professional"
                className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all text-center text-sm"
              >
                Vælg Professional
              </Link>
              <Link
                href="/packages/business"
                className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-all text-center text-sm"
              >
                Vælg Business
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Mobile Version - Card-based */}
        <div className="lg:hidden space-y-6">
          {['essentials', 'professional', 'business'].map((packageId, pkgIndex) => {
            const packageName = packageId.charAt(0).toUpperCase() + packageId.slice(1)
            const packagePrice = packageId === 'essentials' ? '8.995' : packageId === 'professional' ? '16.995' : '27.995'
            const isPopular = packageId === 'professional'

            return (
              <motion.div
                key={packageId}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pkgIndex * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden ${isPopular ? 'ring-2 ring-gold' : ''}`}
              >
                {/* Header */}
                <div className={`p-6 ${isPopular ? 'bg-gold' : 'bg-navy'} text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-2xl">{packageName}</h3>
                    {isPopular && (
                      <span className="px-3 py-1 bg-white text-gold text-xs font-bold uppercase rounded-full">
                        Populær
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black">{packagePrice}</span>
                    <span className="text-lg">DKK</span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 space-y-4">
                  {features.map((group) =>
                    group.items.map((item) => {
                      const value = item[packageId as keyof typeof item]
                      return (
                        <div key={item.name} className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-sm text-navy font-medium">{item.name}</span>
                          {renderCell(value)}
                        </div>
                      )
                    })
                  )}
                </div>

                {/* CTA */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/packages/${packageId}`}
                    className={`block w-full ${isPopular ? 'bg-gold text-navy' : 'bg-navy text-white'} px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-center`}
                  >
                    Vælg {packageName}
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
