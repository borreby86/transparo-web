'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isProjectCard, setIsProjectCard] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setIsMounted(true)

    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      if (target.closest('[data-project-card]')) {
        setIsProjectCard(true)
      } else {
        setIsHovering(true)
      }
    }
    const handleMouseLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      if (target.closest('[data-project-card]')) {
        setIsProjectCard(false)
      } else {
        setIsHovering(false)
      }
    }

    const handleProjectEnter = () => setIsProjectCard(true)
    const handleProjectLeave = () => setIsProjectCard(false)

    window.addEventListener('mousemove', moveCursor)

    const observer = new MutationObserver(() => {
      const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]')
      hoverElements.forEach((el) => {
        // Skip elements inside project cards
        if (el.closest('[data-project-card]')) return
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      const projectCards = document.querySelectorAll('[data-project-card]')
      projectCards.forEach((el) => {
        el.removeEventListener('mouseenter', handleProjectEnter)
        el.removeEventListener('mouseleave', handleProjectLeave)
        el.addEventListener('mouseenter', handleProjectEnter)
        el.addEventListener('mouseleave', handleProjectLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Initial setup
    const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    hoverElements.forEach((el) => {
      if (el.closest('[data-project-card]')) return
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    const projectCards = document.querySelectorAll('[data-project-card]')
    projectCards.forEach((el) => {
      el.addEventListener('mouseenter', handleProjectEnter)
      el.addEventListener('mouseleave', handleProjectLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  }, [cursorX, cursorY, isVisible])

  if (!isMounted || !isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(218, 165, 32, 0.5)',
        }}
        animate={{
          scale: isHovering || isProjectCard ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
      />

      {/* Outer ring — normal hover state */}
      <motion.div
        className="fixed top-0 left-0 border border-gold rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isProjectCard ? 0 : isHovering ? 60 : 36,
          height: isProjectCard ? 0 : isHovering ? 60 : 36,
          opacity: isProjectCard ? 0 : 1,
          borderColor: isHovering ? 'rgba(218, 165, 32, 1)' : 'rgba(218, 165, 32, 0.6)',
          borderWidth: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
      />

      {/* Project card cursor — circle with gold arrow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-black pointer-events-none z-[9999] flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isProjectCard ? 120 : 0,
          height: isProjectCard ? 120 : 0,
          opacity: isProjectCard ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      >
        <div className="flex flex-col items-center gap-1">
          <ArrowUpRight className="w-5 h-5 text-gold" strokeWidth={2} />
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap">
            Se projekt
          </span>
        </div>
      </motion.div>
    </>
  )
}
