'use client'

import { motion } from 'motion/react'
import { useState, useEffect, useTransition } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const [isPending, startTransition] = useTransition()

  // Animation timing
  const mainWord = "transparo."
  const tagline = ["Unique", "designs", "•", "Built", "on", "trust"]

  // Typewriter effect - optimized with useTransition
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < mainWord.length && !shouldReduceMotion) {
      const timeout = setTimeout(() => {
        startTransition(() => {
          setDisplayedText(prev => prev + mainWord[currentIndex])
          setCurrentIndex(prev => prev + 1)
        })
      }, 100)
      return () => clearTimeout(timeout)
    } else if (shouldReduceMotion && currentIndex === 0) {
      // Show all text immediately if reduced motion
      setDisplayedText(mainWord)
      setCurrentIndex(mainWord.length)
    }
  }, [currentIndex, mainWord, shouldReduceMotion])

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* CSS-only animated gradient background - Much more performant */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Use CSS animations instead of Motion for background effects */}
        <div className="hero-gradient-orb hero-gradient-orb-1" />
        <div className="hero-gradient-orb hero-gradient-orb-2" />
        <div className="hero-gradient-orb hero-gradient-orb-3" />
      </div>

      {/* Subtle particle effect */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(black_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Main Hero Content */}
      <div className="relative z-10 w-full flex items-center justify-center min-h-screen px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full text-center">
          {/* Main headline */}
          <div className="mb-8 md:mb-12 lg:mb-16">
            <motion.h1
              className="font-display font-black text-black leading-[0.85] tracking-tighter"
              style={{
                fontSize: 'clamp(3rem, 12vw, 16rem)',
                letterSpacing: '-0.04em',
              }}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              {displayedText}
              {currentIndex < mainWord.length && !shouldReduceMotion && (
                <span className="text-gold animate-pulse">|</span>
              )}
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.div
            className="mb-12 md:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 1.2
            }}
          >
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gold/80">
              {tagline.map((word, index) => (
                <span key={index} className="inline-block">
                  {word}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 1.6
            }}
          >
            <a
              href="/pakker"
              className="group relative px-8 py-4 bg-black text-white rounded-full font-medium text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Se priser</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-navy opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="/cases"
              className="px-8 py-4 border-2 border-black text-black rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300"
            >
              Se cases
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 2
            }}
          >
            <div className="flex flex-col items-center gap-2 text-black/40">
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-black/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.02; }
          50% { transform: translate(20px, -15px) scale(1.15); opacity: 0.04; }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.015; }
          50% { transform: translate(-30px, 20px) scale(1.25); opacity: 0.03; }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.01; }
          50% { transform: translate(calc(-50% + 15px), calc(-50% + 0px)) scale(1.1); opacity: 0.025; }
        }

        .hero-gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          will-change: transform;
        }

        .hero-gradient-orb-1 {
          top: 10%;
          right: 15%;
          width: clamp(300px, 50vw, 700px);
          height: clamp(300px, 50vw, 700px);
          background: #D4AF37;
          animation: float1 12s ease-in-out infinite;
          animation-delay: 1s;
        }

        .hero-gradient-orb-2 {
          bottom: 20%;
          left: 10%;
          width: clamp(250px, 45vw, 600px);
          height: clamp(250px, 45vw, 600px);
          background: rgba(212, 175, 55, 0.6);
          animation: float2 15s ease-in-out infinite;
          animation-delay: 2s;
        }

        .hero-gradient-orb-3 {
          top: 50%;
          left: 50%;
          width: clamp(350px, 60vw, 800px);
          height: clamp(350px, 60vw, 800px);
          background: rgba(212, 175, 55, 0.3);
          animation: float3 18s ease-in-out infinite;
          animation-delay: 3s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-gradient-orb {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
