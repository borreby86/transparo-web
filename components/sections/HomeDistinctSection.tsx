'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { caseStudiesDetailed } from '@/data/caseStudies'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { TagLine } from '@/components/ui/TagLine'

const SHOWN = ['eskild-ebbesen', 'mind-balance-system', 'kasha-hansen']

export function HomeDistinctSection() {
  const t = useTranslations('homeDistinct')
  const shouldReduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : delay, ease: 'easeOut' as const },
  })

  const cases = SHOWN.map((slug) => caseStudiesDetailed.find((c) => c.slug === slug)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c?.story?.highlights[0] && c.story.designSystem),
  )
  const strengths = [0, 1, 2].map((i) => t(`strengths.${i}`))

  return (
    <section className="bg-[#ece6e2] px-6 md:px-12 py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...reveal()} className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 lg:gap-20 items-end mb-14 md:mb-20">
          <div>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">{t('overline')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-black">
              {t('headingLine1')}
              <br />
              <span className="text-black/40">{t('headingLine2')}</span>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-black/70 mb-4">{t('text')}</p>
            <p className="text-lg leading-relaxed text-black/70 mb-6">{t('textExtra')}</p>
            <TagLine items={strengths} variant="ink" size="md" className="pt-6 border-t border-black/10" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-10">
          {cases.map((c, i) => {
            const hero = c.story!.highlights[0].image
            const ds = c.story!.designSystem!
            const host = c.siteUrl ? new URL(c.siteUrl).hostname.replace(/^www\./, '') : c.title
            return (
              <motion.article key={c.slug} {...reveal(i * 0.12)} className={i === 1 ? 'md:mt-16' : ''}>
                <Link
                  href={{ pathname: '/cases/[slug]', params: { slug: c.slug } }}
                  className="group block"
                  aria-label={c.title}
                >
                  <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                    <BrowserFrame
                      src={hero.src}
                      w={hero.w}
                      h={hero.h}
                      alt={c.title}
                      host={host}
                      crop="4/3"
                      sizes="(max-width: 768px) 100vw, 440px"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-black group-hover:text-gold-dark transition-colors">{c.title}</h3>
                      <p className="text-sm text-black/60 mt-1">{c.tagline}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 mt-1 shrink-0 text-black/30 group-hover:text-gold-dark group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
                <div className="mt-5 pt-5 border-t border-black/10 flex items-center justify-between gap-4">
                  <div className="flex -space-x-1.5" aria-label={t('paletteLabel')}>
                    {ds.colors.map((col) => (
                      <span
                        key={col.hex}
                        title={`${col.name} ${col.hex}`}
                        className="w-7 h-7 rounded-full border-2 border-[#ece6e2]"
                        style={{ backgroundColor: col.hex }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-black/60 text-right leading-snug">
                    {ds.fonts.map((f) => f.name).join(' + ')}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
