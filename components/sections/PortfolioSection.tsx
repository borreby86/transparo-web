'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudiesDetailed } from '@/data/caseStudies'
import { ArrowRight } from 'lucide-react'

export function PortfolioSection() {
  // Duplicate items for seamless loop
  const marqueeItems = [...caseStudiesDetailed, ...caseStudiesDetailed]

  return (
    <section className="relative w-full bg-[#FAFAFA] py-24 overflow-hidden">
      {/* Editorial Headline */}
      <div className="max-w-[90vw] lg:max-w-[1400px] mx-auto text-center mb-12 relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl md:text-5xl laptop:text-6xl laptop-l:text-7xl xl:text-[5.5rem] leading-[1.1] text-navy font-bold">
          Vi skaber <span className="italic text-gold">resultater</span> der kan mærkes — det er vores <span className="italic text-gold">eneste</span> måde at arbejde på.
        </h2>
      </div>



      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-3 px-4"
          animate={{ x: '-50%' }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }}
          style={{ width: 'max-content' }}
        >
          {marqueeItems.map((study, index) => (
            <Link
              key={`${study.id}-${index}`}
              href={`/cases/${study.slug}`}
              className="relative flex-none w-[60vw] sm:w-[300px] md:w-[280px] laptop:w-[300px] laptop-l:w-[320px] xl:w-[340px] group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 300px, 22vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </motion.div >
      </div >
    </section >
  )
}
