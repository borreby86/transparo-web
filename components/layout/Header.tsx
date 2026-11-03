'use client'

import { Link } from '@/i18n/routing'
import { useState, useEffect } from 'react'
import { usePathname } from '@/i18n/routing'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useDesignProposal } from '@/components/ui/DesignProposalContext'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const { open: openDesignProposal } = useDesignProposal()
  const pathname = usePathname()

  const t = useTranslations('nav')
  const tBooking = useTranslations('booking')

  const navigation = [
    { number: '01', name: t('items.0.name'), href: '/' as const },
    { number: '02', name: t('items.1.name'), href: '/cases' as const },
    { number: '03', name: t('about'), href: '/om-os' as const },
    { number: '04', name: t('items.3.name'), href: '/kontakt' as const },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formPayload = {
      access_key: '5312479b-25c1-44de-8d43-e410e99f6aa0',
      subject: 'Ny booking anmodning',
      from_name: formState.name,
      name: formState.name,
      email: formState.email,
      phone: formState.phone || 'Ikke angivet',
      message: formState.message || 'Ingen besked',
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setBookingOpen(false)
          setFormState({ name: '', email: '', phone: '', message: '' })
        }, 3000)
      } else {
        alert('Der opstod en fejl. Prøv venligst igen.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Der opstod en fejl. Prøv venligst igen.')
    }
  }

  return (
    <>
      {/* Left sidebar — menu toggle */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-16 xl:w-20 z-[60] flex-col items-center justify-between py-8 bg-white border-r border-black/[0.06]">
        <Link href="/" className="font-sans font-black text-lg text-black tracking-tight hover:opacity-80 transition-opacity">
          t<span className="text-gold">.</span>
        </Link>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={() => { setMenuOpen(!menuOpen); setBookingOpen(false) }}
            className="text-black hover:text-gold transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>

        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/30 [writing-mode:vertical-lr] rotate-180 whitespace-nowrap select-none">
          {t('menuLabel')}
        </span>
      </aside>


      {/* Mobile: Top header - Minimalist */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-white border-b border-black/[0.06]">
        <div className="flex items-center justify-between h-16 px-6">
          <Link href="/" className="font-sans font-black text-xl text-black tracking-tight">
            transparo<span className="text-gold">.</span>
          </Link>

          <button
            type="button"
            className="p-2 text-black hover:text-gold transition-colors"
            onClick={() => { setMenuOpen(!menuOpen); setBookingOpen(false) }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-7 w-7" strokeWidth={2} />
            ) : (
              <Menu className="h-7 w-7" strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-white lg:pl-16 xl:pl-20"
          >
            <div className="h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 pt-16 lg:pt-0">
              <nav className="space-y-1 max-w-md">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex items-baseline gap-5 py-3 ${
                        pathname === item.href ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                      } transition-opacity duration-300`}
                    >
                      <span className="text-gold text-[11px] font-medium tracking-[0.2em] w-6 shrink-0">
                        {item.number}
                      </span>
                      <span className="text-xl md:text-2xl font-light text-black tracking-wide group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="flex flex-wrap gap-3 mt-10"
              >
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); openDesignProposal() }}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-sm font-semibold hover:bg-gold hover:text-black transition-colors"
                >
                  {t('ctaProposal')}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => { setMenuOpen(false); setBookingOpen(true) }}
                  className="inline-flex items-center gap-2 border border-black/20 text-black px-6 py-3.5 text-sm font-semibold hover:border-black transition-colors"
                >
                  {t('ctaBooking')}
                </button>
              </motion.div>

              {/* Footer info - Simple */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute bottom-8 left-10 md:left-20 lg:left-28 right-10 md:right-20 flex justify-between items-center"
              >
                <span className="text-black/30 text-xs tracking-wider">
                  kontakt@transparo.dk
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-black/30 text-xs tracking-wider">
                    © {new Date().getFullYear()}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking panel — slides in from right */}
      <AnimatePresence>
        {bookingOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[65] bg-black/40"
              onClick={() => setBookingOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.25,
                ease: [0.32, 0.72, 0, 1]
              }}
              className="fixed z-[70] bg-black text-white overflow-y-auto"
              style={{
                top: 0,
                bottom: 0,
                right: 0,
                width: '100%',
                maxWidth: '500px',
                margin: 0,
                padding: 0,
                willChange: 'transform'
              }}
            >
              <div className="p-10 md:p-14 min-h-full flex flex-col justify-center relative">
                <button
                  onClick={() => setBookingOpen(false)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-3">{tBooking('thankYouTitle')}</h3>
                    <p className="text-white/40 text-sm">{tBooking('thankYouMessage')}</p>
                  </motion.div>
                ) : (
                  <>
                    <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                      {tBooking('heading')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                      {tBooking('subheading')}
                      <br />
                      <span className="text-white/40">{tBooking('subheadingFaded')}</span>
                    </h2>
                    <p className="text-white/40 text-sm leading-relaxed mb-10">
                      {tBooking('description')}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        {tBooking('nameLabel')}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder={tBooking('namePlaceholder')}
                      />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        {tBooking('emailLabel')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder={tBooking('emailPlaceholder')}
                      />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        {tBooking('phoneLabel')}
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder={tBooking('phonePlaceholder')}
                      />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        {tBooking('messageLabel')}
                      </label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 resize-none placeholder:text-white/20"
                        placeholder={tBooking('messagePlaceholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold text-black py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold/90 transition-colors duration-300 mt-4"
                    >
                      {tBooking('submitButton')}
                    </button>
                  </form>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
