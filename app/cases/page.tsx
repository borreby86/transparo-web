'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

interface CaseStudy {
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

const caseStudies: CaseStudy[] = [
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
    role: 'Produktchef, Sundhedskonsortiet'
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
    role: 'CEO, WalterAI'
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
    role: 'Indehaver, Flotte Fødder'
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
    role: 'Fotograf'
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
    role: 'Stifter, Christina Borreby'
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
    role: 'Formand, VAT 85'
  }
]

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy px-4 sm:px-6 md:px-8 lg:px-12 py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Vores <span className="text-gold">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Fra sundhedsplatforme til kreative porteføl jer – se hvordan vi har hjulpet danske virksomheder med at skabe deres digitale tilstedeværelse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/cases/${study.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                      <Image
                        src={study.imageUrl}
                        alt={study.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Labels */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {study.labels.map((label, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-navy uppercase tracking-wide"
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      {/* Case Number */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                        <span className="text-navy font-bold text-sm">
                          {study.id.toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                        {study.title}
                      </h2>
                      <p className="text-black/70 text-base md:text-lg mb-6 leading-relaxed">
                        {study.subtitle}
                      </p>

                      {/* Testimonial Preview */}
                      <div className="pt-6 border-t border-gray-200">
                        <p className="text-sm italic text-black/60 mb-3 line-clamp-2">
                          "{study.quote}"
                        </p>
                        <div>
                          <p className="font-semibold text-navy text-sm">{study.author}</p>
                          <p className="text-xs text-black/50">{study.role}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 flex items-center text-gold font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                        Se case studie
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-offwhite px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-navy mb-6">
              Klar til at blive vores næste <span className="text-gold">succeshistorie?</span>
            </h2>
            <p className="text-lg md:text-xl text-black/70 mb-8 max-w-2xl mx-auto">
              Lad os skabe noget ekstraordinært sammen. Book et uforpligtende møde, og lad os tale om dit projekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/kontakt"
                className="w-full sm:w-auto bg-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
              >
                Kontakt Os
              </Link>
              <Link
                href="/pakker"
                className="w-full sm:w-auto bg-white text-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white/80 transition-all border-2 border-navy/20"
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
