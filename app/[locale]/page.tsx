import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

const HomeAISection = dynamic(() => import('@/components/sections/HomeAISection').then((mod) => mod.HomeAISection), {
  loading: () => <div className="h-96 bg-[#f7f5f2]" />
})

const HomeModernSection = dynamic(() => import('@/components/sections/HomeModernSection').then((mod) => mod.HomeModernSection), {
  loading: () => <div className="h-96 bg-black" />
})

const HomeProposalSection = dynamic(() => import('@/components/sections/HomeProposalSection').then((mod) => mod.HomeProposalSection), {
  loading: () => <div className="h-96 bg-[#ece6e2]" />
})

const HomeDistinctSection = dynamic(() => import('@/components/sections/HomeDistinctSection').then((mod) => mod.HomeDistinctSection), {
  loading: () => <div className="h-96 bg-[#ece6e2]" />
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

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

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HomeAISection />
        <HomeDistinctSection />
        <HomeModernSection />
        <HomeProposalSection />
      </main>
      <Footer />
    </>
  )
}
