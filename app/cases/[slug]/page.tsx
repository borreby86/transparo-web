'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, ArrowRight } from 'lucide-react'

interface CaseStudyDetail {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  slug: string
  labels: string[]
  quote: string
  author: string
  role: string
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

const caseStudies: CaseStudyDetail[] = [
  {
    id: 1,
    title: 'Fremtidens digitale sundhedsplatform',
    subtitle: 'En ny digital standard for sundhed og velvære',
    imageUrl: '/portfolio-images/Sundhed.png',
    slug: 'health-platform',
    labels: ['HealthTech', 'Platform'],
    quote:
      'Transparo oversatte et komplekst sundhedsunivers til et intuitivt digitalt økosystem. Vores brugere føler sig trygge, og platformen performer fra dag ét.',
    author: 'Louise Kjær',
    role: 'Produktchef, Sundhedskonsortiet',
    challenge:
      'Sundhedskonsortiet havde brug for en moderne platform til at samle deres sundhedsydelser digitalt. Udfordringen var at skabe en intuitiv løsning der både kunne håndtere komplekse patientforløb og samtidig være nem at bruge for alle aldersgrupper.',
    solution:
      'Vi designede en brugervenlig platform med fokus på enkelhed og tilgængelighed. Med en klar informationsarkitektur, responsivt design og integration af booking- og kommunikationssystemer skabte vi en helhedsløsning der gør sundhed tilgængelig digitalt.',
    results: [
      {
        metric: 'Brugertilfredshed',
        value: '94%',
        description: 'Positive brugeranmeldelser første måned'
      },
      {
        metric: 'Bookinger',
        value: '+240%',
        description: 'Stigning i online bookinger'
      },
      {
        metric: 'Support henvendelser',
        value: '-65%',
        description: 'Færre support henvendelser grundet bedre UX'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Payload CMS'],
    timeline: '14 uger',
    deliverables: [
      'Fuldt responsivt website',
      'Booking integration',
      'Patient portal',
      'CMS til indholdsadministration',
      'SEO optimering',
      'Performance optimering'
    ]
  },
  {
    id: 2,
    title: 'AI-drevet fodboldanalyse',
    subtitle: 'Præcise forudsigelser, dybe data og taktiske indsigter',
    imageUrl: '/portfolio-images/WalterAI-Fodbold.png',
    slug: 'walter-ai',
    labels: ['AI', 'Fodbold'],
    quote:
      'De fangede tempoet og intensiteten i sporten og bragte data til live. Platformen er blevet et fast værktøj på både træningsbanen og stadion.',
    author: 'Mikkel Juul',
    role: 'CEO, WalterAI',
    challenge:
      'WalterAI havde en kraftfuld AI-motor til fodboldanalyse, men manglede en moderne platform til at præsentere dataene på en engagerende og forståelig måde for både trænere, analytikere og fans.',
    solution:
      'Vi skabte en dynamisk platform med interaktive datavisualiseringer, realtidsopdateringer og intuitive dashboards. Designet balancerer teknisk dybde med brugervenlig navigation, så både datanørder og casual fans kan finde værdi.',
    results: [
      {
        metric: 'Aktive brugere',
        value: '12.5k+',
        description: 'Månedlige aktive brugere efter launch'
      },
      {
        metric: 'Engagement',
        value: '+320%',
        description: 'Stigning i tid brugt på platformen'
      },
      {
        metric: 'Data præcision',
        value: '96%',
        description: 'Nøjagtighed i AI-forudsigelser'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'D3.js', 'API Integration'],
    timeline: '12 uger',
    deliverables: [
      'Interaktiv dataplatform',
      'Realtids opdateringer',
      'Custom datavisualiseringer',
      'Bruger dashboard',
      'Mobile responsivt design',
      'Performance optimering'
    ]
  },
  {
    id: 3,
    title: 'Professionel fodterapi for private kunder',
    subtitle: 'En moderne klinikoplevelse med fokus på sundhed, velvære og ekspertbehandling',
    imageUrl: '/portfolio-images/Flotte-Foder.png',
    slug: 'flotte-foedder',
    labels: ['Branding', 'Website'],
    quote:
      'Vi gik fra et traditionelt klinikudtryk til en digital oplevelse der føles rolig, professionel og personlig. Transparo tænkte på hver eneste detalje.',
    author: 'Camilla Højland',
    role: 'Indehaver, Flotte Fødder',
    challenge:
      'Flotte Fødder ønskede at modernisere deres digitale tilstedeværelse og tiltrække nye kunder gennem en professionel og tryg online oplevelse der afspejler kvaliteten af deres fysiske klinik.',
    solution:
      'Vi skabte et elegant, roligt design med fokus på professionalisme og tillid. Blød farvepalet, klar typografi og high-quality billeder kombineret med intuitiv navigation og online booking gjorde klinikken tilgængelig digitalt.',
    results: [
      {
        metric: 'Online bookinger',
        value: '+185%',
        description: 'Stigning i online aftalebookinger'
      },
      {
        metric: 'Nye kunder',
        value: '+140%',
        description: 'Flere nye kunder via hjemmesiden'
      },
      {
        metric: 'Bounce rate',
        value: '-58%',
        description: 'Færre besøgende forlader siden med det samme'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Calendly Integration'],
    timeline: '8 uger',
    deliverables: [
      'Komplet website redesign',
      'Booking integration',
      'Behandlingsoversigt',
      'Prisliste modul',
      'Kontaktformular',
      'SEO optimering'
    ]
  },
  {
    id: 4,
    title: 'Fotografportefølje med fokus på autenticitet',
    subtitle: 'En elegant og personlig fotowebsite til bryllupper, dåb og livsstil',
    imageUrl: '/portfolio-images/Photograph.png',
    slug: 'alex-morgan-photography',
    labels: ['Branding', 'Website'],
    quote:
      'Fotografiet fik plads til at ånde, og besøgende glider ubesværet igennem porteføljen. Det føles som et magasin skabt kun til mig.',
    author: 'Alex Morgan',
    role: 'Fotograf',
    challenge:
      'Alex Morgan havde brug for en portfolio-løsning der kunne vise hans fotografiske værker på den bedst mulige måde, samtidig med at besøgende nemt kunne booke sessioner og udforske forskellige kategorier.',
    solution:
      'Vi designede en minimalistisk portfolio med fokus på billederne. Store, højkvalitets visninger, flydende galleri-navigation og en elegant booking-flow gør det nemt for potentielle kunder at udforske og booke.',
    results: [
      {
        metric: 'Portfolio visninger',
        value: '+410%',
        description: 'Flere besøgende ser hele galleriet'
      },
      {
        metric: 'Bookinger',
        value: '+225%',
        description: 'Stigning i bookingforespørgsler'
      },
      {
        metric: 'Side hastighed',
        value: '98/100',
        description: 'Google PageSpeed score trods store billeder'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Next/Image', 'Framer Motion'],
    timeline: '6 uger',
    deliverables: [
      'Portfolio website',
      'Galleri system',
      'Billedoptimering',
      'Kategori navigation',
      'Kontakt/booking formular',
      'Blog integration'
    ]
  },
  {
    id: 5,
    title: 'Autentisk lederudvikling med hesteassisteret coaching',
    subtitle: 'En videnskabeligt funderet metode til nærvær, klarhed og stærkere lederskab',
    imageUrl: '/portfolio-images/Hest.png',
    slug: 'christina-borreby',
    labels: ['Branding', 'Website'],
    quote:
      'De forstod læringsrejsen vi ville skabe og oversatte nærvær til et digitalt univers. Resultatet er både modigt og jordnært.',
    author: 'Christina Borreby',
    role: 'Stifter, Christina Borreby',
    challenge:
      'Christina havde brug for at kommunikere en unik coaching-metode digitalt – en der kombinerer videnskabelig metodik med hesteassisteret læring. Udfordringen var at formidle dybde og troværdighed samtidig med varme og tilgængelighed.',
    solution:
      'Vi skabte et website der balancerer professionalisme med personlighed. Naturlige billeder, en klar beskrivelse af metoden, og testimonials fra tidligere klienter skaber tillid, mens en nem booking-flow gør det nemt at komme i gang.',
    results: [
      {
        metric: 'Klientforespørgsler',
        value: '+190%',
        description: 'Flere kvalificerede henvendelser'
      },
      {
        metric: 'Engagement',
        value: '+285%',
        description: 'Besøgende læser flere sider'
      },
      {
        metric: 'Brand awareness',
        value: '+340%',
        description: 'Organisk søgetrafik stigning'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Video Integration'],
    timeline: '10 uger',
    deliverables: [
      'Brand website',
      'Metodebeskrivelse',
      'Klient testimonials',
      'Booking system',
      'Videointegration',
      'Blog platform'
    ]
  },
  {
    id: 6,
    title: '40 år med lokal teaterkultur og fællesskab',
    subtitle: 'En moderne teateroplevelse med fokus på revy, dramatik og stærke fortællinger',
    imageUrl: '/portfolio-images/Revy.png',
    slug: 'vat85',
    labels: ['Branding', 'Website'],
    quote:
      'Festivalånden lever i hver detalje. Fra billetflow til fortælling er alt gennemført – og publikum engagerer sig som aldrig før.',
    author: 'Thomas Kjeldsen',
    role: 'Formand, VAT 85',
    challenge:
      'VAT 85 skulle have en moderne digital platform til at promovere forestillinger, sælge billetter og fortælle historien om 40 års teaterkultur – alt sammen mens de bibeholder den autentiske festivalånd.',
    solution:
      'Vi skabte en levende, dynamisk platform med integreret billetsal g, forestillingsoversigt og historiefortælling. Designet fanger energien fra scenen og gør det nemt for publikum at udforske repertoiret og købe billetter.',
    results: [
      {
        metric: 'Online billetsalg',
        value: '+295%',
        description: 'Flere køber billetter online'
      },
      {
        metric: 'Medlemstilmeldinger',
        value: '+180%',
        description: 'Stigning i nye medlemmer'
      },
      {
        metric: 'Event engagement',
        value: '+220%',
        description: 'Flere følger kommende forestillinger'
      }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Event Management'],
    timeline: '12 uger',
    deliverables: [
      'Event website',
      'Billetsystem integration',
      'Forestillingsoversigt',
      'Historieside',
      'Nyhedsbrev integration',
      'SEO & Performance'
    ]
  }
]

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find(cs => cs.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex(cs => cs.slug === params.slug)
  const nextCase = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Labels */}
              <div className="flex gap-2 mb-4">
                {caseStudy.labels.map((label, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gold text-navy rounded-full text-xs font-bold uppercase tracking-wide"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6 max-w-4xl">
                {caseStudy.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl">
                {caseStudy.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-navy px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2">
                  {result.value}
                </div>
                <div className="text-white font-semibold mb-1 text-lg">
                  {result.metric}
                </div>
                <div className="text-white/70 text-sm">
                  {result.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-6">
                Udfordringen
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-6">
                Løsningen
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables & Technologies */}
      <section className="bg-offwhite px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-6">
                Hvad vi leverede
              </h3>
              <ul className="space-y-3">
                {caseStudy.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-gold flex-shrink-0 mr-3 mt-0.5" />
                    <span className="text-black/70 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies & Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-8">
                <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-6">
                  Teknologier
                </h3>
                <div className="flex flex-wrap gap-3">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-lg text-navy font-semibold text-sm border border-navy/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-4">
                  Timeline
                </h3>
                <p className="text-black/70 text-lg">
                  <span className="font-semibold text-navy">{caseStudy.timeline}</span> fra start til lancering
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-2xl p-8 md:p-12 lg:p-16 text-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 italic mb-8 leading-relaxed">
              "{caseStudy.quote}"
            </p>
            <div>
              <p className="text-gold font-bold text-lg mb-1">{caseStudy.author}</p>
              <p className="text-white/70">{caseStudy.role}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Case CTA */}
      <section className="bg-offwhite px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl text-navy mb-8 text-center">
              Næste Case Studie
            </h3>
            <Link
              href={`/cases/${nextCase.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 md:h-full">
                  <Image
                    src={nextCase.imageUrl}
                    alt={nextCase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex gap-2 mb-4">
                    {nextCase.labels.map((label, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-offwhite rounded-full text-xs font-semibold text-navy uppercase"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-display font-bold text-2xl md:text-3xl text-navy mb-3 group-hover:text-gold transition-colors">
                    {nextCase.title}
                  </h4>
                  <p className="text-black/70 mb-6">{nextCase.subtitle}</p>
                  <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                    Se case studie
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Back to all cases */}
          <div className="text-center mt-12">
            <Link
              href="/cases"
              className="inline-block text-navy hover:text-gold font-semibold transition-colors"
            >
              ← Tilbage til alle cases
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              Klar til at starte dit projekt?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Lad os tale om hvordan vi kan hjælpe dig med at nå dine mål
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="bg-gold text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-gold/90 transition-all"
              >
                Kontakt Os
              </Link>
              <Link
                href="/pakker"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Se Pakker
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
