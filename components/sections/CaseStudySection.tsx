'use client'

import { motion, useReducedMotion } from 'motion/react'
import { TrendingUp, Users, Clock } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    client: 'NORDIC FASHION',
    category: 'E-commerce',
    title: 'Fra 0 til 2M DKK på 6 måneder',
    description: 'Komplet e-commerce løsning med Shopify integration og custom design der øgede konverteringsraten med 240%.',
    image: '/images/unsplash/case-1.webp',
    stats: [
      { label: 'Konvertering', value: '+240%', icon: TrendingUp },
      { label: 'Salg første år', value: '2M DKK', icon: Users },
      { label: 'Leveringstid', value: '3 uger', icon: Clock },
    ],
    testimonial: {
      text: 'Transparo leverede langt over vores forventninger. Websitet er ikke bare smukt - det sælger! ROI blev positiv efter kun 6 uger.',
      author: 'Maria Jensen',
      role: 'CEO, Nordic Fashion'
    }
  },
  {
    id: 2,
    client: 'TECHSTART COPENHAGEN',
    category: 'SaaS Platform',
    title: '500+ nye B2B kunder på 3 måneder',
    description: 'Moderne SaaS landing page med avanceret lead generation der transformerede deres online tilstedeværelse og B2B salg.',
    image: '/images/unsplash/why-us-3.webp',
    stats: [
      { label: 'Nye kunder', value: '500+', icon: Users },
      { label: 'Lead quality', value: '+85%', icon: TrendingUp },
      { label: 'Page speed', value: '98/100', icon: Clock },
    ],
    testimonial: {
      text: 'Vores nye website har været en game-changer for vores B2B salg. Websitet fanger virkelig essensen af vores brand.',
      author: 'Thomas Andersen',
      role: 'CMO, TechStart'
    }
  },
  {
    id: 3,
    client: 'GOURMET DELIKATESSER',
    category: 'Restaurant',
    title: '150% flere bordreservationer',
    description: 'Elegant restaurant website med integreret booking system og menu præsentation der øgede online reservationer markant.',
    image: '/images/unsplash/case-2.webp',
    stats: [
      { label: 'Reservationer', value: '+150%', icon: TrendingUp },
      { label: 'Gennemsnitlig ordre', value: '+45%', icon: Users },
      { label: 'Mobile traffic', value: '73%', icon: Clock },
    ],
    testimonial: {
      text: 'Websitet fanger virkelig essensen af vores restaurant. Gæsterne roser ofte vores online oplevelse før de kommer.',
      author: 'Sophie Nielsen',
      role: 'Ejer, Gourmet Delikatesser'
    }
  }
]

export function CaseStudySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-[#F5F5F0] py-20 md:py-24">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-12 md:mb-16">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 border border-gold/40 text-gold rounded-full text-xs font-bold uppercase tracking-widest mb-5"
          >
            Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2332] mb-3"
          >
            Resultater der taler
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-[#5a6c7d] max-w-2xl mx-auto"
          >
            Se hvordan vi har hjulpet danske virksomheder med at vokse online
          </motion.p>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-block px-4 py-2 bg-white rounded-full text-xs font-bold text-[#1a2332] shadow-sm">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  {/* Client */}
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-3">
                    {study.client}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-[#1a2332] mb-3 leading-tight">
                    {study.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5a6c7d] mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7 pb-7 border-b border-gray-100">
                    {study.stats.map((stat, idx) => {
                      const Icon = stat.icon
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="w-5 h-5 mx-auto mb-2 text-gray-300" strokeWidth={1.5} />
                          <div className="font-display text-base sm:text-lg md:text-xl font-bold text-[#1a2332] mb-1">
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-[#9ca3af] leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Testimonial */}
                  <div className="mt-auto">
                    <p className="text-sm italic text-[#5a6c7d] mb-4 leading-relaxed">
                      "{study.testimonial.text}"
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy/5 to-gold/5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-[#1a2332]">
                          {study.testimonial.author}
                        </p>
                        <p className="text-xs text-[#9ca3af]">
                          {study.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-base md:text-lg text-[#5a6c7d] mb-7">
            Klar til at blive vores næste succeshistorie?
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a2332] text-white rounded-full font-bold text-sm hover:bg-[#1a2332]/90 transition-colors">
              Start dit projekt
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1a2332] border-2 border-[#1a2332] rounded-full font-bold text-sm hover:bg-[#1a2332] hover:text-white transition-all">
              Se flere cases
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}