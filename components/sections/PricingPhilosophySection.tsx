'use client'

import { motion } from 'motion/react'

export function PricingPhilosophySection() {
  const principles = [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" />
          <text x="50" y="60" textAnchor="middle" fontSize="32" fontWeight="bold" fill="currentColor">
            DKK
          </text>
        </svg>
      ),
      title: 'Fast Pris',
      description:
        'Én pris. Intet småt. Du ved præcis hvad du betaler, før vi starter. Ingen "bare lige én ting mere" opkrævninger.',
      background: 'bg-navy',
      textColor: 'text-white',
      iconColor: 'text-gold',
      accentColor: 'border-gold'
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 L90 35 L90 65 L50 90 L10 65 L10 35 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <path d="M35 50 L45 60 L65 40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Ingen Scope Creep',
      description:
        '73% af projekter oplever scope creep. Ikke hos os. Strukturerede revisionsrunder og klare sign-off punkter sikrer projektet bliver færdigt.',
      background: 'bg-offwhite',
      textColor: 'text-navy',
      iconColor: 'text-navy',
      accentColor: 'border-navy/20'
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 20 L60 40 L82 43 L66 59 L70 81 L50 70 L30 81 L34 59 L18 43 L40 40 Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      ),
      title: 'Hurtig Levering',
      description:
        'Bureau-kvalitet på 2-4 uger (vs. 8-16 hos traditionelle bureauer). AI + ekspert hybrid model giver dig det bedste fra begge verdener.',
      background: 'bg-gold/10',
      textColor: 'text-navy',
      iconColor: 'text-gold',
      accentColor: 'border-gold/30'
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="3" />
          <circle cx="50" cy="50" r="8" fill="currentColor" />
        </svg>
      ),
      title: 'Kvalitet Først',
      description:
        'Pakkeprisen bestemmer scope — ikke kvalitet. Alle får Motion animations, Payload CMS, og Next.js. Premium teknologi til alle.',
      background: 'bg-navy',
      textColor: 'text-white',
      iconColor: 'text-gold',
      accentColor: 'border-gold'
    }
  ]

  return (
    <section className="bg-white px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-navy mb-6 leading-tight">
              Hvorfor vores <span className="text-gold">filosofi</span> virker
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed">
              Vi løser de tre største problemer med traditionelle webdesign bureauer
            </p>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`${principle.background} ${principle.textColor} rounded-2xl p-8 md:p-10 lg:p-12 h-full min-h-[400px] md:min-h-[450px] flex flex-col relative overflow-hidden border-2 ${principle.accentColor} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="mb-6 md:mb-8">
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 ${principle.iconColor}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {principle.icon}
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-6">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg leading-relaxed opacity-90">
                  {principle.description}
                </p>

                {/* Hover accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${principle.iconColor === 'text-gold' ? 'bg-gold' : 'bg-navy'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
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
          className="text-center mt-16 md:mt-20"
        >
          <p className="text-lg md:text-xl text-black/70 mb-2">
            Klar til at opleve forskellen?
          </p>
          <p className="text-sm md:text-base text-black/50">
            Se vores pakker nedenfor ↓
          </p>
        </motion.div>
      </div>
    </section>
  )
}
