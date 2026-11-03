'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { setCookieConsent, hasConsentDecision } from '@/lib/cookieConsent'

// Diskret bjælke nederst: ét klik, og den er væk. Ingen flydende knap oven på indholdet.
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
          role="region"
          aria-label="Cookies"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed z-[70] left-3 right-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-[420px]"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 bg-white text-black border border-black/10 rounded-xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)] px-4 py-3">
            <p className="flex-1 min-w-[180px] text-[13px] leading-snug text-black/70">
              {t('description')}{' '}
              <Link href="/cookiepolitik" className="text-black underline underline-offset-2 hover:text-gold-dark">
                {t('learnMore')}
              </Link>
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={() => handleConsent('rejected')}
                className="px-3.5 py-2 text-[13px] font-medium text-black/70 hover:text-black rounded-lg border border-black/15 hover:border-black/30 transition-colors"
              >
                {t('rejectButton')}
              </button>
              <button
                type="button"
                onClick={() => handleConsent('accepted')}
                className="px-3.5 py-2 text-[13px] font-semibold text-white bg-black hover:bg-gold hover:text-black rounded-lg transition-colors"
              >
                {t('acceptButton')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
