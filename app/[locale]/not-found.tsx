'use client'

import { Link } from '@/i18n/routing'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { motion } from 'motion/react'
import { Home, ArrowLeft, Search, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <div className="mb-8">
              <motion.h1
                className="font-display font-black text-[120px] md:text-[180px] lg:text-[240px] text-navy/10 leading-none"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                404
              </motion.h1>
            </div>

            {/* Message */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
                Siden blev ikke fundet
              </h2>
              <p className="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto">
                Ups! Den side du leder efter eksisterer ikke eller er blevet flyttet.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/"
                className="flex items-center justify-center space-x-3 bg-navy text-white px-8 py-4 font-semibold hover:bg-navy/90 transition-all group"
              >
                <Home className="h-5 w-5" />
                <span>Gå til Forsiden</span>
              </Link>

              <Link
                href="/kontakt"
                className="flex items-center justify-center space-x-3 bg-offwhite text-navy px-8 py-4 font-semibold hover:bg-offwhite/80 transition-all border border-gray-200 group"
              >
                <Mail className="h-5 w-5" />
                <span>Kontakt Os</span>
              </Link>
            </motion.div>

            {/* Popular Pages */}
            <motion.div
              className="max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm font-semibold text-black/60 uppercase tracking-wider mb-4">
                Populære Sider
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/proces"
                  className="text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  Sådan Virker Det
                </Link>
                <span className="text-black/20">•</span>
                <Link
                  href="/om-os"
                  className="text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  Om Os
                </Link>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy/5 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
