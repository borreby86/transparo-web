export interface CaseStudy {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  slug: string
  labels: string[]
  siteUrl?: string // live site – shows a "Besøg website" button when set
  subpageUrl?: string // underside der vises på tablet i mockup (kun til dokumentation)
  tagline: string // kort: hvad de sælger – vises under titlen i oversigten
  badge?: string // lille fremhævet label i oversigten, fx "Personligt site"
  /** Sammenhæng til en anden case (fx to sites under samme paraply) */
  family?: { slug: string; label: string; text: string }
  author: string
  role: string
}

export type SpecimenKey = 'cormorant' | 'outfit' | 'playfair' | 'raleway' | 'jost' | 'roboto' | 'ephesis'

export interface CaseHighlight {
  title: string
  text: string
  bullets: string[]
  image: { src: string; w: number; h: number }
}

export interface CaseStory {
  /** Fremhævede elementer fra sitet, med beskrivelse af hvad vi har lavet */
  highlights: CaseHighlight[]
  designSystem?: {
    colors: { name: string; hex: string; use: string }[]
    fonts: { role: string; name: string; note: string; specimen?: SpecimenKey }[]
  }
  /** Fx "Foredrag" – hvilken underside tabletten viser */
  subpageLabel?: string
}

export interface CaseStudyDetail extends CaseStudy {
  challenge: string
  solution: string
  technologies: string[]
  timeline?: string
  deliverables: string[]
  story?: CaseStory
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'eskildebbesen.dk',
    subtitle: 'Personligt brandsite for Danmarks mest vindende OL-atlet – med foredrag, teambuilding og kurser i centrum',
    imageUrl: '/portfolio-images/eskild-ebbesen.webp',
    slug: 'eskild-ebbesen',
    tagline: 'Foredrag og teambuilding',
    siteUrl: 'https://eskildebbesen.dk',
    subpageUrl: 'https://www.eskildebbesen.dk/foredrag',
    labels: ['Branding', 'Website'],
    author: 'Eskild Ebbesen',
    role: 'Foredragsholder & OL-guldvinder',
  },
  {
    id: 3,
    title: 'significanz.dk',
    subtitle: 'Et elegant website for et københavnsk coaching-firma med fokus på ledelse og personlig udvikling',
    imageUrl: '/portfolio-images/significanz-2.webp',
    slug: 'significanz',
    tagline: 'Executive coaching og lederudvikling',
    siteUrl: 'https://significanz.dk',
    subpageUrl: 'https://www.significanz.dk/about',
    labels: ['Branding', 'Website'],
    author: 'Significanz',
    role: 'Executive Coaching',
  },
  {
    id: 5,
    title: 'christinaborreby.dk',
    subtitle: 'En videnskabeligt funderet metode til nærvær, klarhed og stærkere lederskab',
    imageUrl: '/portfolio-images/christina-borreby-new.webp',
    slug: 'christina-borreby',
    tagline: 'Udvikling med hestekræfter for ledere, teams og unge',
    badge: 'Personligt site',
    family: {
      slug: 'autentisk-indflydelse',
      label: 'Se autentiskindflydelse.dk',
      text: 'christinaborreby.dk er Christina personligt: hendes baggrund, hendes metode og forløb for ledere, teams og unge. autentiskindflydelse.dk er selve konceptet bag og bruger samme designsprog, så de to sites tydeligt hører sammen.',
    },
    siteUrl: 'https://christinaborreby.dk',
    subpageUrl: 'https://www.christinaborreby.dk/lederudvikling-nordsjaelland',
    labels: ['Branding', 'Website'],
    author: 'Christina Borreby',
    role: 'Stifter, Christina Borreby',
  },
  {
    id: 8,
    title: 'Kasha Hansen',
    subtitle: 'Et roligt og troværdigt website for psykoterapeut og coach, der gør det nemt at tage første skridt',
    imageUrl: '/portfolio-images/screens/kasha-hansen-desktop.webp',
    slug: 'kasha-hansen',
    tagline: 'Terapi og coaching',
    siteUrl: 'https://kasha-website-nextjs.vercel.app',
    subpageUrl: 'https://kasha-website-nextjs.vercel.app/individuel-terapi',
    labels: ['Branding', 'Website'],
    author: 'Kasha Hansen',
    role: 'Psykoterapeut & coach',
  },
  {
    id: 9,
    title: 'autentiskindflydelse.dk',
    subtitle: 'Et website der forklarer en usædvanlig metode klart og får ledere, HR og kursusudbydere til at booke en samtale',
    imageUrl: '/portfolio-images/screens/autentisk-indflydelse-desktop.webp',
    slug: 'autentisk-indflydelse',
    tagline: 'Koncept i hesteassisteret læring',
    badge: 'Konceptsite',
    family: {
      slug: 'christina-borreby',
      label: 'Se christinaborreby.dk',
      text: 'autentiskindflydelse.dk er konceptet under samme paraply som christinaborreby.dk. Designet går igen, så man kan genkende universet, men her er det metoden og målgrupperne, der er i centrum. Christina personligt finder du på christinaborreby.dk.',
    },
    siteUrl: 'https://www.autentiskindflydelse.dk',
    subpageUrl: 'https://www.autentiskindflydelse.dk/ledergrupper',
    labels: ['Branding', 'Website'],
    author: 'Autentisk Indflydelse',
    role: 'Lederudvikling i Nordsjælland',
  },
]

