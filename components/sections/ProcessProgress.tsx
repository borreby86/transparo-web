'use client'

import { motion, useScroll, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

interface ProcessProgressProps {
  totalPhases: number
}

export function ProcessProgress({ totalPhases }: ProcessProgressProps) {
  const [activePhase, setActivePhase] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      // Calculate active phase based on scroll position relative to phase sections
      // This is a simplified approximation; for precision we might use IntersectionObserver in the parent or here
      const phaseSections = document.querySelectorAll('[id^="fase-"]')
      let current = 0
      
      phaseSections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        // If section is in the upper half of the viewport
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
          current = index + 1
        }
      })
      
      setActivePhase(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating indicator - Desktop only */}
      <motion.div 
        className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {Array.from({ length: totalPhases }).map((_, i) => {
          const phaseNum = i + 1
          const isActive = activePhase === phaseNum
          const isPast = activePhase > phaseNum

          return (
            <a
              key={i}
              href={`#fase-${phaseNum}`}
              className="group relative flex items-center justify-end"
              onClick={(e) => {
                e.preventDefault()
                const target = document.getElementById(`fase-${phaseNum}`)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <span className={`absolute right-8 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive ? 'opacity-100 translate-x-0 text-navy' : 'opacity-0 translate-x-4 pointer-events-none'
              }`}>
                Fase {phaseNum}
              </span>
              
              <div className={`w-3 h-3 rounded-full border transition-colors duration-300 ${
                isActive
                  ? 'bg-gold border-gold'
                  : isPast
                    ? 'bg-navy border-navy'
                    : 'bg-transparent border-navy/30 group-hover:border-navy/60'
              }`} />
            </a>
          )
        })}
      </motion.div>
    </>
  )
}
