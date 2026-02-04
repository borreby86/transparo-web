import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { locales, defaultLocale } from './config'

export const routing = defineRouting({
  locales,
  defaultLocale,
  pathnames: {
    '/': '/',
    '/kontakt': {
      da: '/kontakt',
      en: '/contact',
    },
    '/om-os': {
      da: '/om-os',
      en: '/about-us',
    },
    '/prisberegner': {
      da: '/prisberegner',
      en: '/price-calculator',
    },
    '/cookiepolitik': {
      da: '/cookiepolitik',
      en: '/cookie-policy',
    },
    '/handelsbetingelser': {
      da: '/handelsbetingelser',
      en: '/terms',
    },
    '/privatlivspolitik': {
      da: '/privatlivspolitik',
      en: '/privacy-policy',
    },
    '/proces': {
      da: '/proces',
      en: '/process',
    },
    '/pakker': {
      da: '/pakker',
      en: '/packages',
    },
    '/cases': {
      da: '/cases',
      en: '/cases',
    },
    '/cases/[slug]': {
      da: '/cases/[slug]',
      en: '/cases/[slug]',
    },
    '/workshops': {
      da: '/workshops',
      en: '/workshops',
    },
    '/faq': {
      da: '/faq',
      en: '/faq',
    },
  },
})

export type Pathnames = keyof typeof routing.pathnames

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
