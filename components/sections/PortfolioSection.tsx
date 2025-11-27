'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { caseStudiesDetailed } from '@/data/caseStudies'
import { ArrowRight, Sparkles } from 'lucide-react'

export function PortfolioSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* CSS for seamless infinite scroll */}
      <style jsx global>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 60s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .marquee-group {
          display: flex;
          gap: 12px;
          padding-right: 12px;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* Hero-like Editorial Header */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-24 md:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [1.2, 1, 1.2],
              opacity: [0.02, 0.04, 0.02],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"
          />
        </div>

        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.5, delay: 0.5 }}
            className="text-[20vw] md:text-[15vw] font-bold text-navy/[0.03] whitespace-nowrap"
          >
            PORTFOLIO
          </motion.span>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            className="mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-[0.3em]">
              <Sparkles className="w-4 h-4" />
              Vores Arbejde
              <Sparkles className="w-4 h-4" />
            </span>
          </motion.div>

          {/* Giant Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-16"
          >
            <h2 className="text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] font-bold text-navy leading-[0.95] tracking-tight">
              <span className="block">Vi skaber</span>
              <span className="block">
                <span className="relative inline-block">
                  resultater
                  {/* Animated underline */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: shouldReduceMotion ? 0 : 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-2 md:-bottom-4 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-navy/30 via-navy to-navy/30 origin-left rounded-full"
                  />
                </span>
              </span>
              <span className="block text-navy/80">der kan mærkes.</span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-black/50 max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16"
          >
            Det er vores eneste måde at arbejde på
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -3 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/cases"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-white rounded-full font-bold text-lg hover:bg-navy/90 transition-all duration-300 shadow-xl shadow-navy/20"
              >
                <span>Se alle projekter</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden pb-24 md:pb-32">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {/* Group 1 */}
          <div className="marquee-group">
            {caseStudiesDetailed.map((study) => (
              <Link
                key={`g1-${study.id}`}
                href={`/cases/${study.slug}`}
                className="relative flex-none w-[70vw] sm:w-[320px] md:w-[360px] laptop:w-[400px] laptop-l:w-[420px] xl:w-[450px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 360px, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Hover overlay with title */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-bold text-lg md:text-xl">{study.title}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Group 2 */}
          <div className="marquee-group">
            {caseStudiesDetailed.map((study) => (
              <Link
                key={`g2-${study.id}`}
                href={`/cases/${study.slug}`}
                className="relative flex-none w-[70vw] sm:w-[320px] md:w-[360px] laptop:w-[400px] laptop-l:w-[420px] xl:w-[450px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 360px, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-bold text-lg md:text-xl">{study.title}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Group 3 */}
          <div className="marquee-group">
            {caseStudiesDetailed.map((study) => (
              <Link
                key={`g3-${study.id}`}
                href={`/cases/${study.slug}`}
                className="relative flex-none w-[70vw] sm:w-[320px] md:w-[360px] laptop:w-[400px] laptop-l:w-[420px] xl:w-[450px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 360px, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-bold text-lg md:text-xl">{study.title}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Group 4 */}
          <div className="marquee-group">
            {caseStudiesDetailed.map((study) => (
              <Link
                key={`g4-${study.id}`}
                href={`/cases/${study.slug}`}
                className="relative flex-none w-[70vw] sm:w-[320px] md:w-[360px] laptop:w-[400px] laptop-l:w-[420px] xl:w-[450px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 360px, 450px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-white font-bold text-lg md:text-xl">{study.title}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
