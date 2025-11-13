'use client'

import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

const valueProps = [
  {
    title: 'FAST PRIS',
    description: 'Ingen skjulte gebyrer eller ekstra regninger. Når vi siger 16.995 DKK, er det præcis hvad du betaler.',
    shape: 'asterisk',
    bgColor: 'bg-[#FBF6ED]', // Soft gold tint (light)
    iconColor: '#B89245', // Gold icon
    textColor: '#1A1A1A' // Dark text for readability
  },
  {
    title: 'PERSONALISERING',
    description: 'Hver løsning er skræddersyet til din virksomheds unikke behov og brand identitet.',
    shape: 'circle',
    bgColor: 'bg-[#0E1D3D]', // Navy background (bold)
    iconColor: '#FFFFFF', // White icon
    textColor: '#FFFFFF' // White text
  },
  {
    title: 'PROFESSIONALISME',
    description: 'Dansk håndværk kombineret med cutting-edge AI-teknologi for premium resultater.',
    shape: 'venn',
    bgColor: 'bg-[#F5F3F0]', // Light warm gray (light)
    iconColor: '#A39B96', // Warm gray icon
    textColor: '#1A1A1A' // Dark text for readability
  },
  {
    title: 'LYNLEVERING',
    description: 'Fra første møde til live website på 2-4 uger. Vi respekterer din tid.',
    shape: 'sphere',
    bgColor: 'bg-[#E8EDF5]', // Soft navy tint (light)
    iconColor: '#0E1D3D', // Navy icon
    textColor: '#1A1A1A' // Dark text for readability
  }
]

// Geometric shape components
function AsteriskShape() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="50" x2="170" y2="150" stroke="currentColor" strokeWidth="1" />
      <line x1="170" y1="50" x2="30" y2="150" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function CircleShape() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M 100 105 Q 100 120 85 130 T 70 155 L 130 155 Q 115 140 100 130 T 100 105" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function VennShape() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="80" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="120" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="70" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function SphereShape() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="100" cy="100" rx="60" ry="20" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="100" cy="100" rx="20" ry="60" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

const shapeComponents = {
  asterisk: AsteriskShape,
  circle: CircleShape,
  venn: VennShape,
  sphere: SphereShape
}

export function ValuePropSection() {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative bg-white overflow-hidden py-24 md:py-32 lg:py-40">
      {/* Full width container */}
      <div className="w-full px-8 md:px-12 lg:px-20">

        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-28"
        >
          {/* Title */}
          <div>
            <h2 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-[#0E1D3D] leading-[0.9]">
              HVORFOR
              <br />
              <span className="text-[#B89245]">OS</span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex items-center">
            <p className="text-xl md:text-2xl text-[#1A1A1A]/80 leading-relaxed max-w-2xl">
              Vi er forpligtede til at levere den højeste standard af kvalitet og
              et strejf af eksklusivitet, der opfylder hver enkelt kundes unikke ønsker.
              Vores personlige tilgang sikrer, at hver virksomhed føler sig virkelig
              værdsat og velplejet – uanset om de perfektionerer deres digitale tilstedeværelse
              eller bygger et nyt brand fra bunden.
            </p>
          </div>
        </motion.div>

        {/* Full width cards grid - all 4 visible */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {valueProps.map((prop, index) => {
              const ShapeComponent = shapeComponents[prop.shape as keyof typeof shapeComponents]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <div className={`relative ${prop.bgColor} ${prop.bgColor !== 'bg-[#0E1D3D]' ? 'border border-[#A39B96]/15' : ''} rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${prop.bgColor === 'bg-[#0E1D3D]' ? 'hover:shadow-[0_12px_24px_rgba(184,146,69,0.15)]' : 'hover:shadow-[0_12px_24px_rgba(14,29,61,0.08)]'}`}>
                    <div className="relative h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col">

                      {/* Shape illustration - bigger */}
                      <div className="flex-1 flex items-center justify-center mb-12">
                        <motion.div
                          className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
                          style={{ color: prop.iconColor }}
                          animate={{
                            rotate: hoveredCard === index ? [0, 10, -10, 0] : 0,
                            scale: hoveredCard === index ? 1.05 : 1
                          }}
                          transition={{
                            duration: 4,
                            repeat: hoveredCard === index ? Infinity : 0,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          }}
                        >
                          <ShapeComponent />
                        </motion.div>
                      </div>

                      {/* Title */}
                      <h3
                        className="font-display text-3xl md:text-4xl font-medium tracking-wide mb-6"
                        style={{ color: prop.textColor }}
                      >
                        {prop.title}
                      </h3>

                      {/* Description - always visible */}
                      <p
                        className="text-base md:text-lg leading-relaxed opacity-80"
                        style={{ color: prop.textColor }}
                      >
                        {prop.description}
                      </p>

                      {/* Hover accent line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredCard === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ transformOrigin: 'left', backgroundColor: prop.iconColor }}
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Optional bottom navigation dots for mobile */}
        <div className="flex justify-center gap-3 mt-12 md:hidden">
          {valueProps.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[#A39B96]/50"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
