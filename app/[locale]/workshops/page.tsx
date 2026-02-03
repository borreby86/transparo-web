'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WorkshopsHeroSection } from '@/components/sections/WorkshopsHeroSection'
import { WorkshopsIntroSection } from '@/components/sections/WorkshopsIntroSection'
import { WorkshopsComparisonSection } from '@/components/sections/WorkshopsComparisonSection'
import { WorkshopsTechStackSection } from '@/components/sections/WorkshopsTechStackSection'
import { WorkshopsControlSection } from '@/components/sections/WorkshopsControlSection'
import { WorkshopsMaintenanceSection } from '@/components/sections/WorkshopsMaintenanceSection'
import { WorkshopsCourseStructureSection } from '@/components/sections/WorkshopsCourseStructureSection'
import { WorkshopsPricingSection } from '@/components/sections/WorkshopsPricingSection'
import { WorkshopsAboutSection } from '@/components/sections/WorkshopsAboutSection'
import { WorkshopsFAQSection } from '@/components/sections/WorkshopsFAQSection'
import { WorkshopsFinalCTASection } from '@/components/sections/WorkshopsFinalCTASection'

export default function WorkshopsPage() {
  return (
    <>
      <Header />
      <main className="bg-offwhite">
        <WorkshopsHeroSection />
        <WorkshopsIntroSection />
        <WorkshopsComparisonSection />
        <WorkshopsTechStackSection />
        <WorkshopsControlSection />
        <WorkshopsMaintenanceSection />
        <WorkshopsCourseStructureSection />
        <WorkshopsPricingSection />
        <WorkshopsAboutSection />
        <WorkshopsFAQSection />
        <WorkshopsFinalCTASection />
      </main>
      <Footer />
    </>
  )
}
