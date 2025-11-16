'use client'

import { useState, useEffect, useRef } from 'react'
import type { TouchEvent } from 'react'
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
    question: 'Hvorfor er jeres priser så meget lavere end andre bureauer?',
    answer:
      'Vi bruger moderne teknologi og AI-assisterede værktøjer, der gør os 3-4 gange hurtigere end traditionelle bureauer. Det betyder lavere omkostninger for os - og for dig. Men vi går aldrig på kompromis med kvaliteten. Alle vores pakker bygges med samme professionelle teknologi (Next.js, Payload CMS), forskellen ligger kun i omfang og features.'
  },
  {
    id: 2,
    question: 'Hvad mener I med "ingen scope creep"?',
    answer:
      'Scope creep er når projekter trækker ud i det uendelige med konstante ændringer og revisioner. Vi stopper det fra starten med: (1) Klare pakker med definerede features, (2) Godkendelsesmøder ved vigtige milepæle, (3) Maksimalt 2 revisionsrunder inkluderet. Når du godkender designet, går vi videre. Det holder projektet på skinner og sikrer levering til tiden.'
  },
  {
    id: 3,
    question: 'Hvor lang tid tager det at få min hjemmeside?',
    answer:
      'Essentials: 2 uger fra signering til lancering, Professional: 3 uger, Business: 4 uger. Dette er garanterede leveringstider, ikke estimater. Vi kan holde dem fordi vi har strukturerede processer og bruger moderne udviklings-værktøjer.'
  },
  {
    id: 4,
    question: 'Hvad sker der hvis jeg har brug for ændringer efter lanceringen?',
    answer:
      'Du får 30 dages support efter lancering for fejlrettelser. Derefter tilbyder vi en vedligeholdelsespakke fra 495 kr/måned der dækker mindre opdateringer, sikkerhedsopdateringer og teknisk support. Større ændringer eller nye features kan tilkøbes efter behov.'
  },
  {
    id: 5,
    question: 'Hvorfor bruger I ikke WordPress?',
    answer:
      'WordPress er godt til nogle ting, men det har begrænsninger: langsom performance, sikkerhedsproblemer, dyre plugins, og det er svært at integrere med AI-værktøjer. Vi bruger Next.js og Payload CMS - moderne teknologi der er hurtigere, mere sikker, og giver jer bedre SEO. Bonus: Det er også gratis at hoste (0-75 kr/måned vs. 200-500 kr for WordPress).'
  },
  {
    id: 6,
    question: 'Skal jeg selv skrive alt indholdet?',
    answer:
      'Nej! Vi guider dig gennem indholdsprocessen med vores Content Checklist. Du skal levere grundlæggende info om din virksomhed, billeder/logo, og godkende tekster - men vi hjælper med strukturering og optimering til SEO. Du ved bedst hvad din virksomhed laver, vi ved hvordan det skal præsenteres online.'
  },
  {
    id: 7,
    question: 'Hvad hvis jeg ikke er teknisk anlagt?',
    answer:
      'Det behøver du ikke være! Vores Payload CMS admin-panel er designet så det er intuitivt at bruge - tænk "WordPress-enkelt" men med moderne teknologi. Vi giver dig personlig træning i at opdatere tekster, billeder og blogindlæg. Og vores support er altid klar til at hjælpe.'
  }
]

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const x = useMotionValue(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Detect mobile/tablet
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  // Carousel animation with responsive card width
  useEffect(() => {
    const inactiveCardWidth = isMobile ? window.innerWidth * 0.5 : 220
    const gap = isMobile ? 16 : 24

    // Calculate offset: all cards before active index are inactive
    const offset = activeIndex * (inactiveCardWidth + gap)

    const controls = animate(x, -offset, {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8
    })
    return controls.stop
  }, [activeIndex, x, isMobile])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqs.length) % faqs.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqs.length)
  }

  // Touch/swipe support for mobile
  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = touchStartX.current
  }

  const handleTouchMove = (e: TouchEvent<HTMLElement>) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (diff > threshold) {
      handleNext()
    } else if (diff < -threshold) {
      handlePrev()
    }
  }

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-white px-4 py-12 sm:px-8 sm:py-20 md:px-16"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.02, 0.04, 0.02]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -right-1/4 top-0 h-[600px] w-[600px] rounded-full bg-gold blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.015, 0.03, 0.015]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute -left-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-gold/60 blur-3xl"
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
              transition={{ duration: 0.6 }}
              className="font-display font-bold text-4xl leading-tight tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Frequently
              <br />
              Asked <span className="text-gold">Questions</span>
            </motion.h2>
          </div>

          {/* Right: Description & Navigation */}
          <div className="flex flex-1 flex-col items-start md:pl-20">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 max-w-md text-left text-base sm:text-lg text-black/70"
            >
              Find svar på almindelige spørgsmål om vores services, projekt proces, og teknisk
              ekspertise.
            </motion.p>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex gap-3"
            >
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Forrige spørgsmål"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy/20 bg-white shadow-md transition-all hover:border-gold hover:shadow-lg sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-4 w-4 text-navy sm:h-5 sm:w-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Næste spørgsmål"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-navy shadow-md transition-all hover:bg-navy/90 hover:shadow-lg sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-4 w-4 text-white sm:h-5 sm:w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Cards Container */}
        <div className="relative overflow-hidden">
          <motion.div className="flex gap-4 md:gap-6" style={{ x }}>
            {faqs.map((faq, index) => {
              const isActive = index === activeIndex
              const distance = Math.abs(index - activeIndex)

              return (
                <motion.div
                  key={faq.id}
                  animate={{
                    width: isActive
                      ? (isMobile ? '75vw' : '400px')
                      : (isMobile ? '50vw' : '220px'),
                    opacity: isActive ? 1 : isMobile ? 0.5 : Math.max(0.6, 1 - distance * 0.15),
                    backgroundColor: isActive ? 'rgb(17, 24, 39)' : 'rgb(250, 248, 246)'
                  }}
                  transition={{
                    width: {
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      mass: 0.8
                    },
                    opacity: {
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1]
                    },
                    backgroundColor: {
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }}
                  className={`h-[450px] flex-shrink-0 rounded-2xl p-6 shadow-lg sm:h-[480px] sm:p-8 md:h-[500px] md:p-10 ${
                    isActive ? 'text-white' : 'text-navy'
                  }`}
                  style={{
                    filter: isActive ? 'none' : 'brightness(0.97)'
                  }}
                >
                  <div className="flex h-full flex-col justify-start">
                    {/* Question */}
                    <motion.h3
                      animate={{
                        y: isActive ? 0 : 5,
                        color: isActive ? 'rgb(212, 175, 55)' : 'rgb(17, 24, 39)',
                        fontSize: isActive
                          ? (isMobile ? '1.5rem' : '1.875rem')
                          : (isMobile ? '1.125rem' : '1.25rem')
                      }}
                      transition={{
                        y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                        color: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                        fontSize: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                      }}
                      className="mb-6 font-display font-semibold leading-tight"
                    >
                      {faq.question}
                    </motion.h3>

                    {/* Answer - Always rendered, animated opacity */}
                    <motion.p
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                        scale: isActive ? 1 : 0.95
                      }}
                      transition={{
                        opacity: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: isActive ? 0.3 : 0
                        },
                        y: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: isActive ? 0.3 : 0
                        },
                        scale: {
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: isActive ? 0.3 : 0
                        }
                      }}
                      className="text-base leading-relaxed text-white/90 sm:text-lg"
                      style={{
                        pointerEvents: isActive ? 'auto' : 'none'
                      }}
                    >
                      {faq.answer}
                    </motion.p>
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
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center gap-2 sm:mt-12"
        >
          {faqs.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className={`h-1.5 rounded-full transition-all sm:h-2 ${
                index === activeIndex ? 'w-6 bg-gold sm:w-8' : 'w-1.5 bg-navy/30 sm:w-2'
              }`}
              aria-label={`Gå til spørgsmål ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
