'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useTranslations } from 'next-intl'
import { X, Send } from 'lucide-react'
import { useDesignProposal } from './DesignProposalContext'

export function DesignProposalModal() {
  const { isOpen, close } = useDesignProposal()
  const shouldReduceMotion = useReducedMotion()
  const t = useTranslations('designProposal')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    close()
    // Reset form after animation
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', website: '', message: '' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4 text-black/60" />
            </button>

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-navy">
                  {t('modalTitle')}
                </h2>
                <p className="text-black/50 mt-1">
                  {t('modalSubtitle')}
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mx-auto mb-5">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{t('successTitle')}</h3>
                  <p className="text-black/60">{t('successMessage')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="dp-name" className="block text-sm font-medium text-navy mb-1">
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      id="dp-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('namePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="dp-email" className="block text-sm font-medium text-navy mb-1">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      id="dp-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('emailPlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="dp-website" className="block text-sm font-medium text-navy mb-1">
                      {t('websiteLabel')}
                    </label>
                    <input
                      type="text"
                      id="dp-website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder={t('websitePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="dp-message" className="block text-sm font-medium text-navy mb-1">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      id="dp-message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('messagePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="w-full py-4 bg-navy text-white font-semibold text-lg hover:bg-navy/90 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? t('submitting') : t('submitButton')}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
