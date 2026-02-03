'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useState, useRef } from 'react'
import { useTranslations } from 'next-intl'

export function TrustMarquee() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('trustMarquee')

  const primaryMessages = t.raw('primaryMessages') as string[]
  const trustIndicators = t.raw('trustIndicators') as string[]
  const companyValues = t.raw('companyValues') as string[]

  return (
    <section className="relative bg-gradient-to-b from-white via-white to-gray-50/30 overflow-hidden border-b border-black/5">
      {/* Large, prominent multi-line marquee */}
      <div className="relative py-10 md:py-12 lg:py-16">

        {/* First line - Danish business messages (moving left) */}
        <MarqueeLine
          items={primaryMessages}
          direction="left"
          duration={40}
          renderItem={(message, index) => (
            <>
              <span
                className="inline-block px-4 sm:px-6 md:px-8 lg:px-10 font-display font-light select-none cursor-default whitespace-nowrap"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 5rem)',
                  lineHeight: '0.9',
                  color: index % 2 === 0 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.15)',
                }}
              >
                {message}
              </span>
              <span
                className="inline-block text-gold/15 select-none"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
              >
                •
              </span>
            </>
          )}
        />

        {/* Second line - Trust indicators (moving right) */}
        <MarqueeLine
          items={trustIndicators}
          direction="right"
          duration={50}
          renderItem={(item) => (
            <>
              <span
                className="inline-block px-3 sm:px-5 md:px-6 lg:px-8 font-sans font-extralight uppercase tracking-widest select-none whitespace-nowrap"
                style={{
                  fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)',
                  lineHeight: '1.1',
                  color: 'rgba(212, 175, 55, 0.85)', // gold color
                }}
              >
                {item}
              </span>
              <span
                className="inline-block text-black/8 select-none"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 2rem)' }}
              >
                •
              </span>
            </>
          )}
        />

        {/* Third line - Company values (moving left again, slower) */}
        <MarqueeLine
          items={companyValues}
          direction="left"
          duration={60}
          renderItem={(value, index) => (
            <>
              <span
                className="inline-block px-3 sm:px-5 md:px-6 lg:px-8 font-display font-thin select-none whitespace-nowrap"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                  lineHeight: '1',
                  color: index % 2 === 0 ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.75)',
                }}
              >
                {value}
              </span>
              <span
                className="inline-block text-gold/10 select-none"
                style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
              >
                •
              </span>
            </>
          )}
        />

        {/* Subtle gradient overlays for elegant fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}

// Reusable marquee line component with seamless infinite scrolling
function MarqueeLine({
  items,
  direction = 'left',
  duration = 40,
  renderItem
}: {
  items: string[],
  direction: 'left' | 'right',
  duration: number,
  renderItem: (item: string, index: number) => React.ReactNode
}) {
  const shouldReduceMotion = useReducedMotion()
  const [contentWidth, setContentWidth] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  // Measure the content width for accurate animation
  useEffect(() => {
    if (contentRef.current) {
      const measure = () => {
        const width = contentRef.current?.scrollWidth || 0
        setContentWidth(width / 2) // Since we duplicate content
      }
      measure()

      // Re-measure on resize
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
  }, [items])

  return (
    <div className="relative mb-3 md:mb-4 lg:mb-5 overflow-hidden">
      <motion.div
        ref={contentRef}
        className="flex"
        animate={
          shouldReduceMotion || contentWidth === 0
            ? {}
            : {
                x: direction === 'left'
                  ? [0, -contentWidth]
                  : [-contentWidth, 0]
              }
        }
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Duplicate content twice for seamless loop */}
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex items-center flex-shrink-0">
            {items.map((item, index) => (
              <div key={`${groupIndex}-${index}`} className="flex items-center flex-shrink-0">
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
