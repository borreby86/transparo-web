'use client'

import { motion } from 'motion/react'

const phases = [
  {
    number: 4,
    title: 'Development',
    timeline: 'Dag 15-20',
    description: 'Nu koder vi. Vi bygger alle sider i Next.js, integrerer Payload CMS, og sætter formularer og funktionalitet op.',
    deliverables: [
      'Next.js + Payload CMS implementation',
      'SEO optimering og metadata',
      'Mobil responsivt design',
      'Performance optimering'
    ]
  },
  {
    number: 5,
    title: 'Test & Review',
    timeline: 'Dag 21-23',
    description: 'Vi deployer til privat test-miljø hvor I kan teste på mobil og desktop. Vi fikser alle bugs gratis.',
    deliverables: [
      'Privat staging miljø',
      'Cross-device testing',
      'Bug fixes inkluderet',
      'Quality assurance'
    ],
    checkpoint: 'Pre-Launch Godkendelse'
  },
  {
    number: 6,
    title: 'Launch & Training',
    timeline: 'Dag 24-25',
    description: 'Launch dag: Vi flytter hjemmesiden til jeres domæne og afholder personlig træning i CMS admin panel.',
    deliverables: [
      'Live på jeres domæne',
      'Google Analytics setup',
      '1-3 timers personlig træning',
      'Video dokumentation'
    ]
  },
  {
    number: 7,
    title: 'Support & Vedligehold',
    timeline: 'Efter lancering',
    description: 'I får inkluderet support i 14-60 dage afhængig af pakke. Vi tilbyder også månedlig vedligeholdelse fra 399 kr/måned.',
    deliverables: [
      '14-60 dage support (pakke-afhængig)',
      'Tekniske bug fixes',
      'Månedlig vedligehold (valgfri)',
      'Daglige automatiske backups'
    ]
  }
]

export function ProcessPhases4to7() {
  return (
    <>
      {phases.map((phase, index) => {
        const isLeft = index % 2 === 0

        return (
          <section
            key={phase.number}
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
                    <div className="text-8xl font-bold text-navy/5 mb-4">{String(phase.number).padStart(2, '0')}</div>
                    <h3 className="text-sm uppercase tracking-[0.2em] text-navy/40 mb-2">Fase {phase.number}</h3>
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
                          <div className="text-xs uppercase tracking-wider mb-1 opacity-60">Godkendelse</div>
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
