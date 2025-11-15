import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutSection } from '@/components/sections/AboutSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export const metadata: Metadata = {
  title: 'Om Os - Professionelt Webdesign til Små Virksomheder | Transparo',
  description: 'Transparo bygger professionelle websites til danske små virksomheder. Fast pris, hurtig levering, og ingen scope creep. Lær mere om vores mission og værdier.',
  openGraph: {
    title: 'Om Transparo - Webdesign med Tillid',
    description: 'Vi bygger professionelle websites til små virksomheder med fast pris og hurtig levering.',
    type: 'website',
  },
}

export default function OmOsPage() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
