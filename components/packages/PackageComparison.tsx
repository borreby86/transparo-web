'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Link from 'next/link';
import { packages } from './packageData';
import { Button } from '@/components/ui/Button';
import { Check, X, Star, ArrowLeft, ArrowRight } from 'lucide-react';

export default function PackageComparison() {
  const shouldReduceMotion = useReducedMotion();

  // Extract all unique features for comparison
  const allFeatures: { category: string; items: string[] }[] = [];

  packages[0].features.forEach((category) => {
    const categoryItems = category.items.map((item) => item.name);
    allFeatures.push({ category: category.category, items: categoryItems });
  });

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <section className="bg-white py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black text-navy mb-4">
              Sammenlign pakker
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-warmgray max-w-3xl mx-auto">
              Se alle detaljer og funktioner side om side
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-8 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Desktop Table */}
          <motion.div
            className="hidden lg:block bg-white rounded-3xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-navy to-navy/90 text-white">
                  <th className="px-8 py-12 text-left w-1/4">
                    <span className="text-sm font-medium uppercase tracking-wider opacity-80">
                      Funktioner
                    </span>
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} className="px-8 py-12 text-center relative">
                      {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <div className="bg-gold text-navy px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            MEST POPULÆR
                          </div>
                        </div>
                      )}
                      <div className="space-y-3">
                        <h3 className="font-display font-bold text-2xl">{pkg.name}</h3>
                        <div className="text-3xl font-black">{pkg.priceFormatted} DKK</div>
                        <div className="text-xs uppercase tracking-wider opacity-80">
                          {pkg.duration}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <tr className="bg-offwhite">
                      <td
                        colSpan={4}
                        className="px-8 py-4 font-display font-bold text-navy text-lg"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((featureName, itemIndex) => (
                      <motion.tr
                        key={`${catIndex}-${itemIndex}`}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: shouldReduceMotion ? 0 : (catIndex * 0.1 + itemIndex * 0.02),
                        }}
                      >
                        <td className="px-8 py-4 text-navy font-medium">{featureName}</td>
                        {packages.map((pkg) => {
                          const feature = pkg.features
                            .find((cat) => cat.category === category.category)
                            ?.items.find((item) => item.name === featureName);

                          return (
                            <td
                              key={pkg.id}
                              className={`px-8 py-4 text-center ${
                                pkg.popular ? 'bg-gold/5' : ''
                              }`}
                            >
                              {renderFeatureValue(feature?.included)}
                            </td>
                          );
                        })}
                      </motion.tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gradient-to-r from-navy to-navy/90 text-white">
                  <td className="px-8 py-8"></td>
                  {packages.map((pkg) => (
                    <td key={pkg.id} className="px-8 py-8 text-center">
                      <Button
                        href={`/packages/${pkg.slug}`}
                        variant={pkg.popular ? 'secondary' : 'outline'}
                        size="md"
                        className={`inline-flex items-center space-x-2 ${
                          pkg.popular ? '' : 'border-white text-white hover:bg-white hover:text-navy'
                        }`}
                      >
                        <span>Se detaljer</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </motion.div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className={`bg-white rounded-2xl overflow-hidden ${
                  pkg.popular ? 'ring-2 ring-gold' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Package Header */}
                <div className={`p-5 sm:p-6 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-gold to-gold-light text-navy'
                    : 'bg-navy text-white'
                }`}>
                  {pkg.popular && (
                    <div className="flex items-center space-x-1 mb-2">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Mest Populær
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl sm:text-3xl font-black mb-1">{pkg.priceFormatted} DKK</div>
                  <div className="text-sm opacity-80">{pkg.duration}</div>
                </div>

                {/* Features List */}
                <div className="p-6 space-y-6">
                  {pkg.features.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h4 className="font-semibold text-navy mb-3">{category.category}</h4>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start space-x-3">
                            {renderFeatureIcon(item.included)}
                            <span className={`text-sm ${
                              typeof item.included === 'boolean' && !item.included
                                ? 'text-gray-400 line-through'
                                : 'text-navy'
                            }`}>
                              {item.name}
                              {typeof item.included === 'string' && (
                                <span className="ml-1 font-semibold text-gold">
                                  ({item.included})
                                </span>
                              )}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="p-6 border-t">
                  <Button
                    href={`/packages/${pkg.slug}`}
                    variant={pkg.popular ? 'primary' : 'outline'}
                    size="md"
                    fullWidth
                    className="inline-flex items-center justify-center space-x-2"
                  >
                    <span>Se alle detaljer</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-navy mb-4">
              Klar til at komme i gang?
            </h2>
            <p className="text-lg text-warmgray mb-8 max-w-2xl mx-auto">
              Book et uforpligtende møde og lad os tale om din vision
            </p>
            <Button
              href="/kontakt"
              variant="primary"
              size="lg"
              className="inline-flex items-center space-x-2"
            >
              <span>Book møde nu</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper function to render feature values in table
function renderFeatureValue(value: boolean | string | undefined) {
  if (value === undefined) {
    return <X className="w-5 h-5 text-gray-300 mx-auto" />;
  }

  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-green-600 mx-auto" strokeWidth={2.5} />
    ) : (
      <X className="w-5 h-5 text-gray-300 mx-auto" />
    );
  }

  return <span className="text-sm font-semibold text-navy">{value}</span>;
}

// Helper function to render feature icons in mobile cards
function renderFeatureIcon(value: boolean | string | undefined) {
  if (value === undefined) {
    return <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />;
  }

  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
    ) : (
      <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
    );
  }

  return <div className="w-5 h-5 bg-gold rounded-full flex-shrink-0 mt-0.5" />;
}