'use client'

import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ProcessHeroSection } from '@/components/sections/ProcessHeroSection'
import { ProcessPhaseSection } from '@/components/sections/ProcessPhaseSection'
import { ProcessFinalCTA } from '@/components/sections/ProcessFinalCTA'
import { ProcessProgress } from '@/components/sections/ProcessProgress'

const processPhases = [
  {
    phaseNumber: 1,
    title: 'Opdagelse & Planlægning',
    subtitle: 'Vi sætter grundstenene for succes',
    timeline: 'Dag 1-2',
    description: 'Vi starter med et dybtgående opdagelsesmøde, hvor vi lærer din virksomhed at kende. Vi afdækker dine mål, målgruppe, konkurrentlandskab og unikke styrker. Dette sikrer, at vi bygger en website, der ikke bare ser godt ud, men også leverer konkrete forretningsresultater.',
    keyPoints: [
      'Forretningsanalyse & målsætning',
      'Konkurrent- og markedsanalyse',
      'Målgruppe- og persona-udvikling',
      'Teknisk behovsafdækning'
    ],
    iconName: 'Target' as const,
    backgroundStyle: 'light' as const,
    hasCheckpoint: true,
    checkpointText: 'Godkendelse af brief',
    imageUrl: '/images/unsplash/proces-1.webp'
  },
  {
    phaseNumber: 2,
    title: 'Struktur & Skitser',
    subtitle: 'Brugeroplevelse og navigation designes',
    timeline: 'Dag 3-4',
    description: 'Med afsæt i opdagelsesfasen designer vi strukturelle skitser af din website. Her fokuserer vi på brugerrejsen, informationsarkitektur og konverteringsoptimering. Du får et klart billede af, hvordan din website vil fungere.',
    keyPoints: [
      'Sitemap & navigation',
      'Layout for alle sidetyper',
      'Brugerflow & interaktioner',
      'Mobil-først tilgang'
    ],
    iconName: 'FileText' as const,
    backgroundStyle: 'gold' as const,
    hasCheckpoint: true,
    checkpointText: 'Struktur godkendt',
    imageUrl: '/images/unsplash/proces-2.webp'
  },
  {
    phaseNumber: 3,
    title: 'Design',
    subtitle: 'Dit brand kommer til live',
    timeline: 'Dag 5-7',
    description: 'Nu giver vi din website personlighed. Vi udvikler et unikt visuelt design, der afspejler dit brand og appellerer til din målgruppe. Hver detalje er gennemtænkt - fra farver og typografi til billeder og animationer.',
    keyPoints: [
      'Visuel identitet & brandguide',
      'UI design for alle sider',
      'Responsivt design (mobil/tablet/desktop)',
      'Interaktive elementer & animationer'
    ],
    iconName: 'Palette' as const,
    backgroundStyle: 'light' as const,
    hasCheckpoint: true,
    checkpointText: 'Design godkendt',
    imageUrl: '/images/unsplash/proces-3.webp'
  },
  {
    phaseNumber: 4,
    title: 'Udvikling',
    subtitle: 'Teknisk implementering starter',
    timeline: 'Dag 8-12',
    description: 'Med godkendt design går vi i gang med udviklingen. Vi bygger din website med moderne teknologi - Next.js for performance og Payload CMS for nem content-håndtering. Alt kodes med fokus på hastighed, SEO og brugeroplevelse.',
    keyPoints: [
      'Frontend udvikling i Next.js',
      'Payload CMS opsætning',
      'API integrationer',
      'Performance optimering'
    ],
    iconName: 'Code' as const,
    backgroundStyle: 'navy' as const,
    hasCheckpoint: true,
    checkpointText: 'Udvikling påbegyndt',
    imageUrl: '/images/unsplash/proces-4.webp'
  },
  {
    phaseNumber: 5,
    title: 'Test & Revision',
    subtitle: 'Kvalitetssikring på alle niveauer',
    timeline: 'Dag 13-14',
    description: 'Vi tester din website grundigt på tværs af enheder, browsere og skærmstørrelser. Du får adgang til et testmiljø, hvor du kan gennemgå alt indhold og funktionalitet. Feedback implementeres løbende for at sikre perfektion.',
    keyPoints: [
      'Test på tværs af browsere',
      'Responsiv test på alle enheder',
      'Hastighed & ydeevnetest',
      'Feedback & justeringer'
    ],
    iconName: 'TestTube' as const,
    backgroundStyle: 'light' as const,
    hasCheckpoint: true,
    checkpointText: 'Test gennemført',
    imageUrl: '/images/unsplash/proces-5.webp'
  },
  {
    phaseNumber: 6,
    title: 'Lancering',
    subtitle: 'Din website går live',
    timeline: 'Dag 15',
    description: 'Det er tid til at gå live! Vi håndterer hele lanceringen professionelt - fra DNS-opsætning til SSL-certifikater. Vi sikrer en sømløs overgang uden nedetid. Din nye website er nu tilgængelig for hele verden.',
    keyPoints: [
      'Hosting på Vercel',
      'DNS & domæneopsætning',
      'SSL-certifikat & sikkerhed',
      'Analyseværktøjer & sporing'
    ],
    iconName: 'Rocket' as const,
    backgroundStyle: 'success' as const,
    hasCheckpoint: true,
    checkpointText: 'Website lanceret',
    imageUrl: '/images/unsplash/why-us-3.webp'
  },
  {
    phaseNumber: 7,
    title: 'Support & Træning',
    subtitle: 'Vi sikrer din fortsatte succes',
    timeline: 'Dag 16+',
    description: 'Efter lanceringen står vi klar med support og træning. Du får en grundig gennemgang af Payload CMS, så du selv kan opdatere indhold. Vi tilbyder også løbende support og vedligeholdelse for at sikre optimal ydeevne.',
    keyPoints: [
      'CMS-træning (30-45 min)',
      '30 dages gratis support',
      'Dokumentation & vejledninger',
      'Vedligeholdelsesaftale tilgængelig'
    ],
    iconName: 'Headphones' as const,
    backgroundStyle: 'warmgray' as const,
    hasCheckpoint: true,
    checkpointText: 'Overdragelse komplet',
    imageUrl: '/images/unsplash/proces-6.webp'
  }
]

export default function ProcesPage() {
  return (
    <>
      <Header />
      <main className="bg-offwhite">
        <ProcessProgress totalPhases={processPhases.length} />
        <ProcessHeroSection />

        {/* Detailed Phase Sections */}
        <div className="relative">
          {processPhases.map((phase) => (
            <ProcessPhaseSection
              key={phase.phaseNumber}
              {...phase}
            />
          ))}
        </div>

        <ProcessFinalCTA />
      </main>
      <Footer />
    </>
  )
}