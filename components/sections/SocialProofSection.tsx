'use client'

import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { Quote } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function SocialProofSection() {
  const testimonials = [
    {
      quote: 'Endelig et webbureau der holder, hvad de lover.',
      author: 'Kommende Kunde',
      company: 'Dansk Virksomhed',
      role: 'CEO',
      image: null, // Placeholder for customer portrait
    },
    {
      quote: 'Det føltes som at arbejde med nogen, der havde min ryg hele vejen.',
      author: 'Kommende Kunde',
      company: 'SMB Partner',
      role: 'Marketing Chef',
      image: null,
    },
    {
      quote: 'Ingen skjulte overraskelser — kun klarhed og stærkt design.',
      author: 'Kommende Kunde',
      company: 'Startup Danmark',
      role: 'Founder',
      image: null,
    },
  ]

  const mockups = [
    '/images/cases/mockup1.webp',
    '/images/cases/mockup2.webp',
    '/images/cases/mockup3.webp',
  ]

  return (
    <Section id="testimonials" background="offwhite" spacing="xl" className="overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
            Kunder vælger os, fordi de kan <span className="text-gold">mærke forskellen</span>
          </h2>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 laptop-l:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card padding="lg" className="h-full relative flex flex-col">
              <Quote className="h-8 w-8 text-gold/20 absolute top-6 right-6" />
              
              <div className="flex-grow">
                <p className="text-lg text-black/80 mb-8 relative z-10 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-warmgray-light/20">
                <div className="h-12 w-12 rounded-full bg-warmgray-light/30 flex items-center justify-center overflow-hidden relative">
                  {testimonial.image ? (
                     <Image 
                       src={testimonial.image} 
                       alt={testimonial.author}
                       fill
                       className="object-cover"
                     />
                  ) : (
                    <span className="text-navy/40 font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-display font-semibold text-navy text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-black/60">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Website Mockups */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
           {mockups.map((mockup, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 + (index * 0.2) }}
               className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:-translate-y-2 duration-500 ${
                 index === 1 ? 'md:-mt-12 z-10' : 'z-0'
               }`}
             >
               <Image
                 src={mockup}
                 alt={`Website Case ${index + 1}`}
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 33vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
             </motion.div>
           ))}
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-20"
      >
        <p className="text-sm text-black/50 italic">
          * Vi er et nyt bureau og arbejder på at opbygge vores case studies.
          Rigtige testimonials kommer snart!
        </p>
      </motion.div>
    </Section>
  )
}
