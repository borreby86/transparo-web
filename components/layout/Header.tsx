'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'

const navigation = [
  { number: '01', name: 'Forside', href: '/' },
  { number: '02', name: 'Portfolio', href: '/cases' },
  { number: '03', name: 'Prisberegner', href: '/prisberegner' },
  { number: '04', name: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const pathname = usePathname()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setBookingOpen(false)
      setFormState({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <>
      {/* Left sidebar — menu toggle */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-16 xl:w-20 z-[60] flex-col items-center justify-between py-8 bg-white border-r border-black/[0.06]">
        <Link href="/" className="font-sans font-black text-lg text-black tracking-tight hover:opacity-80 transition-opacity">
          t<span className="text-gold">.</span>
        </Link>

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

        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/30 [writing-mode:vertical-lr] rotate-180 whitespace-nowrap select-none">
          Menu
        </span>
      </aside>

      {/* Right sidebar — book møde */}
      <aside className="hidden lg:flex fixed top-0 right-0 h-screen w-16 xl:w-20 z-[60] flex-col items-center justify-between py-8 bg-black border-l border-white/[0.06]">
        <button
          onClick={() => { setBookingOpen(!bookingOpen); setMenuOpen(false) }}
          className="flex flex-col items-center gap-4 group"
          aria-label="Toggle booking"
        >
          <span className="text-xs font-black uppercase tracking-[0.3em] text-gold group-hover:text-white transition-colors duration-300 [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
            Book Møde
          </span>
          {bookingOpen ? (
            <X className="w-5 h-5 text-white" strokeWidth={1.5} />
          ) : (
            <ArrowRight className="w-4 h-4 text-gold rotate-180 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
          )}
        </button>

        <div />
        <div />
      </aside>

      {/* Mobile: Top header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[60] bg-white border-b border-black/[0.06]">
        <div className="flex items-center justify-between h-16 px-5">
          <Link href="/" className="font-sans font-black text-xl text-black tracking-tight">
            transparo<span className="text-gold">.</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full"
              onClick={() => { setBookingOpen(!bookingOpen); setMenuOpen(false) }}
            >
              Book
            </button>
            <button
              type="button"
              className="p-2 text-black"
              onClick={() => { setMenuOpen(!menuOpen); setBookingOpen(false) }}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6" strokeWidth={2} />
              )}
            </button>
          </div>
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
            className="fixed inset-0 z-[55] bg-white lg:pl-16 xl:pl-20 lg:pr-16 xl:pr-20"
          >
            <div className="h-full flex flex-col justify-center px-10 md:px-20 lg:px-28 pt-16 lg:pt-0">
              <nav className="space-y-2">
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
                      className={`group block py-4 ${
                        pathname === item.href ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                      } transition-opacity duration-300`}
                    >
                      <span className="text-gold text-xs font-medium tracking-[0.2em] block mb-2">
                        {item.number}
                      </span>
                      <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight block">
                        {item.name}
                      </span>
                      <div className="w-full h-px bg-black/10 mt-4 group-hover:bg-gold transition-colors duration-500" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="absolute bottom-8 left-10 md:left-20 lg:left-28 right-10 md:right-20 flex justify-between items-center"
              >
                <span className="text-black/30 text-xs tracking-wider">
                  kontakt@transparo.dk
                </span>
                <span className="text-black/30 text-xs tracking-wider">
                  © {new Date().getFullYear()} Transparo
                </span>
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
              className="fixed inset-0 z-[54] bg-black/40"
              onClick={() => setBookingOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-0 right-0 h-screen w-full max-w-lg lg:mr-16 xl:mr-20 z-[55] bg-black text-white overflow-y-auto"
            >
              <div className="p-10 md:p-14 min-h-full flex flex-col justify-center">
                <span className="text-gold text-xs font-medium uppercase tracking-[0.2em] mb-4 block">
                  Book et møde
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Lad os tale om
                  <br />
                  <span className="text-white/40">dit projekt.</span>
                </h2>
                <p className="text-white/40 text-sm leading-relaxed mb-10">
                  Udfyld formularen, så vender vi tilbage inden for 24 timer.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                  >
                    <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Tak for din henvendelse</h3>
                    <p className="text-white/40 text-sm">Vi vender tilbage hurtigst muligt.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        Navn
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder="Dit fulde navn"
                      />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder="din@email.dk"
                      />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 placeholder:text-white/20"
                        placeholder="+45 00 00 00 00"
                      />
                    </div>

                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-[0.15em] block mb-2">
                        Besked
                      </label>
                      <textarea
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-gold text-white py-3 text-sm outline-none transition-colors duration-300 resize-none placeholder:text-white/20"
                        placeholder="Fortæl kort om dit projekt..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold text-black py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold/90 transition-colors duration-300 mt-4"
                    >
                      Send henvendelse
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
