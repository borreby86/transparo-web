import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustMarquee } from '@/components/sections/TrustMarquee'
import { ValuePropSection } from '@/components/sections/ValuePropSection'
import { ExclusiveSection } from '@/components/sections/ExclusiveSection'
import { NewPackagesSection } from '@/components/sections/NewPackagesSection'
import { PortfolioSection } from '@/components/sections/PortfolioSection'
import { FAQSection } from '@/components/sections/FAQSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustMarquee />
        <ValuePropSection />
        <ExclusiveSection />
        <NewPackagesSection />
        <PortfolioSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
