'use client'

import { ReactLenis } from 'lenis/react'
import { useEffect, useState } from 'react'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Only enable Lenis on desktop (>1024px) for better mobile performance
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth > 1024)
    }

    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)

    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  // On mobile, render children without Lenis (use native scroll)
  if (!isDesktop) {
    return <>{children}</>
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  )
}