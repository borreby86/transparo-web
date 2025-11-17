export interface CaseStudy {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  slug: string
  labels: string[]
  quote: string
  author: string
  role: string
}

export interface CaseStudyDetail extends CaseStudy {
  challenge: string
  solution: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  technologies: string[]
  timeline: string
  deliverables: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Fremtidens digitale sundhedsplatform',
    subtitle: 'En ny digital standard for sundhed og velvære',
    imageUrl: '/portfolio-images/Sundhed.webp',
    slug: 'health-platform',
    labels: ['HealthTech', 'Platform'],
    quote:
      'Transparo oversatte et komplekst sundhedsunivers til et intuitivt digitalt økosystem. Vores brugere føler sig trygge, og platformen performer fra dag ét.',
    author: 'Louise Kjær',
    role: 'Produktchef, Sundhedskonsortiet',
  },
  {
    id: 2,
    title: 'AI-drevet fodboldanalyse',
    subtitle: 'Præcise forudsigelser, dybe data og taktiske indsigter',
    imageUrl: '/portfolio-images/WalterAI-Fodbold.webp',
    slug: 'walter-ai',
    labels: ['AI', 'Fodbold'],
    quote:
      'De fangede tempoet og intensiteten i sporten og bragte data til live. Platformen er blevet et fast værktøj på både træningsbanen og stadion.',
    author: 'Mikkel Juul',
    role: 'CEO, WalterAI',
  },
  {
    id: 3,
    title: 'Professionel fodterapi for private kunder',
    subtitle: 'En moderne klinikoplevelse med fokus på sundhed, velvære og ekspertbehandling',
    imageUrl: '/portfolio-images/Flotte-Foder.webp',
    slug: 'flotte-foedder',
    labels: ['Branding', 'Website'],
    quote:
      'Vi gik fra et traditionelt klinikudtryk til en digital oplevelse der føles rolig, professionel og personlig. Transparo tænkte på hver eneste detalje.',
    author: 'Camilla Højland',
    role: 'Indehaver, Flotte Fødder',
  },
  {
    id: 4,
    title: 'Fotografportefølje med fokus på autenticitet',
    subtitle: 'En elegant og personlig fotowebsite til bryllupper, dåb og livsstil',
    imageUrl: '/portfolio-images/Photograph.webp',
    slug: 'alex-morgan-photography',
    labels: ['Branding', 'Website'],
    quote:
      'Fotografiet fik plads til at ånde, og besøgende glider ubesværet igennem porteføljen. Det føles som et magasin skabt kun til mig.',
    author: 'Alex Morgan',
    role: 'Fotograf',
  },
  {
    id: 5,
    title: 'Autentisk lederudvikling med hesteassisteret coaching',
    subtitle: 'En videnskabeligt funderet metode til nærvær, klarhed og stærkere lederskab',
    imageUrl: '/portfolio-images/Hest.webp',
    slug: 'christina-borreby',
    labels: ['Branding', 'Website'],
    quote:
      'De forstod læringsrejsen vi ville skabe og oversatte nærvær til et digitalt univers. Resultatet er både modigt og jordnært.',
    author: 'Christina Borreby',
    role: 'Stifter, Christina Borreby',
  },
  {
    id: 6,
    title: '40 år med lokal teaterkultur og fællesskab',
    subtitle: 'En moderne teateroplevelse med fokus på revy, dramatik og stærke fortællinger',
    imageUrl: '/portfolio-images/Revy.webp',
    slug: 'vat85',
    labels: ['Branding', 'Website'],
    quote:
      'Festivalånden lever i hver detalje. Fra billetflow til fortælling er alt gennemført – og publikum engagerer sig som aldrig før.',
    author: 'Thomas Kjeldsen',
    role: 'Formand, VAT 85',
  },
]

