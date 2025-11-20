import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

// Lazy load all sections below the fold for optimal performance
const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection').then((mod) => mod.WhyUsSection), {
  loading: () => <div className="h-screen bg-black" />
})

const NewPackagesSection = dynamic(() => import('@/components/sections/NewPackagesSection').then((mod) => mod.NewPackagesSection), {
  loading: () => <div className="h-screen bg-offwhite" />
})

const CTASection = dynamic(() => import('@/components/sections/CTASection').then((mod) => mod.CTASection), {
  loading: () => <div className="h-screen bg-navy" />
})

const SocialProofSection = dynamic(() => import('@/components/sections/SocialProofSection').then((mod) => mod.SocialProofSection), {
  loading: () => <div className="h-96 bg-offwhite" />
})

const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection').then((mod) => mod.PortfolioSection), {
  loading: () => <div className="h-96 bg-white" />
})

const FAQSection = dynamic(() => import('@/components/sections/FAQSection').then((mod) => mod.FAQSection), {
  loading: () => <div className="h-96 bg-offwhite" />
})

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
