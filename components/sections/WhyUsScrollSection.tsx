'use client'

import { Zap, Shield, Users, TrendingUp, Clock, Award } from 'lucide-react'
import { useTranslations } from 'next-intl'

const icons = [Zap, Shield, Users, TrendingUp, Clock, Award]

const reasonStyles = [
  { bgClass: 'bg-gray-100', textDark: true },
  { bgClass: 'bg-slate-950', textDark: false },
  { bgClass: 'bg-gray-300', textDark: true },
  { bgClass: 'bg-slate-950', textDark: false },
  { bgClass: 'bg-amber-50', textDark: true },
  { bgClass: 'bg-slate-950', textDark: false },
]

export function WhyUsScrollSection() {
  const t = useTranslations('whyUsScroll')
  const reasons = t.raw('reasons') as Array<{
    title: string
    subtitle: string
    description: string
    stats: string
  }>

  return (
    <div className="bg-slate-950">
      <div className="wrapper">
        {/* Hero Section */}
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <div className="text-center px-8 relative z-10">
            <span className="inline-block text-gold text-sm font-bold uppercase tracking-wider mb-4">
              {t('overline')}
            </span>
            <h1 className="2xl:text-7xl text-5xl md:text-6xl font-semibold tracking-tight leading-[120%]">
              {t('headingLine1')} <br />
              <span className="text-gold">{t('headingLine2')}</span> 👇
            </h1>
          </div>
        </section>

        {/* Stacking Panels */}
        {reasons.map((reason, index) => {
          const Icon = icons[index]
          const style = reasonStyles[index]
          const isFirstPanel = index === 0

          return (
            <section
              key={index}
              className={`${style.bgClass} ${style.textDark ? 'text-black' : 'text-white'} grid place-content-center h-screen sticky top-0 ${
                isFirstPanel ? 'rounded-tr-2xl rounded-tl-2xl' : ''
              } overflow-hidden`}
            >
              {/* Grid pattern background */}
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[length:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

              <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-2xl mx-auto mb-8 flex items-center justify-center ${
                    style.textDark ? 'bg-black/10' : 'bg-white/10'
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 ${style.textDark ? 'text-black' : 'text-gold'}`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h2 className="2xl:text-7xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[120%] mb-4">
                  {reason.title}
                </h2>

                {/* Subtitle */}
                <p className={`text-xl md:text-2xl mb-6 ${style.textDark ? 'opacity-70' : 'opacity-80'}`}>
                  {reason.subtitle}
                </p>

                {/* Description */}
                <p className={`text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto ${style.textDark ? 'opacity-60' : 'opacity-60'}`}>
                  {reason.description}
                </p>

                {/* Stats badge */}
                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                    style.textDark ? 'bg-black/10' : 'bg-white/10'
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
                  style.textDark ? 'text-black/5' : 'text-white/5'
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
