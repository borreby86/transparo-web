'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import PackageCard from '../packages/PackageCard';
import { packages } from '../packages/packageData';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function PackagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations('packages.section');

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const addons = t.raw('addons') as Array<{ name: string; price: string }>;

  return (
    <section
      ref={sectionRef}
      id="pakker"
      className="relative overflow-hidden bg-gradient-to-b from-offwhite via-white to-offwhite"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
      >
        {/* Large gradient orbs */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[800px] h-[800px] bg-navy/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center px-6 pt-24 pb-16 lg:pt-32 lg:pb-20"
          style={{ y: shouldReduceMotion ? 0 : textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Small tagline */}
            <motion.div
              className="flex items-center justify-center space-x-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium text-gold uppercase tracking-wider">
                {t('tagline')}
              </span>
              <Sparkles className="w-5 h-5 text-gold" />
            </motion.div>

            {/* Main title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black text-navy mb-6">
              <motion.span
                className="block"
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {t('title')}
              </motion.span>
            </h2>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-warmgray max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {t('subtitle')}
              <span className="block mt-2 text-base md:text-lg text-warmgray/80">
                {t('subtitleHint')}
              </span>
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Cards Section - Full Width */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:block px-8 xl:px-16 2xl:px-24 pb-32">
            <div className="grid grid-cols-3 gap-8 xl:gap-10 max-w-[1600px] mx-auto">
              {packages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>

          {/* Tablet Layout (2-1) */}
          <div className="hidden md:block lg:hidden px-8 pb-24">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {packages.slice(0, 2).map((pkg, index) => (
                  <PackageCard key={pkg.id} pkg={pkg} index={index} />
                ))}
              </div>
              <div className="max-w-md mx-auto">
                <PackageCard pkg={packages[2]} index={2} />
              </div>
            </div>
          </div>

          {/* Mobile Layout - Horizontal Scroll with Snap */}
          <div className="md:hidden">
            <div className="overflow-x-auto pb-20">
              <div className="flex space-x-6 px-6 snap-x snap-mandatory">
                {packages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    className="flex-none w-[85vw] max-w-sm snap-center"
                  >
                    <PackageCard pkg={pkg} index={index} />
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll hint for mobile */}
            <motion.div
              className="text-center pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-sm text-warmgray">
                {t('swipeHint')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Comparison Link */}
        <motion.div
          className="text-center pb-20 px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/pakker"
            className="inline-flex items-center space-x-2 text-navy hover:text-gold transition-colors group"
          >
            <span className="text-lg font-medium">{t('compareLink')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Add-ons Section */}
        <motion.div
          className="bg-navy text-white py-16 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('addonsTitle')}
            </h3>
            <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
              {t('addonsSubtitle')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-semibold mb-2">{addon.name}</h4>
                  <p className="text-gold text-xl font-bold">{addon.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
