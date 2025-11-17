'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { CaseStudyDetail } from '@/data/caseStudies'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface CaseStudyClientProps {
  caseStudy: CaseStudyDetail
}

export default function CaseStudyClient({ caseStudy }: CaseStudyClientProps) {
  const shouldReduceMotion = useReducedMotion()
  const animationDuration = shouldReduceMotion ? 0 : 0.6

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Labels */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {caseStudy.labels.map((label, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full"
              >
                {label}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-4xl"
          >
            {caseStudy.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: animationDuration, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl"
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

      {/* Quote Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-offwhite">
        <div className="max-w-4xl mx-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: animationDuration }}
            className="text-2xl sm:text-3xl md:text-4xl font-medium text-navy leading-relaxed mb-8"
          >
            &ldquo;{caseStudy.quote}&rdquo;
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: animationDuration, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="flex items-center gap-4"
          >
            <div>
              <p className="font-semibold text-navy">{caseStudy.author}</p>
              <p className="text-gray-600">{caseStudy.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              Udfordringen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              Løsningen
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-navy">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 text-center"
          >
            Resultater
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl sm:text-6xl font-bold text-teal mb-3">
                  {result.value}
                </div>
                <div className="text-xl font-semibold text-white mb-2">{result.metric}</div>
                <div className="text-white/70">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              Teknologier
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-navy/10 text-navy text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              Tidslinje
            </h3>
            <p className="text-3xl font-bold text-navy">{caseStudy.timeline}</p>
          </motion.div>

          {/* Deliverables */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-teal uppercase tracking-wider mb-4">
              Leverancer
            </h3>
            <ul className="space-y-2">
              {caseStudy.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 bg-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            Klar til at starte dit projekt?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Lad os skabe noget unikt sammen. Book et uforpligtende møde og få en skræddersyet
            løsning til dit projekt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal/90 transition-colors"
            >
              Book et møde
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
