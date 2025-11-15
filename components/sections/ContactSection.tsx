'use client'

import { Section } from '@/components/ui/Section'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react'
import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    package: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        package: '',
        message: '',
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'kontakt@transparo.dk',
      href: 'mailto:kontakt@transparo.dk',
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+45 12 34 56 78',
      href: 'tel:+4512345678',
    },
    {
      icon: MapPin,
      title: 'Lokation',
      content: 'København, Danmark',
      href: null,
    },
  ]

  return (
    <Section id="kontakt" background="white" spacing="xl">
      {/* Hero */}
      <div className="text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy mb-6">
            Kontakt <span className="text-gold">Os</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/70 max-w-3xl mx-auto leading-relaxed">
            Klar til at komme i gang? Book et uforpligtende discovery call eller send os en besked.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-navy mb-6">
                Lad os tage en snak
              </h2>
              <p className="text-lg text-black/70 mb-8">
                Vi svarer typisk inden for 24 timer på hverdage. Har du brug for hurtigere svar?
                Ring til os direkte.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-black/70 hover:text-gold transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-black/70">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Booking CTA */}
            <motion.div
              className="bg-offwhite rounded-xl p-6 mt-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="flex items-start space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy mb-2">Book et møde</h3>
                  <p className="text-sm text-black/70 mb-4">
                    Foretræk at tale med os direkte? Book et discovery call der passer dig.
                  </p>
                  <a
                    href="https://calendly.com/transparo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-all text-sm"
                  >
                    Se ledige tider
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Dit fulde navn"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="din@email.dk"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="+45 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                    Virksomhed
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="Din virksomhed"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-semibold text-navy mb-2">
                  Interesseret i pakke
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                >
                  <option value="">Vælg en pakke</option>
                  <option value="essentials">Essentials (8.995 DKK)</option>
                  <option value="professional">Professional (16.995 DKK)</option>
                  <option value="business">Business (27.995 DKK)</option>
                  <option value="custom">Custom løsning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Besked *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  placeholder="Fortæl os om dit projekt..."
                />
              </div>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Tak for din besked! Vi vender tilbage hurtigst muligt.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Der skete en fejl. Prøv venligst igen.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'submitting' ? (
                  <span>Sender...</span>
                ) : (
                  <>
                    <span>Send Besked</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-black/60 text-center">
                Ved at indsende denne formular accepterer du vores{' '}
                <a href="/privatlivspolitik" className="text-gold hover:underline">
                  privatlivspolitik
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
