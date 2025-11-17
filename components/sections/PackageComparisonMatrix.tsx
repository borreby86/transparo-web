'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'

const features = [
  {
    category: 'Indhold & Sider',
    items: [
      { name: 'Antal sider', essentials: '5 sider', professional: '10 sider', business: '20+ sider' },
      { name: 'CMS (Payload)', essentials: true, professional: true, business: true },
      { name: 'Blog & Portfolio', essentials: false, professional: true, business: true },
      { name: 'Multi-language', essentials: false, professional: false, business: true },
    ]
  },
  {
    category: 'Design & Animationer',
    items: [
      { name: 'Mobil-optimeret', essentials: true, professional: true, business: true },
      { name: 'Basis animationer', essentials: true, professional: true, business: true },
      { name: 'Avancerede animationer', essentials: false, professional: true, business: true },
      { name: 'Custom scroll effekter', essentials: false, professional: false, business: true },
    ]
  },
  {
    category: 'SEO & Performance',
    items: [
      { name: 'Basis SEO', essentials: true, professional: true, business: true },
      { name: 'Fuld SEO optimering', essentials: false, professional: true, business: true },
      { name: 'Analytics setup', essentials: false, professional: true, business: true },
    ]
  },
  {
    category: 'Support & Service',
    items: [
      { name: 'CMS træning', essentials: '30 min', professional: '45 min', business: '60 min' },
      { name: 'Revisionsrunder', essentials: '2 runder', professional: '3 runder', business: '4 runder' },
      { name: 'Premium support', essentials: false, professional: false, business: true },
      { name: 'E-commerce integration', essentials: false, professional: false, business: true },
    ]
  }
]

export function PackageComparisonMatrix() {
  return (
    <section className="relative bg-white px-6 md:px-16 lg:px-24 py-24 md:py-36 lg:py-44">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - More dramatic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-light italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy mb-6 leading-tight">
            Sammenlign{' '}
            <span className="text-navy/25">pakker</span>
          </h2>
          <p className="text-xl md:text-2xl text-navy/50 font-light max-w-2xl">
            Se præcis hvad der er inkluderet i hver pakke
          </p>
        </motion.div>

        {/* Desktop Table - High contrast with clear borders */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="border-2 border-navy/10 rounded-2xl overflow-hidden bg-white shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="border-b-2 border-navy/10">
                  <th className="text-left py-8 px-8 w-1/4">
                    <span className="text-sm font-bold text-navy uppercase tracking-wider">Features</span>
                  </th>
                  <th className="text-center py-8 px-6 border-l-2 border-navy/10 w-1/4">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-navy-dark mb-2 tracking-tight">Essentials</span>
                      <span className="text-sm text-navy-dark font-bold bg-warmgray-light/30 px-3 py-1 rounded-full">8.995 DKK</span>
                    </div>
                  </th>
                  <th className="text-center py-8 px-6 border-l-2 border-r-2 border-navy/10 bg-navy/5 w-1/4">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-bold text-white bg-navy px-4 py-2 rounded-full mb-3 uppercase tracking-wider shadow-lg">Most Popular</span>
                      <span className="text-2xl font-bold text-navy mb-2 tracking-tight">Professional</span>
                      <span className="text-sm text-white font-bold bg-navy px-3 py-1 rounded-full">16.995 DKK</span>
                    </div>
                  </th>
                  <th className="text-center py-8 px-6 border-l-2 border-navy/10 w-1/4">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-navy-dark mb-2 tracking-tight">Enterprise</span>
                      <span className="text-sm text-navy-dark font-bold bg-gold/30 px-3 py-1 rounded-full">27.995 DKK</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={`category-${categoryIndex}`}>
                    {/* Category Header */}
                    <tr className="bg-navy/5">
                      <td colSpan={4} className="pt-6 pb-4 px-8 border-t-2 border-navy/10">
                        <span className="text-sm font-bold text-navy uppercase tracking-wider">
                          {category.category}
                        </span>
                      </td>
                    </tr>
                    {/* Category Items */}
                    {category.items.map((item, itemIndex) => (
                      <tr
                        key={`item-${categoryIndex}-${itemIndex}`}
                        className="border-t border-navy/5 hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-5 px-8">
                          <span className="text-base text-navy font-semibold">{item.name}</span>
                        </td>
                        <td className="py-5 px-6 text-center border-l-2 border-navy/10">
                          {typeof item.essentials === 'boolean' ? (
                            item.essentials ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-warmgray-light/30">
                                <Check className="w-5 h-5 text-navy-dark" strokeWidth={3} />
                              </div>
                            ) : (
                              <span className="text-gray-400 text-2xl">—</span>
                            )
                          ) : (
                            <span className="text-sm text-navy-dark font-bold">{item.essentials}</span>
                          )}
                        </td>
                        <td className="py-5 px-6 text-center border-l-2 border-r-2 border-navy/10 bg-navy/5">
                          {typeof item.professional === 'boolean' ? (
                            item.professional ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-navy/20">
                                <Check className="w-5 h-5 text-navy" strokeWidth={3} />
                              </div>
                            ) : (
                              <span className="text-gray-400 text-2xl">—</span>
                            )
                          ) : (
                            <span className="text-sm text-navy font-bold">{item.professional}</span>
                          )}
                        </td>
                        <td className="py-5 px-6 text-center border-l-2 border-navy/10">
                          {typeof item.business === 'boolean' ? (
                            item.business ? (
                              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold/30">
                                <Check className="w-5 h-5 text-navy-dark" strokeWidth={3} />
                              </div>
                            ) : (
                              <span className="text-gray-400 text-2xl">—</span>
                            )
                          ) : (
                            <span className="text-sm text-navy-dark font-bold">{item.business}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <p className="text-sm font-medium text-navy mb-3">{item.name}</p>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="text-center">
                        <p className="text-navy-dark/70 mb-1 font-semibold">Essentials</p>
                        {typeof item.essentials === 'boolean' ? (
                          item.essentials ? (
                            <Check className="w-4 h-4 text-navy-dark mx-auto" strokeWidth={2.5} />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-navy-dark/90">{item.essentials}</span>
                        )}
                      </div>
                      <div className="text-center bg-navy/10 rounded-lg py-2">
                        <p className="text-navy/70 mb-1 font-semibold">Professional</p>
                        {typeof item.professional === 'boolean' ? (
                          item.professional ? (
                            <Check className="w-4 h-4 text-navy mx-auto" strokeWidth={2.5} />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-navy/90">{item.professional}</span>
                        )}
                      </div>
                      <div className="text-center">
                        <p className="text-navy-dark/70 mb-1 font-semibold">Enterprise</p>
                        {typeof item.business === 'boolean' ? (
                          item.business ? (
                            <Check className="w-4 h-4 text-navy-dark mx-auto" strokeWidth={2.5} />
                          ) : (
                            <span className="text-gray-300">—</span>
                          )
                        ) : (
                          <span className="text-navy-dark/90">{item.business}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
