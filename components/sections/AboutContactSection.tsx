'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useState, useRef } from 'react'
import { Send, ArrowUpRight } from 'lucide-react'

export function AboutContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const textY = useTransform(scrollYProgress, [0, 0.5], ['50px', '0px'])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section ref={containerRef} className="relative overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gold/20 to-transparent blur-[120px]"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-white/5 to-transparent blur-[100px]"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 md:px-12 py-20 md:py-28 lg:py-32">
        {/* Top section - Big Statement */}
        <motion.div
          className="mb-16 md:mb-20 lg:mb-24"
          style={{ y: shouldReduceMotion ? 0 : textY, opacity: shouldReduceMotion ? 1 : opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="text-gold text-sm font-medium uppercase tracking-[0.2em] mb-8 block">
              Kontakt
            </span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
              Fortæl os om{' '}
              <span className="text-white/50">
                dit projekt.
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left - About content with stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* Mission statement */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-gold/0 rounded-full" />
              <div className="pl-8 space-y-4">
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Vi er et dansk webbureau der bygger websites fra bunden. Ingen templates, faste priser og en proces du kan følge med i.
                </p>
                <p className="text-base md:text-lg text-white/50 leading-relaxed">
                  Skriv til os, så tager vi en uforpligtende snak om dit projekt.
                </p>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-4">
              <motion.a
                href="mailto:kontakt@transparo.dk"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-gold hover:border-gold transition-all duration-500"
                whileHover={shouldReduceMotion ? {} : { x: 10 }}
              >
                <div>
                  <span className="block text-sm text-white/50 group-hover:text-black/50 mb-1 transition-colors">Email</span>
                  <span className="text-lg text-white group-hover:text-black font-medium transition-colors">kontakt@transparo.dk</span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/company/transparo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white hover:border-white transition-all duration-500"
                whileHover={shouldReduceMotion ? {} : { x: 10 }}
              >
                <div>
                  <span className="block text-sm text-white/50 group-hover:text-black/50 mb-1 transition-colors">LinkedIn</span>
                  <span className="text-lg text-white group-hover:text-black font-medium transition-colors">Følg vores rejse</span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-black group-hover:rotate-45 transition-all duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: shouldReduceMotion ? 0 : 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Form card with glass effect */}
            <div className="relative rounded-[2rem] bg-white p-6 md:p-8 lg:p-10 shadow-2xl shadow-black/20">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-[2rem]" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                    <Send className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-navy">
                      Fortæl os om dit projekt
                    </h3>
                    <p className="text-black/50 text-sm">Vi svarer inden for 24 timer</p>
                  </div>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                      <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-6">
                      <Send className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-navy mb-3">Tak for din besked</h4>
                    <p className="text-black/60">Vi vender tilbage inden for 24 timer.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <motion.label
                          htmlFor="name"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'name' || formData.name
                              ? 'top-2 text-xs text-gold font-medium'
                              : 'top-4 text-black/40'
                          }`}
                        >
                          Navn *
                        </motion.label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pt-7 pb-3 px-4 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold focus:bg-white transition-all duration-300"
                        />
                      </div>

                      <div className="relative">
                        <motion.label
                          htmlFor="email"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                            focusedField === 'email' || formData.email
                              ? 'top-2 text-xs text-gold font-medium'
                              : 'top-4 text-black/40'
                          }`}
                        >
                          Email *
                        </motion.label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pt-7 pb-3 px-4 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold focus:bg-white transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <motion.label
                        htmlFor="company"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'company' || formData.company
                            ? 'top-2 text-xs text-gold font-medium'
                            : 'top-4 text-black/40'
                        }`}
                      >
                        Virksomhed (valgfrit)
                      </motion.label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pt-7 pb-3 px-4 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold focus:bg-white transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <motion.label
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          focusedField === 'message' || formData.message
                            ? 'top-2 text-xs text-gold font-medium'
                            : 'top-4 text-black/40'
                        }`}
                      >
                        Fortæl os om dit projekt *
                      </motion.label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pt-7 pb-3 px-4 rounded-xl border-2 border-black/10 bg-offwhite/50 focus:outline-none focus:border-gold focus:bg-white transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="group relative w-full py-5 bg-navy text-white rounded-2xl font-bold text-lg overflow-hidden disabled:opacity-70"
                    >
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-gold via-amber-400 to-gold"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '0%' }}
                        transition={{ duration: 0.4 }}
                      />

                      <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors">
                        {isSubmitting ? (
                          <span>Sender...</span>
                        ) : (
                          <>
                            <span>Send besked</span>
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </form>
                )}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  )
}
