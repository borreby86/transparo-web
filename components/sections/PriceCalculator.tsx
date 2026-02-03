'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
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

interface Feature {
  id: string
  label: string
  description: string
  price: number
  icon: React.ReactNode
  included?: boolean
}

// ─── Config ──────────────────────────────────────────────────────────────────

const WEBSITE_TYPES = [
  {
    id: 'landing' as WebsiteType,
    label: 'Landingsside',
    description: '1 side — perfekt til kampagner eller lancering',
    basePrice: 8995,
    pages: '1 side',
    number: '01',
    details: [
      'Responsivt design til alle enheder',
      'Kontaktformular med validering',
      'Hastigheds-optimeret (90+ Lighthouse)',
      'SEO-grundopsætning',
      'SSL-certifikat inkluderet',
      'Google Analytics integration',
    ],
  },
  {
    id: 'business' as WebsiteType,
    label: 'Virksomhedssite',
    description: '3-5 sider — den klassiske virksomhedsprofil',
    basePrice: 16995,
    pages: '3-5 sider',
    number: '02',
    details: [
      'Alt fra Landingsside',
      'Op til 5 undersider',
      'Blog-mulighed',
      'Avanceret SEO-setup med meta tags',
      'Social medie-integration',
      'Interaktive elementer og animationer',
      'Content Management System (CMS)',
    ],
  },
  {
    id: 'large' as WebsiteType,
    label: 'Større website',
    description: '6-10 sider — til virksomheder med mere indhold',
    basePrice: 27995,
    pages: '6-10 sider',
    number: '03',
    details: [
      'Alt fra Virksomhedssite',
      'Op til 10 undersider',
      'Avanceret CMS med multi-collections',
      'Custom funktioner og integrationer',
      'Avancerede animationer og transitions',
      'Flersproget understøttelse mulig',
      'Prioriteret support i 3 måneder',
      'Performance-optimering og caching',
    ],
  },
]

const FEATURES: Feature[] = [
  {
    id: 'contact',
    label: 'Kontaktformular',
    description: 'Professionel kontaktformular med validering',
    price: 0,
    icon: <Mail className="w-4 h-4" />,
    included: true,
  },
  {
    id: 'social',
    label: 'Social medie-integration',
    description: 'Links og feeds fra sociale medier',
    price: 0,
    icon: <Send className="w-4 h-4" />,
    included: true,
  },
  {
    id: 'seo',
    label: 'SEO-optimering',
    description: 'Teknisk SEO, meta tags og struktureret data',
    price: 2000,
    icon: <Search className="w-4 h-4" />,
  },
  {
    id: 'blog',
    label: 'Blog / Nyheder',
    description: 'Blogsektion med kategorier og arkiv',
    price: 2500,
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    id: 'cms',
    label: 'CMS (selv-redigering)',
    description: 'Payload CMS så du selv kan opdatere indhold',
    price: 3000,
    icon: <PenTool className="w-4 h-4" />,
  },
  {
    id: 'booking',
    label: 'Booking-system',
    description: 'Online tidsbestilling integreret i sitet',
    price: 2500,
    icon: <CalendarCheck className="w-4 h-4" />,
  },
  {
    id: 'multilang',
    label: 'Flersproget (DK/EN)',
    description: 'Fuld oversættelse med sprogskifter',
    price: 3000,
    icon: <Languages className="w-4 h-4" />,
  },
  {
    id: 'newsletter',
    label: 'Nyhedsbrev-integration',
    description: 'Mailchimp, Brevo eller lignende integration',
    price: 1500,
    icon: <Mail className="w-4 h-4" />,
  },
]

const DESIGN_LEVELS = [
  {
    id: 'standard' as DesignLevel,
    label: 'Standard',
    description: 'Rent, professionelt design med fokus på brugervenlighed',
    price: 0,
  },
  {
    id: 'premium' as DesignLevel,
    label: 'Premium',
    description: 'Custom animationer, unik branding og ekstra detaljegrad',
    price: 5000,
  },
]

