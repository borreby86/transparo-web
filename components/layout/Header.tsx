'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Forside', href: '/' },
    { name: 'Pakker', href: '/pakker' },
    { name: 'Sådan Virker Det', href: '/proces' },
    { name: 'Portfolio', href: '/cases' },
    { name: 'Om Os', href: '/om-os' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ backgroundColor: isVisible ? 'rgba(255, 255, 255, 0.8)' : 'transparent' }}
    >
      <nav className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 backdrop-blur-md">
        <div className="flex items-center justify-center h-20 relative">
          {/* Logo */}
          <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 xl:left-28">
            <Link href="/" className="font-sans font-black text-xl sm:text-2xl text-black tracking-tight hover:opacity-80 transition-opacity">
              transparo<span className="text-gold">.</span>
            </Link>
          </div>

          {/* Desktop Navigation - Spread out centered */}
          <div className="hidden lg:flex items-center justify-center gap-12 xl:gap-16">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-bold text-black/60 hover:text-black transition-colors duration-300 uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}

            {/* Spacer for visual balance */}
            <div className="w-24" />

            {navigation.slice(3).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-bold text-black/60 hover:text-black transition-colors duration-300 uppercase tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right side */}
          <Link
            href="/kontakt"
            className="hidden lg:block absolute right-6 sm:right-12 md:right-16 lg:right-24 xl:right-32 bg-black text-white px-6 py-2.5 rounded-full font-bold text-xs hover:bg-black/80 transition-all uppercase tracking-wider"
          >
            Book Møde
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden absolute right-6 p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={2.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-8 pt-4">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-black uppercase tracking-wide"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-navy text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-navy/90 transition-all mt-4"
              >
                Book Møde
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
