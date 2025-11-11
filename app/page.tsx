import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustIndicators } from '@/components/sections/TrustIndicators'
import { PackagesSection } from '@/components/sections/PackagesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { DifferentiatorSection } from '@/components/sections/DifferentiatorSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustIndicators />
        <PackagesSection />
        <HowItWorksSection />
        <DifferentiatorSection />
        <SocialProofSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
