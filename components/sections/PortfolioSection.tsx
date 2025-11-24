'use client'

import Image from 'next/image'
import Link from 'next/link'
import { caseStudiesDetailed } from '@/data/caseStudies'

export function PortfolioSection() {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
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

      {/* Editorial Headline */}
      <div className="max-w-[90vw] lg:max-w-[1400px] mx-auto text-center mb-12 relative z-10">
        <h2 className="font-sans text-4xl sm:text-5xl md:text-5xl laptop:text-6xl laptop-l:text-7xl xl:text-[5.5rem] leading-[1.1] text-navy font-bold">
          Vi skaber <span className="italic text-gold">resultater</span> der kan mærkes — det er vores <span className="italic text-gold">eneste</span> måde at arbejde på.
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden">
        <div className="marquee-track">
          {/* Group 1 */}
          <div className="marquee-group">
            {caseStudiesDetailed.map((study) => (
              <Link
                key={`g1-${study.id}`}
                href={`/cases/${study.slug}`}
                className="relative flex-none w-[60vw] sm:w-[300px] md:w-[280px] laptop:w-[300px] laptop-l:w-[320px] xl:w-[340px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 300px, 22vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
                className="relative flex-none w-[60vw] sm:w-[300px] md:w-[280px] laptop:w-[300px] laptop-l:w-[320px] xl:w-[340px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 300px, 22vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
                className="relative flex-none w-[60vw] sm:w-[300px] md:w-[280px] laptop:w-[300px] laptop-l:w-[320px] xl:w-[340px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 300px, 22vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
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
                className="relative flex-none w-[60vw] sm:w-[300px] md:w-[280px] laptop:w-[300px] laptop-l:w-[320px] xl:w-[340px] group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={study.imageUrl}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 60vw, (max-width: 1024px) 300px, 22vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
