'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { getCookieConsent, setCookieConsent, hasConsentDecision } from '@/lib/cookieConsent'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const t = useTranslations('cookie')

  useEffect(() => {
    if (!hasConsentDecision()) {
      const timer = setTimeout(() => setShowBanner(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleConsent = (decision: 'accepted' | 'rejected') => {
    setCookieConsent(decision)
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[70] lg:ml-16 xl:ml-20 lg:mr-16 xl:mr-20"
        >
          <div className="bg-black/90 backdrop-blur-xl border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between gap-6">
              {/* Text */}
              <p className="text-white/50 text-sm">
                {t('description')}{' '}
                <Link
                  href="/cookiepolitik"
                  className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
                >
                  {t('learnMore')}
                </Link>
              </p>

              {/* Buttons — equal prominence */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => handleConsent('rejected')}
                  className="px-5 py-2 text-sm text-white/60 hover:text-white border border-white/15 hover:border-white/30 transition-all duration-300"
                >
                  {t('rejectButton')}
                </button>
                <button
                  onClick={() => handleConsent('accepted')}
                  className="px-5 py-2 text-sm text-black bg-white hover:bg-white/90 font-medium transition-all duration-300"
                >
                  {t('acceptButton')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
