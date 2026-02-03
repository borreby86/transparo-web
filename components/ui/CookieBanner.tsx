'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Cookie, X } from 'lucide-react'
import { getCookieConsent, setCookieConsent, hasConsentDecision } from '@/lib/cookieConsent'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Check if user has already made a decision
    const hasDecision = hasConsentDecision()

    // Show banner if no decision has been made
    if (!hasDecision) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    setCookieConsent('accepted')
    closeBanner()
  }

  const handleReject = () => {
    setCookieConsent('rejected')
    closeBanner()
  }

  const closeBanner = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowBanner(false)
      setIsClosing(false)
    }, 300)
  }

  const t = useTranslations('cookie')

  if (!showBanner) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50">
            <div className="relative p-6 sm:p-8">
              {/* Close button */}
              <button
                onClick={closeBanner}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label={t('closeLabel')}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Icon and Text */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-gold" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-navy mb-2">
                      {t('title')}
                    </h3>
                    <p className="text-sm sm:text-base text-black/70 leading-relaxed">
                      {t('description')}{' '}
                      <Link
                        href="/cookiepolitik"
                        className="text-gold hover:underline font-semibold"
                      >
                        {t('learnMore')}
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <button
                    onClick={handleReject}
                    className="px-6 py-3 bg-white border-2 border-gray-300 text-navy rounded-lg font-semibold hover:bg-gray-50 transition-all text-sm sm:text-base whitespace-nowrap"
                  >
                    {t('rejectButton')}
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-navy/90 transition-all text-sm sm:text-base whitespace-nowrap shadow-lg hover:shadow-xl"
                  >
                    {t('acceptButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
