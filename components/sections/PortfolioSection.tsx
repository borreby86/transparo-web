'use client'

import { useState, useEffect, useRef } from 'react'
import type { TouchEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudy {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  link: string
  labels?: string[]
  quote: string
  author: string
  role: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Fremtidens digitale sundhedsplatform',
    subtitle: 'En ny digital standard for sundhed og velvære',
    imageUrl: '/portfolio-images/Sundhed.png',
    link: '/cases/health-platform',
    labels: ['HealthTech', 'Platform'],
    quote:
      'Transparo oversatte et komplekst sundhedsunivers til et intuitivt digitalt økosystem. Vores brugere føler sig trygge, og platformen performer fra dag ét.',
    author: 'Louise Kjær',
    role: 'Produktchef, Sundhedskonsortiet'
  },
  {
    id: 2,
    title: 'AI-drevet fodboldanalyse',
    subtitle: 'Præcise forudsigelser, dybe data og taktiske indsigter',
    imageUrl: '/portfolio-images/WalterAI-Fodbold.png',
    link: '/cases/walter-ai',
    labels: ['AI', 'Fodbold'],
    quote:
      'De fangede tempoet og intensiteten i sporten og bragte data til live. Platformen er blevet et fast værktøj på både træningsbanen og stadion.',
    author: 'Mikkel Juul',
    role: 'CEO, WalterAI'
  },
  {
    id: 3,
    title: 'Professionel fodterapi for private kunder',
    subtitle: 'En moderne klinikoplevelse med fokus på sundhed, velvære og ekspertbehandling',
    imageUrl: '/portfolio-images/Flotte-Foder.png',
    link: '/cases/flotte-foedder',
    labels: ['Branding', 'Website'],
    quote:
      'Vi gik fra et traditionelt klinikudtryk til en digital oplevelse der føles rolig, professionel og personlig. Transparo tænkte på hver eneste detalje.',
    author: 'Camilla Højland',
    role: 'Indehaver, Flotte Fødder'
  },
  {
    id: 4,
    title: 'Fotografportefølje med fokus på autenticitet',
    subtitle: 'En elegant og personlig fotowebsite til bryllupper, dåb og livsstil',
    imageUrl: '/portfolio-images/Photograph.png',
    link: '/cases/alex-morgan-photography',
    labels: ['Branding', 'Website'],
    quote:
      'Fotografiet fik plads til at ånde, og besøgende glider ubesværet igennem porteføljen. Det føles som et magasin skabt kun til mig.',
    author: 'Alex Morgan',
    role: 'Fotograf'
  },
  {
    id: 5,
    title: 'Autentisk lederudvikling med hesteassisteret coaching',
    subtitle: 'En videnskabeligt funderet metode til nærvær, klarhed og stærkere lederskab',
    imageUrl: '/portfolio-images/Hest.png',
    link: '/cases/christina-borreby',
    labels: ['Branding', 'Website'],
    quote:
      'De forstod læringsrejsen vi ville skabe og oversatte nærvær til et digitalt univers. Resultatet er både modigt og jordnært.',
    author: 'Christina Borreby',
    role: 'Stifter, Christina Borreby'
  },
  {
    id: 6,
    title: '40 år med lokal teaterkultur og fællesskab',
    subtitle: 'En moderne teateroplevelse med fokus på revy, dramatik og stærke fortællinger',
    imageUrl: '/portfolio-images/Revy.png',
    link: '/cases/vat85',
    labels: ['Branding', 'Website'],
    quote:
      'Festivalånden lever i hver detalje. Fra billetflow til fortælling er alt gennemført – og publikum engagerer sig som aldrig før.',
    author: 'Thomas Kjeldsen',
    role: 'Formand, VAT 85'
  }
]

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
    }

    updateScreenSize()
    window.addEventListener('resize', updateScreenSize)
    setHasMounted(true)
    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  // Touch/swipe support
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
      setAutoPlay(false)
    } else if (diff < -threshold) {
      handlePrev()
      setAutoPlay(false)
    }
  }

  const activeStudy = caseStudies[activeIndex]
  const prevIndex = (activeIndex - 1 + caseStudies.length) % caseStudies.length
  const nextIndex = (activeIndex + 1) % caseStudies.length
  const cardWidth = isMobile ? '92vw' : isTablet ? '85vw' : 'min(1300px, 90vw)'
  const cardHeight = isMobile ? '450px' : isTablet ? '600px' : '700px'

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white py-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mb-12 text-3xl font-light text-[#0E1D3D] sm:mb-16 sm:text-4xl md:mb-20 md:text-5xl lg:text-6xl"
      >
        Case Studies
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative h-[500px] w-full sm:h-[600px] md:h-[700px] lg:h-[750px]">
        {caseStudies.map((study, index) => {
          const labelText =
            study.labels && study.labels.length > 0
              ? study.labels.map((label) => label.toUpperCase()).join(' • ')
              : 'CASE STUDY'
          const isActive = index === activeIndex
          const isPrev = index === prevIndex
          const isNext = index === nextIndex

          let opacity = 0
          let zIndex = 1
          let pointerEvents: 'none' | 'auto' = 'none'

          if (isActive) {
            opacity = 1
            zIndex = 50
            pointerEvents = 'auto'
          } else if (!isMobile && isPrev) {
            opacity = 0.3
            zIndex = 40
            pointerEvents = 'auto'
          } else if (!isMobile && isNext) {
            opacity = 0.3
            zIndex = 40
            pointerEvents = 'auto'
          } else {
            opacity = 0
            zIndex = 1
          }

          if (isMobile && !isActive) {
            opacity = 0
            pointerEvents = 'none'
          }

          const handleCardClick = (e: React.MouseEvent) => {
            if (!isActive) {
              e.preventDefault()
              setActiveIndex(index)
              setAutoPlay(false)
            }
          }

          return (
            <motion.div
              key={study.id}
              initial={false}
              animate={{
                opacity,
                scale: isActive ? 1 : 0.65,
                x: isActive ? '-50%' : isPrev && !isMobile ? 'calc(-50% - 1250px)' : isNext && !isMobile ? 'calc(-50% + 1250px)' : '-50%',
                y: isActive ? '-50%' : !isMobile && (isPrev || isNext) ? '-35%' : '-50%'
              }}
              whileHover={
                !isActive && (isPrev || isNext)
                  ? { scale: 0.7, opacity: 0.5 }
                  : undefined
              }
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                width: cardWidth,
                height: cardHeight,
                zIndex,
                pointerEvents,
                cursor: isActive ? 'default' : isPrev || isNext ? 'pointer' : 'default'
              }}
              onClick={handleCardClick}
            >
              <Link href={study.link} className="block h-full">
                <div className="group relative h-full overflow-visible rounded-[20px] shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
                  {/* Background Image */}
                  <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                    <Image
                      src={study.imageUrl}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="1100px"
                      priority={index === 0}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-[1] rounded-[20px] bg-[linear-gradient(125deg,rgba(15,25,35,0.88)_0%,rgba(15,25,35,0.65)_40%,rgba(15,25,35,0)_75%)]" />

                  {/* Content */}
                  <div className="relative z-[2] h-full">
                    {/* Top Left Content */}
                    <div className="absolute left-6 top-6 max-w-[420px] sm:left-8 sm:top-8 sm:max-w-[480px] md:left-[60px] md:top-[60px] md:max-w-[520px]">
                      {/* Case Label */}
                      <div className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-white/50 sm:mb-4 sm:text-[10px] md:mb-5 md:text-[11px]">
                        CASE {study.id.toString().padStart(2, '0')} — {labelText}
                      </div>

                      {/* Title */}
                      <h3 className="mb-3 text-[26px] font-light leading-[1.2] text-white sm:mb-4 sm:text-[30px] md:text-[38px] lg:text-[42px]">
                        {study.title}
                      </h3>

                      {/* Description */}
                      <p className="mb-6 max-w-[380px] text-[14px] leading-[1.6] text-white/85 sm:mb-8 sm:max-w-[440px] sm:text-[15px] md:mb-10 md:max-w-[480px] md:text-[17px]">
                        {study.subtitle}
                      </p>

                      {/* VIEW Button */}
                      <button className="inline-flex items-center rounded-[30px] border-[1.5px] border-white/30 bg-white/[0.08] px-5 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-white backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/[0.15] sm:px-6 sm:py-2.5 sm:text-[10px] md:px-8 md:py-3 md:text-[12px]">
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Testimonial Box - Overlay Outside Card */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute -bottom-8 left-0 right-0 z-[70] mx-auto w-[calc(100%-40px)] max-w-[800px] rounded-xl bg-white/[0.97] p-5 text-center shadow-2xl backdrop-blur-xl sm:-bottom-10 sm:w-[calc(100%-60px)] sm:rounded-2xl sm:p-7 md:-bottom-14 md:w-[calc(100%-100px)] md:p-10 lg:-bottom-16 lg:w-[calc(100%-120px)] lg:p-12"
                  >
                    {/* Quote */}
                    <p className="mb-4 text-[13px] italic leading-relaxed text-gray-600 sm:mb-5 sm:text-[14px] md:mb-6 md:text-[15px] lg:text-[17px]">
                      "{study.quote}"
                    </p>

                    {/* Author */}
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-900 sm:text-[11px] md:text-[12px] lg:text-[13px]">
                      {study.author}
                    </div>
                    <div className="text-[10px] text-gray-500 sm:text-[11px] md:text-[12px] lg:text-[13px]">{study.role}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Dot Navigation */}
      <div className="relative z-10 mt-32 flex gap-2.5">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index)
              setAutoPlay(false)
            }}
            aria-label={`Skift til case ${index + 1}`}
            className={`transition-all duration-300 ${
              index === activeIndex
                ? 'h-2 w-10 rounded bg-gray-800'
                : 'h-2 w-2 rounded-full bg-gray-400 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
