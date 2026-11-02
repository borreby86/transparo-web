'use client'

import { motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HomeFactsSection() {
  const t = useTranslations('homeFacts')
  const shouldReduceMotion = useReducedMotion()
  const items = [0, 1, 2].map((i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }))
  const linkClass =
    'text-[15px] font-semibold text-black border-b border-black/30 pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors'

  return (
    <section className="bg-[#f7f5f2] px-6 md:px-12 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: 'easeOut' }}
        className="max-w-[1400px] mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {items.map((item) => (
            <div key={item.title} className="border-t-2 border-black pt-5">
              <h3 className="text-xl md:text-[22px] font-bold tracking-tight text-black mb-2">{item.title}</h3>
              <p className="text-black/65 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
          <Link href="/proces" className={linkClass}>
            {t('processLink')} →
          </Link>
          <Link href="/pakker" className={linkClass}>
            {t('pricesLink')} →
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
