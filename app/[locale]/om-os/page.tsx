import { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ExclusiveSection } from '@/components/sections/ExclusiveSection'
import { BrandStorySection } from '@/components/sections/BrandStorySection'
import { TeamSection } from '@/components/sections/TeamSection'
import { HappyClientsSection } from '@/components/sections/HappyClientsSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.omOs' })

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale === 'da' ? 'da_DK' : 'en_US',
    },
  }
}

export default async function OmOsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <ExclusiveSection />
        <BrandStorySection />
        <TeamSection />
        <HappyClientsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  )
}
