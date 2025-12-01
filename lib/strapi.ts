/**
 * Strapi API helper functions
 */

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN

interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

interface StrapiError {
  data: null
  error: {
    status: number
    name: string
    message: string
  }
}

type StrapiResult<T> = StrapiResponse<T> | StrapiError

/**
 * Fetch data from Strapi API
 */
export async function fetchStrapi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<StrapiResult<T>> {
  const url = `${STRAPI_URL}/api${endpoint}`

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...headers,
      ...(options.headers as Record<string, string>),
    },
  })

  const data = await response.json()
  return data
}

/**
 * Get all pages
 */
export async function getPages() {
  return fetchStrapi<Array<{
    id: number
    documentId: string
    title: string
    slug: string
    content: string
    metaDescription: string
  }>>('/pages?populate=*')
}

/**
 * Get a single page by slug
 */
export async function getPageBySlug(slug: string) {
  return fetchStrapi<Array<{
    id: number
    documentId: string
    title: string
    slug: string
    content: string
    metaDescription: string
  }>>(`/pages?filters[slug][$eq]=${slug}&populate=*`)
}

/**
 * Get all case studies
 */
export async function getCaseStudies(featured?: boolean) {
  const filter = featured ? '&filters[isFeatured][$eq]=true' : ''
  return fetchStrapi<Array<{
    id: number
    documentId: string
    title: string
    slug: string
    client: string
    industry: string
    description: string
    featuredImage: {
      url: string
      alternativeText: string
    }
  }>>(`/case-studies?populate=*${filter}`)
}

/**
 * Get a single case study by slug
 */
export async function getCaseStudyBySlug(slug: string) {
  return fetchStrapi<Array<{
    id: number
    documentId: string
    title: string
    slug: string
    client: string
    industry: string
    description: string
    challenge: string
    solution: string
    results: string
    websiteUrl: string
    featuredImage: {
      url: string
      alternativeText: string
    }
    gallery: Array<{
      url: string
      alternativeText: string
    }>
  }>>(`/case-studies?filters[slug][$eq]=${slug}&populate=*`)
}

/**
 * Get all testimonials
 */
export async function getTestimonials(featured?: boolean) {
  const filter = featured ? '&filters[isFeatured][$eq]=true' : ''
  return fetchStrapi<Array<{
    id: number
    documentId: string
    quote: string
    authorName: string
    authorTitle: string
    company: string
    rating: number
  }>>(`/testimonials?populate=*${filter}`)
}

/**
 * Get Strapi media URL
 */
export function getStrapiMediaUrl(url: string): string {
  if (url.startsWith('http')) {
    return url
  }
  return `${STRAPI_URL}${url}`
}
