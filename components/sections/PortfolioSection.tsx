'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  link: string
  labels?: string[]
  highlight?: boolean
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Hola Hurghada',
    subtitle: 'Coming soon – en ny digital rejse for en ikonisk destination',
    imageUrl: '/portfolio-images/Sundhed.png',
    link: '/cases/hola-hurghada',
    labels: ['Coming soon', 'Tool'],
    highlight: true
  },
  {
    id: 2,
    title: 'WalterAI',
    subtitle: 'Fremtidens værktøj til træningsdata og performance',
    imageUrl: '/portfolio-images/WalterAI-Fodbold.png',
    link: '/cases/walter-ai',
    labels: ['Produkt', 'AI']
  },
  {
    id: 3,
    title: 'VDB Notarissen',
    subtitle: 'Brand løft og digital oplevelse for et nyt marked',
    imageUrl: '/portfolio-images/Flotte-Foder.png',
    link: '/cases/vdb-notarissen',
    labels: ['Brand identity']
  },
  {
    id: 4,
    title: 'Photograph',
    subtitle: 'Skarp visuel storytelling i en responsiv ramme',
    imageUrl: '/portfolio-images/Photograph.png',
    link: '/cases/photography',
    labels: ['Content']
  },
  {
    id: 5,
    title: 'Hest',
    subtitle: 'Platform til moderne, data-drevet rideoplevelser',
    imageUrl: '/portfolio-images/Hest.png',
    link: '/cases/hest',
    labels: ['E-commerce']
  },
  {
    id: 6,
    title: 'Revy',
    subtitle: 'Event site med fokus på billetsalg og stemning',
    imageUrl: '/portfolio-images/Revy.png',
    link: '/cases/revy',
    labels: ['Kampagne']
  }
]

export function PortfolioSection() {
  return (
    <section className="relative bg-[#f7f5f1] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-light text-gray-900 md:text-6xl lg:text-[74px]"
          >
            Cases
          </motion.h2>

          <Link
            href="/cases"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:shadow-lg"
          >
            Bekijk alles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => {
            const isHighlight = study.highlight

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/60 bg-white/80 shadow-[0_25px_70px_rgba(10,10,10,0.08)] backdrop-blur-sm ${
                  isHighlight ? 'md:col-span-2 h-[420px] lg:h-[520px]' : 'h-[300px] lg:h-[360px]'
                }`}
              >
                <Link
                  href={study.link}
                  className="block h-full w-full"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={study.imageUrl}
                      alt={study.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>

                  {study.labels && study.labels.length > 0 && (
                    <div className="absolute left-8 top-8 z-10 flex flex-wrap gap-3">
                      {study.labels.map((label) => (
                        <span
                          key={label}
                          className="rounded-full bg-white/80 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-800"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 z-10 p-8 sm:p-10">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3 className="text-4xl font-light text-white md:text-[44px]">
                          {study.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-base text-white/80 md:text-lg">
                          {study.subtitle}
                        </p>
                      </div>

                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:bg-white group-hover:text-gray-900">
                        <ArrowUpRight className="h-6 w-6" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
