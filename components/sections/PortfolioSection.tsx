'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  subtitle?: string
  imageUrl: string
  link: string
  size: 'small' | 'medium' | 'large'
  label?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Hola Hurghada',
    subtitle: 'Travel & Tourism',
    imageUrl: '/portfolio-images/Sundhed.png',
    link: '/cases/hola-hurghada',
    size: 'large',
    label: 'Featured'
  },
  {
    id: 2,
    title: 'WalterAI',
    subtitle: 'Fodbold Analytics',
    imageUrl: '/portfolio-images/WalterAI-Fodbold.png',
    link: '/cases/walter-ai',
    size: 'large',
    label: 'AI Tool'
  },
  {
    id: 3,
    title: 'VDB Notarissen',
    subtitle: 'Legal Services',
    imageUrl: '/portfolio-images/Flotte-Foder.png',
    link: '/cases/vdb-notarissen',
    size: 'large'
  },
  {
    id: 4,
    title: 'Photograph',
    subtitle: 'Visual Storytelling',
    imageUrl: '/portfolio-images/Photograph.png',
    link: '/cases/photography',
    size: 'large'
  },
  {
    id: 5,
    title: 'Hest',
    subtitle: 'Equestrian Excellence',
    imageUrl: '/portfolio-images/Hest.png',
    link: '/cases/hest',
    size: 'large'
  },
  {
    id: 6,
    title: 'Revy',
    subtitle: 'Entertainment',
    imageUrl: '/portfolio-images/Revy.png',
    link: '/cases/revy',
    size: 'large'
  }
]

export function PortfolioSection() {
  return (
    <section className="relative bg-gray-50 py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1800px]">
        {/* Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900"
          >
            Cases
          </motion.h2>
        </div>

        {/* Cases Grid - All cards are large now */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            // All cards are now large and take up equal space
            const gridClass = 'col-span-1'

            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${gridClass} group h-[500px] md:h-[600px]`}
              >
                <Link
                  href={study.link}
                  className="block relative h-full rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
                >
                  {/* Image Container */}
                  <div className="absolute inset-0">
                    <Image
                      src={study.imageUrl}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Labels */}
                  {study.label && (
                    <div className="absolute top-8 left-8 z-10">
                      <span className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full text-base font-medium text-gray-900">
                        {study.label}
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 z-10">
                    <h3 className="font-light text-white mb-3 text-4xl md:text-5xl lg:text-6xl">
                      {study.title}
                    </h3>

                    {study.subtitle && (
                      <p className="text-white/80 text-xl md:text-2xl">
                        {study.subtitle}
                      </p>
                    )}

                    {/* Arrow on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowUpRight className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}