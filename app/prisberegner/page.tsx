import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PriceCalculator } from '@/components/sections/PriceCalculator'

export const metadata: Metadata = {
  title: 'Prisberegner',
  description:
    'Beregn prisen på din nye hjemmeside. Få et hurtigt estimat baseret på dine behov — helt uforpligtende og med fuld gennemsigtighed.',
  openGraph: {
    title: 'Prisberegner | Transparo',
    description:
      'Beregn prisen på din nye hjemmeside. Få et hurtigt estimat baseret på dine behov — helt uforpligtende.',
  },
}

export default function PrisberegnerPage() {
  return (
    <>
      <Header />
      <main className="bg-offwhite">
        <PriceCalculator />
      </main>
      <Footer />
    </>
  )
}
