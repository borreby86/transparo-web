'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CaseStudyDetail } from '@/data/caseStudies'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CaseStudyClientProps {
  caseStudy: CaseStudyDetail
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  const shouldReduceMotion = useReducedMotion()
  const dur = shouldReduceMotion ? 0 : 0.6

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative bg-black px-6 md:px-12 pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {caseStudy.labels.map((label, i) => (
                <span
                  key={i}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-gold"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed"
            >
              {caseStudy.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </section>

        {/* Visit site */}
        {caseStudy.siteUrl && (
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white">
            <div className="max-w-[1000px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: dur }}
              >
                <div className="w-12 h-[2px] bg-gold mb-8" />
                <a
                  href={caseStudy.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-semibold text-sm hover:bg-gold/90 transition-colors duration-300"
                >
                  Besøg siden selv
                  <span aria-hidden="true">↗</span>
                </a>
              </motion.div>
            </div>
          </section>
        )}

        {/* Challenge & Solution */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur }}
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                Udfordringen
              </span>
              <p className="text-lg text-black/60 leading-relaxed">{caseStudy.challenge}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.15 }}
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                Løsningen
              </span>
              <p className="text-lg text-black/60 leading-relaxed">{caseStudy.solution}</p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-black">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur }}
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
                Næste skridt
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Har du et projekt i tankerne?
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
                Lad os tage en snak om, hvad vi kan gøre for dig.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 font-bold text-sm uppercase tracking-[0.15em] hover:bg-gold/90 transition-colors"
              >
                Book et møde
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
