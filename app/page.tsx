import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ValuePropSection } from '@/components/sections/ValuePropSection'
import { ExclusiveSection } from '@/components/sections/ExclusiveSection'
import { NewPackagesSection } from '@/components/sections/NewPackagesSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'

export const metadata: Metadata = {
  title: 'Transparo - Professionelt Webdesign til Små Virksomheder | Fast Pris',
  description: 'Professionelle websites til danske små virksomheder. Fast pris fra 8.995 DKK, levering på 10-28 dage, ingen scope creep. Book et gratis møde i dag.',
  keywords: ['webdesign', 'Danmark', 'små virksomheder', 'fast pris', 'website udvikling', 'professionelt webdesign'],
  openGraph: {
    title: 'Transparo - Professionelt Webdesign med Fast Pris',
    description: 'Vi bygger professionelle websites til små virksomheder med fast pris og levering på 10-28 dage.',
    type: 'website',
    locale: 'da_DK',
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuePropSection />
        <ExclusiveSection />
        <NewPackagesSection />
        <SocialProofSection />
        <PortfolioSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
