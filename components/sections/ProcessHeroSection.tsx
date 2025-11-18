'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function ProcessHeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center bg-offwhite overflow-hidden">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        style={{ y, opacity }}
      >
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center">

            {/* Small label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="mb-8 md:mb-12"
            >
              <span className="text-sm md:text-base text-warmgray/60 uppercase tracking-[0.3em] font-light">
                Proces / 7 Faser / 2-4 Uger
              </span>
            </motion.div>

            {/* Main headline - Massive and minimal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="font-display leading-[0.85] tracking-[-0.04em] mb-8 md:mb-12"
            >
              <span
                className="block text-navy"
                style={{ fontSize: 'clamp(4rem, 15vw, 18rem)' }}
              >
                Fra idé
              </span>
              <span
                className="block text-navy"
                style={{ fontSize: 'clamp(4rem, 15vw, 18rem)' }}
              >
                til virkelighed
              </span>
            </motion.h1>

            {/* Subtle description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-warmgray/60 font-light leading-relaxed mb-16"
            >
              En gennemsigtig og struktureret proces hvor hver fase
              er nøje planlagt for at maksimere værdi og minimere tid.
            </motion.p>

            {/* Minimal CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <a
                href="#fase-1"
                className="group inline-flex items-center gap-8 text-navy hover:text-gold transition-colors duration-500"
              >
                <span className="text-base md:text-lg font-medium tracking-wide">Udforsk processen</span>
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  <div className="absolute inset-0 border border-navy/20 rounded-full group-hover:border-gold/40 transition-colors duration-500" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 5V19M12 19L5 12M12 19L19 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </div>
              </a>
            </motion.div>

            {/* Process preview - Minimal numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1.6,
                delay: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="absolute bottom-12 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            >
              <div className="max-w-[1800px] mx-auto">
                <div className="grid grid-cols-7 gap-2 md:gap-4">
                  {[
                    'Opdagelse',
                    'Struktur',
                    'Design',
                    'Udvikling',
                    'Test',
                    'Lancering',
                    'Support'
                  ].map((phase, index) => (
                    <motion.div
                      key={phase}
                      className="relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 1.4 + index * 0.05,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                    >
                      <div className="text-center">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-light text-navy/10 mb-1">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="text-[8px] md:text-[10px] text-warmgray/40 uppercase tracking-wider hidden md:block">
                          {phase}
                        </div>
                      </div>
                      {/* Connecting line */}
                      {index < 6 && (
                        <div className="absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-navy/10 to-transparent -translate-y-1/2" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating geometric shapes - Very subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border border-navy/5 rounded-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full border border-gold/5" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
        </motion.div>
      </div>
    </section>
  )
}
