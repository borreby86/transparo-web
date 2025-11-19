'use client'

import { motion } from 'motion/react'

export function PackagesHeroThreekit() {
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-gray-50/30 px-6 md:px-16 lg:px-24 pt-40 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden">
      {/* Subtle background elements for depth */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-navy rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#C4B896] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* Italic headline - Threekit style - MASSIVE */}
          <h1 className="font-light italic text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-navy mb-8 md:mb-12 leading-[0.9] tracking-tight">
            Simpel{' '}
            <span className="block text-gold mt-2 md:mt-4">prissætning</span>
          </h1>

          {/* Subtitle - more prominent */}
          <p className="text-2xl sm:text-3xl md:text-4xl text-navy/50 font-light max-w-lg leading-relaxed">
            Vælg den pakke der passer til dine behov
          </p>
        </motion.div>
      </div>
    </section>
  )
}
