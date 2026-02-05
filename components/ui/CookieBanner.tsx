'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { getCookieConsent, setCookieConsent, hasConsentDecision } from '@/lib/cookieConsent'
import { Check, X } from 'lucide-react'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 lg:bottom-10 lg:left-24 xl:left-28 z-[70]"
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              // Collapsed: Cookie circle
              <motion.button
                key="collapsed"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsExpanded(true)}
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-amber-100 shadow-2xl flex flex-col items-center justify-center gap-1 cursor-pointer border-4 border-amber-200 hover:border-amber-300 transition-colors"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #fef3c7, #fde68a, #d97706)',
                }}
              >
                <span className="text-3xl lg:text-4xl" role="img" aria-label="cookie">🍪</span>
              </motion.button>
            ) : (
              // Expanded: Options panel
              <motion.div
                key="expanded"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-black rounded-3xl p-6 shadow-2xl min-w-[280px]"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">🍪</span>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Cookies?</h3>
                    <p className="text-white/50 text-xs leading-relaxed">
                      {t('description')}{' '}
                      <Link
                        href="/cookiepolitik"
                        className="text-gold underline underline-offset-2 hover:text-gold/80 transition-colors"
                      >
                        {t('learnMore')}
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleConsent('rejected')}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full text-white/60 hover:text-white border border-white/15 hover:border-white/30 text-xs font-medium uppercase tracking-wider transition-all duration-300"
                  >
                    <X className="w-3.5 h-3.5" />
                    {t('rejectButton')}
                  </button>
                  <button
                    onClick={() => handleConsent('accepted')}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gold text-black text-xs font-medium uppercase tracking-wider hover:bg-gold/90 transition-all duration-300"
                  >
                    <Check className="w-3.5 h-3.5" />
                    {t('acceptButton')}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
