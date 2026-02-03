'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'

interface Phase {
  title: string
  timeline: string
  description: string
  deliverables: string[]
  checkpoint?: string
}

export function ProcessPhases4to7() {
  const t = useTranslations('processPhases')

  const phases = t.raw('phases') as Phase[]

  return (
    <>
      {phases.map((phase, index) => {
        const phaseNumber = index + 4
        const isLeft = index % 2 === 0

        return (
          <section
            key={phaseNumber}
            className="relative bg-white px-6 md:px-12 lg:px-24 py-32 md:py-48 border-t border-navy/10"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                {/* Phase Info */}
                <div className={`lg:col-span-3 ${isLeft ? '' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="sticky top-32"
                  >
                    <div className="text-8xl font-bold text-navy/5 mb-4">{String(phaseNumber).padStart(2, '0')}</div>
                    <h3 className="text-sm uppercase tracking-[0.2em] text-navy/40 mb-2">{t('faseLabel', { number: phaseNumber })}</h3>
                    <p className="text-navy/60">{phase.timeline}</p>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-9 ${isLeft ? '' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-8 leading-tight">
                      {phase.title}
                    </h2>

                    <div className="w-16 h-px bg-gold mb-12" />

                    <p className="text-xl md:text-2xl text-navy/60 font-light mb-16 max-w-3xl leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-1 mb-16">
                      {phase.deliverables.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="group flex items-start gap-4 py-4 border-b border-navy/5 hover:border-navy/20 transition-colors"
                        >
                          <span className="text-navy/20 font-mono text-sm mt-1">{String(i + 1).padStart(2, '0')}</span>
                          <span className="text-navy/70 group-hover:text-navy transition-colors">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Checkpoint if exists */}
                    {phase.checkpoint && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="inline-block"
                      >
                        <div className="px-6 py-3 bg-navy text-white">
                          <div className="text-xs uppercase tracking-wider mb-1 opacity-60">{t('approvalLabel')}</div>
                          <div className="font-medium">{phase.checkpoint}</div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}
