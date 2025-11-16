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
      'Ja, absolut! Du kan altid opgradere til en højere pakke. Vi beregner differenceprisen og tilføjer de ekstra funktioner. Downgrade er også muligt, men vi anbefaler at vælge den rigtige pakke fra start for at undgå ekstra arbejde.'
  },
  {
    question: 'Hvad er præcis inkluderet i hver pakke?',
    answer:
      'Hver pakke inkluderer forskellige antal sider, funktioner og support. Se vores sammenligningsmatrix ovenfor for en detaljeret oversigt. Alle pakker inkluderer dog: Mobil-responsive design, Payload CMS, moderne teknologi stack (Next.js), og basis SEO.'
  },
  {
    question: 'Hvor lang tid tager hver pakke at bygge?',
    answer:
      'Essentials: 10-14 dage. Professional: 14-21 dage. Business: 21-28 dage. Dette er fra projektstart til lancering. Timelines kan tilpasses efter dine behov, men hurtigere levering kan påvirke pris.'
  },
  {
    question: 'Hvad sker der efter de inkluderede revisionsrunder?',
    answer:
      'Essentials inkluderer 2 revisionsrunder, Professional 3, og Business 4. Efter disse runder koster ændringer ekstra (typisk 995 DKK/time). Dette sikrer projektet bliver færdigt og forhindrer scope creep.'
  },
  {
    question: 'Kan jeg tilføje ekstra funktioner til min pakke?',
    answer:
      'Ja! Vi tilbyder flere tilkøb: Ekstra sider (1.495 kr/side), E-mail opsætning (2.995 kr), Copywriting (fra 3.995 kr), og Fotografi (fra 4.995 kr). Kontakt os for andre specialfunktioner.'
  },
  {
    question: 'Hvad hvis jeg har brug for noget der ikke er i nogen pakke?',
    answer:
      'Vi tilbyder custom løsninger! Kontakt os, så laver vi et skræddersyet tilbud baseret på dine behov. Vi kan bygge alt fra komplekse web-apps til specialiserede integrationer.'
  },
  {
    question: 'Er der løbende omkostninger efter lancering?',
    answer:
      'Hosting koster typisk 150-300 kr/måned (via Vercel eller lignende). Domæne er ca. 100 kr/år. Vi tilbyder også vedligeholdelsesaftaler fra 1.995 kr/måned hvis du ønsker løbende support og opdateringer.'
  },
  {
    question: 'Hvad er jeres garanti mod scope creep?',
    answer:
      'Vi bruger strukturerede revisionsrunder med klare sign-off punkter. Efter design-godkendelse koster ændringer ekstra. Dette sikrer projektet bliver færdigt til tiden og til den aftalte pris. 0% scope creep garanti.'
  }
]

export function PackagesFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-offwhite px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-6">
              Ofte stillede <span className="text-gold">spørgsmål</span>
            </h2>
            <p className="text-lg sm:text-xl text-black/70">
              Alt du skal vide om vores pakker
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left group"
                >
                  <span className={`font-display font-bold text-base sm:text-lg md:text-xl pr-8 ${isOpen ? 'text-gold' : 'text-navy group-hover:text-gold'} transition-colors`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0 ${isOpen ? 'bg-gold' : 'bg-navy group-hover:bg-gold'} transition-colors`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-2">
                        <p className="text-base text-black/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-black/70 mb-4">
            Har du andre spørgsmål?
          </p>
          <a
            href="/kontakt"
            className="inline-block bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
          >
            Kontakt os
          </a>
        </motion.div>
      </div>
    </section>
  )
}
