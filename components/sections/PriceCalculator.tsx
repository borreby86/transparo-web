'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Mail,
  Send,
  Search,
  BookOpen,
  PenTool,
  CalendarCheck,
  Languages,
  ChevronDown,
  Sparkles,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────────────────────

type WebsiteType = 'landing' | 'business' | 'large'
type DesignLevel = 'standard' | 'premium'
type Timeline = 'standard' | 'express'

// ─── Config (non-translatable) ──────────────────────────────────────────────

const BASE_PRICES: Record<WebsiteType, number> = {
  landing: 8995,
  business: 16995,
  large: 27995,
}

const FEATURE_PRICES: Record<string, number> = {
  contact: 0,
  social: 0,
  seo: 2000,
  blog: 2500,
  cms: 3000,
  booking: 2500,
  multilang: 3000,
  newsletter: 1500,
}

const INCLUDED_FEATURES = ['contact', 'social']

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  contact: <Mail className="w-4 h-4" />,
  social: <Send className="w-4 h-4" />,
  seo: <Search className="w-4 h-4" />,
  blog: <BookOpen className="w-4 h-4" />,
  cms: <PenTool className="w-4 h-4" />,
  booking: <CalendarCheck className="w-4 h-4" />,
  multilang: <Languages className="w-4 h-4" />,
  newsletter: <Mail className="w-4 h-4" />,
}

const DESIGN_PRICES: Record<DesignLevel, number> = {
  standard: 0,
  premium: 5000,
}

