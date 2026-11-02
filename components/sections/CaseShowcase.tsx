'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { caseStudiesDetailed } from '@/data/caseStudies'

const FEATURED = ['eskild-ebbesen', 'significanz', 'christina-borreby']
const INTERVAL = 6500

export function CaseShowcase() {
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('portfolio')
  const cases = FEATURED.map((slug) => caseStudiesDetailed.find((c) => c.slug === slug)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c),
  )

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { margin: '-80px' })

  // Rolig rotation – står stille ved hover/fokus, uden for skærmen og ved reduceret bevægelse
  useEffect(() => {
    if (shouldReduceMotion || paused || !inView || cases.length < 2) return
    const id = setTimeout(() => setActive((i) => (i + 1) % cases.length), INTERVAL)
    return () => clearTimeout(id)
  }, [active, paused, inView, shouldReduceMotion, cases.length])

  if (cases.length === 0) return null
  const current = cases[active]
  const dur = shouldReduceMotion ? 0 : 0.7
  const meta = [
    { k: 'Klient', v: current.author },
    { k: 'Ydelse', v: current.labels.join(' · ') },
    { k: 'Teknologi', v: current.technologies.slice(0, 3).join(' · ') },
  ]

  return (
    <section className="relative w-full bg-[#ece6e2] overflow-hidden py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between gap-6 mb-4 md:mb-6">
          <div>
            <span className="inline-block w-6 h-[2px] bg-gold align-middle mr-3" />
            <span className="text-black/50 text-xs font-medium uppercase tracking-[0.2em]">{t('overline')}</span>
          </div>
          <Link
            href="/cases"
            className="group inline-flex items-center gap-3 text-sm text-black font-semibold hover:text-gold transition-colors duration-300"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div
          ref={stageRef}
          className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-14 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Mockup – fuldt billede, bløde overgange mellem cases */}
          <Link
            href={{ pathname: '/cases/[slug]', params: { slug: current.slug } }}
            aria-label={current.title}
            className="relative block aspect-[3/2]"
          >
            {cases.map((c, i) => (
              <motion.div
                key={c.slug}
                className="absolute inset-0"
                initial={false}
                animate={{ opacity: i === active ? 1 : 0, scale: shouldReduceMotion || i === active ? 1 : 0.985 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.9, ease: 'easeOut' }}
                aria-hidden={i !== active}
              >
                <Image
                  src={`/portfolio-images/mockups/${c.slug}.webp`}
                  alt={c.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 880px"
                  quality={85}
                  priority={i === 0}
                />
              </motion.div>
            ))}
          </Link>

          {/* Redaktionel info om den viste case */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight tracking-tight mb-4">
                  {current.title}
                </h3>
                <p className="text-black/60 leading-relaxed mb-8">{current.subtitle}</p>
                <dl className="border-t border-black/10 pt-6 space-y-5 mb-8">
                  {meta.map((m) => (
                    <div key={m.k}>
                      <dt className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-1">{m.k}</dt>
                      <dd className="text-black/85 text-sm md:text-base leading-snug">{m.v}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  href={{ pathname: '/cases/[slug]', params: { slug: current.slug } }}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 bg-black text-white text-sm font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
                >
                  {t('viewCase')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-3 mt-10" role="group" aria-label="Vælg case">
              {cases.map((c, i) => (
                <button
                  key={c.slug}
                  onClick={() => setActive(i)}
                  aria-label={c.title}
                  aria-current={i === active}
                  className="py-3 group"
                >
                  <span
                    className={`block h-[3px] rounded-full transition-all duration-500 ${
                      i === active ? 'w-10 bg-gold' : 'w-6 bg-black/20 group-hover:bg-black/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: dur, ease: 'easeOut' }}
          className="mt-12 md:mt-16 pt-10 md:pt-14 border-t border-black/10 grid md:grid-cols-2 gap-6 md:gap-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-[1.05] tracking-tight">
            {t('headingLine1')}
            <br />
            <span className="text-black/40">{t('headingLine2')}</span>
          </h2>
          <p className="text-black/60 text-base md:text-lg leading-relaxed">{t('description1')}</p>
        </motion.div>
      </div>
    </section>
  )
}
