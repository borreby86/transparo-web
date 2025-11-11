/**
 * Payload CMS Data Fetching Utilities
 *
 * These functions should ONLY be called from Server Components.
 * DO NOT use in 'use client' components!
 *
 * Pattern: Wrapper + Client Component
 * ✅ page.tsx (Server) → calls getGlobal()
 * ✅ ClientComponent.tsx ('use client') → receives data as props
 */

/**
 * Generic Global Fetcher
 *
 * Fetches any global by slug with relationship population.
 *
 * @param slug - The global slug (e.g., 'siteSettings', 'homePageContent')
 * @returns Global data or null if error
 */
export async function getGlobal(slug: string) {
  try {
    // Dynamic imports to avoid initialization issues
    const { getPayload } = await import('payload')
    const config = (await import('@/payload.config')).default

    const payload = await getPayload({ config })
    const data = await payload.findGlobal({
      slug,
      depth: 2,  // CRITICAL: Populate relationships (images, nested data)
    })
    return data
  } catch (error) {
    console.error(`Error fetching global ${slug}:`, error)
    console.error('Full error details:', JSON.stringify(error, null, 2))
    return null
  }
}

/**
 * Specific Global Getters
 *
 * These are convenience wrappers with TypeScript types.
 * Add more as you create new globals.
 */

export async function getSiteSettings() {
  return getGlobal('siteSettings')
}

export async function getNavigation() {
  return getGlobal('navigation')
}

export async function getFooter() {
  return getGlobal('footer')
}

export async function getHomePageContent() {
  return getGlobal('homePageContent')
}

export async function getPrivatePageContent() {
  return getGlobal('privatePageContent')
}

export async function getErhvervPageContent() {
  return getGlobal('erhvervPageContent')
}

export async function getAboutPageContent() {
  return getGlobal('aboutPageContent')
}

export async function getContactPageContent() {
  return getGlobal('contactPageContent')
}

/**
 * Collection Fetchers
 *
 * Example: Fetch all blog posts
 */
export async function getPosts() {
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@/payload.config')).default

    const payload = await getPayload({ config })
    const data = await payload.find({
      collection: 'posts',
      depth: 2,
      limit: 100,  // Adjust as needed
      sort: '-publishedDate',  // Sort by date, newest first
    })
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return null
  }
}

/**
 * Form Submission - Using Payload Local API
 *
 * USAGE: Call from Server Action
 *
 * Example in form component:
 * 'use server'
 * export async function submitForm(data) {
 *   return await submitContactForm(data)
 * }
 */
export async function submitContactForm(data: {
  name: string
  email: string
  phone?: string
  message: string
}) {
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@/payload.config')).default

    const payload = await getPayload({ config })
    const result = await payload.create({
      collection: 'formSubmissions',
      data,
    })
    return result
  } catch (error) {
    console.error('Error submitting form:', error)
    console.error('Full error details:', JSON.stringify(error, null, 2))
    throw error
  }
}

/**
 * WHY depth: 2?
 *
 * depth: 0 = Only IDs for relationships
 * {
 *   logo: 123  // Just the ID
 * }
 *
 * depth: 1 = First level populated
 * {
 *   logo: {
 *     id: 123,
 *     url: '/media/logo.png',
 *     alt: 'Logo'
 *   }
 * }
 *
 * depth: 2 = Nested relationships populated
 * {
 *   author: {
 *     id: 1,
 *     name: 'John',
 *     avatar: {  // Nested relationship populated
 *       url: '/media/avatar.jpg'
 *     }
 *   }
 * }
 */

/**
 * USAGE EXAMPLES:
 *
 * 1. Simple Page (Server Component):
 *
 * export default async function Page() {
 *   const content = await getHomePageContent()
 *
 *   return <div>{content?.hero?.heading}</div>
 * }
 *
 * 2. With Client Component:
 *
 * // page.tsx (Server)
 * export default async function Page() {
 *   const content = await getHomePageContent()
 *
 *   return (
 *     <>
 *       <NavigationWrapper />  // Server
 *       <HeroSection data={content?.hero} />  // Client
 *     </>
 *   )
 * }
 *
 * // HeroSection.tsx (Client)
 * 'use client'
 * import { motion } from 'framer-motion'
 *
 * export default function HeroSection({ data }) {
 *   return (
 *     <motion.div>
 *       <h1>{data?.heading}</h1>
 *       <img src={data?.backgroundImage?.url} />
 *     </motion.div>
 *   )
 * }
 *
 * 3. Multiple Data Sources:
 *
 * export default async function Page() {
 *   const [content, settings] = await Promise.all([
 *     getHomePageContent(),
 *     getSiteSettings(),
 *   ])
 *
 *   return (
 *     <div>
 *       <img src={settings?.logo?.url} />
 *       <h1>{content?.hero?.heading}</h1>
 *     </div>
 *   )
 * }
 */

/**
 * TROUBLESHOOTING:
 *
 * 1. "Cannot use import statement outside a module"
 *    → Make sure this file is in a Server Component
 *    → Don't use in 'use client' components
 *
 * 2. "data.image.url is undefined"
 *    → Check depth: 2 is set
 *    → Verify the field is type: 'upload', relationTo: 'media'
 *
 * 3. "Error fetching global"
 *    → Check slug matches global configuration
 *    → Verify POSTGRES_URL is set correctly
 *    → Check Payload is configured properly
 *
 * 4. Data is cached/stale
 *    → Add export const dynamic = 'force-dynamic' to page
 *    → Or use revalidate: 60 for ISR
 */
