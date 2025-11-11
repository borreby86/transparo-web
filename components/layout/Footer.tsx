import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="font-display font-bold text-2xl mb-2">
              transparo<span className="text-gold">.</span>
            </div>
            <p className="text-sm text-warmgray-light mb-4">
              Unique designs • Built on trust
            </p>
            <p className="text-offwhite/80 text-sm max-w-md">
              Professionelt webdesign til danske små virksomheder. Fast pris,
              hurtig levering, og ingen scope creep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Hurtige Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pakker"
                  className="text-offwhite/80 hover:text-gold transition-colors text-sm"
                >
                  Pakker & Priser
                </Link>
              </li>
              <li>
                <Link
                  href="/proces"
                  className="text-offwhite/80 hover:text-gold transition-colors text-sm"
                >
                  Sådan Virker Det
                </Link>
              </li>
              <li>
                <Link
                  href="/om-os"
                  className="text-offwhite/80 hover:text-gold transition-colors text-sm"
                >
                  Om Os
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-offwhite/80 hover:text-gold transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:kontakt@transparo.dk"
                  className="text-offwhite/80 hover:text-gold transition-colors text-sm"
                >
                  kontakt@transparo.dk
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+4512345678"
                  className="text-offwhite/80 hover:text-gold transition-colors text-sm"
                >
                  +45 12 34 56 78
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-offwhite/80 text-sm">
                  København, Danmark
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-offwhite/60 text-sm">
            © {currentYear} Transparo. Alle rettigheder forbeholdes.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privatlivspolitik"
              className="text-offwhite/60 hover:text-gold transition-colors text-sm"
            >
              Privatlivspolitik
            </Link>
            <Link
              href="/handelsbetingelser"
              className="text-offwhite/60 hover:text-gold transition-colors text-sm"
            >
              Handelsbetingelser
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
