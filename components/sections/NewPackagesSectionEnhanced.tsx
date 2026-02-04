'use client'

import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Check, Star, ArrowRight, Clock, Sparkles } from 'lucide-react'

// Custom geometric icons for each package tier
const EssentialsIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
    <rect
      x="25"
      y="25"
      width="50"
      height="50"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      transform="rotate(45 50 50)"
    />
    <circle cx="50" cy="50" r="8" fill="currentColor" />
  </svg>
)

const ProfessionalIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 15 L70 35 L70 65 L50 85 L30 65 L30 35 Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M50 30 L60 45 L60 60 L50 70 L40 60 L40 45 Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <circle cx="50" cy="50" r="6" fill="currentColor" />
  </svg>
)

const BusinessIcon = () => (
  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 10 L75 25 L85 50 L75 75 L50 90 L25 75 L15 50 L25 25 Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    <path
      d="M50 25 L65 35 L70 50 L65 65 L50 75 L35 65 L30 50 L35 35 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
  </svg>
)

interface PackageData {
  id: string;
  name: string;
  price: string;
  duration: string;
  description: string;
  popular?: boolean;
  highlights: string[];
}

interface AddonData {
  name: string;
  price: string;
}

// Icon mapping by package id
const iconMap: Record<string, React.FC> = {
  essentials: EssentialsIcon,
  professional: ProfessionalIcon,
  business: BusinessIcon,
}

const accentColorMap: Record<string, string> = {
  essentials: 'navy',
  professional: 'gold',
  business: 'navy',
}

const patternMap: Record<string, string> = {
  essentials: 'dots',
  professional: 'hexagons',
  business: 'octagons',
}

export function NewPackagesSectionEnhanced() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('packages.newSectionEnhanced')

  const packages = t.raw('packages') as PackageData[]
  const addons = t.raw('addons') as AddonData[]

  return (
    <section id="pakker" className="py-20 sm:py-24 md:py-32 lg:py-40 bg-offwhite relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 sm:w-96 md:w-[520px] h-72 sm:h-96 md:h-[520px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 sm:w-96 md:w-[520px] h-72 sm:h-96 md:h-[520px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 mb-5 sm:mb-7"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
            <span className="text-sm sm:text-base font-medium text-gold uppercase tracking-wider">
              {t('badge')}
            </span>
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
          </motion.div>

          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] text-navy mb-5">
            {t('heading')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-warmgray max-w-4xl mx-auto">
            {t('subtitle')}
            <span className="block mt-3 text-base sm:text-lg text-warmgray/80">
              {t('subtitleSecondary')}
            </span>
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {packages.map((pkg, index) => {
            const Icon = iconMap[pkg.id] || EssentialsIcon
            const accentColor = accentColorMap[pkg.id] || 'navy'
            const pattern = patternMap[pkg.id] || 'dots'
            return (
              <motion.div
                key={pkg.id}
                className="relative group"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.15
                }}
              >
                {/* Popular badge */}
                {pkg.popular && (
                  <div className="absolute -top-2 sm:-top-3 lg:-top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-gold text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-lg">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        {t('popularBadge')}
                      </span>
                    </div>
                  </div>
                )}

                <Link href="/pakker">
                  <div
                    className={`
                    relative h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[620px] p-6 sm:p-8 lg:p-10 xl:p-12 rounded-[28px] overflow-hidden transition-all duration-500
                    ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-navy via-navy to-navy/95 text-white shadow-2xl'
                        : 'bg-white border-2 border-gray-200 hover:border-gold/40 shadow-lg'
                    }
                    hover:-translate-y-2 hover:shadow-2xl cursor-pointer
                  `}
                  >
                    {/* Subtle background pattern */}
                    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${pkg.popular ? 'opacity-[0.05]' : ''}`}>
                      <div className={`w-full h-full ${pattern === 'dots' ? 'bg-[radial-gradient(circle,currentColor_1px,transparent_1px)] bg-[size:20px_20px]' : pattern === 'hexagons' ? 'bg-[url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0l10 5.77v11.54L20 23.08l-10-5.77V5.77z\' fill=\'%23000\' /%3E%3C/svg%3E")]' : 'bg-[url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpolygon points=\'25,5 45,15 45,35 25,45 5,35 5,15\' fill=\'%23000\' /%3E%3C/svg%3E")]'}`} />
                    </div>

                    {/* Custom Geometric Icon */}
                    <div className="mb-6 relative">
                      <motion.div
                        className={`w-16 h-16 sm:w-20 sm:h-20 ${pkg.popular ? 'text-gold' : 'text-navy'}`}
                        whileHover={{ rotate: 180, scale: 1.1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                      >
                        <Icon />
                      </motion.div>
                    </div>

                    {/* Package name and description */}
                    <div className="mb-8">
                      <h3
                        className={`text-3xl sm:text-4xl font-display font-bold mb-3 ${
                          pkg.popular ? 'text-white' : 'text-navy'
                        }`}
                      >
                        {pkg.name}
                      </h3>
                      <p className={`text-base ${pkg.popular ? 'text-white/80' : 'text-warmgray'}`}>
                        {pkg.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ${
                            pkg.popular ? 'text-gold' : 'text-navy'
                          }`}
                        >
                          {pkg.price}
                        </span>
                        <span className={`text-base sm:text-lg md:text-xl ${pkg.popular ? 'text-white/70' : 'text-warmgray'}`}>
                          DKK
                        </span>
                      </div>
                      <p className={`text-sm mt-3 ${pkg.popular ? 'text-white/60' : 'text-warmgray/80'}`}>
                        {t('fixedPrice')}
                      </p>
                    </div>

                    {/* Delivery time */}
                    <div
                      className={`flex items-center gap-3 mb-10 pb-8 border-b ${
                        pkg.popular ? 'border-white/20' : 'border-gray-200'
                      }`}
                    >
                      <Clock className={`w-4 h-4 ${pkg.popular ? 'text-white/60' : 'text-warmgray'}`} />
                      <span className={`text-base ${pkg.popular ? 'text-white/80' : 'text-warmgray'}`}>
                        {t('deliveryLabel', { duration: pkg.duration })}
                      </span>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4 mb-12">
                      {pkg.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check
                            className={`w-6 h-6 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-gold' : 'text-green-600'}`}
                          />
                          <span className={`text-base ${pkg.popular ? 'text-white/90' : 'text-navy'}`}>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className={`
                      w-full py-4 px-8 text-lg font-semibold text-center
                      flex items-center justify-center gap-2 transition-all
                      ${pkg.popular ? 'bg-gold text-navy hover:bg-gold/90' : 'bg-navy text-white hover:bg-navy/90'}
                    `}
                    >
                      <span>{t('cta')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Animated border on hover - only for non-popular */}
                    {!pkg.popular && (
                      <div className="absolute inset-0 rounded-[28px] border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    )}
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison link */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/pakker" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors group">
            <span className="text-lg sm:text-xl font-medium">{t('compareLink')}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Add-ons section */}
        <motion.div
          className="mt-20 sm:mt-24 pt-20 sm:pt-24 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-navy text-center mb-10 sm:mb-12">
            {t('addonsTitle')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                className="text-center p-6 sm:p-8 bg-white rounded-2xl border border-gray-200 hover:border-gold/40 hover:shadow-lg transition-all"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-semibold text-navy mb-2">{addon.name}</h4>
                <p className="text-2xl text-gold font-bold">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
