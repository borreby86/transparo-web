'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('footer')

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="font-display font-bold text-2xl mb-2">
              transparo<span className="text-gold">.</span>
            </div>
            <p className="text-sm text-black/50 mb-4">
              {t('tagline')}
            </p>
            <p className="text-black/70 text-sm max-w-md">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t('quickLinksTitle')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/cases"
                  className="text-black/70 hover:text-gold transition-colors text-sm"
                >
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-black/70 hover:text-gold transition-colors text-sm"
                >
                  {t('kontakt')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              {t('contactTitle')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:kontakt@transparo.dk"
                  className="text-black/70 hover:text-gold transition-colors text-sm"
                >
                  kontakt@transparo.dk
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+4522471247"
                  className="text-black/70 hover:text-gold transition-colors text-sm"
                >
                  +45 22 47 12 47
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-black/70 text-sm">
                  {t('location')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-black/50 text-sm">
            {t('copyright', { year: currentYear })}
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privatlivspolitik"
              className="text-black/50 hover:text-gold transition-colors text-sm"
            >
              {t('privacyPolicy')}
            </Link>
            <Link
              href="/cookiepolitik"
              className="text-black/50 hover:text-gold transition-colors text-sm"
            >
              {t('cookiePolicy')}
            </Link>
            <Link
              href="/handelsbetingelser"
              className="text-black/50 hover:text-gold transition-colors text-sm"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
