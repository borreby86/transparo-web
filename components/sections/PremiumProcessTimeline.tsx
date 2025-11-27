'use client'

import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRef } from 'react'
import { Target, Palette, MessageSquare, Code, CheckCircle, Rocket } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Start & Strategi',
    subtitle: 'Indledende Møde',
    description: 'Vi mødes og definerer sammen, hvad dit website skal levere. Vi sikrer, at vi er helt enige om den bedste vej frem.',
    icon: Target,
    color: 'gold'
  },
  {
    number: '02',
    title: 'Designudkast',
    subtitle: 'Første Look',
    description: 'Vi præsenterer de første visuelle udkast. Du får konkrete designforslag, der bringer strategien til live.',
    icon: Palette,
    color: 'navy'
  },
  {
    number: '03',
    title: '1. Feedback',
    subtitle: 'Din Justering',
    description: 'Din chance for at give feedback. Vi finjusterer detaljerne, så designet rammer plet.',
    icon: MessageSquare,
    color: 'gold'
  },
  {
    number: '04',
    title: 'Vi bygger & Tester',
    subtitle: 'Godkendelse til Kodning',
    description: 'Selve kodningen går i gang. Vi tester grundigt, så alt virker perfekt, inden det er dit.',
    icon: Code,
    color: 'navy'
  },
  {
    number: '05',
    title: '2. Feedback',
    subtitle: 'Sidste Finpudsning',
    description: 'De sidste små ændringer og korrektioner. Vi sikrer, at alt er, som det skal være.',
    icon: CheckCircle,
    color: 'gold'
  },
  {
    number: '06',
    title: 'Lancering & Træning',
    subtitle: 'Nøglen Overdrages',
    description: 'Dit nye website er live! Vi giver dig fuld træning i at bruge systemet og overdrager dig fuld ejendomsret.',
    icon: Rocket,
    color: 'navy'
  }
]

export function PremiumProcessTimeline() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  // Scroll-driven line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1])

  return (
    <section ref={containerRef} className="relative bg-white py-32 md:py-48 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gold/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-navy/5 rounded-full blur-[150px]"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(14,29,61,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,29,61,.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="text-center max-w-[1800px] mx-auto px-6 mb-20 md:mb-28"
      >
        <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
          Vores Proces
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
          6 trin til dit drømmewebsite
        </h2>
        <p className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto">
          En gennemsigtig proces hvor du altid ved, hvad der sker
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        {/* Animated Vertical Line - Desktop only */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 hidden md:block">
          {/* Background line (full height, subtle) */}
          <div className="absolute inset-0 w-0.5 bg-navy/10" />

          {/* Animated progress line */}
          <motion.div
            className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-gold via-gold to-navy origin-top"
            style={{
              scaleY: shouldReduceMotion ? 1 : lineScaleY,
              height: '100%'
            }}
          />
        </div>

        {/* Mobile line - static */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-navy/20 md:hidden" />

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative"
              >
                {/* Mobile layout */}
                <div className="md:hidden pl-14 relative">
                  {/* Connection dot - Mobile */}
                  <div className="absolute left-[18px] top-8 w-4 h-4 rounded-full bg-white border-2 border-gold shadow-lg z-10" />

                  <StepCard step={step} Icon={Icon} shouldReduceMotion={shouldReduceMotion} />
                </div>

                {/* Desktop layout - Alternating */}
                <div className={`hidden md:grid md:grid-cols-2 gap-8 md:gap-16 items-center`}>
                  {/* Content - alternates sides */}
                  <div className={isEven ? 'md:pr-16 md:text-right' : 'md:order-2 md:pl-16'}>
                    <StepCard
                      step={step}
                      Icon={Icon}
                      shouldReduceMotion={shouldReduceMotion}
                      alignRight={isEven}
                    />
                  </div>

                  {/* Visual element - alternates sides */}
                  <div className={isEven ? 'md:order-2 md:pl-16' : 'md:pr-16'}>
                    <motion.div
                      className="relative flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 1,
                        delay: shouldReduceMotion ? 0 : 0.2,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      {/* Large number background */}
                      <span className="font-serif text-[120px] lg:text-[160px] font-bold text-navy/[0.06] select-none">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Connection dot - Desktop */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className="w-5 h-5 rounded-full bg-white shadow-lg border-2"
                      style={{
                        borderColor: step.color === 'gold' ? '#B89245' : '#0E1D3D'
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.3
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="text-center mt-20 md:mt-28 px-6"
      >
        <p className="text-lg md:text-xl text-black/60 mb-8">
          Klar til at starte din rejse?
        </p>
        <motion.a
          href="/kontakt"
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
          className="inline-flex items-center gap-3 px-10 py-5 bg-navy text-white rounded-full font-bold text-lg shadow-xl shadow-navy/20 hover:shadow-2xl hover:shadow-navy/30 hover:bg-navy/90 transition-all duration-300"
        >
          <span>Start dit projekt</span>
          <Rocket className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}

// Step Card Component
function StepCard({
  step,
  Icon,
  shouldReduceMotion,
  alignRight = false
}: {
  step: typeof processSteps[0]
  Icon: typeof Target
  shouldReduceMotion: boolean | null
  alignRight?: boolean
}) {
  const isGold = step.color === 'gold'
  const accentColor = isGold ? '#B89245' : '#0E1D3D'

  return (
    <motion.div
      className={`relative ${alignRight ? 'text-right' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Content card with animated border */}
      <motion.div
        className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl overflow-hidden"
        variants={{
          hidden: {
            boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
          },
          visible: {
            boxShadow: isGold
              ? '0 20px 50px -10px rgba(184,146,69,0.25)'
              : '0 20px 50px -10px rgba(14,29,61,0.2)',
          }
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Animated color accent line */}
        <motion.div
          className={`absolute ${alignRight ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 rounded-full`}
          style={{ backgroundColor: accentColor }}
          variants={{
            hidden: { scaleY: 0, opacity: 0 },
            visible: { scaleY: 1, opacity: 1 }
          }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtle gradient background that fades in */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isGold
              ? 'linear-gradient(135deg, rgba(184,146,69,0.03) 0%, transparent 60%)'
              : 'linear-gradient(135deg, rgba(14,29,61,0.03) 0%, transparent 60%)'
          }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Icon with animated entrance */}
        <motion.div
          className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
            alignRight ? 'float-right ml-4' : ''
          }`}
          style={{ backgroundColor: accentColor }}
          variants={{
            hidden: { scale: 0.5, opacity: 0, rotate: -180 },
            visible: { scale: 1, opacity: 1, rotate: 0 }
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={shouldReduceMotion ? {} : { rotate: 360, scale: 1.1 }}
        >
          <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
        </motion.div>

        <div className={`relative z-10 ${alignRight ? 'clear-right' : ''}`}>
          {/* Number badge with color animation */}
          <motion.span
            className="inline-block text-sm font-bold uppercase tracking-wider mb-2"
            style={{ color: accentColor }}
            variants={{
              hidden: { opacity: 0, x: alignRight ? 20 : -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Trin {step.number}
          </motion.span>

          {/* Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-navy mb-1"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {step.title}
          </motion.h3>

          {/* Subtitle with accent color */}
          <motion.p
            className="text-sm font-medium mb-4"
            style={{ color: accentColor }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {step.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-black/70 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            {step.description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}
