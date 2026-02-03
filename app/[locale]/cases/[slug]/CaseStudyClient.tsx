'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { Check, ArrowRight } from 'lucide-react'
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
                  className="text-xs font-medium uppercase tracking-[0.15em] text-white/40"
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

        {/* Quote */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-white">
          <div className="max-w-[1000px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur }}
            >
              <div className="w-12 h-[2px] bg-gold mb-8" />
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-[1.3] tracking-tight mb-8">
                &ldquo;{caseStudy.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-black">{caseStudy.author}</p>
                <p className="text-black/40 text-sm">{caseStudy.role}</p>
              </div>
            </motion.div>
          </div>
        </section>

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

        {/* Results */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-black">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur }}
              className="mb-16"
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                Resultater
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Det vi leverede.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: dur, delay: index * 0.1 }}
                  className="bg-black p-8 md:p-10"
                >
                  <div className="text-4xl sm:text-5xl font-bold text-gold mb-3">
                    {result.value}
                  </div>
                  <div className="text-lg font-semibold text-white mb-1">{result.metric}</div>
                  <div className="text-white/40 text-sm">{result.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16">
            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur }}
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
                Teknologier
              </span>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border border-black/10 text-black text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.1 }}
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
                Tidslinje
              </span>
              <p className="text-3xl font-bold text-black">{caseStudy.timeline}</p>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
                Leverancer
              </span>
              <ul className="space-y-3">
                {caseStudy.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-gold flex-shrink-0 mt-1" />
                    <span className="text-black/60">{item}</span>
                  </li>
                ))}
              </ul>
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
