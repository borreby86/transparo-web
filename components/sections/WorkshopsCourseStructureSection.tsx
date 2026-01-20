'use client'

import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRef } from 'react'
import { Video, Calendar, UserCheck, Plus } from 'lucide-react'

const courseSteps = [
  {
    icon: Video,
    phase: 'Før kursusdagen',
    title: '1 times online intro',
    description: 'Vi installerer det nødvendige sammen, så du er klar til at gå i gang på selve kursusdagen.',
    color: 'gold',
  },
  {
    icon: Calendar,
    phase: 'Kursusdag',
    title: 'Kl. 10.00–16.30',
    description: 'Vekslen mellem fælles gennemgang og tid til at arbejde på din egen side med personlig hjælp. Vi er 2-10 deltagere, så der er tid til dig. Du går hjem med en fungerende hjemmeside.',
    color: 'navy',
  },
  {
    icon: UserCheck,
    phase: 'Efter kurset',
    title: '1 times individuel opfølgning',
    description: 'Vi gennemgår din side og løser de sidste spørgsmål.',
    color: 'gold',
  },
  {
    icon: Plus,
    phase: 'Tilkøb',
    title: 'Klippekort',
    description: '3×30 min til når du vil udvide eller ændre noget.',
    color: 'navy',
    isAddOn: true,
  },
]

export function WorkshopsCourseStructureSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section ref={containerRef} className="relative py-28 md:py-36 lg:py-44 bg-offwhite overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-navy/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Kursets forløb
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy">
            Kursets opbygning
          </h2>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line - Desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 w-0.5 bg-navy/10" />
            <motion.div
              className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-gold via-gold to-navy origin-top"
              style={{
                scaleY: shouldReduceMotion ? 1 : lineScaleY,
                height: '100%'
              }}
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-navy/20 md:hidden" />

          <div className="space-y-12 md:space-y-16">
            {courseSteps.map((step, index) => {
              const isEven = index % 2 === 0
              const accentColor = step.color === 'gold' ? '#B89245' : '#0E1D3D'

              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.8,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative"
                >
                  {/* Mobile layout */}
                  <div className="md:hidden pl-14 relative">
                    <div className="absolute left-[18px] top-10 w-4 h-4 rounded-full bg-white border-2 shadow-lg z-10"
                      style={{ borderColor: accentColor }}
                    />
                    <StepCard step={step} Icon={step.icon} accentColor={accentColor} shouldReduceMotion={shouldReduceMotion} />
                  </div>

                  {/* Desktop layout */}
                  <div className={`hidden md:grid md:grid-cols-2 gap-12 items-center`}>
                    <div className={isEven ? 'md:pr-16' : 'md:order-2 md:pl-16'}>
                      <StepCard
                        step={step}
                        Icon={step.icon}
                        accentColor={accentColor}
                        shouldReduceMotion={shouldReduceMotion}
                        alignRight={isEven}
                      />
                    </div>

                    <div className={isEven ? 'md:order-2 md:pl-16' : 'md:pr-16'}>
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.2 }}
                      >
                        <span className="font-display text-[100px] lg:text-[140px] font-bold text-navy/[0.04] select-none">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        className="w-5 h-5 rounded-full bg-white shadow-lg border-2"
                        style={{ borderColor: accentColor }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  step,
  Icon,
  accentColor,
  shouldReduceMotion,
  alignRight = false
}: {
  step: typeof courseSteps[0]
  Icon: typeof Video
  accentColor: string
  shouldReduceMotion: boolean | null
  alignRight?: boolean
}) {
  return (
    <motion.div
      className={`relative ${alignRight ? 'text-right' : ''}`}
      whileHover={shouldReduceMotion ? {} : { y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`relative bg-white rounded-3xl p-8 shadow-lg overflow-hidden ${step.isAddOn ? 'border-2 border-dashed border-gold/30' : ''}`}>
        {/* Accent line */}
        <motion.div
          className={`absolute ${alignRight ? 'right-0' : 'left-0'} top-0 bottom-0 w-1 rounded-full`}
          style={{ backgroundColor: accentColor }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        {/* Gradient background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: step.color === 'gold'
              ? 'linear-gradient(135deg, rgba(184,146,69,0.05) 0%, transparent 60%)'
              : 'linear-gradient(135deg, rgba(14,29,61,0.05) 0%, transparent 60%)'
          }}
        />

        <div className={`relative z-10 ${alignRight ? 'flex flex-col items-end' : ''}`}>
          <motion.div
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
            style={{ backgroundColor: accentColor }}
            whileHover={shouldReduceMotion ? {} : { rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          <span className="text-sm font-bold uppercase tracking-wider mb-2 block" style={{ color: accentColor }}>
            {step.phase}
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-navy mb-3">
            {step.title}
          </h3>
          <p className="text-navy/60 leading-relaxed text-lg">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
