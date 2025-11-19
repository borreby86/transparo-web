'use client'

import { motion } from 'motion/react'

export function ValuePropSection() {
  return (
    <section className="relative bg-[#0E1D3D] text-white py-32 lg:py-48">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#B89245]/10 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#06392f]/20 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase text-center"
        >
          <span className="block text-transparent stroke-text opacity-50 hover:opacity-100 transition-opacity duration-500"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
            Derfor
          </span>
          <span className="block text-white">
            Vælger
          </span>
          <span className="block text-[#B89245]">
            SMV'er Os
          </span>
        </motion.h2>
      </div>
    </section>
  )
}