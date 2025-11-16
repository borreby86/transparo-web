'use client'

import { motion } from 'motion/react'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  package: 'Essentials' | 'Professional' | 'Business'
  results: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Vi gik fra et traditionelt klinikudtryk til en digital oplevelse der føles rolig, professionel og personlig. Transparo tænkte på hver eneste detalje.',
    author: 'Camilla Højland',
    role: 'Indehaver',
    company: 'Flotte Fødder',
    package: 'Essentials',
    results: '+185% online bookinger på 3 måneder'
  },
  {
    quote:
      'Transparo oversatte et komplekst sundhedsunivers til et intuitivt digitalt økosystem. Vores brugere føler sig trygge, og platformen performer fra dag ét.',
    author: 'Louise Kjær',
    role: 'Produktchef',
    company: 'Sundhedskonsortiet',
    package: 'Professional',
    results: '94% brugertilfredshed første måned'
  },
  {
    quote:
      'Festivalånden lever i hver detalje. Fra billetflow til fortælling er alt gennemført – og publikum engagerer sig som aldrig før.',
    author: 'Thomas Kjeldsen',
    role: 'Formand',
    company: 'VAT 85',
    package: 'Business',
    results: '+295% online billetsalg'
  }
]

export function PackageTestimonialsSection() {
  const getPackageColor = (pkg: string) => {
    switch (pkg) {
      case 'Essentials':
        return 'from-navy/5 to-navy/10'
      case 'Professional':
        return 'from-gold/5 to-gold/10'
      case 'Business':
        return 'from-navy/10 to-navy/20'
      default:
        return 'from-gray-50 to-gray-100'
    }
  }

  const getPackageBadgeColor = (pkg: string) => {
    switch (pkg) {
      case 'Essentials':
        return 'bg-navy text-white'
      case 'Professional':
        return 'bg-gold text-navy'
      case 'Business':
        return 'bg-navy text-white'
      default:
        return 'bg-gray-200 text-gray-800'
    }
  }

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-navy mb-6">
              Vores kunder <span className="text-gold">taler</span>
            </h2>
            <p className="text-lg sm:text-xl text-black/70 max-w-3xl mx-auto">
              Se hvad rigtige kunder siger om deres valgte pakke
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${getPackageColor(testimonial.package)} rounded-2xl p-8 md:p-10 h-full flex flex-col relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1`}>
                {/* Package Badge */}
                <div className="mb-6">
                  <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${getPackageBadgeColor(testimonial.package)}`}>
                    {testimonial.package}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6 flex-grow">
                  <p className="text-navy text-base md:text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Results */}
                <div className="mb-6 p-4 bg-white/60 rounded-lg border border-navy/10">
                  <p className="text-sm font-semibold text-navy">Resultater:</p>
                  <p className="text-gold font-bold text-lg">{testimonial.results}</p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-navy/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy/10 to-gold/10 flex items-center justify-center font-display font-bold text-navy text-lg flex-shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-navy">{testimonial.author}</p>
                    <p className="text-sm text-black/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${testimonial.package === 'Professional' ? 'bg-gold' : 'bg-navy'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-black/70 mb-6">
            Klar til at blive vores næste succeshistorie?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cases"
              className="inline-block bg-white border-2 border-navy text-navy px-8 py-4 rounded-full font-semibold hover:bg-offwhite transition-all"
            >
              Se alle cases
            </a>
            <a
              href="/kontakt"
              className="inline-block bg-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl"
            >
              Book et møde
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
