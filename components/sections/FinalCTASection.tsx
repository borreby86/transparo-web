'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export function FinalCTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative bg-gradient-to-b from-navy-dark via-navy to-black py-40 md:py-56 lg:py-64 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left - Typography & Stats */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.05] mb-8">
              Du Drømmer,
              <br />
              <span className="font-bold italic text-white">Vi Bygger</span>
            </h2>

            {/* Quick connect */}
            <p className="text-white/60 text-base mb-5">Kontakt os hurtigt via:</p>
            <div className="flex gap-4 mb-16">
              <a href="tel:+4512345678" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </a>
              <a href="mailto:kontakt@transparo.dk" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 lg:gap-10">
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold">100+</div>
                <div className="text-white/60 text-base mt-2">Projekter<br />Leveret</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold">50+</div>
                <div className="text-white/60 text-base mt-2">Glade<br />Kunder</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold">92%</div>
                <div className="text-white/60 text-base mt-2">Kunde<br />Fastholdelse</div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gold">7+</div>
                <div className="text-white/60 text-base mt-2">Års<br />Partnerskab</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-10 md:p-12 lg:p-14 shadow-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3">
                Har du visionen? <span className="font-normal text-black/60">Vi har ekspertisen.</span>
              </h3>
              <p className="text-black/50 text-base md:text-lg mb-10">
                Fortæl os lidt om dig selv og hvad du har i tankerne.
              </p>

              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Dit fulde navn"
                    className="w-full px-0 py-4 border-b-2 border-black/20 focus:border-gold bg-transparent text-black text-lg placeholder:text-black/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Dit telefonnummer"
                    className="w-full px-0 py-4 border-b-2 border-black/20 focus:border-gold bg-transparent text-black text-lg placeholder:text-black/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Din email"
                    className="w-full px-0 py-4 border-b-2 border-black/20 focus:border-gold bg-transparent text-black text-lg placeholder:text-black/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Fortæl os lidt om din vision..."
                    rows={4}
                    className="w-full px-0 py-4 border-b-2 border-black/20 focus:border-gold bg-transparent text-black text-lg placeholder:text-black/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-black/90 text-white font-bold py-5 px-8 rounded-full flex items-center justify-center gap-3 text-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  SEND
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
