'use client'

import { motion } from 'motion/react'

export function ProcessHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="text-navy/40 text-sm uppercase tracking-[0.2em] font-medium">
              Vores Proces
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-navy mb-12 leading-[0.9] tracking-tight"
          >
            Fra ide til
            <br />
            lancering
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-baseline gap-6 mb-16"
          >
            <div className="w-16 h-px bg-gold" />
            <p className="text-xl md:text-2xl text-navy/60 font-light max-w-2xl">
              En transparent og struktureret proces i syv faser.
              <br />
              Levering på 2-4 uger.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-3 gap-px bg-navy/10 w-fit"
          >
            {[
              { number: '07', label: 'Faser' },
              { number: '2-4', label: 'Uger' },
              { number: '100%', label: 'Gennemsigtighed' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8">
                <div className="text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-sm text-navy/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
