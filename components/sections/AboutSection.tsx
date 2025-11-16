'use client'

import { Section } from '@/components/ui/Section'
import { motion } from 'motion/react'
import { Heart, Target, Zap, Shield, Users, Award } from 'lucide-react'

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: 'Tillid & Transparens',
      description: 'Vores navn siger det hele. Vi tror på åbenhed og ærlig kommunikation gennem hele processen.',
    },
    {
      icon: Target,
      title: 'Fokuseret Tilgang',
      description: 'Vi specialiserer os i små virksomheder, fordi vi ved præcis hvad I har brug for.',
    },
    {
      icon: Zap,
      title: 'Hurtig Levering',
      description: 'Vores strukturerede proces sikrer, at vi leverer til tiden - hver gang.',
    },
    {
      icon: Shield,
      title: 'Fast Pris Garanti',
      description: 'Ingen scope creep, ingen skjulte gebyrer. Prisen er prisen.',
    },
  ]

  const stats = [
    { number: '50+', label: 'Websites Leveret' },
    { number: '14-28', label: 'Dage Levering' },
    { number: '100%', label: 'Tilfredse Kunder' },
    { number: '0', label: 'Skjulte Gebyrer' },
  ]

  return (
    <Section id="om-os" background="white" spacing="xl">
      {/* Hero */}
      <div className="text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            Om <span className="text-gold">Transparo</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/70 max-w-4xl mx-auto leading-relaxed">
            Vi bygger professionelle websites til små virksomheder i Danmark.
            Med fast pris, hurtig levering, og ingen scope creep.
          </p>
        </motion.div>
      </div>

      {/* Story */}
      <motion.div
        className="max-w-4xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-offwhite rounded-2xl p-8 md:p-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-6">
            Vores Mission
          </h2>
          <div className="space-y-4 text-lg text-black/80 leading-relaxed">
            <p>
              Transparo blev grundlagt med én klar mission: at gøre professionelt webdesign
              tilgængeligt for danske små virksomheder.
            </p>
            <p>
              Vi så for mange virksomheder blive brændt af uklare priser, forsinkede projekter,
              og scope creep. Derfor byggede vi en bedre måde.
            </p>
            <p>
              Med vores faste priser, klare processer, og dedikerede fokus på små virksomheder,
              leverer vi websites af højeste kvalitet - til tiden, hver gang.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-black/60 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values */}
      <div>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
            Vores <span className="text-gold">Værdier</span>
          </h2>
          <p className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto">
            De principper der guider alt vi gør
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                className="bg-offwhite rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-black/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
