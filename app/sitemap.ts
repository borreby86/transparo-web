import { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://transparo.dk'
  const currentDate = new Date()

  // Route mapping: internal path -> { da slug, en slug }
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/om-os', enPath: '/about-us', priority: 0.8 },
    { path: '/cases', enPath: '/cases', priority: 0.9 },
    { path: '/kontakt', enPath: '/contact', priority: 0.8 },
    { path: '/proces', enPath: '/process', priority: 0.8 },
    { path: '/prisberegner', enPath: '/price-calculator', priority: 0.8 },
    { path: '/workshops', enPath: '/workshops', priority: 0.8 },
    { path: '/privatlivspolitik', enPath: '/privacy-policy', priority: 0.5 },
    { path: '/cookiepolitik', enPath: '/cookie-policy', priority: 0.5 },
    { path: '/handelsbetingelser', enPath: '/terms', priority: 0.5 },
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}/da${route.path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
    alternates: {
      languages: {
        da: `${baseUrl}/da${route.path}`,
        en: `${baseUrl}/en${route.enPath || route.path}`,
      },
    },
  }))

  // English versions
  const enPages = routes.map((route) => ({
    url: `${baseUrl}/en${route.enPath || route.path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
    alternates: {
      languages: {
        da: `${baseUrl}/da${route.path}`,
        en: `${baseUrl}/en${route.enPath || route.path}`,
      },
    },
  }))

  // Case study slugs
  const caseSlugs = [
    'health-platform',
    'walter-ai',
    'flotte-foedder',
    'alex-morgan-photography',
    'christina-borreby',
    'vat85',
  ]

  const casePages = caseSlugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}/cases/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      alternates: {
        languages: {
          da: `${baseUrl}/da/cases/${slug}`,
          en: `${baseUrl}/en/cases/${slug}`,
        },
      },
    }))
  )

  return [...staticPages, ...enPages, ...casePages]
}
