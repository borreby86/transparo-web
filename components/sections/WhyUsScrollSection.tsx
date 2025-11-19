'use client'

import { Zap, Shield, Users, TrendingUp, Clock, Award } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'AI-Drevet Udvikling',
    subtitle: 'Hurtigere levering, lavere pris',
    description: 'Vi bruger AI-værktøjer som Cursor og Windsurf til at accelerere udviklingen. Det betyder kortere leveringstid og lavere omkostninger - uden at gå på kompromis med kvaliteten.',
    stats: '50% hurtigere',
    bgClass: 'bg-gray-100',
    textDark: true
  },
  {
    icon: Shield,
    title: 'Fast Pris Garanti',
    subtitle: 'Ingen overraskelser',
    description: 'Med vores strukturerede proces og klare milepæle ved du præcis, hvad du får og hvad det koster. Ingen scope creep, ingen skjulte gebyrer.',
    stats: '100% transparent',
    bgClass: 'bg-slate-950',
    textDark: false
  },
  {
    icon: Users,
    title: 'Dansk Ekspertise',
    subtitle: 'Lokal forståelse, global kvalitet',
    description: 'Vi forstår det danske marked og danske SMVers behov. Du får personlig service på dansk med forståelse for din forretning.',
    stats: '100+ projekter',
    bgClass: 'bg-gray-300',
    textDark: true
  },
  {
    icon: TrendingUp,
    title: 'Performance Fokus',
    subtitle: 'Lighthouse 90+ garanti',
    description: 'Alle websites leveres med minimum 90+ i Lighthouse score. Det betyder hurtige loadtider, bedre SEO og flere konverteringer.',
    stats: '90+ score',
    bgClass: 'bg-slate-950',
    textDark: false
  },
  {
    icon: Clock,
    title: '15 Dages Levering',
    subtitle: 'Fra brief til lancering',
    description: 'Vores effektive proces betyder, at du kan have din nye website live inden for 15 arbejdsdage. Ingen måneders ventetid.',
    stats: '15 dage',
    bgClass: 'bg-amber-50',
    textDark: true
  },
  {
    icon: Award,
    title: 'Moderne Teknologi',
    subtitle: 'Next.js & Payload CMS',
    description: 'Vi bruger kun den nyeste og bedste teknologi. Det giver dig en fremtidssikret løsning, der er nem at vedligeholde og udvide.',
    stats: 'Enterprise-grade',
    bgClass: 'bg-slate-950',
    textDark: false
  }
]

export function WhyUsScrollSection() {
  return (
    <div className="bg-slate-950">
      <div className="wrapper">
        {/* Hero Section */}
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <div className="text-center px-8 relative z-10">
            <span className="inline-block text-gold text-sm font-bold uppercase tracking-wider mb-4">
              Derfor os
            </span>
            <h1 className="2xl:text-7xl text-5xl md:text-6xl font-semibold tracking-tight leading-[120%]">
              Hvorfor Vælger <br />
              <span className="text-gold">SMV&apos;er Os</span> 👇
            </h1>
          </div>
        </section>

        {/* Stacking Panels */}
        {reasons.map((reason, index) => {
          const Icon = reason.icon
          const isFirstPanel = index === 0

          return (
            <section
              key={index}
              className={`${reason.bgClass} ${reason.textDark ? 'text-black' : 'text-white'} grid place-content-center h-screen sticky top-0 ${
                isFirstPanel ? 'rounded-tr-2xl rounded-tl-2xl' : ''
              } overflow-hidden`}
            >
              {/* Grid pattern background */}
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

              <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center ${
                    reason.textDark ? 'bg-black/10' : 'bg-white/10'
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 ${reason.textDark ? 'text-black' : 'text-gold'}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h2 className="2xl:text-7xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[120%] mb-4">
                  {reason.title}
                </h2>

                {/* Subtitle */}
                <p className={`text-xl md:text-2xl mb-6 ${reason.textDark ? 'opacity-70' : 'opacity-80'}`}>
                  {reason.subtitle}
                </p>

                {/* Description */}
                <p className={`text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto ${reason.textDark ? 'opacity-60' : 'opacity-60'}`}>
                  {reason.description}
                </p>

                {/* Stats badge */}
                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                    reason.textDark ? 'bg-black/10' : 'bg-white/10'
                  }`}
                >
                  <span className="text-2xl font-bold text-gold">
                    {reason.stats}
                  </span>
                </div>
              </div>

              {/* Panel number */}
              <div className="absolute bottom-8 right-8 md:right-12">
                <span className={`text-6xl md:text-8xl font-bold ${
                  reason.textDark ? 'text-black/5' : 'text-white/5'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
