import { MetadataRoute } from 'next'
import { caseStudiesDetailed } from '@/data/caseStudies'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://transparo.dk'
  const currentDate = new Date()

  // Route mapping: internal path -> { da slug, en slug }
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/om-os', enPath: '/about-us', priority: 0.8 },
    { path: '/cases', enPath: '/cases', priority: 0.9 },
    { path: '/kontakt', enPath: '/contact', priority: 0.8 },
    { path: '/privatlivspolitik', enPath: '/privacy-policy', priority: 0.5 },
    { path: '/cookiepolitik', enPath: '/cookie-policy', priority: 0.5 },
    { path: '/handelsbetingelser', enPath: '/terms', priority: 0.5 },
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}/da${route.path}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }))

  // Case study slugs
  const caseSlugs = caseStudiesDetailed.map((c) => c.slug)

  const casePages = caseSlugs.map((slug) => ({
    url: `${baseUrl}/da/cases/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...casePages]
}
