'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      setAnimationComplete(true)
    }, 2500) // When tagline appears

    return () => {
      clearTimeout(completeTimer)
    }
  }, [])

  return (
    <section className="relative bg-offwhite min-h-screen flex items-center justify-center overflow-hidden">
      <div className="text-center">
        {/* Animated logo text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl"
        >
          {/* Each letter animates in */}
          {'transparo.'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.1,
                ease: 'easeOut',
              }}
              className={letter === '.' ? 'text-gold' : 'text-black'}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline fades in after logo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={animationComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm md:text-base text-black/60 mt-4 tracking-wide"
        >
          Unique designs • Built on trust
        </motion.p>
      </div>
    </section>
  )
}
