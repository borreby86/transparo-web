'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FAQ {
  question: string
  answer: string
}

export function FAQPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('faqPage')

  const faqs = t.raw('questions') as FAQ[]

  return (
    <>
    {/* Header */}
    <section className="bg-black px-6 md:px-12 pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        >
          <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
            {t('overline')}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] tracking-tight mb-6">
            {t('title')}
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>
      </div>
    </section>

    {/* FAQ Accordion */}
    <section className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">

        <div className="space-y-px">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
                >
                  <span className="font-medium text-lg md:text-xl text-black pr-8 group-hover:text-black/70 transition-colors">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-black/40" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 md:pb-8 pr-12">
                        <p className="text-base md:text-lg text-black/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 md:px-12 py-20 md:py-28 bg-black">
      <div className="max-w-[1000px] mx-auto text-center">
        <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
          {t('bottomQuestion')}
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-10">
          {t('bottomHeading')}
        </h2>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-3 bg-gold text-black px-8 py-4 font-bold text-sm uppercase tracking-[0.15em] hover:bg-gold/90 transition-colors"
        >
          {t('contactButton')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
    </>
  )
}
