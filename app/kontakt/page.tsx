import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Kontakt Os - Book et Møde | Transparo',
  description: 'Kontakt Transparo i dag. Book et uforpligtende discovery call eller send os en besked. Vi svarer inden for 24 timer på hverdage.',
  openGraph: {
    title: 'Kontakt Transparo',
    description: 'Book et møde eller send os en besked. Vi svarer inden for 24 timer.',
    type: 'website',
  },
}

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
      </main>
    </>
  )
}
