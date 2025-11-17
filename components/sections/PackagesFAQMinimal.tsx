'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: 'Kan jeg opgradere min pakke senere?',
    answer:
      'Ja, absolut! Du kan altid opgradere til en højere pakke. Vi beregner differenceprisen og tilføjer de ekstra funktioner.'
  },
  {
    question: 'Hvad er præcis inkluderet i hver pakke?',
    answer:
      'Hver pakke inkluderer forskellige antal sider, funktioner og support. Alle pakker inkluderer: Mobil-responsive design, Payload CMS, Next.js, og SEO.'
  },
  {
    question: 'Hvor lang tid tager hver pakke at bygge?',
    answer:
      'Essentials: 10-14 dage. Professional: 14-21 dage. Business: 21-28 dage. Fra projektstart til lancering.'
  },
  {
    question: 'Hvad sker der efter de inkluderede revisionsrunder?',
    answer:
      'Efter revisionsrunderne koster ændringer ekstra (995 DKK/time). Dette sikrer projektet bliver færdigt og forhindrer scope creep.'
  },
  {
    question: 'Er der løbende omkostninger efter lancering?',
    answer:
      'Hosting: 150-300 kr/måned. Domæne: ca. 100 kr/år. Vedligeholdelse: fra 1.995 kr/måned (valgfrit).'
  },
  {
    question: 'Hvad er jeres garanti mod scope creep?',
    answer:
      'Strukturerede revisionsrunder med klare sign-off punkter. Efter godkendelse koster ændringer ekstra. 0% scope creep garanti.'
  }
]

export function PackagesFAQMinimal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        {/* Header - Minimal */}
        <div className="mb-16 md:mb-20">
          <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-4">
            Ofte stillede spørgsmål
          </h2>
        </div>

        {/* FAQ Accordion - Clean */}
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

        {/* Simple CTA */}
        <div className="mt-16 md:mt-20 pt-16 md:pt-20 border-t border-gray-100 text-center">
          <p className="text-lg text-navy/60 mb-6">
            Har du andre spørgsmål?
          </p>
          <a
            href="/kontakt"
            className="inline-block px-8 py-4 bg-navy text-white font-semibold hover:bg-navy/90 transition-colors"
          >
            Kontakt os
          </a>
        </div>
      </div>
    </section>
  )
}
