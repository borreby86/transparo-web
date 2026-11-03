'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Cormorant_Garamond, Ephesis, Jost, Outfit, Playfair_Display, Raleway, Roboto } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { InteractiveDevices } from '@/components/ui/InteractiveDevices'
import screenManifest from '@/data/screenManifest.json'
import { CaseStudyDetail, SpecimenKey } from '@/data/caseStudies'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { TagLine } from '@/components/ui/TagLine'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Kun til design system-visningen (viser kundens egne skrifttyper)
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400'], display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], weight: ['200'], display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400'], display: 'swap' })
const raleway = Raleway({ subsets: ['latin'], weight: ['400'], display: 'swap' })
const jost = Jost({ subsets: ['latin'], weight: ['300'], display: 'swap' })
const roboto = Roboto({ subsets: ['latin'], weight: ['300'], display: 'swap' })
const ephesis = Ephesis({ subsets: ['latin'], weight: ['400'], display: 'swap' })

const SPECIMENS: Record<SpecimenKey, { className: string; weight: number }> = {
  cormorant: { className: cormorant.className, weight: 400 },
  outfit: { className: outfit.className, weight: 200 },
  playfair: { className: playfair.className, weight: 400 },
  raleway: { className: raleway.className, weight: 400 },
  jost: { className: jost.className, weight: 300 },
  roboto: { className: roboto.className, weight: 300 },
  ephesis: { className: ephesis.className, weight: 400 },
}

interface NextCase {
  slug: string
  title: string
  labels: string[]
}

interface CaseStudyClientProps {
  caseStudy: CaseStudyDetail
  nextCase?: NextCase
}

