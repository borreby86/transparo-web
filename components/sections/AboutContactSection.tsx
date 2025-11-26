'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useState } from 'react'
import { Send, Mail, MapPin } from 'lucide-react'

export function AboutContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="relative py-32 md:py-48 bg-offwhite overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-navy blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - About */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
              Om Os
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
              Bag om Transparo
            </h2>

            <div className="space-y-6 text-lg text-black/70 leading-relaxed">
              <p>
                Vi er et nystartet bureau med en klar mission: at skabe <span className="text-navy font-semibold">transparens og troværdighed</span> i en branche, der alt for ofte ikke er til gavn for kunden.
              </p>

              <p>
                Vi tror på, at et godt samarbejde starter med ærlighed. Derfor får du altid klare aftaler, faste priser og et dedikeret team, der lytter til dine behov.
              </p>

              <p>
                Dit website er dit ansigt udadtil — vi sørger for, at det afspejler din ambition.
              </p>
            </div>

            {/* Contact info */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 text-black/60">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <span>kontakt@transparo.dk</span>
              </div>
              <div className="flex items-center gap-4 text-black/60">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <span>Danmark</span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-black/5">
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-2">
                Lad os tale
              </h3>
              <p className="text-black/60 mb-8">
                Fortæl os om dit projekt — vi vender tilbage inden for 24 timer.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-2">Tak for din besked!</h4>
                  <p className="text-black/60">Vi vender tilbage hurtigst muligt.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-2">
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-offwhite focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="Dit navn"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-offwhite focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="din@email.dk"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black/70 mb-2">
                      Virksomhed
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-offwhite focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      placeholder="Din virksomhed (valgfrit)"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-2">
                      Besked *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-offwhite focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all resize-none"
                      placeholder="Fortæl os om dit projekt..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="w-full py-4 bg-navy text-white rounded-xl font-bold text-lg hover:bg-navy-dark transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sender...</span>
                    ) : (
                      <>
                        <span>Send besked</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
