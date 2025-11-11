/**
 * Media Collection - Image & File Uploads
 *
 * This collection handles all file uploads: images, PDFs, etc.
 * Files are stored in Vercel Blob Storage and optimized automatically.
 *
 * CRITICAL: This is the most important collection for image handling.
 */

import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',  // Access via /admin/collections/media

  /**
   * Admin Panel Configuration
   */
  admin: {
    useAsTitle: 'alt',  // Show alt text as title in admin list
  },

  /**
   * Access Control
   *
   * read: () => true = Anyone can view uploaded images (required for public website)
   * create/update/delete: Default to admin-only (safe)
   */
  access: {
    read: () => true,  // Public can read media
  },

  /**
   * Upload Configuration - CRITICAL SECTION
   *
   * This configures how files are stored and processed.
   */
  upload: {
    /**
     * Static Directory
     *
     * WHY: This is a virtual path, NOT a real folder.
     * With Vercel Blob Storage, files are stored in the cloud, not filesystem.
     *
     * The path is used for URL structure: /media/filename.jpg
     */
    staticDir: 'media',

    /**
     * Accepted File Types
     *
     * 'image/*' = All image types (jpg, png, gif, webp, etc.)
     * Can add: 'application/pdf', 'video/*', etc.
     */
    mimeTypes: ['image/*', 'application/pdf'],

    /**
     * Image Sizes - Auto-Generated Versions
     *
     * WHY: Creates optimized versions for different use cases.
     * Payload automatically generates these when an image is uploaded.
     *
     * USAGE:
     * - thumbnail: Admin panel preview
     * - card: Blog post thumbnails, team member photos
     * - hero: Full-width hero images
     *
     * Access in component:
     * image.sizes.thumbnail.url
     * image.sizes.card.url
     * image.sizes.hero.url
     */
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',  // Crop from center
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],

    /**
     * Admin Thumbnail
     *
     * Which size to show in admin panel list view.
     */
    adminThumbnail: 'thumbnail',
  },

  /**
   * Fields
   *
   * Additional data stored with each upload.
   */
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,  // Required for accessibility
      admin: {
        description: 'Alternative text for accessibility (screen readers)',
      },
    },
    {
      name: 'caption',
      type: 'text',
      admin: {
        description: 'Optional caption displayed below image',
      },
    },
  ],
}

/**
 * HOW TO USE IN COMPONENTS:
 *
 * 1. Define upload field in your Global/Collection:
 *
 * {
 *   name: 'heroImage',
 *   type: 'upload',
 *   relationTo: 'media',
 *   required: true,
 * }
 *
 * 2. Fetch with depth to populate:
 *
 * const data = await payload.findGlobal({
 *   slug: 'homePage',
 *   depth: 2,  // CRITICAL: Populates image relationships
 * })
 *
 * 3. Access in component:
 *
 * <Image
 *   src={data.heroImage.url}
 *   alt={data.heroImage.alt}
 *   width={1920}
 *   height={1080}
 * />
 *
 * Or use optimized size:
 * src={data.heroImage.sizes.hero.url}
 */

/**
 * TROUBLESHOOTING:
 *
 * 1. Images return 404
 *    → Check next.config.mjs has image hostname configured
 *    → Verify BLOB_READ_WRITE_TOKEN is set
 *
 * 2. image.url is undefined
 *    → Make sure you're using depth: 2 when fetching
 *    → Check that upload field uses relationTo: 'media'
 *
 * 3. Images work locally but not in production
 *    → Run seed script with production env variables
 *    → Images must be uploaded to Vercel Blob, not local filesystem
 *
 * 4. Upload fails
 *    → Check file size limits (default: 5MB)
 *    → Verify mime type is in mimeTypes array
 *    → Check BLOB_READ_WRITE_TOKEN has write permissions
 */

/**
 * CUSTOMIZATION IDEAS:
 *
 * Add more image sizes:
 * {
 *   name: 'og-image',  // Open Graph / social media
 *   width: 1200,
 *   height: 630,
 * }
 *
 * Add focal point:
 * {
 *   name: 'focalX',
 *   type: 'number',
 *   admin: {
 *     description: 'Focal point X coordinate (0-100)',
 *   },
 * }
 *
 * Add tags/categories:
 * {
 *   name: 'tags',
 *   type: 'array',
 *   fields: [
 *     { name: 'tag', type: 'text' }
 *   ],
 * }
 */
