'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Forside', href: '/' },
    { name: 'Pakker', href: '/pakker' },
    { name: 'Sådan Virker Det', href: '/proces' },
    { name: 'Om Os', href: '/om-os' },
    { name: 'Kontakt', href: '/kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-warmgray-light/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="font-display font-bold text-2xl text-navy">
              transparo<span className="text-gold">.</span>
            </div>
            <div className="text-[10px] text-warmgray tracking-wide -mt-1">
              Unique designs • Built on trust
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-black hover:text-navy transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Button href="/kontakt" variant="primary" size="sm">
              Book Møde
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-navy hover:bg-offwhite rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-warmgray-light/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-black hover:text-navy transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button href="/kontakt" variant="primary" size="md" fullWidth>
                Book Møde
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
