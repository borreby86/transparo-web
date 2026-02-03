'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProcessHeroSection } from '@/components/sections/ProcessHeroSection'
import { ProcessPhaseSection } from '@/components/sections/ProcessPhaseSection'
import { ProcessFinalCTA } from '@/components/sections/ProcessFinalCTA'
import { ProcessProgress } from '@/components/sections/ProcessProgress'
import { useMessages } from 'next-intl'

const phaseConfig = [
  { iconName: 'Target' as const, backgroundStyle: 'light' as const, imageUrl: '/images/unsplash/proces-1.webp' },
  { iconName: 'FileText' as const, backgroundStyle: 'gold' as const, imageUrl: '/images/unsplash/proces-2.webp' },
  { iconName: 'Palette' as const, backgroundStyle: 'light' as const, imageUrl: '/images/unsplash/proces-3.webp' },
  { iconName: 'Code' as const, backgroundStyle: 'navy' as const, imageUrl: '/images/unsplash/proces-4.webp' },
  { iconName: 'TestTube' as const, backgroundStyle: 'light' as const, imageUrl: '/images/unsplash/proces-5.webp' },
  { iconName: 'Rocket' as const, backgroundStyle: 'success' as const, imageUrl: '/images/unsplash/why-us-3.webp' },
  { iconName: 'Headphones' as const, backgroundStyle: 'warmgray' as const, imageUrl: '/images/unsplash/proces-6.webp' },
]

export default function ProcesPage() {
  const messages = useMessages()
  const processMessages = messages.process as {
    phases: Array<{
      phaseNumber: number
      title: string
      subtitle: string
      timeline: string
      description: string
      keyPoints: string[]
      checkpointText: string
    }>
  }

  const processPhases = processMessages.phases.map((phase, i) => ({
    ...phase,
    ...phaseConfig[i],
    hasCheckpoint: true,
  }))

  return (
    <>
      <Header />
      <main className="bg-offwhite">
        <ProcessProgress totalPhases={processPhases.length} />
        <ProcessHeroSection />

        {/* Detailed Phase Sections */}
        <div className="relative">
          {processPhases.map((phase) => (
            <ProcessPhaseSection
              key={phase.phaseNumber}
              {...phase}
            />
          ))}
        </div>

        <ProcessFinalCTA />
      </main>
      <Footer />
    </>
  )
}
