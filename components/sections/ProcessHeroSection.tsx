'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

export function ProcessHeroSection() {
  const t = useTranslations('process')
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-offwhite overflow-hidden pt-32 pb-0">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      {/* Static Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-gold/5 to-transparent blur-3xl"
        />
        <div
          className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-navy/5 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <div
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex-1 flex flex-col justify-center"
      >
        <div className="max-w-[1800px] mx-auto w-full">
          <div className="text-center">

            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="mb-8 md:mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-navy/10 bg-white/50 backdrop-blur-sm text-sm md:text-base text-navy/80 uppercase tracking-[0.2em] font-bold">
                {t('heroBadge')}
              </span>
            </motion.div>

            {/* Main headline - Massive and minimal */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="font-display leading-[0.85] tracking-[-0.04em] mb-8 md:mb-12"
            >
              <span
                className="block text-navy"
                style={{ fontSize: 'clamp(4rem, 15vw, 18rem)' }}
              >
                {t('heroHeadingLine1')}
              </span>
              <span
                className="block text-navy"
                style={{ fontSize: 'clamp(4rem, 15vw, 18rem)' }}
              >
                {t('heroHeadingLine2')}
              </span>
            </motion.h1>

            {/* Subtle description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl text-navy/80 font-medium leading-relaxed mb-12"
            >
              {t('heroDescription')}
            </motion.p>

            {/* Minimal CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="mb-24"
            >
              <a
                href="#fase-1"
                className="group inline-flex items-center gap-4 px-8 py-4 bg-navy text-white rounded-full hover:bg-navy/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.getElementById('fase-1')
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <span className="text-base md:text-lg font-bold tracking-wide">{t('heroCta')}</span>
                <div>
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 5V19M12 19L5 12M12 19L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process preview - Enhanced design */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="w-full bg-white/30 backdrop-blur-sm border-t border-navy/5"
      >
        <div className="relative">
          <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12">
            <div className="max-w-[1800px] mx-auto">
              {/* Process steps container */}
              <div className="relative">
                {/* Continuous line behind all steps */}
                <div className="absolute top-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

                <div className="grid grid-cols-7 gap-1 md:gap-2 lg:gap-4">
                  {[
                    { icon: '🎯' },
                    { icon: '📐' },
                    { icon: '🎨' },
                    { icon: '⚡' },
                    { icon: '🔍' },
                    { icon: '🚀' },
                    { icon: '💫' }
                  ].map((phase, index) => (
                    <motion.div
                      key={index}
                      className="relative group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 1 + index * 0.05,
                        ease: [0.25, 0.1, 0.25, 1]
                      }}
                      whileHover={{ y: -5 }}
                    >
                      <a
                        href={`#fase-${index + 1}`}
                        className="block"
                        onClick={(e) => {
                          e.preventDefault()
                          const target = document.getElementById(`fase-${index + 1}`)
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }}
                      >
                        {/* Phase card */}
                        <div className="text-center relative">
                          {/* Number circle */}
                          <div className="relative mx-auto w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4">
                            <motion.div
                              className="absolute inset-0 rounded-full bg-white border border-navy/10 group-hover:border-gold/30 transition-all duration-500 group-hover:shadow-lg"
                              whileHover={{ scale: 1.1 }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-lg md:text-xl font-medium text-navy group-hover:text-gold transition-colors duration-300">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                          </div>

                          {/* Phase name */}
                          <div className="space-y-1">
                            <div className="text-lg md:text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 right-0 -top-8">
                              {phase.icon}
                            </div>
                            <div className="text-[10px] md:text-xs text-navy/60 group-hover:text-navy uppercase tracking-wider font-bold transition-colors duration-300">
                              {t(`phasePreviewNames.${index}`)}
                            </div>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
