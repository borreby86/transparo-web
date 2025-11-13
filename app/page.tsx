import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustMarquee } from '@/components/sections/TrustMarquee'
import { ValuePropSection } from '@/components/sections/ValuePropSection'
import { ExclusiveSection } from '@/components/sections/ExclusiveSection'
import { ProcessTimelineSection } from '@/components/sections/ProcessTimelineSection'
import { NewPackagesSection } from '@/components/sections/NewPackagesSection'
import { CaseStudySection } from '@/components/sections/CaseStudySection'

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
        <CaseStudySection />
        <ProcessTimelineSection />
      </main>
      <Footer />
    </>
  )
}
