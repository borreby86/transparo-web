import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

// Lazy load all sections below the fold for optimal performance
const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection').then((mod) => mod.PortfolioSection), {
  loading: () => <div className="h-96 bg-white" />
})

const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection').then((mod) => mod.WhyUsSection), {
  loading: () => <div className="h-96 bg-black" />
})

const PremiumProcessTimeline = dynamic(() => import('@/components/sections/PremiumProcessTimeline').then((mod) => mod.PremiumProcessTimeline), {
  loading: () => <div className="h-screen bg-white" />
})

const InvestmentSection = dynamic(() => import('@/components/sections/InvestmentSection').then((mod) => mod.InvestmentSection), {
  loading: () => <div className="h-96 bg-navy" />
})

const ProcessFinalCTA = dynamic(() => import('@/components/sections/ProcessFinalCTA').then((mod) => mod.ProcessFinalCTA), {
  loading: () => <div className="h-96 bg-navy" />
})

const AboutContactSection = dynamic(() => import('@/components/sections/AboutContactSection').then((mod) => mod.AboutContactSection), {
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
        <PortfolioSection />
        <WhyUsSection />
        <PremiumProcessTimeline />
        <InvestmentSection />
        <ProcessFinalCTA />
        <AboutContactSection />
      </main>
      <Footer />
    </>
  )
}
