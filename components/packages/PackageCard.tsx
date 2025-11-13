'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { Check, Star, ArrowRight, Clock } from 'lucide-react';
import { Package } from './packageData';

interface PackageCardProps {
  pkg: Package;
  index: number;
  isInView?: boolean;
}

export default function PackageCard({ pkg, index, isInView = true }: PackageCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Determine card styling based on package color
  const cardStyles = {
    navy: 'bg-navy text-white',
    gold: 'bg-gradient-to-br from-gold-light via-gold to-gold text-navy',
    warmgray: 'bg-white text-navy',
  };

  const priceColor = {
    navy: 'text-white',
    gold: 'text-navy',
    warmgray: 'text-navy',
  };

  const buttonStyles = {
    navy: 'bg-gold text-white hover:bg-gold-light',
    gold: 'bg-navy text-white hover:bg-opacity-90',
    warmgray: 'bg-navy text-white hover:bg-opacity-90',
  };

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={shouldReduceMotion ? {} : {
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <motion.div
          className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: shouldReduceMotion ? 0 : 0.5 + index * 0.15 }}
        >
          <div className="bg-gold text-navy px-6 py-2 rounded-full flex items-center space-x-2 font-semibold shadow-lg">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm uppercase tracking-wider">Mest Populær</span>
          </div>
        </motion.div>
      )}

      <Link href={`/packages/${pkg.slug}`} className="block h-full">
        <motion.div
          className={`
            relative h-full p-8 lg:p-10 rounded-3xl overflow-hidden
            ${cardStyles[pkg.color]}
            shadow-xl hover:shadow-2xl transition-shadow duration-500
            flex flex-col
          `}
        >
          {/* Background decoration */}
          {pkg.color === 'gold' && (
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-3xl font-display font-bold mb-2">{pkg.name}</h3>
              <p className="text-sm opacity-80">{pkg.tagline}</p>
            </div>

            {/* Price */}
            <motion.div
              className="mb-8"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.3 + index * 0.15,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
            >
              <div className="flex items-baseline">
                <span className={`text-5xl lg:text-6xl font-black ${priceColor[pkg.color]}`}>
                  {pkg.priceFormatted}
                </span>
                <span className="ml-2 text-lg opacity-70">DKK</span>
              </div>
              <div className="mt-2 flex items-center space-x-4 text-sm opacity-80">
                <span>Fast pris • Ingen skjulte gebyrer</span>
              </div>
            </motion.div>

            {/* Delivery time */}
            <div className="mb-6 flex items-center space-x-2">
              <Clock className="w-4 h-4 opacity-70" />
              <span className="text-sm font-medium opacity-80">Levering: {pkg.duration}</span>
            </div>

            {/* Highlights */}
            <div className="space-y-3 mb-8 flex-1">
              {pkg.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.4 + index * 0.15 + i * 0.05,
                    duration: 0.3,
                  }}
                >
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                  <span className="text-sm leading-relaxed opacity-90">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-auto"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              <div className={`
                w-full py-4 px-6 rounded-2xl font-semibold
                ${buttonStyles[pkg.color]}
                transition-all duration-300
                flex items-center justify-center space-x-2
                group
              `}>
                <span>Se alle detaljer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}