const TIMELINE_MULTIPLIERS: Record<Timeline, number> = {
  standard: 1,
  express: 1.25,
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(price: number): string {
  return price.toLocaleString('da-DK')
}

function getTraditionalPrice(price: number): number {
  return Math.ceil((price * 2.8) / 1000) * 1000
}

// ─── Component ───────────────────────────────────────────────────────────────

export function PriceCalculator() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('priceCalculator')

  const [currentStep, setCurrentStep] = useState(0)
  const [websiteType, setWebsiteType] = useState<WebsiteType | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['contact', 'social'])
  const [designLevel, setDesignLevel] = useState<DesignLevel | null>(null)
  const [timeline, setTimeline] = useState<Timeline | null>(null)
  const [expandedType, setExpandedType] = useState<WebsiteType | null>(null)

  // Optional contact
  const [showContact, setShowContact] = useState(false)
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')

  // Load translated data
  const websiteTypes = t.raw('websiteTypes') as Array<{ id: WebsiteType; label: string; description: string; pages: string; number: string; details: string[] }>
  const features = t.raw('features') as Array<{ id: string; label: string; description: string; included?: boolean }>
  const designLevels = t.raw('designLevels') as Array<{ id: DesignLevel; label: string; description: string; badge: string | null }>
  const timelines = t.raw('timelines') as Array<{ id: Timeline; label: string; description: string }>
  const steps = t.raw('steps') as Array<{ title: string; subtitle: string }>

  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 0: return websiteType !== null
      case 1: return true
      case 2: return designLevel !== null
      case 3: return timeline !== null
      default: return true
    }
  }, [currentStep, websiteType, designLevel, timeline])

  const totalPrice = useMemo(() => {
    if (!websiteType || !designLevel || !timeline) return 0

    const base = BASE_PRICES[websiteType]
    const featuresCost = Object.entries(FEATURE_PRICES)
      .filter(([id]) => selectedFeatures.includes(id) && !INCLUDED_FEATURES.includes(id))
      .reduce((sum, [, price]) => sum + price, 0)
    const design = DESIGN_PRICES[designLevel]
    const timelineMultiplier = TIMELINE_MULTIPLIERS[timeline]

    return Math.round((base + featuresCost + design) * timelineMultiplier)
  }, [websiteType, selectedFeatures, designLevel, timeline])

  const toggleFeature = (id: string) => {
    if (INCLUDED_FEATURES.includes(id)) return
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const next = () => {
    if (canProceed && currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const back = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const motionProps = (delay: number = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  function getRecommendedPackage(total: number): { name: string; match: string } {
    if (total <= 12000) return { name: 'Essentials', match: t('result.recommendations.essentials') }
    if (total <= 22000) return { name: 'Professional', match: t('result.recommendations.professional') }
    return { name: 'Business', match: t('result.recommendations.business') }
  }

  // ─── Render Steps ────────────────────────────────────────────────────────

  const renderWebsiteType = () => (
    <motion.div className="grid gap-5 md:gap-6" {...motionProps()}>
      {websiteTypes.map((type, i) => (
        <motion.div
          key={type.id}
          className="group"
          {...motionProps(i * 0.1)}
        >
          <div
            className={`w-full text-left rounded-2xl border transition-all duration-300 ${
              websiteType === type.id
                ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                : 'border-black/[0.06] bg-white hover:border-gold/40 hover:shadow-md'
            }`}
          >
            <button
              onClick={() => setWebsiteType(type.id)}
              className="w-full text-left p-7 md:p-9"
            >
              <div className="flex items-start gap-5 md:gap-7">
                <span className={`font-serif text-3xl md:text-4xl font-light leading-none transition-colors duration-300 ${
                  websiteType === type.id ? 'text-gold' : 'text-black/15 group-hover:text-gold/50'
                }`}>
                  {type.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="text-lg md:text-xl font-bold text-black">{type.label}</h3>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      websiteType === type.id ? 'border-gold bg-gold' : 'border-black/10'
                    }`}>
                      {websiteType === type.id && <Check className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-warmgray mb-2">{type.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm md:text-base font-bold text-gold">
                      {t('result.from')} {formatPrice(BASE_PRICES[type.id])} {t('result.currency')}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setExpandedType(expandedType === type.id ? null : type.id)
                      }}
                      className="flex items-center gap-1.5 text-xs font-medium text-gold/60 hover:text-gold transition-colors"
                    >
                      <span>{t('whatsIncluded')}</span>
                      <motion.span
                        animate={{ rotate: expandedType === type.id ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        <ArrowRight className="w-3 h-3 rotate-90" />
                      </motion.span>
                    </button>
                  </div>
                </div>
              </div>
            </button>
            {/* Expandable details */}
            <AnimatePresence>
              {expandedType === type.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-7 md:px-9 pb-6 ml-9 md:ml-12">
                    <div className="pt-1 space-y-1.5">
                      {type.details.map((detail, j) => (
                        <div key={j} className="flex items-start gap-2 text-sm text-warmgray">
                          <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const renderFeatures = () => (
    <motion.div className="grid gap-4 md:gap-5 sm:grid-cols-2" {...motionProps()}>
      {features.map((feature, i) => {
        const isIncluded = INCLUDED_FEATURES.includes(feature.id)
        return (
          <motion.button
            key={feature.id}
            onClick={() => toggleFeature(feature.id)}
            className={`group relative text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
              selectedFeatures.includes(feature.id)
                ? isIncluded
                  ? 'border-gold/20 bg-gold/[0.03]'
                  : 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                : 'border-black/[0.06] bg-white hover:border-gold/30 hover:shadow-md'
            } ${isIncluded ? 'cursor-default' : ''}`}
            {...motionProps(i * 0.05)}
            whileHover={shouldReduceMotion || isIncluded ? {} : { y: -2 }}
            whileTap={shouldReduceMotion || isIncluded ? {} : { scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                selectedFeatures.includes(feature.id)
                  ? 'bg-gradient-to-br from-gold/20 to-gold/5 text-gold'
                  : 'bg-black/[0.03] text-black/20 group-hover:text-gold/60 group-hover:bg-gold/[0.06]'
              }`}>
                {FEATURE_ICONS[feature.id]}
              </div>
              <div className="flex-1 min-w-0 pr-5">
                <h4 className="font-bold text-black text-sm md:text-base mb-1">{feature.label}</h4>
                <p className="text-xs md:text-sm text-warmgray leading-relaxed mb-2">{feature.description}</p>
                <span className={`text-xs md:text-sm font-bold ${
                  isIncluded ? 'text-gold/50' : 'text-gold'
                }`}>
                  {isIncluded ? t('included') : `+${formatPrice(FEATURE_PRICES[feature.id])} ${t('result.currency')}`}
                </span>
              </div>
            </div>
            {/* Checkmark */}
            <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              selectedFeatures.includes(feature.id)
                ? 'border-gold bg-gold'
                : 'border-black/10'
            }`}>
              {selectedFeatures.includes(feature.id) && <Check className="w-3 h-3 text-white" />}
            </div>
          </motion.button>
        )
      })}
    </motion.div>
  )

  const renderDesignLevel = () => (
    <motion.div className="grid gap-5 md:gap-6 md:grid-cols-2" {...motionProps()}>
      {designLevels.map((level, i) => (
        <motion.button
          key={level.id}
          onClick={() => setDesignLevel(level.id)}
          className={`group relative text-left p-7 md:p-9 rounded-2xl border transition-all duration-300 ${
            designLevel === level.id
              ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
              : 'border-black/[0.06] bg-white hover:border-gold/40 hover:shadow-md'
          }`}
          {...motionProps(i * 0.1)}
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        >
          <div className="flex flex-col items-center text-center gap-4">
            {level.badge && (
              <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-gold bg-gold/10 px-3 py-1 rounded-full">
                {level.badge}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-black">{level.label}</h3>
            <p className="text-sm text-warmgray leading-relaxed max-w-[260px]">{level.description}</p>
            <span className="text-sm font-bold text-gold">
              {DESIGN_PRICES[level.id] === 0 ? t('includedInBase') : `+${formatPrice(DESIGN_PRICES[level.id])} ${t('result.currency')}`}
            </span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              designLevel === level.id ? 'border-gold bg-gold' : 'border-black/10'
            }`}>
              {designLevel === level.id && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  )

  const renderTimeline = () => (
    <motion.div className="grid gap-5 md:gap-6 md:grid-cols-2" {...motionProps()}>
      {timelines.map((tl, i) => (
        <motion.button
          key={tl.id}
          onClick={() => setTimeline(tl.id as Timeline)}
          className={`group relative text-left p-7 md:p-9 rounded-2xl border transition-all duration-300 ${
            timeline === tl.id
              ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
              : 'border-black/[0.06] bg-white hover:border-gold/40 hover:shadow-md'
          }`}
          {...motionProps(i * 0.1)}
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-black">{tl.label}</h3>
            <p className="text-sm text-warmgray">{tl.description}</p>
            <span className="text-sm font-bold text-gold">
              {TIMELINE_MULTIPLIERS[tl.id as Timeline] === 1 ? t('noSurcharge') : t('expressSurcharge')}
            </span>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
              timeline === tl.id ? 'border-gold bg-gold' : 'border-black/10'
            }`}>
              {timeline === tl.id && <Check className="w-4 h-4 text-white" />}
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  )

  const renderResult = () => {
    const recommendation = getRecommendedPackage(totalPrice)
    const selectedType = websiteTypes.find(wt => wt.id === websiteType)!
    const selectedDesign = designLevels.find(d => d.id === designLevel)!
    const selectedTimeline = timelines.find(tl => tl.id === timeline)!
    const addedFeatures = features.filter(f => selectedFeatures.includes(f.id) && !INCLUDED_FEATURES.includes(f.id))
    const traditionalPrice = getTraditionalPrice(totalPrice)
    const savings = traditionalPrice - totalPrice

    return (
      <motion.div className="space-y-8" {...motionProps()}>
        {/* Price display */}
        <motion.div
          className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-br from-black via-black to-black/90 relative overflow-hidden"
          {...motionProps(0.1)}
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium mb-4">{t('result.estimateLabel')}</p>
            <div className="flex items-baseline justify-center gap-3 mb-2">
              <span className="text-white/40 text-base md:text-lg">{t('result.from')}</span>
              <span className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                {formatPrice(totalPrice)}
              </span>
              <span className="text-white/40 text-base md:text-lg">{t('result.currency')}</span>
            </div>
            <p className="text-white/30 text-sm">{t('result.exclVat')}</p>
          </div>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          className="rounded-2xl overflow-hidden border border-black/[0.06]"
          {...motionProps(0.2)}
        >
          <div className="flex items-center gap-3 px-7 md:px-9 py-5 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent border-b border-gold/10">
            <div className="p-1.5 rounded-lg bg-gold/15">
              <Sparkles className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h3 className="font-bold text-black text-sm">{t('result.recommendedPrefix')} {recommendation.name}{t('result.recommendedSuffix')}</h3>
              <p className="text-xs text-warmgray">{recommendation.match}</p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="p-7 md:p-9 bg-white">
            <h3 className="text-xs uppercase tracking-[0.15em] font-medium text-warmgray mb-5">{t('result.breakdownTitle')}</h3>
            <div className="space-y-0">
              <div className="flex justify-between items-center py-3 border-b border-black/[0.04]">
                <span className="text-sm text-black">{selectedType.label} ({selectedType.pages})</span>
                <span className="text-sm font-bold text-black tabular-nums">{formatPrice(BASE_PRICES[websiteType!])} {t('result.currency')}</span>
              </div>
              {addedFeatures.map(f => (
                <div key={f.id} className="flex justify-between items-center py-3 border-b border-black/[0.04]">
                  <span className="text-sm text-black">{f.label}</span>
                  <span className="text-sm font-bold text-black tabular-nums">+{formatPrice(FEATURE_PRICES[f.id])} {t('result.currency')}</span>
                </div>
              ))}
              {DESIGN_PRICES[designLevel!] > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-black/[0.04]">
                  <span className="text-sm text-black">{t('result.premiumDesign')}</span>
                  <span className="text-sm font-bold text-black tabular-nums">+{formatPrice(DESIGN_PRICES[designLevel!])} {t('result.currency')}</span>
                </div>
              )}
              {TIMELINE_MULTIPLIERS[timeline!] > 1 && (
                <div className="flex justify-between items-center py-3 border-b border-black/[0.04]">
                  <span className="text-sm text-black">{t('result.expressDelivery')}</span>
                  <span className="text-sm font-bold text-gold tabular-nums">
                    +{formatPrice(Math.round((totalPrice / TIMELINE_MULTIPLIERS[timeline!]) * (TIMELINE_MULTIPLIERS[timeline!] - 1)))} {t('result.currency')}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center pt-5">
                <span className="font-bold text-black">{t('result.estimatedTotal')}</span>
                <span className="font-bold text-xl text-gold tabular-nums">{formatPrice(totalPrice)} {t('result.currency')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Traditional agency comparison */}
        <motion.div
          className="p-7 md:p-9 rounded-2xl bg-gradient-to-br from-black via-black to-black/90 relative overflow-hidden"
          {...motionProps(0.35)}
        >
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-white/50 text-xs uppercase tracking-[0.15em] font-medium mb-6">{t('result.compareTitle')}</p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-medium mb-3">{t('result.traditionalAgency')}</p>
                <p className="text-2xl md:text-3xl font-bold text-white/25 line-through tabular-nums">
                  {formatPrice(traditionalPrice)} {t('result.currency')}
                </p>
                <p className="text-xs text-white/30 mt-2">{t('result.traditionalNote')}</p>
              </div>
              <div className="p-5 rounded-xl bg-gold/10 border border-gold/20">
                <p className="text-[10px] uppercase tracking-[0.15em] text-gold font-medium mb-3">{t('result.transparoLabel')}</p>
                <p className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                  {formatPrice(totalPrice)} {t('result.currency')}
                </p>
                <p className="text-xs text-gold/60 mt-2">{t('result.transparoNote')}</p>
              </div>
            </div>

            {/* Savings bar */}
            <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden mb-4">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-gold-light rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${(1 - totalPrice / traditionalPrice) * 100}%` }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <p className="text-sm text-white/50">
              {t('result.savingsText', { savings: formatPrice(savings), percent: Math.round((savings / traditionalPrice) * 100) })}
            </p>
            <p className="text-xs text-white/25 mt-3">
              {t('result.savingsDisclaimer')}
            </p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-sm text-warmgray"
          {...motionProps(0.4)}
        >
          {t('result.disclaimer')}
        </motion.p>

        {/* Optional contact */}
        <motion.div className="space-y-4" {...motionProps(0.5)}>
          {!showContact ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-full font-bold text-base hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
              >
                {t('result.ctaBookMeeting')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setShowContact(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-black/10 text-black rounded-full font-bold text-base hover:bg-black hover:text-white transition-all duration-300"
              >
                {t('result.ctaSendEstimate')}
              </button>
            </div>
          ) : (
            <motion.div
              className="max-w-md mx-auto p-7 rounded-2xl bg-white border border-black/[0.06]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-base font-bold text-black mb-5 text-center">{t('result.emailFormTitle')}</h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder={t('result.emailNamePlaceholder')}
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-offwhite text-black placeholder:text-warmgray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <input
                  type="email"
                  placeholder={t('result.emailPlaceholder')}
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-offwhite text-black placeholder:text-warmgray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <button
                  className="w-full px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-black/80 transition-all duration-300 disabled:opacity-50"
                  disabled={!contactEmail}
                >
                  {t('result.emailSubmitButton')}
                </button>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="w-full mt-3 text-sm text-warmgray hover:text-black transition-colors text-center"
              >
                {t('result.emailCancel')}
              </button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    )
  }

  // ─── Main Render ──────────────────────────────────────────────────────────

  const stepContent = [renderWebsiteType, renderFeatures, renderDesignLevel, renderTimeline, renderResult]

  return (
    <section className="relative min-h-screen py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif text-display-md md:text-display-lg text-black mb-4">
            {t('title')}
          </h1>
          <p className="text-warmgray text-lg max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={shouldReduceMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="flex items-center justify-between mb-3">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i < currentStep) setCurrentStep(i)
                }}
                className={`flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-bold transition-all duration-500 ${
                  i === currentStep
                    ? 'bg-gold text-white scale-110 shadow-lg shadow-gold/20'
                    : i < currentStep
                      ? 'bg-black text-white cursor-pointer hover:bg-black/80'
                      : 'bg-black/[0.06] text-warmgray'
                }`}
              >
                {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
              </button>
            ))}
          </div>
          {/* Progress line */}
          <div className="relative h-0.5 bg-black/[0.06] rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-black via-gold to-gold rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          {/* Step label */}
          <div className="mt-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-1">
              {t('stepLabel', { current: currentStep + 1, total: steps.length })}
            </p>
            <p className="text-sm text-warmgray">{steps[currentStep].subtitle}</p>
          </div>
        </motion.div>

        {/* Step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={shouldReduceMotion ? {} : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {stepContent[currentStep]()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {currentStep < steps.length - 1 && (
          <motion.div
            className="flex items-center justify-between mt-12 md:mt-16"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={back}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-warmgray hover:text-black transition-colors disabled:opacity-0 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('navigation.back')}
            </button>
            <button
              onClick={next}
              disabled={!canProceed}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white text-sm font-bold hover:bg-black/80 hover:shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {t('navigation.next')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Back to edit on result page */}
        {currentStep === steps.length - 1 && (
          <motion.div
            className="flex justify-center mt-10"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={back}
              className="flex items-center gap-2 text-sm font-bold text-warmgray hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('navigation.editChoices')}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
