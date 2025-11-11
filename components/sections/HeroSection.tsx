'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false)
    }, 3200) // After typewriter completes + small delay

    return () => {
      clearTimeout(introTimer)
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          // Intro Animation - Typewriter
          <motion.section
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          >
            <div className="font-sans font-black leading-none tracking-tight text-black whitespace-nowrap">
              {'transparo.'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: 0.3 + index * 0.12,
                    ease: 'linear',
                  }}
                  className={
                    letter === '.'
                      ? 'text-gold text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] inline-block'
                      : 'text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] inline-block'
                  }
                >
                  {letter}
                </motion.span>
              ))}
              {/* Blinking cursor */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: 3,
                  ease: 'linear',
                  delay: 0.3,
                }}
                className="text-gold text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] inline-block ml-2"
              >
                |
              </motion.span>
            </div>
          </motion.section>
        ) : (
          // Main Hero Section
          <motion.section
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white min-h-screen flex items-center overflow-hidden"
          >
            {/* Abstract background elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.03 }}
              transition={{ duration: 2 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent"
            />

            {/* Floating abstract shape */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-navy/[0.02] rounded-full blur-3xl"
            />

            {/* Main Hero Content */}
            <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Small logo */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-8"
                  >
                    <span className="font-sans font-black text-4xl text-black">
                      transparo<span className="text-gold">.</span>
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
                  >
                    Unique designs.
                    <br />
                    <span className="text-gold">Built on trust.</span>
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg sm:text-xl text-black/60 mb-8 leading-relaxed max-w-xl"
                  >
                    Vi designer og udvikler professionelle websites til danske SMV'er med faste
                    priser, ingen scope creep, og levering på 4 uger.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button className="group bg-navy text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-navy/90 transition-all hover:gap-4">
                      Se vores pakker
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all">
                      Book et møde
                    </button>
                  </motion.div>

                  {/* Trust indicators */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-12 flex flex-wrap items-center gap-8 text-sm text-black/40"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span>Fast pris</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span>4 ugers levering</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span>Ingen scope creep</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right: Visual element */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative hidden lg:block"
                >
                  {/* Abstract geometric shapes */}
                  <div className="relative w-full aspect-square">
                    <motion.div
                      animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-navy/10 to-gold/10 rounded-3xl backdrop-blur-sm"
                    />
                    <motion.div
                      animate={{
                        y: [10, -10, 10],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                      className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-gold/20 to-navy/10 rounded-3xl backdrop-blur-sm"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-navy/20 rounded-3xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute bottom-12 left-6 sm:left-12 md:left-16 lg:left-24 xl:left-32 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-[1px] h-12 bg-black/30"
              />
              <span className="text-xs tracking-wider text-black/30 -rotate-90 origin-left">
                SCROLL
              </span>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
