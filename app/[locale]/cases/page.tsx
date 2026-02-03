'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { caseStudiesDetailed } from '@/data/caseStudies'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useRef } from 'react'

function ProjectCard({ project, index, shouldReduceMotion }: {
  project: typeof caseStudiesDetailed[0]
  index: number
  shouldReduceMotion: boolean
}) {
  const isOffset = index % 2 !== 0
  const cardRef = useRef<HTMLDivElement>(null)
  const imgX = useMotionValue(0)
  const imgY = useMotionValue(0)
  const springImgX = useSpring(imgX, { damping: 30, stiffness: 200 })
  const springImgY = useSpring(imgY, { damping: 30, stiffness: 200 })
  const number = String(index + 1).padStart(2, '0')

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    imgX.set((e.clientX - centerX) * 0.02)
    imgY.set((e.clientY - centerY) * 0.02)
  }

  const handleMouseLeave = () => {
    imgX.set(0)
    imgY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      className={`mb-20 md:mb-32 ${isOffset ? 'md:pt-32' : ''}`}
    >
      <Link
        href={`/cases/${project.slug}`}
        className="group block lg:cursor-none"
      >
        {/* Image container */}
        <div
          ref={cardRef}
          data-project-card
          className="relative overflow-hidden rounded-2xl border border-white/10 shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-black/10"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Gold number */}
          <span className="absolute top-5 left-5 z-10 text-sm font-semibold tracking-wider text-white/90 bg-gradient-to-r from-gold to-amber-500 px-3 py-1 rounded-full">
            {number}
          </span>

          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              className="absolute inset-[-1.5rem]"
              style={{ x: springImgX, y: springImgY }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 650px"
              />
            </motion.div>
          </div>
        </div>

        {/* Title + labels below image */}
        <div className="mt-6">
          <h2 className="text-xl md:text-2xl font-bold text-black group-hover:text-gold transition-colors duration-300 mb-3">
            {project.title}
          </h2>
          <div className="flex items-center gap-2 flex-wrap">
            {project.labels.map((label) => (
              <span
                key={label}
                className="text-xs font-medium uppercase tracking-wider text-black/50 border border-black/10 rounded-full px-3 py-1"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function CasesPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="pt-44 pb-24 md:pt-56 md:pb-36 px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <span className="inline-block text-gold text-xs font-semibold uppercase tracking-[0.3em] mb-8 border border-gold/30 rounded-full px-4 py-1.5">
                Portfolio
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-[1] tracking-tight mb-8">
                Vores arbejde
              </h1>
              <p className="text-black/40 text-lg md:text-xl max-w-2xl leading-relaxed">
                Et udvalg af projekter vi har lavet for danske virksomheder.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="px-6 md:px-12 pb-32 md:pb-40">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-16">
              {caseStudiesDetailed.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA — sort/guld */}
        <section className="relative overflow-hidden px-6 md:px-12 py-28 md:py-40 bg-black">
          {/* Guld orbs */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/8 blur-[100px] pointer-events-none" />

          <div className="relative max-w-[1400px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Har du et projekt i tankerne?
              </h2>
              <p className="text-white/40 text-lg md:text-xl max-w-xl mx-auto mb-12">
                Lad os tage en snak om, hvad vi kan gøre for dig.
              </p>
              <Link
                href="/kontakt"
                className="inline-block px-12 py-4 bg-gradient-to-r from-gold to-amber-500 text-black font-semibold text-lg rounded-full hover:opacity-90 transition-opacity duration-300"
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
