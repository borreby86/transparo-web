'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useReducedMotion } from '@/hooks/useReducedMotion'
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
  const story = useTranslations('problemSolution')
  const about = useTranslations('about')
  const values = useTranslations('whyUs')
  const process = useTranslations('processTimeline')
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
  const reasons = [0, 1, 2, 3].map((i) => ({
    title: values(`reasons.${i}.title`),
    description: values(`reasons.${i}.description`),
  }))
  const steps = [0, 1, 2, 3].map((i) => ({
    title: process(`steps.${i}.title`),
    description: process(`steps.${i}.description`),
  }))

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-5xl"
          >
            {story('heading')}
          </motion.h1>
          <motion.p {...intro(0.2)} className="text-lg md:text-xl text-white/55 max-w-2xl leading-relaxed mb-14">
            {story('paragraph1')}
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
        <div className="max-w-[1400px] mx-auto space-y-20 md:space-y-28">
          <motion.div {...reveal()}>
            <Row label={t('storyLabel')}>
              <p className="text-2xl md:text-3xl lg:text-[2rem] leading-[1.4] text-black/80 max-w-3xl">
                {about('descriptions.0')} <span className="text-black">{about('descriptions.1')}</span>
              </p>
            </Row>
          </motion.div>
          <motion.div {...reveal()}>
            <Row label={t('approachLabel')}>
              <p className="text-2xl md:text-3xl lg:text-[2rem] leading-[1.4] text-black/80 max-w-3xl">{story('paragraph2')}</p>
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
          </motion.div>
          <div className="grid md:grid-cols-2 gap-14 md:gap-12 lg:gap-20">
            {team.map((m, idx) => (
              <motion.article key={m.name} {...reveal(idx * 0.12)} className={idx === 1 ? 'md:mt-20' : ''}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)] mb-7">
                  <Image src={m.img} alt={m.name} fill className={`${m.imgClass} grayscale`} sizes="(max-width: 768px) 100vw, 560px" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-black">{m.name}</h3>
                <span className="block text-gold-dark text-xs font-medium uppercase tracking-[0.2em] mt-2 mb-4">{m.role}</span>
                <p className="text-black/65 text-base md:text-lg leading-relaxed max-w-xl">{m.bio}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Værdier */}
      <section className="bg-[#f7f5f2] border-y border-black/[0.05] px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...reveal()} className="mb-14 md:mb-20 max-w-3xl">
            <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold-dark mb-6">{values('overline')}</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight text-black mb-6">
              {values('headingLine1')} <span className="text-black/40">{values('headingLine2')}</span>
            </h2>
            <p className="text-lg md:text-xl text-black/65 leading-relaxed">{values('description')}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
            {reasons.map((r, i) => (
              <motion.div key={r.title} {...reveal((i % 4) * 0.08)} className="border-t border-black/10 pt-8">
                <span className="block text-gold text-6xl md:text-7xl font-bold leading-none tracking-tight mb-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-black leading-tight mb-3">{r.title}</h3>
                <p className="text-black/60 leading-relaxed">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processen i korte træk */}
      <section className="bg-black text-white px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...reveal()} className="flex flex-wrap items-end justify-between gap-8 mb-14 md:mb-20">
            <div>
              <span className="block text-xs font-medium uppercase tracking-[0.2em] text-gold mb-6">{process('overline')}</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.06] tracking-tight">
                {process('headingLine1')}
                <br />
                <span className="text-gold">{process('headingLine2')}</span>
              </h2>
            </div>
            <Link
              href="/proces"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white hover:text-gold transition-colors"
            >
              {t('processLink')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {steps.map((s, i) => (
              <motion.li key={s.title} {...reveal((i % 4) * 0.08)} className="border-t border-white/15 pt-8">
                <span className="block text-gold text-6xl md:text-7xl font-bold leading-none tracking-tight mb-6">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.description}</p>
              </motion.li>
            ))}
          </ol>
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
