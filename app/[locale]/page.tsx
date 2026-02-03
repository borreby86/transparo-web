import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'

const PortfolioSection = dynamic(() => import('@/components/sections/PortfolioSection').then((mod) => mod.PortfolioSection), {
  loading: () => <div className="h-96 bg-white" />
})

const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection').then((mod) => mod.WhyUsSection), {
  loading: () => <div className="h-96 bg-black" />
})

const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then((mod) => mod.AboutSection), {
  loading: () => <div className="h-96 bg-white" />
})

const PremiumProcessTimeline = dynamic(() => import('@/components/sections/PremiumProcessTimeline').then((mod) => mod.PremiumProcessTimeline), {
  loading: () => <div className="h-96 bg-navy" />
})

const AboutContactSection = dynamic(() => import('@/components/sections/AboutContactSection').then((mod) => mod.AboutContactSection), {
  loading: () => <div className="h-96 bg-offwhite" />
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
        <PortfolioSection />
        <WhyUsSection />
        <AboutSection />
        <PremiumProcessTimeline />
        <AboutContactSection />
      </main>
      <Footer />
    </>
  )
}
