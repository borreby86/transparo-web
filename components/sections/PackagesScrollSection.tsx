'use client'

import { Button } from '@/components/ui/Button'
import { motion, useReducedMotion } from 'motion/react'
import { Check, X, Star, ArrowRight, Zap } from 'lucide-react'

export function PackagesScrollSection() {
  const shouldReduceMotion = useReducedMotion()

  const features = [
    { label: 'Antal sider', essentials: '5', professional: '10', business: '20+' },
    { label: 'Leveringstid', essentials: '10-14 dage', professional: '14-21 dage', business: '21-28 dage' },
    { label: 'Revisioner', essentials: '2', professional: '3', business: '4+' },
    { label: 'CMS', essentials: true, professional: true, business: true },
    { label: 'Blog', essentials: false, professional: true, business: true },
    { label: 'SEO', essentials: 'Basis', professional: 'Avanceret', business: 'Enterprise' },
    { label: 'Support', essentials: '14 dage', professional: '30 dage', business: '60 dage' },
    { label: 'CRM integration', essentials: false, professional: false, business: true },
    { label: 'Analytics', essentials: 'Google Analytics', professional: 'GA + Hotjar', business: 'Custom Dashboard' },
    { label: 'Performance', essentials: 'Standard', professional: 'Optimeret', business: 'Ultra-fast CDN' },
  ]

  return (
    <section className="relative bg-offwhite py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-black mb-4">
            Vælg din pakke
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            Fast pris. Klar leveringstid. Ingen overraskelser.
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:block bg-white rounded-2xl overflow-hidden"
          style={{
            boxShadow: shouldReduceMotion
              ? '0 1px 3px rgba(0,0,0,0.1)'
              : '0 10px 40px rgba(0, 0, 0, 0.08)',
          }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="px-6 py-8 text-left">
                    <span className="font-display font-light text-sm text-black/50 uppercase tracking-wider">
                      Sammenlign pakker
                    </span>
                  </th>
                  <th className="px-6 py-8 text-center">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-navy">ESSENTIALS</h3>
                      <div className="text-2xl font-bold text-navy">8.995 DKK</div>
                      <div className="text-xs text-black/50 uppercase tracking-wider">Fast pris</div>
                    </div>
                  </th>
                  <th className="px-6 py-8 text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        MEST POPULÆR
                      </div>
                    </div>
                    <div className="space-y-2 pt-4">
                      <h3 className="font-display font-bold text-lg text-navy">PROFESSIONAL</h3>
                      <div className="text-2xl font-bold text-gold">16.995 DKK</div>
                      <div className="text-xs text-black/50 uppercase tracking-wider">Fast pris</div>
                    </div>
                  </th>
                  <th className="px-6 py-8 text-center">
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-lg text-navy">BUSINESS</h3>
                      <div className="text-2xl font-bold text-navy">27.995 DKK</div>
                      <div className="text-xs text-black/50 uppercase tracking-wider">Fast pris</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      {feature.label}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(feature.essentials)}
                    </td>
                    <td className="px-6 py-4 text-center bg-gold/5">
                      {renderFeatureValue(feature.professional, true)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {renderFeatureValue(feature.business)}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <td className="px-6 py-6"></td>
                  <td className="px-6 py-6 text-center">
                    <Button
                      href="/kontakt"
                      variant="outline"
                      size="md"
                      className="inline-flex items-center gap-2"
                    >
                      Se detaljer
                    </Button>
                  </td>
                  <td className="px-6 py-6 text-center bg-gold/5">
                    <Button
                      href="/kontakt"
                      variant="primary"
                      size="md"
                      className="inline-flex items-center gap-2"
                    >
                      Book møde
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <Button
                      href="/kontakt"
                      variant="outline"
                      size="md"
                      className="inline-flex items-center gap-2"
                    >
                      Book møde
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </motion.div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-8">
          {/* Essentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
              <h3 className="font-display font-bold text-xl text-navy mb-2">ESSENTIALS</h3>
              <div className="text-3xl font-bold text-navy">8.995 DKK</div>
              <div className="text-xs text-black/50 uppercase tracking-wider mt-1">Fast pris</div>
            </div>
            <div className="p-6 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-medium text-navy">{feature.label}</span>
                  <span className="text-sm">{renderFeatureValue(feature.essentials, false, true)}</span>
                </div>
              ))}
              <Button href="/kontakt" variant="outline" size="md" fullWidth className="mt-6">
                Se detaljer
              </Button>
            </div>
          </motion.div>

          {/* Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl border-2 border-gold overflow-hidden relative shadow-md"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                MEST POPULÆR
              </div>
            </div>
            <div className="bg-gradient-to-r from-gold/10 to-gold/20 p-6 text-center pt-8">
              <h3 className="font-display font-bold text-xl text-navy mb-2">PROFESSIONAL</h3>
              <div className="text-3xl font-bold text-gold">16.995 DKK</div>
              <div className="text-xs text-black/50 uppercase tracking-wider mt-1">Fast pris</div>
            </div>
            <div className="p-6 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-medium text-navy">{feature.label}</span>
                  <span className="text-sm font-medium">{renderFeatureValue(feature.professional, true, true)}</span>
                </div>
              ))}
              <Button href="/kontakt" variant="primary" size="md" fullWidth className="mt-6">
                Book møde <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Business */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-center">
              <h3 className="font-display font-bold text-xl text-navy mb-2">BUSINESS</h3>
              <div className="text-3xl font-bold text-navy">27.995 DKK</div>
              <div className="text-xs text-black/50 uppercase tracking-wider mt-1">Fast pris</div>
            </div>
            <div className="p-6 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm font-medium text-navy">{feature.label}</span>
                  <span className="text-sm">{renderFeatureValue(feature.business, false, true)}</span>
                </div>
              ))}
              <Button href="/kontakt" variant="outline" size="md" fullWidth className="mt-6">
                Book møde <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-navy">
              Alle pakker inkluderer custom design og zero scope creep garanti
            </span>
          </div>
          <p className="text-black/60 mb-6">
            <span className="font-semibold">Tilvalg:</span> Webshop (+6.995 DKK) • Multi-sprog (+5.995 DKK) • Booking system (+3.995 DKK)
          </p>
          <Button href="/pakker" variant="outline" size="md">
            Se fuld funktionsoversigt
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function to render feature values
function renderFeatureValue(value: boolean | string, isProfessional?: boolean, isMobile?: boolean) {
  if (typeof value === 'boolean') {
    if (value) {
      return (
        <div className={`inline-flex items-center justify-center ${isMobile ? '' : 'w-full'}`}>
          <Check
            className={`w-5 h-5 ${isProfessional ? 'text-gold' : 'text-green-600'}`}
            strokeWidth={2.5}
          />
        </div>
      )
    } else {
      return (
        <div className={`inline-flex items-center justify-center ${isMobile ? '' : 'w-full'}`}>
          <X className="w-5 h-5 text-gray-300" strokeWidth={2} />
        </div>
      )
    }
  }
  return (
    <span className={`text-sm ${isProfessional ? 'font-medium text-black' : 'text-black/70'}`}>
      {value}
    </span>
  )
}