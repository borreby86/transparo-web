import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProcessHeroSection } from '@/components/sections/ProcessHeroSection'
import { ProcessPhase1 } from '@/components/sections/process/ProcessPhase1'
import { ProcessPhase2 } from '@/components/sections/process/ProcessPhase2'
import { ProcessPhase3 } from '@/components/sections/process/ProcessPhase3'
import { ProcessPhases4to7 } from '@/components/sections/process/ProcessPhases4to7'
import { ProcessFinalCTA } from '@/components/sections/ProcessFinalCTA'

export const metadata: Metadata = {
  title: 'Vores Proces - Fra Ide til Lancering på 2-4 Uger | Transparo',
  description: 'Gennemsigtig 7-fase proces med klare godkendelsespunkter. Discovery, wireframes, design, udvikling, test, lancering og support. Ingen overraskelser.',
  openGraph: {
    title: 'Vores Proces - Transparo',
    description: 'Struktureret website udvikling proces fra ide til lancering på 2-4 uger.',
    type: 'website',
  },
}

export default function ProcesPage() {
  return (
    <>
      <Header />
      <main>
        <ProcessHeroSection />
        <ProcessPhase1 />
        <ProcessPhase2 />
        <ProcessPhase3 />
        <ProcessPhases4to7 />
        <ProcessFinalCTA />
      </main>
      <Footer />
    </>
  )
}