export const caseStudiesDetailed: CaseStudyDetail[] = [
  {
    ...caseStudies[0],
    challenge:
      'Sundhedskonsortiet havde brug for en moderne platform til at samle deres sundhedsydelser digitalt. Udfordringen var at skabe en intuitiv løsning der både kunne håndtere komplekse patientforløb og samtidig være nem at bruge for alle aldersgrupper.',
    solution:
      'Vi designede en brugervenlig platform med fokus på enkelhed og tilgængelighed. Med en klar informationsarkitektur, responsivt design og integration af booking- og kommunikationssystemer skabte vi en helhedsløsning der gør sundhed tilgængelig digitalt.',
    results: [
      {
        metric: 'Brugertilfredshed',
        value: '94%',
        description: 'Positive tilbagemeldinger fra patienter og læger',
      },
      {
        metric: 'Bookinger',
        value: '+67%',
        description: 'Stigning i online bookinger efter launch',
      },
      {
        metric: 'Support-tickets',
        value: '-52%',
        description: 'Færre henvendelser grundet intuitiv navigation',
      },
    ],
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Vercel'],
    timeline: '8 uger',
    deliverables: [
      'Komplet platformsdesign',
      'Responsiv web-applikation',
      'CMS til administration',
      'Booking-integration',
      'Brugerguides og dokumentation',
    ],
  },
  {
    ...caseStudies[1],
    challenge:
      'WalterAI havde brug for en platform der kunne præsentere komplekse AI-analyser og fodbolddata på en måde der var tilgængelig for både trænere og fans. Data skulle være både dyb og let at forstå.',
    solution:
      'Vi skabte en interaktiv dataplatform med realtids-visualiseringer, AI-drevne indsigter og en brugervenlig grænseflade. Platformen kombinerer avanceret teknologi med en intuitiv brugeroplevelse der gør komplekse data forståelige.',
    results: [
      {
        metric: 'Engagement',
        value: '+142%',
        description: 'Øget tid brugt på platformen',
      },
      {
        metric: 'Brugervækst',
        value: '+89%',
        description: 'Nye brugere første kvartal',
      },
      {
        metric: 'Performance',
        value: '98/100',
        description: 'Lighthouse score trods kompleks data',
      },
    ],
    technologies: ['Next.js', 'AI/ML Integration', 'Motion', 'D3.js', 'Real-time Data'],
    timeline: '12 uger',
    deliverables: [
      'Interaktiv dataplatform',
      'AI-integration',
      'Real-time dashboards',
      'Mobilapp',
      'Admin CMS',
    ],
  },
  {
    ...caseStudies[2],
    challenge:
      'Flotte Fødder ønskede at modernisere deres klinikudtryk og gøre det nemmere for kunder at booke og lære om deres behandlinger. Udfordringen var at skabe en rolig, professionel følelse online.',
    solution:
      'Vi designede en elegant, minimalistisk website med fokus på tillid, ro og professionalisme. Med en klar serviceoversigt, nem booking-integration og et visuelt udtryk der matcher klinikkens høje standard.',
    results: [
      {
        metric: 'Online bookinger',
        value: '+78%',
        description: 'Stigning i bookinger via hjemmesiden',
      },
      {
        metric: 'Bounce rate',
        value: '-45%',
        description: 'Besøgende bliver længere på siden',
      },
      {
        metric: 'Konvertering',
        value: '+62%',
        description: 'Fra besøg til booking',
      },
    ],
    technologies: ['Next.js', 'Payload CMS', 'Booking Integration', 'Motion', 'Tailwind CSS'],
    timeline: '4 uger',
    deliverables: [
      'Moderne website',
      'Booking-system',
      'CMS til behandlinger',
      'SEO-optimering',
      'Mobiloptimering',
    ],
  },
  {
    ...caseStudies[3],
    challenge:
      'Alex Morgan havde brug for en portefølje der kunne vise deres fotografier i bedste lys, samtidig med at oplevelsen skulle være personlig og elegant – som et digitalt magasin.',
    solution:
      'Vi skabte en visuel portefølje med fokus på billederne. Med elegante overgange, optimeret billedkvalitet og en enkel navigation der lader fotografierne tale for sig selv.',
    results: [
      {
        metric: 'Forespørgsler',
        value: '+125%',
        description: 'Stigning i bookinger via porteføljen',
      },
      {
        metric: 'Tid på siden',
        value: '4.2 min',
        description: 'Gennemsnitlig tid brugt',
      },
      {
        metric: 'Performance',
        value: '96/100',
        description: 'Lighthouse score trods høj billedkvalitet',
      },
    ],
    technologies: ['Next.js', 'Image Optimization', 'Motion', 'Tailwind CSS', 'Vercel'],
    timeline: '3 uger',
    deliverables: [
      'Porteføljewebsite',
      'Galleri-system',
      'Kontaktformular',
      'SEO-optimering',
      'Billedoptimering',
    ],
  },
  {
    ...caseStudies[4],
    challenge:
      'Christina Borreby havde brug for en hjemmeside der kunne formidle værdien af hesteassisteret coaching og deres videnskabeligt funderede tilgang til lederudvikling.',
    solution:
      'Vi designede en moderne website der balancerer professionalisme med varme. Med fokus på storytelling, klare budskaber og et visuelt udtryk der afspejler både natur og forretning.',
    results: [
      {
        metric: 'Leads',
        value: '+156%',
        description: 'Stigning i forespørgsler',
      },
      {
        metric: 'Brand Trust',
        value: '+89%',
        description: 'Øget troværdighed og tillid',
      },
      {
        metric: 'Engagement',
        value: '+134%',
        description: 'Mere tid på indhold',
      },
    ],
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Video Integration'],
    timeline: '5 uger',
    deliverables: [
      'Website med storytelling',
      'CMS til kurser',
      'Booking-integration',
      'SEO-optimering',
      'Video-integration',
    ],
  },
  {
    ...caseStudies[5],
    challenge:
      'VAT 85 havde brug for en moderne platform til at håndtere billetflow, kommunikere program og fastholde den festivalånd der kendetegner deres 40 år med teaterkultur.',
    solution:
      'Vi skabte en dynamisk festival-website med fokus på brugervenlighed, billetflow og storytelling. Med integration af billetsystemer, programoversigt og en visuel identitet der fanger revyånden.',
    results: [
      {
        metric: 'Billetsalg',
        value: '+92%',
        description: 'Stigning i online billetsalg',
      },
      {
        metric: 'Support',
        value: '-67%',
        description: 'Færre spørgsmål om program',
      },
      {
        metric: 'Engagement',
        value: '+145%',
        description: 'Øget delinger på sociale medier',
      },
    ],
    technologies: ['Next.js', 'Ticket Integration', 'Payload CMS', 'Motion', 'Tailwind CSS'],
    timeline: '6 uger',
    deliverables: [
      'Festival-website',
      'Billetintegration',
      'Program-CMS',
      'Nyhedsbrev-integration',
      'Social media integration',
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return caseStudiesDetailed.find((study) => study.slug === slug)
}
