'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

interface FAQ {
  question: string
  answer: string
}

export function FAQPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const t = useTranslations('faqPage')

  const faqs = t.raw('questions') as FAQ[]

  return (
    <>
    <section className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-4">
            {t('title')}
          </h1>
        </div>

        {/* FAQ Accordion */}
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
                  <span className="font-medium text-lg md:text-xl text-navy pr-8 group-hover:text-navy/70 transition-colors">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-navy" />
                    ) : (
                      <Plus className="w-5 h-5 text-navy/40" />
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
                        <p className="text-base md:text-lg text-navy/60 leading-relaxed">
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
