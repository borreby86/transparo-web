import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://transparo.dk'
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    '',
    '/om-os',
    '/pakker',
    '/cases',
    '/kontakt',
    '/proces',
    '/privatlivspolitik',
    '/cookiepolitik',
    '/handelsbetingelser',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route === '/pakker' || route === '/cases' ? 0.9 : 0.8,
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

  const casePages = caseSlugs.map((slug) => ({
    url: `${baseUrl}/cases/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Package slugs
  const packageSlugs = ['essentials', 'professional', 'business']

  const packagePages = packageSlugs.map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...casePages, ...packagePages]
}
