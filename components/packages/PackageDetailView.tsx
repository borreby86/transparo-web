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
  Rocket,
  Users,
  Briefcase,
  Lightbulb,
  Calendar,
  FileCheck,
  Palette,
  Send,
  Quote
} from 'lucide-react';

interface PackageDetailViewProps {
  pkg: Package;
}

export default function PackageDetailView({ pkg }: PackageDetailViewProps) {
  const shouldReduceMotion = useReducedMotion();
  const isEssentials = pkg.slug === 'essentials';

  // Icon mapping for feature categories
  const categoryIcons = {
    'Design & Udvikling': Sparkles,
    'Funktionalitet': Zap,
    'SEO & Performance': Rocket,
    'Service & Support': Shield,
  };

  // Perfect For data for Essentials
  const perfectFor = [
    {
      icon: Lightbulb,
      title: 'Startups',
      description: 'Lancér din første professionelle hjemmeside uden at sprænge budgettet',
    },
    {
      icon: Users,
      title: 'Freelancere',
      description: 'Vis dine services frem med en elegant online tilstedeværelse',
    },
    {
      icon: Briefcase,
      title: 'Små virksomheder',
      description: 'Tag skridtet fra Facebook til din egen professionelle platform',
    },
  ];

  // Timeline steps for Essentials
  const timelineSteps = [
    { day: '1-2', title: 'Opdagelse', description: 'Vi lærer din virksomhed at kende', icon: Lightbulb },
    { day: '3-6', title: 'Design & Udvikling', description: 'Vi bygger dit website', icon: Palette },
    { day: '7-10', title: 'Gennemgang', description: 'Du giver feedback, vi finpudser', icon: FileCheck },
    { day: '11-14', title: 'Lancering', description: 'Dit website går live!', icon: Send },
  ];

  // Testimonials for Essentials
  const testimonials = [
    {
      name: 'Louise Kjær',
      company: 'Sundhedskonsortiet',
      quote: 'Perfekt til vores behov - professionelt resultat til en fair pris.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    },
    {
      name: 'Thomas Kjeldsen',
      company: 'VAT 85',
      quote: 'Hurtig levering og præcis hvad vi havde brug for som startup.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-offwhite to-white">
      {/* Hero Section - Redesigned for Essentials */}
      <section className="relative overflow-hidden">
        {/* Background decoration - More vibrant for Essentials */}
        <div className="absolute inset-0 pointer-events-none">
          {isEssentials ? (
            <>
              <div className="absolute top-0 right-0 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] bg-gradient-to-br from-cyan-500/20 via-teal-500/15 to-emerald-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gold/20 to-transparent rounded-full blur-3xl" />
            </>
          ) : (
            <div className={`absolute top-0 right-0 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] ${
              pkg.color === 'gold' ? 'bg-gold/10' :
              pkg.color === 'navy' ? 'bg-navy/10' :
              'bg-warmgray/10'
            } rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`} />
          )}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-20">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#pakker"
              className="inline-flex items-center space-x-2 text-navy hover:text-gold transition-colors mb-8 sm:mb-12"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base font-medium">Tilbage til oversigt</span>
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

              {isEssentials && (
                <motion.div
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Rocket className="w-4 h-4" />
                  <span className="text-sm font-bold uppercase tracking-wider">Bedste Starter</span>
                </motion.div>
              )}

              <motion.h1
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-black mb-4 ${
                  isEssentials
                    ? 'bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent'
                    : 'text-navy'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {pkg.name}
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-warmgray mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {pkg.tagline}
              </motion.p>

              {isEssentials && (
                <motion.p
                  className="text-base text-navy/70 mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  Alt du behøver for at komme online - hurtigt, professionelt og til en fair pris.
                </motion.p>
              )}

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
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      isEssentials ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-green-600'
                    }`}>
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-base sm:text-lg text-navy font-medium">{highlight}</span>
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
                p-6 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden
                ${isEssentials
                  ? 'bg-white text-navy shadow-2xl border-2 border-cyan-500/20'
                  : pkg.color === 'gold'
                    ? 'bg-gradient-to-br from-gold-light to-gold text-navy'
                    : pkg.color === 'navy'
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy shadow-xl'}
              `}>
                {/* Decorative gradient for Essentials */}
                {isEssentials && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-2xl" />
                )}

                {/* Price */}
                <div className="mb-6 sm:mb-8 relative">
                  <div className="flex items-baseline">
                    <span className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${
                      isEssentials ? 'bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent' : ''
                    }`}>
                      {pkg.priceFormatted}
                    </span>
                    <span className="ml-2 sm:ml-3 text-lg sm:text-xl opacity-80">DKK</span>
                  </div>
                  <p className="text-sm mt-2 opacity-80">Fast pris • Ingen skjulte gebyrer</p>
                </div>

                {/* Delivery time */}
                <div className="flex items-center space-x-2 mb-8 pb-8 border-b border-current/10">
                  <Clock className={`w-5 h-5 ${isEssentials ? 'text-cyan-600' : 'opacity-70'}`} />
                  <span className="font-medium">Levering: {pkg.duration}</span>
                </div>

                {/* CTAs */}
                <div className="space-y-4">
                  <Button
                    href="/kontakt"
                    variant={isEssentials ? 'primary' : pkg.color === 'gold' ? 'primary' : 'secondary'}
                    size="lg"
                    fullWidth
                    className={`flex items-center justify-center space-x-2 ${
                      isEssentials ? 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700' : ''
                    }`}
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

      {/* Perfect For Section - NEW for Essentials */}
      {isEssentials && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-offwhite">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-600 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                Perfekt til dig
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy">
                Hvem er Essentials til?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {perfectFor.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: shouldReduceMotion ? 0 : -8 }}
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-warmgray leading-relaxed">{item.description}</p>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 rounded-bl-3xl" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section - NEW for Essentials */}
      {isEssentials && (
        <section className="py-20 lg:py-28 bg-navy text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-400 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                Din rejse
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                Fra idé til lancering på <span className="text-cyan-400">14 dage</span>
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 transform -translate-y-1/2" />

              <div className="grid md:grid-cols-4 gap-8">
                {timelineSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={i}
                      className="relative text-center"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                    >
                      {/* Day badge */}
                      <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <div className="text-cyan-400 font-bold text-sm mb-2">Dag {step.day}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm">{step.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy mb-4">
              Alt der er inkluderet
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-warmgray max-w-3xl mx-auto">
              Få en komplet løsning med alt hvad din virksomhed har brug for
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {pkg.features.map((category, catIndex) => {
              const Icon = categoryIcons[category.category as keyof typeof categoryIcons] || Sparkles;

              return (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 }}
                  className={`rounded-3xl p-6 sm:p-8 ${
                    isEssentials
                      ? 'bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-cyan-200 transition-colors'
                      : 'bg-offwhite'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${
                      isEssentials
                        ? 'bg-gradient-to-br from-cyan-500 to-teal-500 text-white'
                        : 'bg-navy text-white'
                    }`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-navy">
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
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                              isEssentials ? 'bg-cyan-500' : 'bg-green-600'
                            }`}>
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                          )
                        ) : (
                          <div className={`w-5 h-5 rounded-full mt-0.5 flex-shrink-0 ${
                            isEssentials ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-gold'
                          }`} />
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
                            <span className={`ml-2 font-semibold ${
                              isEssentials ? 'text-cyan-600' : 'text-gold'
                            }`}>
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

      {/* Testimonials Section - NEW for Essentials */}
      {isEssentials && (
        <section className="py-20 lg:py-28 bg-gradient-to-b from-offwhite to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-cyan-600 text-sm font-bold uppercase tracking-[0.3em] mb-4">
                Social proof
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-navy">
                Hvad vores kunder siger
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Quote className="w-10 h-10 text-cyan-500/30 mb-4" />
                  <p className="text-lg text-navy mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-bold text-navy">{testimonial.name}</div>
                      <div className="text-sm text-cyan-600">{testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-warmgray">
                Slut dig til <span className="text-cyan-600 font-bold">50+ tilfredse kunder</span> der har valgt Essentials
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Add-ons Section */}
      <section className={`py-20 ${isEssentials ? 'bg-white' : 'bg-offwhite'}`}>
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
                className={`rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${
                  isEssentials
                    ? 'bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-cyan-200'
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
              >
                <h4 className="font-semibold text-navy mb-2">{addon.name}</h4>
                <p className={`text-2xl font-bold mb-3 ${isEssentials ? 'text-cyan-600' : 'text-gold'}`}>
                  {addon.price}
                </p>
                <p className="text-sm text-warmgray">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 lg:py-32 text-white ${
        isEssentials
          ? 'bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600'
          : 'bg-navy'
      }`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
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
