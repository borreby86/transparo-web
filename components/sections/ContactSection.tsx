'use client'

import { motion } from 'motion/react'
import { Mail, Phone, MapPin, ArrowRight, Linkedin } from 'lucide-react'
import { useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const dur = shouldReduceMotion ? 0 : 0.6
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-black px-6 md:px-12 pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: dur }}
          >
            <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-6 block">
              Kontakt
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] tracking-tight mb-6">
              Lad os tale.
            </h1>
            <p className="text-white/40 text-lg md:text-xl max-w-xl leading-relaxed">
              Send os en besked eller ring direkte. Vi svarer inden for 24 timer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-28">

            {/* Left: Contact info */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.1 }}
            >
              <div className="space-y-10 mb-16">
                <div>
                  <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                    Email
                  </span>
                  <a
                    href="mailto:kontakt@transparo.dk"
                    className="text-2xl md:text-3xl font-bold text-black hover:text-gold transition-colors duration-300"
                  >
                    kontakt@transparo.dk
                  </a>
                </div>

                <div>
                  <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                    Telefon
                  </span>
                  <a
                    href="tel:+4522471247"
                    className="text-2xl md:text-3xl font-bold text-black hover:text-gold transition-colors duration-300"
                  >
                    +45 22 47 12 47
                  </a>
                </div>

                <div>
                  <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                    Lokation
                  </span>
                  <p className="text-2xl md:text-3xl font-bold text-black">
                    Hørsholm, Danmark
                  </p>
                </div>
              </div>

              <div className="border-t border-black/[0.06] pt-10">
                <p className="text-black/40 text-sm leading-relaxed max-w-md">
                  Vi er et lille team, så du taler altid direkte med dem der bygger dit website. Ingen mellemled, ingen ventetid.
                </p>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-start justify-center h-full">
                  <div className="w-12 h-[2px] bg-gold mb-8" />
                  <h3 className="text-3xl font-bold text-black mb-4">Tak for din besked</h3>
                  <p className="text-black/40 text-lg">Vi vender tilbage hurtigst muligt.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="text-black/40 text-xs uppercase tracking-[0.15em] block mb-3">
                      Navn *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-black/10 focus:border-gold text-black py-3 text-lg outline-none transition-colors duration-300 placeholder:text-black/20"
                      placeholder="Dit fulde navn"
                    />
                  </div>

                  <div>
                    <label className="text-black/40 text-xs uppercase tracking-[0.15em] block mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-black/10 focus:border-gold text-black py-3 text-lg outline-none transition-colors duration-300 placeholder:text-black/20"
                      placeholder="din@email.dk"
                    />
                  </div>

                  <div>
                    <label className="text-black/40 text-xs uppercase tracking-[0.15em] block mb-3">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-black/10 focus:border-gold text-black py-3 text-lg outline-none transition-colors duration-300 placeholder:text-black/20"
                      placeholder="+45 00 00 00 00"
                    />
                  </div>

                  <div>
                    <label className="text-black/40 text-xs uppercase tracking-[0.15em] block mb-3">
                      Besked *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-black/10 focus:border-gold text-black py-3 text-lg outline-none transition-colors duration-300 resize-none placeholder:text-black/20"
                      placeholder="Fortæl kort om dit projekt..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-600 text-sm">Der skete en fejl. Prøv venligst igen.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold text-sm uppercase tracking-[0.15em] hover:bg-black/80 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sender...' : 'Send besked'}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-black/30 text-xs">
                    Ved at indsende accepterer du vores{' '}
                    <a href="/privatlivspolitik" className="text-gold hover:underline">
                      privatlivspolitik
                    </a>
                    .
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
      {/* Bottom bar */}
      <div className="px-6 md:px-12 py-8 border-t border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <p className="text-black/30 text-xs">
            © {new Date().getFullYear()} Transparo. Alle rettigheder forbeholdes.
          </p>
          <a
            href="https://www.linkedin.com/company/transparo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/30 hover:text-gold transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
