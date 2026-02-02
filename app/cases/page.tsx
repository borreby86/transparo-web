'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { caseStudiesDetailed } from '@/data/caseStudies'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function CasesPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-40 pb-20 md:pt-48 md:pb-28 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
                Portfolio
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-navy leading-[1] tracking-tight mb-6">
                Vores arbejde
              </h1>
              <p className="text-black/50 text-lg md:text-xl max-w-2xl leading-relaxed">
                Et udvalg af projekter vi har lavet for danske virksomheder.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects - 50/50 editorial layout */}
        <section className="px-6 md:px-12 pb-24 md:pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="space-y-24 md:space-y-32">
              {caseStudiesDetailed.map((project, index) => {
                const isReversed = index % 2 !== 0

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                  >
                    <Link
                      href={`/cases/${project.slug}`}
                      className="group grid md:grid-cols-2 gap-8 md:gap-16 items-center"
                    >
                      {/* Image */}
                      <div className={`relative ${isReversed ? 'md:order-2' : ''}`}>
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 700px"
                          />
                        </div>
                      </div>

                      {/* Text */}
                      <div className={`${isReversed ? 'md:order-1' : ''}`}>
                        <span className="text-gold/30 text-7xl md:text-8xl font-bold leading-none select-none block mb-6">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div className="flex items-center gap-3 mb-4">
                          {project.labels.map((label) => (
                            <span key={label} className="text-xs font-medium uppercase tracking-wider text-black/40">
                              {label}
                            </span>
                          ))}
                        </div>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                          {project.title}
                        </h2>

                        <p className="text-black/50 text-base md:text-lg leading-relaxed mb-8">
                          {project.subtitle}
                        </p>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                          Se projektet
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-navy px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Har du et projekt i tankerne?
              </h2>
              <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto mb-10">
                Lad os tage en snak om, hvad vi kan gøre for dig.
              </p>
              <Link
                href="/kontakt"
                className="inline-block px-10 py-4 bg-white text-navy rounded-full font-semibold text-lg hover:bg-gold hover:text-white transition-colors duration-300"
              >
                Tal med os
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
