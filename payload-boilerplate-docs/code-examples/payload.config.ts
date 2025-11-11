/**
 * Payload CMS Configuration
 *
 * This is the main configuration file for Payload CMS v3.
 * It defines how Payload connects to the database, handles file uploads,
 * and integrates with Next.js.
 *
 * CRITICAL: This file must be at the root of your project.
 */

import { buildConfig } from 'payload'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

// Import collections
import { Users } from './src/collections/Users.ts'
import { Media } from './src/collections/Media.ts'
import { FormSubmissions } from './src/collections/FormSubmissions.ts'

// Import globals (page content)
import { SiteSettings } from './src/globals/SiteSettings.ts'
import { Navigation } from './src/globals/Navigation.ts'
import { Footer } from './src/globals/Footer.ts'
import { HomePageContent } from './src/globals/HomePageContent.ts'
// ... import other page globals as needed

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  /**
   * Server URL
   *
   * WHY: Required for authentication cookies to work correctly.
   * Without this, you'll get CORS errors and authentication failures.
   *
   * ENVIRONMENT VARIABLES:
   * - Development: http://localhost:3000
   * - Production: https://your-site.vercel.app
   */
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL || '',

  /**
   * Admin Panel Configuration
   *
   * The admin panel is where you edit content.
   * Access it at: /admin
   */
  admin: {
    user: 'users',  // Which collection contains users
    importMap: {
      baseDir: path.resolve(dirname),
    },
    suppressHydrationWarning: true,  // Needed for Next.js App Router
  },

  /**
   * Collections
   *
   * Collections are like database tables. Each one can have many entries.
   * Example: Blog posts, team members, services, etc.
   *
   * REQUIRED Collections:
   * - Users: Admin user accounts
   * - Media: Image uploads
   */
  collections: [
    Users,            // Admin users
    Media,            // Image/file uploads
    FormSubmissions,  // Contact form submissions (optional)
    // Add more collections as needed:
    // Posts, Team, Services, etc.
  ],

  /**
   * Globals
   *
   * Globals are singleton data - only ONE entry exists.
   * Perfect for: site settings, navigation, page content.
   *
   * Access in code: await getGlobal('siteSettings')
   */
  globals: [
    SiteSettings,      // Contact info, logo, social media
    Navigation,        // Menu items
    Footer,            // Footer content
    HomePageContent,   // Homepage content
    // Add a global for each page that needs CMS editing
  ],

  /**
   * Rich Text Editor
   *
   * Using Lexical (Payload v3 default).
   * Provides: Bold, italic, links, lists, etc.
   */
  editor: lexicalEditor(),

  /**
   * Image Processing
   *
   * Sharp handles image optimization and resizing.
   * Required for image uploads.
   */
  sharp,

  /**
   * JWT Secret
   *
   * WHY: Encrypts authentication tokens.
   * MUST be a secure random string.
   *
   * Generate with: openssl rand -base64 32
   */
  secret: process.env.PAYLOAD_SECRET || '',

  /**
   * TypeScript Configuration
   *
   * Auto-generates type definitions for your collections/globals.
   * File: payload-types.ts
   */
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  /**
   * Database Adapter - Vercel Postgres
   *
   * WHY: Vercel Postgres is serverless, scales automatically, and is free to start.
   * Alternative: You can use MongoDB instead if preferred.
   *
   * SETUP:
   * 1. Go to Vercel Dashboard → Storage → Create Postgres Database
   * 2. Copy connection string to POSTGRES_URL
   *
   * push: true = Auto-create tables on first run
   */
  db: vercelPostgresAdapter({
    push: true,  // Enable auto-sync for initial setup
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),

  /**
   * Storage Adapter - Vercel Blob Storage
   *
   * WHY: Vercel Blob stores uploaded files (images, PDFs, etc.).
   * Files are served via CDN for fast loading.
   *
   * SETUP:
   * 1. Go to Vercel Dashboard → Storage → Create Blob Store
   * 2. Copy token to BLOB_READ_WRITE_TOKEN
   *
   * CRITICAL: Images uploaded locally won't appear in production unless
   * you seed with production environment variables!
   */
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,  // Enable blob storage for Media collection
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],

  /**
   * CORS Configuration
   *
   * WHY: Allows admin panel on one domain to access API on another.
   * Required for authentication to work properly.
   */
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),

  /**
   * CSRF Protection
   *
   * WHY: Prevents cross-site request forgery attacks.
   * Must include your production domain.
   */
  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),
})

/**
 * TROUBLESHOOTING:
 *
 * 1. "Cannot connect to database"
 *    → Check POSTGRES_URL is set correctly
 *    → Verify database exists in Vercel dashboard
 *
 * 2. "Authentication failed" / CORS errors
 *    → Check serverURL matches your domain
 *    → Verify PAYLOAD_PUBLIC_SERVER_URL is set
 *
 * 3. "Images not uploading"
 *    → Check BLOB_READ_WRITE_TOKEN is set
 *    → Verify Blob store exists in Vercel
 *
 * 4. "Module not found" errors
 *    → Run: npm run generate:importmap
 *    → Restart dev server
 */
