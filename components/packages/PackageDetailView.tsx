'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { Package, commonAddOns } from './packageData';
import { Button } from '@/components/ui/Button';
import {
  ArrowLeft,
  Check,
  X,
  Star,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';

interface PackageDetailViewProps {
  pkg: Package;
}

export default function PackageDetailView({ pkg }: PackageDetailViewProps) {
  const shouldReduceMotion = useReducedMotion();

  // Icon mapping for feature categories
  const categoryIcons = {
    'Design & Udvikling': Sparkles,
    'Funktionalitet': Zap,
    'SEO & Performance': Rocket,
    'Service & Support': Shield,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-offwhite to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 right-0 w-[800px] h-[800px] ${
            pkg.color === 'gold' ? 'bg-gold/10' :
            pkg.color === 'navy' ? 'bg-navy/10' :
            'bg-warmgray/10'
          } rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-20">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#pakker"
              className="inline-flex items-center space-x-2 text-navy hover:text-gold transition-colors mb-12"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Tilbage til oversigt</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Package Info */}
            <div>
              {pkg.popular && (
                <motion.div
                  className="inline-flex items-center space-x-2 bg-gold text-navy px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-bold uppercase tracking-wider">Mest Populær</span>
                </motion.div>
              )}

              <motion.h1
                className="text-5xl lg:text-7xl font-display font-black text-navy mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {pkg.name}
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-warmgray mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {pkg.tagline}
              </motion.p>

              {/* Key highlights */}
              <motion.div
                className="space-y-3 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {pkg.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                  >
                    <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-navy">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Pricing Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className={`
                p-8 lg:p-10 rounded-3xl
                ${pkg.color === 'gold' ? 'bg-gradient-to-br from-gold-light to-gold text-navy' :
                  pkg.color === 'navy' ? 'bg-navy text-white' :
                  'bg-white text-navy shadow-xl'}
              `}>
                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-6xl lg:text-7xl font-black">
                      {pkg.priceFormatted}
                    </span>
                    <span className="ml-3 text-xl opacity-80">DKK</span>
                  </div>
                  <p className="text-sm mt-2 opacity-80">Fast pris • Ingen skjulte gebyrer</p>
                </div>

                {/* Delivery time */}
                <div className="flex items-center space-x-2 mb-8 pb-8 border-b border-current/10">
                  <Clock className="w-5 h-5 opacity-70" />
                  <span className="font-medium">Levering: {pkg.duration}</span>
                </div>

                {/* CTAs */}
                <div className="space-y-4">
                  <Button
                    href="/kontakt"
                    variant={pkg.color === 'gold' ? 'primary' : 'secondary'}
                    size="lg"
                    fullWidth
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>Book et møde</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  <Button
                    href="/packages/compare"
                    variant="outline"
                    size="md"
                    fullWidth
                  >
                    Sammenlign alle pakker
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-8 border-t border-current/10 space-y-2">
                  <p className="text-sm opacity-80">✓ 100% dansk support</p>
                  <p className="text-sm opacity-80">✓ Ingen binding</p>
                  <p className="text-sm opacity-80">✓ Fuld ejendomsret</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
              Alt der er inkluderet
            </h2>
            <p className="text-xl text-warmgray max-w-3xl mx-auto">
              Få en komplet løsning med alt hvad din virksomhed har brug for
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {pkg.features.map((category, catIndex) => {
              const Icon = categoryIcons[category.category as keyof typeof categoryIcons] || Sparkles;

              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className="bg-offwhite rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-navy text-white rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-navy">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start space-x-3"
                      >
                        {typeof item.included === 'boolean' ? (
                          item.included ? (
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                          )
                        ) : (
                          <div className="w-5 h-5 bg-gold rounded-full mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <span className={`font-medium ${
                            typeof item.included === 'boolean' && !item.included
                              ? 'text-gray-400 line-through'
                              : 'text-navy'
                          }`}>
                            {item.name}
                          </span>
                          {typeof item.included === 'string' && (
                            <span className="ml-2 text-gold font-semibold">
                              {item.included}
                            </span>
                          )}
                          {item.description && (
                            <p className="text-sm text-warmgray mt-1">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-navy mb-4">
              Udvid med tilkøb
            </h2>
            <p className="text-lg text-warmgray">
              Tilpas din pakke med præcis de services du har brug for
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonAddOns.map((addon, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              >
                <h4 className="font-semibold text-navy mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold text-gold mb-3">{addon.price}</p>
                <p className="text-sm text-warmgray">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Klar til at komme i gang?
            </h2>
            <p className="text-xl mb-12 opacity-90">
              Book et uforpligtende møde og lad os tale om din vision
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/kontakt"
                variant="secondary"
                size="lg"
                className="inline-flex items-center space-x-2"
              >
                <span>Book møde nu</span>
                <ArrowRight className="w-5 h-5" />
              </Button>

              <Button
                href="/cases"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Se vores arbejde
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}