'use client'

import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Mount guard for SSR
    setIsMounted(true)

    // Hide on mobile/touch devices
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (hasTouch) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', moveCursor)

    // Track hoverable elements dynamically
    const observer = new MutationObserver(() => {
      const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]')
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Initial setup
    const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
      const hoverElements = document.querySelectorAll('a, button, [data-cursor-hover]')
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, isVisible])

  // Don't render on server or if not visible
  if (!isMounted || !isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 border border-gold/30 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          borderColor: isHovering ? 'rgba(218, 165, 32, 0.8)' : 'rgba(218, 165, 32, 0.3)',
          borderWidth: isHovering ? 2 : 1,
        }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      />
    </>
  )
}