/** Editorial række: nummereret label til venstre, indhold til højre (inspireret af klassiske case study-layouts) */
function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[minmax(0,220px)_1fr] gap-6 md:gap-16 lg:gap-24">
      <div className="md:pt-2">
        <span className="inline-block w-6 h-[2px] bg-gold align-middle mr-3" />
        <span className="text-black/50 text-xs font-medium uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default function CaseStudyClient({ caseStudy, nextCase }: CaseStudyClientProps) {
  const shouldReduceMotion = useReducedMotion()
  const dur = shouldReduceMotion ? 0 : 0.7
  const reveal = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: dur, ease: 'easeOut' as const },
  }

  const { story } = caseStudy
  const host = caseStudy.siteUrl ? new URL(caseStudy.siteUrl).hostname.replace(/^www\./, '') : ''
  const hasInteractive = Boolean((screenManifest as Record<string, unknown>)[caseStudy.slug])

  const meta = [
    { k: 'Klient', v: caseStudy.author },
    { k: 'Ydelse', v: caseStudy.labels.join(' · ') },
    ...(caseStudy.timeline ? [{ k: 'Leveringstid', v: caseStudy.timeline }] : []),
    { k: 'Teknologi', v: caseStudy.technologies.slice(0, 3).join(' · ') },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative bg-black px-6 md:px-12 pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Link href="/cases" className="text-xs font-medium uppercase tracking-[0.15em] text-white/40 hover:text-gold transition-colors">
                ← Portfolio
              </Link>
              {caseStudy.labels.map((label, i) => (
                <span key={i} className="text-xs font-medium uppercase tracking-[0.15em] text-gold">
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 max-w-4xl"
            >
              {caseStudy.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.2 }}
              className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-14"
            >
              {caseStudy.subtitle}
            </motion.p>

            <motion.dl
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-white/10 pt-8"
            >
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="text-[11px] uppercase tracking-[0.2em] text-white/35 mb-2">{m.k}</dt>
                  <dd className="text-white/85 text-sm md:text-base leading-snug">{m.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </section>

        {/* Enheder – siden scroller ved hover */}
        <section className="bg-[#ece6e2] px-4 md:px-12 py-14 md:py-24">
          <motion.div {...reveal} className="max-w-[1280px] mx-auto">
            {hasInteractive ? (
              <InteractiveDevices slug={caseStudy.slug} title={caseStudy.title} />
            ) : (
              <Image
                src={`/portfolio-images/mockups/${caseStudy.slug}.webp`}
                alt={caseStudy.title}
                width={1536}
                height={1024}
                className="w-full h-auto"
                priority
                sizes="(max-width: 1180px) 100vw, 1180px"
              />
            )}
            {caseStudy.siteUrl && (
              <div className="mt-8 flex justify-center">
                <a
                  href={caseStudy.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-semibold text-sm hover:bg-gold hover:text-black transition-colors duration-300"
                >
                  Besøg {host}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            )}
          </motion.div>
        </section>

        {/* Udfordring & løsning */}
        <section className="px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-[1400px] mx-auto space-y-20 md:space-y-28">
            <motion.div {...reveal}>
              <Row label="Udfordringen">
                <p className="text-2xl md:text-3xl lg:text-[2rem] leading-[1.4] text-black/80 max-w-3xl">{caseStudy.challenge}</p>
              </Row>
            </motion.div>
            <motion.div {...reveal}>
              <Row label="Løsningen">
                <p className="text-2xl md:text-3xl lg:text-[2rem] leading-[1.4] text-black/80 max-w-3xl">{caseStudy.solution}</p>
              </Row>
            </motion.div>
            {caseStudy.family && (
              <motion.div {...reveal}>
                <Row label="Samme paraply">
                  <div className="max-w-3xl rounded-2xl border border-gold/40 bg-[#faf8f3] p-8 md:p-10">
                    <p className="text-lg md:text-xl leading-relaxed text-black/75 mb-6">{caseStudy.family.text}</p>
                    <Link
                      href={{ pathname: '/cases/[slug]', params: { slug: caseStudy.family.slug } }}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gold transition-colors"
                    >
                      {caseStudy.family.label}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </Row>
              </motion.div>
            )}
          </div>
        </section>

        {/* Højdepunkter */}
        {story && story.highlights.length > 0 && (
          <section className="px-6 md:px-12 py-20 md:py-32 bg-[#f7f5f2] border-y border-black/[0.05]">
            <div className="max-w-[1400px] mx-auto">
              <motion.div {...reveal} className="mb-16 md:mb-24">
                <Row label="Højdepunkter">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black max-w-2xl leading-[1.1]">
                    Det her er vi mest stolte af
                  </h2>
                </Row>
              </motion.div>

              <div className="space-y-24 md:space-y-40">
                {story.highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    {...reveal}
                    className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                  >
                    <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <BrowserFrame src={h.image.src} w={h.image.w} h={h.image.h} alt={h.title} host={host} />
                    </div>
                    <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <span className="block text-gold text-6xl md:text-7xl font-bold leading-none mb-6 opacity-90">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-4">{h.title}</h3>
                      <p className="text-black/60 text-base md:text-lg leading-relaxed mb-6">{h.text}</p>
                      <ul className="space-y-3">
                        {h.bullets.map((b) => (
                          <li key={b} className="flex gap-3 text-sm md:text-[15px] text-black/70 leading-snug">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Design system */}
        {story?.designSystem && (
          <section className="px-6 md:px-12 py-20 md:py-32">
            <div className="max-w-[1400px] mx-auto space-y-16">
              <motion.div {...reveal}>
                <Row label="Farver">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {story.designSystem.colors.map((c) => {
                      const light = parseInt(c.hex.slice(1, 3), 16) > 200
                      return (
                        <div key={c.hex}>
                          <div
                            className={`aspect-[4/3] rounded-xl flex items-end p-4 ${light ? 'border border-black/10' : ''}`}
                            style={{ backgroundColor: c.hex }}
                          >
                            <span className="text-xs font-mono tracking-wide" style={{ color: light ? '#1a1a1a' : '#fff' }}>
                              {c.hex}
                            </span>
                          </div>
                          <p className="mt-3 text-sm font-semibold text-black">{c.name}</p>
                          <p className="text-xs text-black/50 leading-snug">{c.use}</p>
                        </div>
                      )
                    })}
                  </div>
                </Row>
              </motion.div>

              <motion.div {...reveal}>
                <Row label="Typografi">
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {story.designSystem.fonts.map((f) => {
                      const sp = f.specimen ? SPECIMENS[f.specimen] : undefined
                      const cls = sp?.className ?? ''
                      const style = { fontWeight: sp?.weight }
                      return (
                        <div key={f.name} className="rounded-2xl border border-black/10 p-8 md:p-10 bg-[#faf8f5]">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-6">{f.role}</p>
                          <p className={`${cls} text-7xl md:text-8xl leading-none text-[#1a1a1a] mb-6`} style={style}>
                            Aa
                          </p>
                          <p className="text-lg font-semibold text-black mb-1">{f.name}</p>
                          <p className="text-sm text-black/50 mb-6">{f.note}</p>
                          <p className={`${cls} text-xl text-black/70 break-words`} style={style}>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ abcdefghijklmnopqrstuvwxyzæøå 0123456789
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </Row>
              </motion.div>
            </div>
          </section>
        )}

        {/* Teknik & leverancer */}
        <section className="px-6 md:px-12 py-20 md:py-28 border-t border-black/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...reveal}>
              <Row label="Leverancer & teknik">
                <div className="grid md:grid-cols-2 gap-12">
                  <ul className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
                    {caseStudy.deliverables.map((d) => (
                      <li key={d} className="py-4 text-black/80 text-base md:text-lg flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 mb-4">Bygget med</p>
                    <TagLine items={caseStudy.technologies} size="md" />
                  </div>
                </div>
              </Row>
            </motion.div>
          </div>
        </section>

        {/* Næste case */}
        {nextCase && (
          <section className="px-6 md:px-12 py-16 md:py-20 bg-[#f7f5f2] border-t border-black/[0.05]">
            <div className="max-w-[1400px] mx-auto">
              <Link href={{ pathname: '/cases/[slug]', params: { slug: nextCase.slug } }} className="group flex items-end justify-between gap-8">
                <div>
                  <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">Næste case</span>
                  <p className="text-2xl md:text-4xl font-bold text-black group-hover:text-gold transition-colors duration-300 max-w-3xl leading-tight">
                    {nextCase.title}
                  </p>
                </div>
                <ArrowRight className="w-8 h-8 shrink-0 text-black/30 group-hover:text-gold group-hover:translate-x-2 transition-all duration-300" />
              </Link>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="px-6 md:px-12 py-20 md:py-28 bg-black">
          <div className="max-w-[1000px] mx-auto text-center">
            <motion.div {...reveal}>
              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">Næste skridt</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Har du et projekt i tankerne?
              </h2>
              <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
                Lad os tage en snak om, hvad vi kan gøre for dig.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 font-bold text-sm uppercase tracking-[0.15em] hover:bg-gold/90 transition-colors"
              >
                Book et møde
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
