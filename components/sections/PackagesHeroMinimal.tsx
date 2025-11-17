'use client'

import { motion } from 'motion/react'

export function PackagesHeroMinimal() {
  return (
    <section className="bg-white px-6 md:px-12 py-32 md:py-40 lg:py-48">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline - Apple-style massive typography */}
          <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-navy mb-8 md:mb-12 leading-[0.95] tracking-tight">
            Vælg din pakke
          </h1>

          {/* Subtitle - Clean and direct */}
          <p className="text-xl sm:text-2xl md:text-3xl text-navy/60 max-w-3xl mx-auto font-light leading-relaxed">
            Fast pris. Hurtig levering. Ingen overraskelser.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
