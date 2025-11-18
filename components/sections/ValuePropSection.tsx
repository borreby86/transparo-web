'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import Image from 'next/image'

// Top 3 case study highlights with real metrics
const whyUsCards = [
  {
    id: 1,
    title: 'Fotografi',
    imageUrl: '/portfolio-images/Photograph.webp',
    metrics: ['Premium portefølje', 'Autentisk branding'],
    industry: 'Kreativ',
  },
  {
    id: 2,
    title: 'WalterAI',
    imageUrl: '/portfolio-images/WalterAI-Fodbold.webp',
    metrics: ['+142% engagement', '98/100 performance'],
    industry: 'AI & Sport',
  },
  {
    id: 3,
    title: 'Klima Kurt Byg',
    imageUrl: '/portfolio-images/klimakurt.png',
    metrics: ['Moderne byggeteknik', 'Bæredygtig tilgang'],
    industry: 'Byggeri',
  },
]

// Key benefits/reasons why SMEs choose us
const benefits = [
  { icon: '◆', title: 'Fast pris', description: 'Ingen skjulte omkostninger' },
  { icon: '↯', title: 'Lynlevering', description: '2-4 uger fra start til launch' },
  { icon: '◉', title: 'Målbare resultater', description: 'Dokumenteret ROI og vækst' },
  { icon: '◈', title: 'AI-drevet udvikling', description: 'Moderne teknologi, professionelt håndværk' },
]

export function ValuePropSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative bg-white overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Container */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-[1800px] mx-auto">

          {/* Title - Full Width, One Line, Centered */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 md:mb-12 text-center"
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-[#0E1D3D]">DERFOR VÆLGER </span>
              <span className="text-[#B89245]">SMV'ER </span>
              <span className="text-[#06392f]">OS</span>
            </h2>
          </motion.div>

          {/* Modern Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:items-start">

            {/* LEFT COLUMN - Benefits (spans 5 columns on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-3 flex flex-col"
            >
              {/* Tagline Card */}
              <div className="bg-gradient-to-br from-[#06392f] to-[#06392f]/80 rounded-xl p-4 md:p-5 text-white">
                <p className="text-sm md:text-base leading-relaxed">
                  Resultater der taler for sig selv. Fra sundhedsplatforme til kreative porteføljer.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="group bg-white border-2 border-[#06392f]/10 hover:border-[#06392f]/30 rounded-xl p-4 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#06392f]/5 border border-[#06392f]/10 flex items-center justify-center text-xl group-hover:bg-[#06392f]/10 group-hover:scale-110 transition-all duration-300">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm md:text-base text-[#0E1D3D] mb-0.5">
                          {benefit.title}
                        </h3>
                        <p className="text-xs md:text-sm text-[#1A1A1A]/60">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <a
                  href="/cases"
                  className="group flex items-center justify-between bg-[#06392f] hover:bg-[#06392f]/90 text-white rounded-xl p-4 md:p-5 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div>
                    <div className="text-base md:text-lg font-bold mb-0.5">Se alle cases</div>
                    <div className="text-xs md:text-sm text-white/70">Udforsk vores portefølje</div>
                  </div>
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Case Studies Bento Grid (spans 7 columns on desktop) */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1" style={{ gridAutoRows: '1fr' }}>

                {/* Card 1 - Large (spans 2 columns, 2 rows) */}
                <motion.div
                  initial={{ opacity: 0, y: 80, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCard(1)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative overflow-hidden rounded-xl col-span-2 row-span-2 min-h-[250px] md:min-h-[300px]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={whyUsCards[0].imageUrl}
                      alt={whyUsCards[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    />
                  </div>
                  <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                    <span className="inline-block w-fit px-2.5 py-1 text-[10px] md:text-xs font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
                      {whyUsCards[0].industry}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {whyUsCards[0].title}
                      </h3>
                      <div className="space-y-1.5">
                        {whyUsCards[0].metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#B89245]" />
                            <span className="text-sm md:text-base text-white/90 font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - Medium (1 column, 1 row) */}
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCard(2)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative overflow-hidden rounded-xl min-h-[150px]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={whyUsCards[1].imageUrl}
                      alt={whyUsCards[1].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    />
                  </div>
                  <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                    <span className="inline-block w-fit px-2.5 py-1 text-[10px] md:text-xs font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
                      {whyUsCards[1].industry}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {whyUsCards[1].title}
                      </h3>
                      <div className="space-y-1">
                        {whyUsCards[1].metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#B89245]" />
                            <span className="text-xs md:text-sm text-white/90 font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 3 - Medium (1 column, 1 row) */}
                <motion.div
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.0, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setHoveredCard(3)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative overflow-hidden rounded-xl min-h-[150px]"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={whyUsCards[2].imageUrl}
                      alt={whyUsCards[2].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 30vw"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-500 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                    />
                  </div>
                  <div className="relative h-full p-5 md:p-6 flex flex-col justify-between">
                    <span className="inline-block w-fit px-2.5 py-1 text-[10px] md:text-xs font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm text-white/90 rounded-full border border-white/20">
                      {whyUsCards[2].industry}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                        {whyUsCards[2].title}
                      </h3>
                      <div className="space-y-1">
                        {whyUsCards[2].metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#B89245]" />
                            <span className="text-xs md:text-sm text-white/90 font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
