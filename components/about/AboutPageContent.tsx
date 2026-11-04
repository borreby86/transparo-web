'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { TagLine } from '@/components/ui/TagLine'
import { useDesignProposal } from '@/components/ui/DesignProposalContext'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-16">
      <div className="lg:col-span-3">
        <span className="text-[11px] uppercase tracking-[0.2em] text-black/55">{label}</span>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </div>
  )
}

export function AboutPageContent() {
  const t = useTranslations('aboutPage')
  const about = useTranslations('about')
  const shouldReduceMotion = useReducedMotion()
  const { open: openDesignProposal } = useDesignProposal()
  const dur = shouldReduceMotion ? 0 : 0.7
  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: dur, delay: shouldReduceMotion ? 0 : delay, ease: 'easeOut' as const },
  })
  const intro = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: dur, delay: shouldReduceMotion ? 0 : delay },
  })

  const meta = [0, 1, 2].map((i) => ({ k: t(`meta.${i}.k`), v: t(`meta.${i}.v`) }))
  const team = [
    { img: '/images/team/christina.jpg', imgClass: 'object-cover', i: 0 },
    { img: '/images/team/dennis.jpg', imgClass: 'object-cover object-top scale-[1.3]', i: 1 },
  ].map((m) => ({
    ...m,
    name: about(`team.${m.i}.name`),
    role: about(`team.${m.i}.role`),
    bio: about(`team.${m.i}.bio`),
  }))
  const storyParas = [0, 1, 2].map((i) => t(`story.${i}`))
  const philosophy = [0, 1, 2].map((i) => t(`philosophy.${i}`))
  const human = [0, 1, 2, 3].map((i) => t(`human.${i}`))
  const lines = [0, 1, 2].map((i) => t(`lines.${i}`))

  return (
    <>
      {/* Hero – samme format som case-siderne */}
      <section className="relative bg-black px-6 md:px-12 pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.span {...intro(0)} className="block text-xs font-medium uppercase tracking-[0.15em] text-gold mb-8">
            {t('overline')}
          </motion.span>
          <motion.h1
            {...intro(0.1)}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-5xl text-balance"
          >
            {t('heading')}
          </motion.h1>
          <motion.p {...intro(0.2)} className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed mb-14">
            {t('lead')}
          </motion.p>
          <motion.dl
            {...intro(0.3)}
            className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 border-t border-white/10 pt-8"
          >
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-2">{m.k}</dt>
                <dd className="text-white/85 text-sm md:text-base leading-snug">{m.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Historien */}
      <section className="bg-white px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...reveal()}>
            <Row label={t('storyLabel')}>
              <div className="space-y-7 max-w-3xl">
                <p className="text-2xl md:text-3xl lg:text-[2rem] leading-[1.4] text-black">{storyParas[0]}</p>
                <p className="text-lg md:text-xl leading-relaxed text-black/70">{storyParas[1]}</p>
                <p className="text-lg md:text-xl leading-relaxed text-black/70">{storyParas[2]}</p>
              </div>
            </Row>
          </motion.div>
        </div>
      </section>

      {/* Holdet */}
      <section className="bg-[#ece6e2] px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...reveal()} className="mb-14 md:mb-20">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">{about('overline')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-black">
              {about('headingLine1')}
              <br />
              <span className="text-black/40">{about('headingLine2')}</span>
            </h2>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-black/70">
              {about('descriptions.0')} {about('descriptions.1')} {about('descriptions.2')}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {team.map((m, idx) => (
              <motion.article
                key={m.name}
                {...reveal(idx * 0.1)}
                className="flex gap-5 md:gap-6 items-start rounded-2xl bg-white/70 border border-black/[0.05] p-5 md:p-6"
              >
                <div className="relative shrink-0 w-24 h-28 md:w-28 md:h-36 overflow-hidden rounded-xl">
                  <Image src={m.img} alt={m.name} fill className={`${m.imgClass} grayscale`} sizes="112px" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black">{m.name}</h3>
                  <span className="block text-gold-dark text-[11px] font-medium uppercase tracking-[0.2em] mt-1.5 mb-3">{m.role}</span>
                  <p className="text-black/65 text-[15px] leading-relaxed">{m.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofien */}
      <section className="bg-black text-white px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div {...reveal()} className="lg:col-span-5">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold mb-6">{t('philosophyLabel')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-white">{t('philosophyHeading')}</h2>
            <TagLine items={lines} tone="light" size="md" className="mt-10" />
          </motion.div>
          <motion.div {...reveal(0.1)} className="lg:col-span-7 space-y-6">
            <p className="text-xl md:text-2xl leading-[1.45] text-white">{philosophy[0]}</p>
            <p className="text-lg md:text-xl leading-relaxed text-white/70">{philosophy[1]}</p>
            <p className="text-lg md:text-xl leading-relaxed text-white/70">{philosophy[2]}</p>
          </motion.div>
        </div>
      </section>

      {/* AI og det menneskelige */}
      <section className="bg-[#f7f5f2] border-y border-black/[0.05] px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...reveal()} className="mb-12 md:mb-16 max-w-4xl">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">{t('humanOverline')}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-black">{t('humanHeading')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
            {human.map((p, i) => (
              <motion.div key={i} {...reveal((i % 2) * 0.08)} className="border-t border-black/10 pt-7">
                <span aria-hidden="true" className="block w-10 h-[2px] bg-gold mb-5" />
                <p className="text-lg leading-relaxed text-black/70">{p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Afslutning – lys, med designforslaget som eneste handling */}
      <section className="bg-[#ece6e2] px-6 md:px-12 py-20 md:py-28">
        <motion.div
          {...reveal()}
          className="max-w-[1400px] mx-auto grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 lg:gap-24 items-end"
        >
          <div>
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">{t('ctaOverline')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-black">{t('ctaHeading')}</h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg leading-relaxed text-black/70 mb-7">{t('ctaText')}</p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <button
                type="button"
                onClick={openDesignProposal}
                className="group inline-flex items-center gap-3 bg-black text-white px-7 py-4 text-[15px] font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
              >
                {t('ctaButton')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <Link
                href="/cases"
                className="text-[15px] font-semibold text-black border-b border-black/30 pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
              >
                {t('casesLink')} →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
