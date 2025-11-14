'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface FAQ {
  id: number
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: 'Hvad er inkluderet i hver pakke?',
    answer:
      'Alle pakker inkluderer professionel design, moderne teknologi (Next.js + Payload CMS), mobiloptimering, og fuld ejerskab af koden. Essentials giver dig en komplet website, Professional tilføjer blog og avancerede funktioner, mens Business giver fuld fleksibilitet med custom features.'
  },
  {
    id: 2,
    question: 'Hvad betyder "AI-drevet udvikling" for mit projekt?',
    answer:
      'Vi kombinerer AI-værktøjer (Cursor/Windsurf) med ekspert design for at levere hurtigere uden at gå på kompromis med kvalitet. AI hjælper med kodning og optimering, mens vores designere sikrer en unik, professionel oplevelse tilpasset din virksomhed.'
  },
  {
    id: 3,
    question: 'Kan jeg selv opdatere min website efter lancering?',
    answer:
      'Ja! Alle websites inkluderer Payload CMS – et professionelt, brugervenligt admin-panel. Du kan opdatere tekst, billeder, blog posts og meget mere uden teknisk viden. Vi giver også 30-45 minutters træning, så du føler dig tryg.'
  },
  {
    id: 4,
    question: 'Hvor lang tid tager det at få min website klar?',
    answer:
      'Essentials leveres på 1-2 uger, Professional på 2-3 uger, og Business på 3-4 uger. Tidslinjen afhænger af, hvor hurtigt du leverer indhold (tekst, billeder) og feedback. Vi holder dig opdateret gennem hele processen.'
  }
]

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const x = useMotionValue(0)

  useEffect(() => {
    const targetX = -activeIndex * 606
    const controls = animate(x, targetX, {
      type: 'spring',
      stiffness: 300,
      damping: 30
    })
    return controls.stop
  }, [activeIndex, x])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqs.length) % faqs.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqs.length)
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] px-8 py-20 md:px-16">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-blue-400 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -left-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-indigo-400 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Left: Heading */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="text-6xl font-light leading-tight tracking-tight md:text-7xl"
            >
              Frequently
              <br />
              Asked <span className="text-[#2563eb]">Questions</span>
            </motion.h2>
          </div>

          {/* Right: Description & Navigation */}
          <div className="flex flex-1 flex-col items-start md:pl-20">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 max-w-md text-left text-lg text-gray-600"
            >
              Find svar på almindelige spørgsmål om vores services, projekt proces, og teknisk
              ekspertise.
            </motion.p>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-3"
            >
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Forrige spørgsmål"
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 bg-white shadow-md transition-all hover:border-gray-400 hover:shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Næste spørgsmål"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-md transition-all hover:bg-gray-800 hover:shadow-lg"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative overflow-visible">
          <motion.div className="flex gap-6" style={{ x }}>
            {faqs.map((faq, index) => {
              const isActive = index === activeIndex
              const distance = Math.abs(index - activeIndex)

              return (
                <motion.div
                  key={faq.id}
                  animate={{
                    scale: isActive ? 1 : Math.max(0.7, 1 - distance * 0.15),
                    opacity: isActive ? 1 : Math.max(0.2, 1 - distance * 0.3),
                    rotateY: isActive ? 0 : (index - activeIndex) * 5
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                  className={`h-[560px] w-[600px] flex-shrink-0 rounded-3xl p-14 shadow-2xl transition-all duration-700 ${
                    isActive ? 'bg-[#1e3a5f] text-white' : 'bg-[#e5e7eb] text-gray-800'
                  }`}
                  style={{
                    filter: isActive ? 'none' : 'brightness(0.9) blur(1px)',
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <div className="flex h-full flex-col justify-between">
                    {/* Question */}
                    <motion.h3
                      animate={{
                        y: isActive ? 0 : 10
                      }}
                      transition={{ duration: 0.5 }}
                      className={`mb-10 text-4xl font-normal leading-snug ${
                        isActive ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {faq.question}
                    </motion.h3>

                    {/* Answer - Only visible on active card */}
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg leading-relaxed text-white/90"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center gap-2"
        >
          {faqs.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.2 }}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-[#2563eb]' : 'w-2 bg-gray-400'
              }`}
              aria-label={`Gå til spørgsmål ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
