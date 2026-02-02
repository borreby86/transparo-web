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
    title: 'Eskild Ebbesen – High Performance',
    subtitle: 'Personlig brandsite for Danmarks mest vindende OL-atlet og ekspert i high performance',
    imageUrl: '/portfolio-images/eskild-ebbesen.png',
    slug: 'eskild-ebbesen',
    labels: ['Branding', 'Website'],
    quote:
      'De forstod præcis, hvad mit brand handler om, og skabte en side der matcher den kvalitet, jeg leverer på scenen.',
    author: 'Eskild Ebbesen',
    role: 'Foredragsholder & OL-guldvinder',
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
    title: 'Significanz – Executive Coaching',
    subtitle: 'Et elegant website for et københavnsk coaching-firma med fokus på ledelse og personlig udvikling',
    imageUrl: '/portfolio-images/significanz-2.png',
    slug: 'significanz',
    labels: ['Branding', 'Website'],
    quote:
      'De fangede vores æstetik og skabte en side der udstråler den ro og professionalisme vores klienter forventer.',
    author: 'Significanz',
    role: 'Executive Coaching',
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
    imageUrl: '/portfolio-images/christina-borreby-new.png',
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
  {
    id: 7,
    title: 'Klimakurt - Grøn energi til alle',
    subtitle: 'Bæredygtige løsninger for en grønnere fremtid',
    imageUrl: '/portfolio-images/Klimakurt.png',
    slug: 'klimakurt',
    labels: ['Branding', 'Website'],
    quote:
      'Transparo hjalp os med at formidle vores grønne budskab klart og tydeligt. En fornøjelse at arbejde sammen med.',
    author: 'Kurt Jensen',
    role: 'Direktør, Klimakurt',
  },
]

export const caseStudiesDetailed: CaseStudyDetail[] = [
  {
    ...caseStudies[0],
    challenge:
      'Eskild havde brug for et personligt website der matchede hans brand som OL-guldvinder og high performance ekspert. Siden skulle udstråle professionalisme og gøre det nemt at booke ham som foredragsholder.',
    solution:
      'Vi designede et rent, personligt brandsite med fokus på Eskilds historie, ydelser og troværdighed. Enkel navigation, booking-integration og et visuelt udtryk der matcher hans kaliber.',
    results: [
      {
        metric: 'Performance',
        value: '97/100',
        description: 'Lighthouse performance score',
      },
      {
        metric: 'Forespørgsler',
        value: '+85%',
        description: 'Stigning i booking-henvendelser',
      },
      {
        metric: 'Loadtid',
        value: '0.8s',
        description: 'First Contentful Paint',
      },
    ],
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Vercel'],
    timeline: '4 uger',
    deliverables: [
      'Personligt brandsite',
      'CMS til indhold',
      'Booking-integration',
      'SEO-optimering',
      'Mobiloptimering',
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
      'Significanz havde brug for et website der matchede deres position som executive coaching-firma i København. Udtrykket skulle være roligt, elegant og troværdigt.',
    solution:
      'Vi skabte et visuelt stærkt website med atmosfærisk fotografi, ren typografi og en enkel struktur der lader indholdet tale for sig selv.',
    results: [
      {
        metric: 'Performance',
        value: '95/100',
        description: 'Lighthouse performance score',
      },
      {
        metric: 'Forespørgsler',
        value: '+60%',
        description: 'Stigning i henvendelser',
      },
      {
        metric: 'Tid på siden',
        value: '3.8 min',
        description: 'Gennemsnitlig besøgstid',
      },
    ],
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Vercel'],
    timeline: '3 uger',
    deliverables: [
      'Brandsite',
      'CMS til indhold',
      'Kontaktformular',
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
  {
    ...caseStudies[6],
    challenge:
      'Klimakurt ønskede at nå ud til flere kunder med deres grønne energiløsninger. Udfordringen var at gøre teknisk viden letforståelig for den almindelige forbruger.',
    solution:
      'Vi udviklede en informativ og indbydende hjemmeside, der guider kunden gennem deres grønne muligheder. Fokus på klare Call-to-Actions og troværdighed.',
    results: [
      {
        metric: 'Leads',
        value: '+200%',
        description: 'Stigning i henvendelser',
      },
      {
        metric: 'Konvertering',
        value: '5.2%',
        description: 'Besøgende til lead',
      },
      {
        metric: 'CO2-besparelse',
        value: '100t',
        description: 'Estimeret årlig besparelse for kunder',
      },
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Motion', 'SEO'],
    timeline: '4 uger',
    deliverables: [
      'Hjemmeside',
      'SEO-optimering',
      'Tekstforfatning',
      'Grafisk identitet',
    ],
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return caseStudiesDetailed.find((study) => study.slug === slug)
}
