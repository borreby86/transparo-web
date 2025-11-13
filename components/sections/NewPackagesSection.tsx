'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { Check, Star, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

// Package data
const packages = [
  {
    id: 'essentials',
    name: 'Essentials',
    price: '8.995',
    duration: '10-14 dage',
    description: 'Perfekt til startups og små virksomheder',
    highlights: [
      '5 professionelle sider',
      'Mobil-optimeret design',
      'Basis SEO-opsætning',
      'Kontaktformular'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '16.995',
    duration: '14-21 dage',
    description: 'Den komplette løsning for voksende virksomheder',
    popular: true,
    highlights: [
      '10 sider inkluderet',
      'Avancerede animationer',
      'Blog & portfolio',
      'Fuld SEO-pakke'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    price: '27.995',
    duration: '21-28 dage',
    description: 'Enterprise-niveau løsning med fuld kontrol',
    highlights: [
      '20+ sider',
      'Multi-language support',
      'E-commerce ready',
      'Premium animationer'
    ]
  }
];

export function NewPackagesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pakker" className="py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-sm font-medium text-gold uppercase tracking-wider">
              Faste priser • Ingen overraskelser
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </motion.div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-4">
            Vælg din pakke
          </h2>
          <p className="text-lg md:text-xl text-warmgray max-w-3xl mx-auto">
            Professionelle websites med AI-drevet udvikling.
            <span className="block mt-2 text-base text-warmgray/80">
              Klik på en pakke for at se alle detaljer.
            </span>
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="relative"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.15
              }}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gold text-white px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    <span className="text-xs font-bold uppercase tracking-wider">Mest Populær</span>
                  </div>
                </div>
              )}

              <Link href={`/packages/${pkg.id}`}>
                <div className={`
                  relative h-full p-8 lg:p-10 rounded-2xl transition-all duration-300
                  ${pkg.popular
                    ? 'bg-gradient-to-br from-navy via-navy to-navy/95 text-white shadow-2xl'
                    : 'bg-white border border-gray-200 hover:border-gold/30 shadow-lg hover:shadow-xl'
                  }
                  hover:-translate-y-1 group cursor-pointer
                `}>
                  {/* Package name and description */}
                  <div className="mb-8">
                    <h3 className={`text-2xl font-display font-bold mb-2 ${
                      pkg.popular ? 'text-white' : 'text-navy'
                    }`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${
                      pkg.popular ? 'text-white/80' : 'text-warmgray'
                    }`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl lg:text-5xl font-black ${
                        pkg.popular ? 'text-gold' : 'text-navy'
                      }`}>
                        {pkg.price}
                      </span>
                      <span className={`text-lg ${
                        pkg.popular ? 'text-white/70' : 'text-warmgray'
                      }`}>
                        DKK
                      </span>
                    </div>
                    <p className={`text-xs mt-2 ${
                      pkg.popular ? 'text-white/60' : 'text-warmgray/80'
                    }`}>
                      Fast pris • Ingen skjulte gebyrer
                    </p>
                  </div>

                  {/* Delivery time */}
                  <div className={`flex items-center gap-2 mb-8 pb-8 border-b ${
                    pkg.popular ? 'border-white/20' : 'border-gray-200'
                  }`}>
                    <Clock className={`w-4 h-4 ${
                      pkg.popular ? 'text-white/60' : 'text-warmgray'
                    }`} />
                    <span className={`text-sm ${
                      pkg.popular ? 'text-white/80' : 'text-warmgray'
                    }`}>
                      Levering: {pkg.duration}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-10">
                    {pkg.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? 'text-gold' : 'text-green-600'
                        }`} />
                        <span className={`text-sm ${
                          pkg.popular ? 'text-white/90' : 'text-navy'
                        }`}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`
                    w-full py-3.5 px-6 rounded-xl font-semibold text-center
                    flex items-center justify-center gap-2 transition-all
                    ${pkg.popular
                      ? 'bg-gold text-navy hover:bg-gold-light'
                      : 'bg-navy text-white hover:bg-navy/90'
                    }
                  `}>
                    <span>Se alle detaljer</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/packages/compare"
            className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors group"
          >
            <span className="text-lg font-medium">Sammenlign alle pakker i detaljer</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Add-ons section */}
        <motion.div
          className="mt-20 pt-20 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-navy text-center mb-10">
            Tilkøb & Ekstra Services
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Ekstra sider', price: '1.495 kr/side' },
              { name: 'E-mail opsætning', price: '2.995 kr' },
              { name: 'Copywriting', price: 'Fra 3.995 kr' },
              { name: 'Fotografi', price: 'Fra 4.995 kr' }
            ].map((addon, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-offwhite rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-semibold text-navy mb-2">{addon.name}</h4>
                <p className="text-gold font-bold">{addon.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}