const TIMELINES = [
  {
    id: 'standard' as Timeline,
    label: 'Standard levering',
    description: '2-4 uger — vores normale leveringstid',
    multiplier: 1,
  },
  {
    id: 'express' as Timeline,
    label: 'Express levering',
    description: '1-2 uger — prioriteret behandling',
    multiplier: 1.25,
  },
]

const STEPS = [
  { title: 'Website-type', subtitle: 'Hvad har du brug for?' },
  { title: 'Funktioner', subtitle: 'Vælg de features du ønsker' },
  { title: 'Design-niveau', subtitle: 'Hvor unik skal din side være?' },
  { title: 'Tidslinje', subtitle: 'Hvornår skal det være klar?' },
  { title: 'Dit estimat', subtitle: 'Her er din cirka-pris' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(price: number): string {
  return price.toLocaleString('da-DK')
}

function getRecommendedPackage(total: number): { name: string; match: string } {
  if (total <= 12000) return { name: 'Essentials', match: 'Vores Essentials-pakke passer godt til dit behov' }
  if (total <= 22000) return { name: 'Professional', match: 'Vores Professional-pakke er et godt match' }
  return { name: 'Business', match: 'Vores Business-pakke dækker alt du har brug for' }
}

function getTraditionalPrice(price: number): number {
  // Traditional agencies typically charge 2.5-3x
  return Math.round(price * 2.8)
}

// ─── Component ───────────────────────────────────────────────────────────────

export function PriceCalculator() {
  const shouldReduceMotion = useReducedMotion()
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

  const canProceed = useMemo(() => {
    switch (currentStep) {
      case 0: return websiteType !== null
      case 1: return true // features are optional
      case 2: return designLevel !== null
      case 3: return timeline !== null
      default: return true
    }
  }, [currentStep, websiteType, designLevel, timeline])

  const totalPrice = useMemo(() => {
    if (!websiteType || !designLevel || !timeline) return 0

    const base = WEBSITE_TYPES.find(t => t.id === websiteType)!.basePrice
    const featuresCost = FEATURES
      .filter(f => selectedFeatures.includes(f.id) && !f.included)
      .reduce((sum, f) => sum + f.price, 0)
    const design = DESIGN_LEVELS.find(d => d.id === designLevel)!.price
    const timelineMultiplier = TIMELINES.find(t => t.id === timeline)!.multiplier

    return Math.round((base + featuresCost + design) * timelineMultiplier)
  }, [websiteType, selectedFeatures, designLevel, timeline])

  const toggleFeature = (id: string) => {
    const feature = FEATURES.find(f => f.id === id)
    if (feature?.included) return
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const next = () => {
    if (canProceed && currentStep < STEPS.length - 1) {
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

  // ─── Render Steps ────────────────────────────────────────────────────────

  const renderWebsiteType = () => (
    <motion.div className="grid gap-5 md:gap-6" {...motionProps()}>
      {WEBSITE_TYPES.map((type, i) => (
        <motion.div
          key={type.id}
          className="group"
          {...motionProps(i * 0.1)}
        >
          <button
            onClick={() => setWebsiteType(type.id)}
            className={`w-full text-left p-7 md:p-9 rounded-2xl border transition-all duration-300 ${
              websiteType === type.id
                ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                : 'border-black/[0.06] bg-white hover:border-gold/40 hover:shadow-md'
            }`}
          >
            <div className="flex items-start gap-5 md:gap-7">
              {/* Number instead of icon */}
              <span className={`font-serif text-3xl md:text-4xl font-light leading-none transition-colors duration-300 ${
                websiteType === type.id ? 'text-gold' : 'text-black/15 group-hover:text-gold/50'
              }`}>
                {type.number}
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="text-lg md:text-xl font-bold text-black">{type.label}</h3>
                  <span className="text-sm md:text-base font-bold text-gold">
                    fra {formatPrice(type.basePrice)} DKK
                  </span>
                </div>
                <p className="text-sm md:text-base text-warmgray">{type.description}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                websiteType === type.id ? 'border-gold bg-gold' : 'border-black/10'
              }`}>
                {websiteType === type.id && <Check className="w-4 h-4 text-white" />}
              </div>
            </div>
          </button>
          {/* Read more toggle */}
          <div className="mt-2 ml-14 md:ml-[4.5rem]">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setExpandedType(expandedType === type.id ? null : type.id)
              }}
              className="flex items-center gap-1.5 text-xs font-medium text-warmgray hover:text-black transition-colors"
            >
              <span>Hvad er inkluderet?</span>
              <motion.span
                animate={{ rotate: expandedType === type.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.span>
            </button>
            <AnimatePresence>
              {expandedType === type.id && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 pb-1 space-y-1.5">
                    {type.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-warmgray">
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )

  const renderFeatures = () => (
    <motion.div className="grid gap-3 md:gap-4 sm:grid-cols-2" {...motionProps()}>
      {FEATURES.map((feature, i) => (
        <motion.button
          key={feature.id}
          onClick={() => toggleFeature(feature.id)}
          className={`group relative text-left p-4 md:p-5 rounded-xl border transition-all duration-300 ${
            selectedFeatures.includes(feature.id)
              ? feature.included
                ? 'border-black/10 bg-black/[0.02]'
                : 'border-gold bg-gold/5 shadow-md shadow-gold/10'
              : 'border-black/[0.06] bg-white hover:border-gold/40 hover:shadow-sm'
          } ${feature.included ? 'cursor-default' : ''}`}
          {...motionProps(i * 0.05)}
          whileHover={shouldReduceMotion || feature.included ? {} : { y: -1 }}
          whileTap={shouldReduceMotion || feature.included ? {} : { scale: 0.98 }}
        >
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${
              selectedFeatures.includes(feature.id)
                ? feature.included ? 'bg-black/5 text-black/40' : 'bg-gold/10 text-gold'
                : 'bg-offwhite text-warmgray'
            }`}>
              {feature.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-0.5">
                <h4 className="font-bold text-black text-sm md:text-base truncate">{feature.label}</h4>
                <span className={`text-xs md:text-sm font-bold whitespace-nowrap ${
                  feature.included ? 'text-black/40' : 'text-gold'
                }`}>
                  {feature.included ? 'Inkluderet' : `+${formatPrice(feature.price)} DKK`}
                </span>
              </div>
              <p className="text-xs md:text-sm text-warmgray leading-snug">{feature.description}</p>
            </div>
          </div>
          {/* Checkmark */}
          <div className={`absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            selectedFeatures.includes(feature.id)
              ? feature.included ? 'border-black/30 bg-black/30' : 'border-gold bg-gold'
              : 'border-black/10'
          }`}>
            {selectedFeatures.includes(feature.id) && <Check className="w-3 h-3 text-white" />}
          </div>
        </motion.button>
      ))}
    </motion.div>
  )

  const renderDesignLevel = () => (
    <motion.div className="grid gap-5 md:gap-6 md:grid-cols-2" {...motionProps()}>
      {DESIGN_LEVELS.map((level, i) => (
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
          <div className="flex flex-col items-center text-center gap-5">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-black">{level.label}</h3>
            <p className="text-sm text-warmgray">{level.description}</p>
            <span className="text-sm font-bold text-gold">
              {level.price === 0 ? 'Inkluderet i basispris' : `+${formatPrice(level.price)} DKK`}
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
      {TIMELINES.map((tl, i) => (
        <motion.button
          key={tl.id}
          onClick={() => setTimeline(tl.id)}
          className={`group relative text-left p-7 md:p-9 rounded-2xl border transition-all duration-300 ${
            timeline === tl.id
              ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
              : 'border-black/[0.06] bg-white hover:border-gold/40 hover:shadow-md'
          }`}
          {...motionProps(i * 0.1)}
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        >
          <div className="flex flex-col items-center text-center gap-5">
            <h3 className="font-serif text-2xl md:text-3xl font-light text-black">{tl.label}</h3>
            <p className="text-sm text-warmgray">{tl.description}</p>
            <span className="text-sm font-bold text-gold">
              {tl.multiplier === 1 ? 'Ingen tillæg' : '+25% express-tillæg'}
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
    const selectedType = WEBSITE_TYPES.find(t => t.id === websiteType)!
    const selectedDesign = DESIGN_LEVELS.find(d => d.id === designLevel)!
    const selectedTimeline = TIMELINES.find(t => t.id === timeline)!
    const addedFeatures = FEATURES.filter(f => selectedFeatures.includes(f.id) && !f.included)
    const traditionalPrice = getTraditionalPrice(totalPrice)
    const savings = traditionalPrice - totalPrice

    return (
      <motion.div className="space-y-8" {...motionProps()}>
        {/* Price display */}
        <motion.div
          className="text-center p-10 md:p-14 rounded-3xl bg-gradient-to-br from-black via-black to-black/90 relative overflow-hidden"
          {...motionProps(0.1)}
        >
          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium mb-4">Dit estimat</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-white/40 text-lg md:text-xl font-light">fra ca.</span>
              <span className="text-5xl md:text-7xl font-serif font-light bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent">
                {formatPrice(totalPrice)}
              </span>
              <span className="text-white/40 text-lg md:text-xl font-light">DKK</span>
            </div>
            <p className="text-white/30 text-sm">ekskl. moms</p>
          </div>
        </motion.div>

        {/* Recommendation */}
        <motion.div
          className="p-6 rounded-2xl bg-gold/5 border border-gold/20"
          {...motionProps(0.2)}
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-gold" />
            <h3 className="font-bold text-black">Anbefalet pakke: {recommendation.name}</h3>
          </div>
          <p className="text-sm text-warmgray">{recommendation.match}</p>
        </motion.div>

        {/* Breakdown */}
        <motion.div
          className="p-7 md:p-9 rounded-2xl bg-white border border-black/[0.06]"
          {...motionProps(0.3)}
        >
          <h3 className="font-serif text-xl text-black mb-5">Prissammensætning</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2.5 border-b border-black/[0.06]">
              <span className="text-sm text-black">{selectedType.label} ({selectedType.pages})</span>
              <span className="text-sm font-bold text-black">{formatPrice(selectedType.basePrice)} DKK</span>
            </div>
            {addedFeatures.map(f => (
              <div key={f.id} className="flex justify-between items-center py-2.5 border-b border-black/[0.06]">
                <span className="text-sm text-black">{f.label}</span>
                <span className="text-sm font-bold text-black">+{formatPrice(f.price)} DKK</span>
              </div>
            ))}
            {selectedDesign.price > 0 && (
              <div className="flex justify-between items-center py-2.5 border-b border-black/[0.06]">
                <span className="text-sm text-black">Premium design</span>
                <span className="text-sm font-bold text-black">+{formatPrice(selectedDesign.price)} DKK</span>
              </div>
            )}
            {selectedTimeline.multiplier > 1 && (
              <div className="flex justify-between items-center py-2.5 border-b border-black/[0.06]">
                <span className="text-sm text-black">Express-levering (+25%)</span>
                <span className="text-sm font-bold text-gold">
                  +{formatPrice(Math.round((totalPrice / selectedTimeline.multiplier) * (selectedTimeline.multiplier - 1)))} DKK
                </span>
              </div>
            )}
            <div className="flex justify-between items-center pt-4">
              <span className="font-bold text-black">Estimeret total</span>
              <span className="font-bold text-lg text-gold">{formatPrice(totalPrice)} DKK</span>
            </div>
          </div>
        </motion.div>

        {/* Traditional agency comparison */}
        <motion.div
          className="p-7 md:p-9 rounded-2xl bg-black/[0.02] border border-black/[0.06]"
          {...motionProps(0.35)}
        >
          <h3 className="font-serif text-xl text-black mb-6">Hvad ville dette koste hos et traditionelt bureau?</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Traditional price */}
            <div className="p-5 rounded-xl bg-white border border-black/[0.06]">
              <p className="text-xs uppercase tracking-[0.15em] text-warmgray font-medium mb-2">Traditionelt bureau</p>
              <p className="text-2xl md:text-3xl font-serif font-light text-black/30 line-through">
                {formatPrice(traditionalPrice)} DKK
              </p>
              <p className="text-xs text-warmgray mt-1">Estimeret markedspris</p>
            </div>
            {/* Transparo price */}
            <div className="p-5 rounded-xl bg-gold/5 border border-gold/20">
              <p className="text-xs uppercase tracking-[0.15em] text-gold font-medium mb-2">Transparo</p>
              <p className="text-2xl md:text-3xl font-serif font-light text-black">
                {formatPrice(totalPrice)} DKK
              </p>
              <p className="text-xs text-warmgray mt-1">Samme kvalitet, smartere proces</p>
            </div>
          </div>
          {/* Savings bar */}
          <div className="relative h-2 bg-black/5 rounded-full overflow-hidden mb-3">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold to-gold-light rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(1 - totalPrice / traditionalPrice) * 100}%` }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <p className="text-sm text-warmgray">
            Du sparer ca. <span className="font-bold text-gold">{formatPrice(savings)} DKK</span> — det er{' '}
            <span className="font-bold text-gold">{Math.round((savings / traditionalPrice) * 100)}%</span> mindre end markedsprisen.
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-sm text-warmgray"
          {...motionProps(0.4)}
        >
          Den endelige pris aftales ved en uforpligtende samtale, hvor vi gennemgår dine behov i detaljer.
        </motion.p>

        {/* Optional contact */}
        <motion.div className="space-y-4" {...motionProps(0.5)}>
          {!showContact ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-black rounded-full font-bold text-base hover:shadow-xl hover:shadow-gold/20 transition-all duration-300"
              >
                Book et uforpligtende møde
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setShowContact(true)}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-black/10 text-black rounded-full font-bold text-base hover:bg-black hover:text-white transition-all duration-300"
              >
                Send mig estimatet
              </button>
            </div>
          ) : (
            <motion.div
              className="max-w-md mx-auto p-7 rounded-2xl bg-white border border-black/[0.06]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-serif text-lg text-black mb-5 text-center">Modtag dit estimat på mail</h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Dit navn"
                  value={contactName}
                  onChange={e => setContactName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-offwhite text-black placeholder:text-warmgray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <input
                  type="email"
                  placeholder="Din email"
                  value={contactEmail}
                  onChange={e => setContactEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-black/[0.08] bg-offwhite text-black placeholder:text-warmgray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
                <button
                  className="w-full px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-black/80 transition-all duration-300 disabled:opacity-50"
                  disabled={!contactEmail}
                >
                  Send estimat
                </button>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="w-full mt-3 text-sm text-warmgray hover:text-black transition-colors text-center"
              >
                Annuller
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
            Prisberegner
          </h1>
          <p className="text-warmgray text-lg max-w-xl mx-auto">
            Få et hurtigt estimat på din nye hjemmeside. Ingen forpligtelser, fuld gennemsigtighed.
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
            {STEPS.map((step, i) => (
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
              animate={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          {/* Step label */}
          <div className="mt-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-gold mb-1">
              Trin {currentStep + 1} af {STEPS.length}
            </p>
            <p className="text-sm text-warmgray">{STEPS[currentStep].subtitle}</p>
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
        {currentStep < STEPS.length - 1 && (
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
              Tilbage
            </button>
            <button
              onClick={next}
              disabled={!canProceed}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-black text-white text-sm font-bold hover:bg-black/80 hover:shadow-lg transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Næste
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Back to edit on result page */}
        {currentStep === STEPS.length - 1 && (
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
              Rediger dine valg
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
