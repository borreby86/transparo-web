'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/data/caseStudies'

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Vores <span className="text-gold">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Fra sundhedsplatforme til kreative porteføl jer – se hvordan vi har hjulpet danske virksomheder med at skabe deres digitale tilstedeværelse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/cases/${study.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <Image
                        src={study.imageUrl}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Labels */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {study.labels.map((label, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-navy uppercase tracking-wide"
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      {/* Case Number */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                        <span className="text-navy font-bold text-sm">
                          {study.id.toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                        {study.title}
                      </h2>
                      <p className="text-black/70 text-base md:text-lg mb-6 leading-relaxed">
                        {study.subtitle}
                      </p>

                      {/* Testimonial Preview */}
                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm italic text-black/60 mb-3 line-clamp-2">
                          "{study.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-navy text-sm">{study.author}</p>
                          <p className="text-xs text-black/50">{study.role}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center text-gold font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Se case studie
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-offwhite px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy mb-6">
              Klar til at blive vores næste <span className="text-gold">succeshistorie?</span>
            </h2>
            <p className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Lad os skabe noget ekstraordinært sammen. Book et uforpligtende møde, og lad os tale om dit projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
              >
                Kontakt Os
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
