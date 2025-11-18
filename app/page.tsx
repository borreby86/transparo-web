import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ValuePropSection } from '@/components/sections/ValuePropSection'
import { ExclusiveSection } from '@/components/sections/ExclusiveSection'
import { NewPackagesSection } from '@/components/sections/NewPackagesSection'

// Lazy load heavy sections below the fold for code splitting
const SocialProofSection = dynamic(() => import('@/components/sections/SocialProofSection').then((mod) => mod.SocialProofSection))

const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection').then((mod) => mod.PortfolioSection))

const CTASection = dynamic(() => import('@/components/sections/CTASection').then((mod) => mod.CTASection))

const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then((mod) => mod.FAQSection))

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
        <NewPackagesSection />
        <ExclusiveSection />
        <SocialProofSection />
        <PortfolioSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
