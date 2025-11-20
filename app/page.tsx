import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { NewPackagesSection } from '@/components/sections/NewPackagesSection'

// Lazy load heavy sections below the fold for code splitting
const SocialProofSection = dynamic(() => import('@/components/sections/SocialProofSection').then((mod) => mod.SocialProofSection))

const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection').then((mod) => mod.PortfolioSection))

const CTASection = dynamic(() => import('@/components/sections/CTASection').then((mod) => mod.CTASection))

const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then((mod) => mod.FAQSection))

export const metadata: Metadata = {
  title: 'Transparo - Webdesign uden Overraskelser | Unique Designs. Built on Trust.',
  description: 'Få et high-end website lavet i klar kommunikation og fuld transparens. Ingen skjulte ekstraregninger. Ingen scope creep. Kun solide løsninger — bygget på tillid.',
  keywords: ['webdesign', 'Danmark', 'små virksomheder', 'fast pris', 'website udvikling', 'professionelt webdesign', 'transparens', 'tillid'],
  openGraph: {
    title: 'Transparo - Webdesign uden Overraskelser',
    description: 'High-end websites bygget på tillid. Ingen overraskelser, kun resultater.',
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
        <WhyUsSection />
        <NewPackagesSection />
        <CTASection />
        <SocialProofSection />
        <PortfolioSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
