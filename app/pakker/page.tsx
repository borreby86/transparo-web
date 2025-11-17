import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PackagesHeroMinimal } from '@/components/sections/PackagesHeroMinimal'
import { PackageCardsMinimal } from '@/components/sections/PackageCardsMinimal'
import { PackagesFAQMinimal } from '@/components/sections/PackagesFAQMinimal'

export const metadata: Metadata = {
  title: 'Vores Pakker - Fast Pris Website Løsninger | Transparo',
  description: 'Vælg den rigtige website pakke til din virksomhed. Fra 8.995 DKK med fast pris, hurtig levering på 10-28 dage, og ingen skjulte omkostninger.',
  openGraph: {
    title: 'Website Pakker - Transparo',
    description: 'Professionelle website pakker med fast pris. Fra 8.995 DKK.',
    type: 'website',
  },
}

export default function PakkerPage() {
  return (
    <>
      <Header />
      <main>
        <PackagesHeroMinimal />
        <PackageCardsMinimal />
        <PackagesFAQMinimal />
      </main>
      <Footer />
    </>
  )
}