const cs = (slug: string): CaseStudy => {
  const found = caseStudies.find((c) => c.slug === slug)
  if (!found) throw new Error(`Case ikke fundet: ${slug}`)
  return found
}

export const caseStudiesDetailed: CaseStudyDetail[] = [
  {
    ...cs('eskild-ebbesen'),
    challenge:
      'Eskild havde brug for et personligt website der matchede hans brand som OL-guldvinder og foredragsholder. Siden skulle udstråle professionalisme og gøre det nemt at booke ham som foredragsholder.',
    solution:
      'Vi designede et rent, personligt brandsite med fokus på Eskilds historie, ydelser og troværdighed. Enkel navigation, booking-integration og et visuelt udtryk der matcher hans kaliber.',
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Vercel'],
    timeline: 'N/A',
    deliverables: [
      'Personligt brandsite',
      'CMS til indhold',
      'Booking-integration',
      'SEO-optimering',
      'Mobiloptimering',
    ],
    story: {
      subpageLabel: 'Foredrag',
      highlights: [
        {
          title: 'En forside der fortæller hvem han er – på tre sekunder',
          text: 'Eskilds navn og meritter står først. Roterende nøgleord viser bredden i hans arbejde, og en mørk merit-bar giver troværdighed, før besøgende har scrollet.',
          bullets: [
            'Roterende nøgleord: High Performance, Samarbejde, Vindermentalitet',
            'Merit-bar: 3 OL-guld · 2 OL-bronze · 6 VM-guld · 5 OL i træk',
            'Én primær handling: Book foredrag',
          ],
          image: { src: '/portfolio-images/cases/eskild-ebbesen/hero.webp', w: 2160, h: 1630 },
        },
        {
          title: 'Tre veje ind til det rigtige tilbud',
          text: 'Besøgende kommer med forskellige behov. Tre ens kort med billede, ikon og kort tekst sender dem direkte videre til den rigtige underside.',
          bullets: [
            'Foredrag, Teambuilding og Kurser & Workshops',
            'Billede, ikon og kort beskrivelse på hvert kort',
            'Hver sti fører til sin egen underside',
          ],
          image: { src: '/portfolio-images/cases/eskild-ebbesen/ydelser.webp', w: 2160, h: 1610 },
        },
        {
          title: 'Hans filosofi bliver til et designelement',
          text: 'Eskilds 95/5-anbefaling er ikke bare et citat. Den er bygget som en visuel tidslinje midt på siden, så budskabet om proces frem for mål bliver husket.',
          bullets: [
            'Fuldskærmsportræt med citat i serif-typografi',
            'Tidslinje: Processen 95 % – Resultatet 5 %',
            'Bryder rytmen mellem de lyse sektioner',
          ],
          image: { src: '/portfolio-images/cases/eskild-ebbesen/filosofi.webp', w: 2160, h: 940 },
        },
        {
          title: 'Troværdighed i to lag',
          text: 'Først ord fra ledere der har arbejdet med Eskild, derefter en rullende række af kunder. Sammen svarer de på spørgsmålet “virker det?”, før man når kontaktformularen.',
          bullets: [
            'Tre udtalelser fra ledere hos KMD, AutoUncle og DKE',
            'Rullende række af kundelogoer',
            'Kontakt-sektion med én tydelig handling',
          ],
          image: { src: '/portfolio-images/cases/eskild-ebbesen/troverdighed.webp', w: 2160, h: 1560 },
        },
      ],
      designSystem: {
        colors: [
          { name: 'Guld', hex: '#C9A227', use: 'Accent, nøgleord og knapper' },
          { name: 'Kul', hex: '#1A1A1A', use: 'Overskrifter og mørke sektioner' },
          { name: 'Skifer', hex: '#4A4A4A', use: 'Brødtekst' },
          { name: 'Fløde', hex: '#F8F6F3', use: 'Baggrund' },
        ],
        fonts: [
          { role: 'Overskrifter', name: 'Cormorant Garamond', note: 'Elegant serif der matcher en OL-vinder med stil', specimen: 'cormorant' },
          { role: 'Brødtekst', name: 'Outfit', note: 'Let, moderne og meget læsbar', specimen: 'outfit' },
        ],
      },
    },
  },
  {
    ...cs('significanz'),
    challenge:
      'Significanz havde brug for et website der matchede deres position som executive coaching-firma i København. Udtrykket skulle være roligt, elegant og troværdigt.',
    solution:
      'Vi skabte et visuelt stærkt website med atmosfærisk fotografi, ren typografi og en enkel struktur der lader indholdet tale for sig selv.',
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Vercel'],
    timeline: '3 uger',
    deliverables: [
      'Brandsite',
      'CMS til indhold',
      'Kontaktformular',
      'SEO-optimering',
      'Mobiloptimering',
    ],
    story: {
      highlights: [
        {
          title: 'Et hero der sætter stemningen',
          text: 'Københavns havn i sort/hvid, en stor serif-overskrift og et skiftende nøgleord giver ro og autoritet fra første sekund.',
          bullets: [
            'Fuldskærmsbillede med mørk overlay, så teksten står knivskarpt',
            'Skiftende nøgleord under overskriften: Keynote, Executive Coaching',
            'Centreret logo og enkel navigation',
          ],
          image: { src: '/portfolio-images/cases/significanz/hero.webp', w: 2160, h: 1173 },
        },
        {
          title: 'Seks fokusområder – fortalt med ikoner',
          text: 'I stedet for en lang tekstliste får besøgende et hurtigt overblik: seks områder, hver med sit eget lille ikon i brandets blomme-farve.',
          bullets: [
            'Meaningful Action, Act-ability og Executive Coaching',
            'Leadership Development, Keynotes og Team Performance',
            'Kursiv serif-overskrift som signatur-element',
          ],
          image: { src: '/portfolio-images/cases/significanz/fokusomraader.webp', w: 2160, h: 1047 },
        },
        {
          title: 'Brandets DNA på ét blik',
          text: 'Ability og Willingness står som to nøje designede kort med hver sin accentlinje, så filosofien kan forstås på et øjeblik.',
          bullets: [
            'Fotografi af den trykte brochure i brandets blomme-farve',
            'To kort med blomme- og guld-accentlinje',
            'Kort, scannbar tekst i to niveauer',
          ],
          image: { src: '/portfolio-images/cases/significanz/dna.webp', w: 2160, h: 1461 },
        },
        {
          title: 'Tal og kursiv der trækker blikket',
          text: 'Et stort, svagt “15” i baggrunden og fire nøgletal giver historik og tyngde, og kursive nøgleord i skiftende farver fremhæver det vigtigste i overskriften.',
          bullets: [
            'Fire nøgletal: grundlagt 2015, 100+ coachede ledere, 4D-framework og uendelige muligheder',
            'Kursive nøgleord i blomme og guld',
            'Rolig, luftig opbygning',
          ],
          image: { src: '/portfolio-images/cases/significanz/netvaerk.webp', w: 2160, h: 1401 },
        },
      ],
      designSystem: {
        colors: [
          { name: 'Blomme', hex: '#A12F63', use: 'Accent, knapper og kursiv' },
          { name: 'Skifer', hex: '#34323A', use: 'Overskrifter og mørke flader' },
          { name: 'Perle', hex: '#F7F6F5', use: 'Lyse sektioner' },
          { name: 'Hvid', hex: '#FFFFFF', use: 'Baggrund' },
        ],
        fonts: [
          { role: 'Overskrifter', name: 'Playfair Display', note: 'Klassisk og redaktionel serif med kursiv til nøgleord', specimen: 'playfair' },
          { role: 'Brødtekst', name: 'DIN Alternate', note: 'Klar og teknisk grotesk (licenseret skrifttype, vises ikke her)' },
        ],
      },
    },
  },
  {
    ...cs('christina-borreby'),
    challenge:
      'Christina Borreby havde brug for en hjemmeside der kunne formidle værdien af hesteassisteret coaching og deres videnskabeligt funderede tilgang til lederudvikling.',
    solution:
      'Vi designede en moderne website der balancerer professionalisme med varme. Med fokus på storytelling, klare budskaber og et visuelt udtryk der afspejler både natur og forretning.',
    technologies: ['Next.js', 'Payload CMS', 'Motion', 'Tailwind CSS', 'Video Integration'],
    timeline: '5 uger',
    deliverables: [
      'Website med storytelling',
      'CMS til kurser',
      'Booking-integration',
      'SEO-optimering',
      'Video-integration',
    ],
    story: {
      highlights: [
        {
          title: 'Hestene i centrum fra første sekund',
          text: 'En stemningsfuld baggrund med mand og hest, en serif-overskrift med guld-kursiv og to klare knapper gør det tydeligt, hvad tilbuddet er, og hvad man kan gøre næste.',
          bullets: [
            'Overskrift med guld-kursiv: Udvikling med hestekræfter',
            'To handlinger: Se hvad jeg tilbyder og Om mig',
            'Menu med Det siger andre, Aktuelle workshops og en tydelig Kontakt-knap',
          ],
          image: { src: '/portfolio-images/cases/christina-borreby/hero.webp', w: 2160, h: 1173 },
        },
        {
          title: 'Fire veje ind – til den rigtige målgruppe',
          text: 'Lederudvikling, Teamudvikling, Samtaler og forløb samt En dag med heste står som fire ens kort med foto, kort tekst og en tydelig adresse til målgruppen.',
          bullets: [
            'Label på hvert kort: For ledere, For teams, 1:1 personlig udvikling, For unge',
            'Mørke kort mod lys baggrund',
            'Billeder fra rigtige forløb',
          ],
          image: { src: '/portfolio-images/cases/christina-borreby/veje-ind.webp', w: 2160, h: 1962 },
        },
        {
          title: 'Hvorfor heste? – fortalt som et billede',
          text: 'Et nært portræt af mand og hest toner ud i teksten. En forskningsfaktum og en pointe i kursiv giver sektionen både tyngde og følelse.',
          bullets: [
            'Stort fotografi der toner ud i baggrunden',
            'Overskrift med guld-kursiv: dit lederskab',
            'Afsluttende pointe i kursiv',
          ],
          image: { src: '/portfolio-images/cases/christina-borreby/hvorfor-heste.webp', w: 2160, h: 1143 },
        },
        {
          title: 'Troværdighed der kan bladres',
          text: 'Deltagernes egne ord vises i en rolig, mørk sektion med pile og prikker, så besøgende kan bladre uden at forlade siden.',
          bullets: [
            'Stort serif-citat med guld-nøgleord',
            'Navn, titel og virksomhed under hvert citat',
            'Knap til flere udtalelser',
          ],
          image: { src: '/portfolio-images/cases/christina-borreby/udtalelser.webp', w: 2160, h: 980 },
        },
      ],
      designSystem: {
        colors: [
          { name: 'Skifer', hex: '#34404F', use: 'Tekst og mørke sektioner' },
          { name: 'Nat', hex: '#2A3440', use: 'Footer og dybde' },
          { name: 'Guld', hex: '#A08C5A', use: 'Accent og knapper' },
          { name: 'Dis', hex: '#F4F5F7', use: 'Baggrund' },
        ],
        fonts: [
          { role: 'Overskrifter', name: 'Cormorant Garamond', note: 'Elegant serif med kursiv til de vigtigste ord', specimen: 'cormorant' },
          { role: 'Brødtekst', name: 'Raleway', note: 'Klar og venlig sans-serif', specimen: 'raleway' },
        ],
      },
    },
  },
  {
    ...cs('kasha-hansen'),
    challenge:
      'Kasha arbejder med mennesker, der ofte ikke er i krise, men mærker at noget mangler. Websitet skulle skabe ro og tillid fra første sekund og forklare hendes tilgang til terapi og coaching, uden at det føltes som en klinik eller en salgsside.',
    solution:
      'Vi byggede et varmt, roligt website med tydelige veje ind til individuel terapi, parterapi og onlineforløbet. Tilgangen forklares i et sprog man kan genkende sig selv i, og flere lave indgange – en refleksionstest, en gratis samtale og nyhedsbrev – gør første skridt let.',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    timeline: 'N/A',
    deliverables: [
      'Website med ydelses- og metodesider',
      'Refleksionstest',
      'Booking af gratis samtale',
      'Artikler og nyhedsbrev',
      'Mobiloptimering',
    ],
    story: {
      highlights: [
        {
          title: 'Varmt hero og tal der skaber tryghed',
          text: 'Et portræt, en håndskrevet overskrift og en rolig tekst fortæller med det samme, at her er der plads til dig. Under heroen giver tre tal tryghed.',
          bullets: [
            'Håndskrevet overskrift: Når noget i livet kalder på mere',
            'To handlinger: Udforsk mine forløb og Lær mig at kende',
            'Tryghedsbånd: 35+ års erfaring, faglige medlemskaber og 1000+ klienter',
          ],
          image: { src: '/portfolio-images/cases/kasha-hansen/hero.webp', w: 2160, h: 1825 },
        },
        {
          title: 'Tre veje til forandring',
          text: 'Individuel terapi, det nye onlineforløb og parterapi står som tre kort med billede, kort beskrivelse, punktliste og én knap. Midterkortet er fremhævet.',
          bullets: [
            'Tre kort: 1:1 terapi og coaching, Det indre paradigmeskift, Relationer og parterapi',
            'Punktliste der får besøgende til at genkende sig selv',
            'Fremhævet midterkort med Nyt forløb-bånd',
          ],
          image: { src: '/portfolio-images/cases/kasha-hansen/tre-veje.webp', w: 2160, h: 1877 },
        },
        {
          title: 'Et nyt forløb i fuld skærmbredde',
          text: 'Et stort landskabsbillede med sti og lyng giver programmet luft. To farvede kort stiller de spørgsmål, besøgende selv går rundt med.',
          bullets: [
            '4-måneders eksklusivt onlineforløb',
            'Spørgsmålskort: Holder noget dig tilbage? Mærker du en uro indeni?',
            'Billedet toner blidt ud i baggrunden',
          ],
          image: { src: '/portfolio-images/cases/kasha-hansen/paradigmeskift.webp', w: 2160, h: 1260 },
        },
        {
          title: 'Udtalelser med navn og rolle',
          text: 'Fire korte citater fra klienter, hver med fem stjerner, navn og rolle, står i et roligt 2×2-gitter på dæmpet baggrund.',
          bullets: [
            'Fem stjerner, citat, navn og rolle på hvert kort',
            '2×2-gitter med lys kortbaggrund',
            'Placeret lige før den personlige præsentation',
          ],
          image: { src: '/portfolio-images/cases/kasha-hansen/klienter.webp', w: 2160, h: 1428 },
        },
      ],
      designSystem: {
        colors: [
          { name: 'Valnød', hex: '#542E10', use: 'Tekst og overskrifter' },
          { name: 'Rosentræ', hex: '#856C72', use: 'Kort og afsluttende sektioner' },
          { name: 'Oliven', hex: '#928157', use: 'Accent og knapper' },
          { name: 'Fløde', hex: '#FAF7F2', use: 'Baggrund' },
        ],
        fonts: [
          { role: 'Overskrifter', name: 'Ephesis', note: 'Håndskrevet skrift der giver varme og personlighed', specimen: 'ephesis' },
          { role: 'Brødtekst', name: 'Roboto', note: 'Let og meget læsbar', specimen: 'roboto' },
        ],
      },
    },
  },
  {
    ...cs('autentisk-indflydelse'),
    challenge:
      'Hesteassisteret lederudvikling er svært at forklare på et par linjer, og målgrupperne er vidt forskellige: den enkelte leder, ledergrupper, HR-chefer og kursusudbydere. Websitet skulle skabe tryghed omkring metoden og lede hver målgruppe til den rigtige workshop.',
    solution:
      'Vi strukturerede websitet efter målgruppe med egne sider til ledergrupper, CHRO og kursusudbydere, og lod kundernes egne ord bære troværdigheden. Et fagligt fundament og “godt at vide” fjerner de typiske spørgsmål, og en rolig billedverden viser hestene som en del af læringen.',
    technologies: ['Next.js'],
    timeline: 'N/A',
    deliverables: [
      'Målgruppe-opdelt website',
      'Udtalelser og referencer',
      'Videns- og faglig side',
      'Kontakt og booking af samtale',
      'Mobiloptimering',
    ],
    story: {
      highlights: [
        {
          title: 'Hero med øjet og et rullende udtalelsesbånd',
          text: 'Et nært billede af hestens øje i dæmpede toner, en serif-overskrift med guld-kursiv og to knapper. Lige under heroen ruller et mørkt bånd med udtalelser fra fagfolk.',
          bullets: [
            'Overskrift: Træning af følgeskab og autenticitet i praksis',
            'To knapper: Se kommende workshops og Vil du høre mere?',
            'Rullende udtalelser fra bl.a. Bellagroup og Statens IT',
          ],
          image: { src: '/portfolio-images/cases/autentisk-indflydelse/hero.webp', w: 2160, h: 1461 },
        },
        {
          title: 'Metoden forklaret med ét tal og to billeder',
          text: 'Overskriften “500 kilo direkte feedback” gør en svær idé konkret, og et billedgitter fra rigtige workshops viser, hvordan det ser ud.',
          bullets: [
            'Kort forklaring og fremhævet citat om international forskning',
            'Billedgitter fra rigtige forløb',
            'Guld-kursiv på nøglebudskabet',
          ],
          image: { src: '/portfolio-images/cases/autentisk-indflydelse/konceptet.webp', w: 2160, h: 1703 },
        },
        {
          title: 'Hver målgruppe får sit eget kort',
          text: 'Den enkelte leder, ledergrupper, CHRO-er og kursusudbydere kan hver især genkende sig selv og klikke videre til den rigtige side.',
          bullets: [
            'Fire kort: den individuelle leder, ledergrupper, CHROs og kursusudbydere',
            'Foto, kort tekst og egen knap på hvert kort',
            'Mørk sektion der bryder rytmen',
          ],
          image: { src: '/portfolio-images/cases/autentisk-indflydelse/malgrupper.webp', w: 2160, h: 1616 },
        },
        {
          title: 'Fra forklaring til overbevisning',
          text: '“Hvorfor heste?” forklares med tekst og tre fotos, og et stort citat i en mørk blok samler pointen: heste reagerer på det, vi faktisk udstråler.',
          bullets: [
            'Tekst og billedgitter i to kolonner',
            'Mørk citat-blok der bryder siden op',
            'Fremhævet afsluttende linje om øvelser i praksis',
          ],
          image: { src: '/portfolio-images/cases/autentisk-indflydelse/hvorfor-heste.webp', w: 2160, h: 1845 },
        },
      ],
      designSystem: {
        colors: [
          { name: 'Skifer', hex: '#34404F', use: 'Tekst og mørke sektioner' },
          { name: 'Guld', hex: '#8B784A', use: 'Accent, kursiv og knapper' },
          { name: 'Dis', hex: '#F4F5F7', use: 'Baggrund' },
          { name: 'Tåge', hex: '#EEF0F3', use: 'Sektionsbaggrund' },
        ],
        fonts: [
          { role: 'Overskrifter', name: 'Cormorant Garamond', note: 'Elegant serif med guld-kursiv', specimen: 'cormorant' },
          { role: 'Brødtekst', name: 'Jost', note: 'Let og moderne geometrisk sans', specimen: 'jost' },
        ],
      },
    },
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudyDetail | undefined {
  return caseStudiesDetailed.find((study) => study.slug === slug)
}
