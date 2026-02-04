'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function InvestmentSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Progressive reveal transforms
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0])
  const y1 = useTransform(scrollYProgress, [0, 0.25], ['0%', '-20%'])

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.5], [0, 1, 0])
  const scale2 = useTransform(scrollYProgress, [0.2, 0.35], [0.8, 1])

  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0])
  const scale3 = useTransform(scrollYProgress, [0.45, 0.6], [0.8, 1])

  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1])
  const scale4 = useTransform(scrollYProgress, [0.7, 0.85], [0.9, 1])
  const y4 = useTransform(scrollYProgress, [0.7, 0.85], ['30px', '0px'])

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-navy">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-black" />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[150px]"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Screen 1: The Hook */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 1 : opacity1,
            y: shouldReduceMotion ? 0 : y1
          }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gold/80 text-lg md:text-xl mb-8 tracking-wide"
            >
              Tænk over det...
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              Dit website er det første,{' '}
              <br className="hidden md:block" />
              dine kunder ser.
            </h2>
          </div>
        </motion.div>

        {/* Screen 2: The Problem */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 0 : opacity2,
            scale: shouldReduceMotion ? 1 : scale2
          }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-5xl">
            <p className="text-white/40 text-lg md:text-xl mb-8 tracking-wide">
              Og alligevel...
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              De fleste websites ser{' '}
              <span className="text-white/30">ens ud.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto">
              Kedelige templates. Generiske løsninger. Ingen personlighed.
            </p>
          </div>
        </motion.div>

        {/* Screen 3: The Solution */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 0 : opacity3,
            scale: shouldReduceMotion ? 1 : scale3
          }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-5xl">
            <p className="text-gold text-lg md:text-xl mb-8 tracking-wide uppercase tracking-[0.2em]">
              Det ændrer vi
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Dit brand.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-400 to-gold">
                Dit design.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
              100% skræddersyet. Ingen templates. Ingen kompromiser.
            </p>
          </div>
        </motion.div>

        {/* Screen 4: CTA */}
        <motion.div
          style={{
            opacity: shouldReduceMotion ? 0 : opacity4,
            scale: shouldReduceMotion ? 1 : scale4,
            y: shouldReduceMotion ? 0 : y4
          }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="text-center max-w-5xl">
            <motion.span
              className="inline-block text-gold text-sm md:text-base font-bold uppercase tracking-[0.3em] mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Klar til at komme i gang?
            </motion.span>

            <div className="relative mb-8">
              <h2 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9]">
                <span className="text-white">Lad os </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-300 to-gold">
                  tale sammen.
                </span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-white/50 max-w-xl mx-auto mb-12">
              Book en uforpligtende samtale og hør hvordan vi kan hjælpe dig.
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/kontakt"
                className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-navy font-bold text-lg hover:bg-gold hover:text-white transition-all duration-500 shadow-2xl shadow-white/10"
              >
                <span>Book et møde</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-white/30 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span>Hurtig levering</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span>Feedbackrunder inkl.</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/50" />
                <span>100% tilfredshedsgaranti</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - only on first screen */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
