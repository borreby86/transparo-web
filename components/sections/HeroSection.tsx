'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  // Subtle parallax effects - much gentler for smooth scrolling
  const yFloat = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Animation timing
  const mainWord = "transparo."
  const tagline = ["Unique", "designs", "•", "Built", "on", "trust"]

  // Apple-like easing - quick and confident
  const appleEase = [0.25, 0.1, 0.25, 1] as const

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: appleEase }}
        className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated gradient background - Subtle parallax */}
        <motion.div
          style={{ y: yFloat }}
          className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform"
        >
          {/* Gradient orbs - Slower, more deliberate breathing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.02, 0.04, 0.02],
              x: [0, 20, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-[10%] right-[15%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] bg-gold rounded-full blur-3xl will-change-transform"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.015, 0.03, 0.015],
              x: [0, -30, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] bg-gold/60 rounded-full blur-3xl will-change-transform"
          />
          {/* Additional subtle orb for depth */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.01, 0.025, 0.01],
              x: [0, 15, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-gold/30 rounded-full blur-3xl will-change-transform"
          />
        </motion.div>

        {/* Subtle particle effect - static for performance */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(black_1px,transparent_1px)] bg-[size:20px_20px]" />

        {/* Main Hero Content - No scroll transforms for smooth scrolling */}
        <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-4 sm:px-8">
          <div className="w-full mx-auto text-center max-w-7xl">
            {/* Main headline - "transparo." with clip-path reveal animation */}
            <div className="mb-6 md:mb-8 lg:mb-12 overflow-visible">
              <motion.h1
                className="font-display font-black text-black leading-[0.85] tracking-tighter whitespace-nowrap"
                style={{
                  fontSize: 'clamp(3rem, 12vw, 18rem)',
                }}
                initial={{
                  clipPath: 'inset(0 100% 0 0)',
                }}
                animate={{
                  clipPath: 'inset(0 0% 0 0)',
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {mainWord}
              </motion.h1>
            </div>

            {/* Tagline - "Unique designs • Built on trust" - word by word reveal */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gold/80 mb-8 md:mb-12">
              {tagline.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: 1.2 + index * 0.015,
                    ease: appleEase,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8, ease: appleEase }}
              className="mb-10 md:mb-12"
            >
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black/80 font-medium leading-relaxed max-w-4xl mx-auto">
                Vi bygger professionelle websites til små virksomheder{' '}
                <span className="text-gold font-semibold">med fast pris</span> og{' '}
                <span className="text-gold font-semibold">levering på 10-28 dage</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1, ease: appleEase }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              <a
                href="/pakker"
                className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-bold text-base hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Se Vores Pakker
              </a>
              <a
                href="/kontakt"
                className="w-full sm:w-auto bg-white text-navy px-8 py-4 rounded-full font-bold text-base hover:bg-offwhite transition-all border-2 border-navy/10"
              >
                Book et Møde
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4, ease: appleEase }}
              className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-black/60"
            >
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Fast pris garanti</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Ingen scope creep</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% tilfredse kunder</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mouse scroll indicator - Refined and elegant */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 2.5,
            ease: appleEase
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            className="flex flex-col items-center gap-3 cursor-pointer"
            data-cursor-hover
          >
            {/* Elegant mouse icon */}
            <div className="w-7 h-11 border border-gold/20 rounded-full relative backdrop-blur-sm">
              <motion.div
                animate={{
                  y: [0, 14, 0],
                  opacity: [0.8, 0, 0.8],
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
                className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold/40 rounded-full"
              />
            </div>
            <motion.span
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5
              }}
              className="text-[10px] text-gold/30 uppercase tracking-[0.25em] font-light"
            >
              Explore
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
