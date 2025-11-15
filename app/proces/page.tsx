import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export const metadata: Metadata = {
  title: 'Sådan Virker Det - Vores 4-Ugers Proces | Transparo',
  description: 'Vores strukturerede 4-ugers proces med klare milepæle og sign-off punkter. Fra discovery til lancering på 14-28 dage.',
  openGraph: {
    title: 'Sådan Virker Det - Transparo',
    description: 'Struktureret 4-ugers website udvikling proces med klare milepæle.',
    type: 'website',
  },
}

export default function ProcesPage() {
  return (
    <>
      <Header />
      <main>
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
