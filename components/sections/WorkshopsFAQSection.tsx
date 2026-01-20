'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Skal jeg kunne programmere?',
    answer: 'Nej. Du lærer at instruere en AI på almindeligt dansk. Koden skrives for dig.',
  },
  {
    question: 'Er teknologien virkelig den samme som bureauerne bruger?',
    answer: 'Ja. Next.js, Tailwind og Vercel er industristandard for moderne, hurtige websites. Det er præcis det, du betaler ekstra for hos et bureau.',
  },
  {
    question: 'Hvad koster det at drive siden bagefter?',
    answer: 'Hosting er gratis. Domæne koster ca. 100 kr. om året. Små ændringer i GitHub er gratis. Større ændringer med AI-hjælp koster få kroner.',
  },
  {
    question: 'Hvad hvis jeg går i stå?',
    answer: 'Du har adgang til videovejledninger og kan tilkøbe klippekort til personlig hjælp.',
  },
  {
    question: 'Hvor mange deltager?',
    answer: '2-10 personer. Så der er tid til dig.',
  },
]

export function WorkshopsFAQSection() {
  const shouldReduceMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-offwhite overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-navy/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Spørgsmål & svar
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy">
            Ofte stillede spørgsmål
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-2xl p-6 md:p-8 text-left shadow-sm hover:shadow-lg transition-shadow duration-300 group"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-display text-lg md:text-xl lg:text-2xl text-navy pr-4 group-hover:text-gold transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5 text-gold" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 border-t border-navy/5 mt-6">
                        <p className="text-navy/70 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
