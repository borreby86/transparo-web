'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTranslations } from 'next-intl'
import { X, Plus, Trash2 } from 'lucide-react'
import { useDesignProposal } from './DesignProposalContext'

export function DesignProposalModal() {
  const { isOpen, close } = useDesignProposal()
  const t = useTranslations('designProposal')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  })
  const [inspirationLinks, setInspirationLinks] = useState<string[]>([])
  const [newLink, setNewLink] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleAddLink = () => {
    const trimmed = newLink.trim()
    if (trimmed) {
      setInspirationLinks([...inspirationLinks, trimmed])
      setNewLink('')
    }
  }

  const handleRemoveLink = (index: number) => {
    setInspirationLinks(inspirationLinks.filter((_, i) => i !== index))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      if (newLink.trim()) {
        handleAddLink()
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('🚀 FORM SUBMIT CALLED!')
    e.preventDefault()
    console.log('🚀 preventDefault called')

    // Prepare form data for Web3Forms
    const formPayload = {
      access_key: '5312479b-25c1-44de-8d43-e410e99f6aa0',
      subject: 'Ny anmodning om gratis forsidedesign',
      from_name: formData.name,
      name: formData.name,
      email: formData.email,
      website: formData.website || 'Ingen website angivet',
      inspiration_links: inspirationLinks.length > 0 ? inspirationLinks.join('\n') : 'Ingen inspirationslinks',
      message: formData.message || 'Ingen besked',
    }

    console.log('Sending form data:', formPayload)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      })

      const result = await response.json()
      console.log('Web3Forms response:', result)

      if (response.ok && result.success) {
        console.log('Form submitted successfully!')
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          close()
          setFormData({ name: '', email: '', website: '', message: '' })
          setInspirationLinks([])
          setNewLink('')
        }, 3000)
      } else {
        console.error('Form submission failed:', result)
        alert(`Fejl: ${result.message || 'Prøv venligst igen'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Der opstod en fejl. Prøv venligst igen.')
    }
  }

  const handleClose = () => {
    close()
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', website: '', message: '' })
      setInspirationLinks([])
      setNewLink('')
    }, 500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[54] bg-black/40"
            onClick={handleClose}
          />

          {/* Panel — slides in from right, matches booking panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed top-0 right-0 h-screen w-full max-w-lg lg:mr-16 xl:mr-20 z-[55] bg-black text-white overflow-y-auto"
          >
            <div className="p-10 md:p-14 min-h-full flex flex-col justify-center">
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                {t('heading')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                {t('subheading')}
                <br />
                <span className="text-white/40">{t('subheadingFaded')}</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-10">
                {t('description')}
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-3">{t('thankYouTitle')}</h3>
                  <p className="text-white/40 text-sm">{t('thankYouMessage')}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                      {t('nameLabel')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                      placeholder={t('namePlaceholder')}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                      {t('emailLabel')}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                      placeholder={t('emailPlaceholder')}
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                      {t('websiteLabel')}
                    </label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                      placeholder={t('websitePlaceholder')}
                    />
                  </div>

                  {/* Inspiration Links */}
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                      {t('inspirationLabel')}
                    </label>

                    {/* Existing links */}
                    {inspirationLinks.length > 0 && (
                      <div className="space-y-2 mb-3">
                        {inspirationLinks.map((link, index) => (
                          <div key={index} className="flex items-center gap-2 group">
                            <span className="text-sm text-white/60 truncate flex-1">{link}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveLink(index)}
                              className="text-white/20 hover:text-red-400 transition-colors flex-shrink-0"
                              aria-label="Remove link"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add new link */}
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={newLink}
                        onChange={(e) => setNewLink(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder={t('inspirationPlaceholder')}
                      />
                      <button
                        type="button"
                        onClick={handleAddLink}
                        disabled={!newLink.trim()}
                        className="text-gold hover:text-gold-light transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                        aria-label={t('inspirationAdd')}
                      >
                        <Plus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                      {t('messageLabel')}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 resize-none placeholder:text-white/20"
                      placeholder={t('messagePlaceholder')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-gold text-black py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold/90 transition-colors duration-300 mt-4"
                  >
                    {t('submitButton')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
