# Adding Payload CMS to an Existing Project

**For projects that are already built and running**

This guide shows you how to add Payload CMS to a website that's already built with hardcoded content. Perfect for giving clients the ability to edit their site without a complete rebuild.

---

## 🎯 Overview

**Time Required:** 2-3 hours (depending on site complexity)

**What You'll Do:**
1. Install Payload alongside your existing code
2. Map your content structure to CMS schemas
3. Migrate hardcoded content using seed scripts
4. Gradually refactor components to use CMS data
5. Deploy without downtime

**Your site stays live throughout the entire process!** ✅

---

## 📋 Prerequisites Checklist

Before starting, ensure your project has:

- [ ] Next.js 14+ with App Router
- [ ] TypeScript configured
- [ ] Existing content you want to move to CMS
- [ ] Git version control (to track changes)
- [ ] Access to create a database (Vercel Postgres recommended)
- [ ] 2-3 hours of focused time

---

## Step 1: Analyze Your Existing Content (15 minutes)

### 1.1 Document Your Content Structure

Before touching any code, map out what content you have:

```typescript
// Example: What content exists in your site?

// Homepage (app/page.tsx)
const homepage = {
  hero: {
    title: "Welcome to Our Site",
    subtitle: "We do amazing things",
    backgroundImage: "/images/hero.jpg",
    ctaText: "Get Started",
    ctaLink: "/contact"
  },
  features: [
    { title: "Feature 1", description: "...", icon: "..." },
    { title: "Feature 2", description: "...", icon: "..." },
  ],
  testimonials: [
    { quote: "...", author: "...", role: "..." }
  ]
}

// About Page (app/about/page.tsx)
const aboutPage = {
  heading: "About Us",
  body: "Our story...",
  teamMembers: [...]
}

// Footer (components/Footer.tsx)
const footerData = {
  companyName: "...",
  links: [...],
  socialMedia: {...}
}
```

### 1.2 Identify Content Types

Categorize your content:

**Singletons (Globals):**
- Homepage content ✅
- Footer ✅
- Navigation ✅
- Site settings (logo, contact info) ✅

**Collections (Multiple items):**
- Blog posts (if you have a blog)
- Team members
- Portfolio items
- Services

**Media:**
- Images (hero images, logos, photos)
- Documents (PDFs, etc.)

---

## Step 2: Install Payload CMS (15 minutes)

### 2.1 Install Dependencies

```bash
# In your existing project root
npm install payload @payloadcms/next @payloadcms/db-vercel-postgres @payloadcms/richtext-lexical @payloadcms/storage-vercel-blob sharp graphql

# Dev dependencies
npm install -D tsx @types/node
```

### 2.2 Create Folder Structure

```bash
# Create these folders in your existing project
mkdir -p src/collections
mkdir -p src/globals
mkdir -p src/access
mkdir -p src/lib
mkdir -p scripts
```

Your project now looks like:

```
your-existing-project/
├── app/                    # Your existing Next.js app
├── components/             # Your existing components
├── public/                 # Your existing public assets
├── src/                    # ← NEW: Payload configuration
│   ├── access/
│   ├── collections/
│   │   └── Media.ts
│   ├── globals/
│   │   ├── HomePageContent.ts
│   │   ├── Footer.ts
│   │   ├── Navigation.ts
│   │   └── SiteSettings.ts
│   └── lib/
│       └── payload.ts
├── scripts/
│   └── seed.ts            # ← NEW: Migration script
├── payload.config.ts       # ← NEW: Main config
├── next.config.mjs         # Update existing
├── package.json
└── .env.local
```

### 2.3 Copy Boilerplate Files

Copy these files from the boilerplate:

1. **Core Configuration:**
   - `payload.config.ts` → root
   - `src/access/isAdminOrEditor.ts`
   - `src/collections/Media.ts`
   - `src/lib/payload.ts`

2. **Update next.config.mjs:**
```javascript
// Add to your existing next.config.mjs
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  // ... your existing config

  // Add these:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
```

3. **Add to package.json scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "generate:importmap": "payload generate:importmap",
    "payload": "payload",
    "seed": "tsx scripts/seed.ts"
  }
}
```

### 2.4 Setup Environment Variables

Add to your `.env.local`:

```env
# Payload Secret (generate with: openssl rand -base64 32)
PAYLOAD_SECRET=your-generated-secret-here

# Database (get from Vercel Dashboard → Storage → Postgres)
POSTGRES_URL=postgresql://...
POSTGRES_DATABASE_URL=postgresql://...

# Blob Storage (get from Vercel Dashboard → Storage → Blob)
BLOB_READ_WRITE_TOKEN=vercel_blob_...

# Server URLs
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
```

---

## Step 3: Create CMS Schemas Matching Your Content (30 minutes)

### 3.1 Create a Global for Each Content Section

**Example: Homepage Content**

Based on your content analysis from Step 1, create matching schemas:

```typescript
// src/globals/HomePageContent.ts
import { GlobalConfig } from 'payload'
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const HomePageContent: GlobalConfig = {
  slug: 'homePageContent',
  label: 'Homepage Content',
  access: {
    read: () => true,
    update: isAdminOrEditor,
  },
  fields: [
    // Match your existing hero section structure
    {
      type: 'group',
      name: 'hero',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            description: 'Main heading on the homepage'
          }
        },
        {
          name: 'subtitle',
          type: 'textarea',
          admin: {
            description: 'Text below the main heading'
          }
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description: 'Hero background image (1920x1080px recommended)'
          }
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'CTA Button Text',
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'CTA Button Link',
        },
      ]
    },

    // Match your features section
    {
      type: 'array',
      name: 'features',
      label: 'Features',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Icon name or emoji'
          }
        },
      ]
    },

    // Match your testimonials section
    {
      type: 'array',
      name: 'testimonials',
      label: 'Testimonials',
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
        },
      ]
    },
  ]
}
```

**Key Principle:** Match your schema to your existing data structure exactly. This makes migration easier.

### 3.2 Create Other Globals

Create similar files for:
- `src/globals/SiteSettings.ts` (logo, contact info, social media)
- `src/globals/Navigation.ts` (menu items)
- `src/globals/Footer.ts` (footer content)
- `src/globals/AboutPageContent.ts` (if you have an about page)

**Tip:** Copy the boilerplate examples and modify them to match your content structure.

### 3.3 Register Globals in payload.config.ts

```typescript
// payload.config.ts
import { buildConfig } from 'payload'
import { HomePageContent } from './src/globals/HomePageContent'
import { SiteSettings } from './src/globals/SiteSettings'
import { Navigation } from './src/globals/Navigation'
import { Footer } from './src/globals/Footer'
// ... other imports

export default buildConfig({
  // ... other config

  globals: [
    HomePageContent,
    SiteSettings,
    Navigation,
    Footer,
    // Add all your globals here
  ],
})
```

---

## Step 4: Create Your Seed Script (45 minutes)

The seed script migrates your hardcoded content into the CMS.

### 4.1 Copy Your Existing Content Data

```typescript
// scripts/seed.ts
import { getPayload } from 'payload'
import config from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper function to upload images
async function uploadImage(payload: any, imagePath: string, alt: string) {
  const fullPath = path.join(__dirname, '..', 'public', imagePath)

  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️  Image not found: ${fullPath}`)
    return null
  }

  const fileBuffer = fs.readFileSync(fullPath)
  const fileName = path.basename(imagePath)

  try {
    const result = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: fileBuffer,
        mimetype: `image/${path.extname(fileName).slice(1)}`,
        name: fileName,
        size: fileBuffer.length,
      },
    })
    console.log(`✅ Uploaded: ${fileName}`)
    return result.id
  } catch (error) {
    console.error(`❌ Failed to upload ${fileName}:`, error)
    return null
  }
}

async function seed() {
  console.log('🌱 Starting seed process...\n')

  try {
    const payload = await getPayload({ config })

    // Step 1: Upload images
    console.log('📤 Uploading images...')
    const heroImage = await uploadImage(
      payload,
      'images/hero.jpg',  // Your existing image path
      'Hero background'
    )
    const logoImage = await uploadImage(
      payload,
      'images/logo.png',   // Your existing logo
      'Company logo'
    )

    // Step 2: Seed Homepage Content
    console.log('\n📝 Creating Homepage Content...')
    await payload.updateGlobal({
      slug: 'homePageContent',
      data: {
        // Copy your exact hardcoded content here
        hero: {
          title: "Welcome to Our Site",           // From your existing code
          subtitle: "We do amazing things",       // From your existing code
          backgroundImage: heroImage,
          ctaText: "Get Started",
          ctaLink: "/contact",
        },
        features: [
          {
            title: "Feature 1",                   // From your existing code
            description: "Amazing feature...",
            icon: "🚀",
          },
          {
            title: "Feature 2",
            description: "Another great feature...",
            icon: "⚡",
          },
          // Add all your existing features
        ],
        testimonials: [
          {
            quote: "This service changed our business!",  // From your existing code
            author: "John Doe",
            role: "CEO, Company Inc",
          },
          // Add all your existing testimonials
        ],
      },
    })
    console.log('✅ Homepage Content created\n')

    // Step 3: Seed Site Settings
    console.log('Creating Site Settings...')
    await payload.updateGlobal({
      slug: 'siteSettings',
      data: {
        contactEmail: 'hello@yourcompany.com',    // Your actual email
        contactPhone: '+1 (555) 123-4567',        // Your actual phone
        logo: logoImage,
        socialMedia: {
          linkedin: 'https://linkedin.com/company/yourcompany',  // Your links
          facebook: 'https://facebook.com/yourcompany',
          instagram: 'https://instagram.com/yourcompany',
        },
      },
    })
    console.log('✅ Site Settings created\n')

    // Step 4: Seed Navigation
    console.log('Creating Navigation...')
    await payload.updateGlobal({
      slug: 'navigation',
      data: {
        mainNav: [
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' },
          // Your actual menu items
        ],
        ctaButtonText: 'Get Started',
        ctaButtonLink: '/contact',
      },
    })
    console.log('✅ Navigation created\n')

    // Step 5: Seed Footer
    console.log('Creating Footer...')
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        brandHeading: 'Your Company Name',
        brandTagline: 'Your tagline here',
        navigationLinks: [
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' },
        ],
        copyrightText: '© {year} Your Company. All rights reserved.',
        legalLinks: [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ],
      },
    })
    console.log('✅ Footer created\n')

    console.log('🎉 Seed completed successfully!')
    console.log('\n✨ You can now access the admin panel at:')
    console.log('   http://localhost:3000/admin\n')

    process.exit(0)
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

seed()
```

### 4.2 Test Your Seed Script

```bash
# 1. Generate Payload import map
npm run generate:importmap

# 2. Start your dev server
npm run dev

# 3. In another terminal, run the seed script
npm run seed
```

**Expected output:**
```
🌱 Starting seed process...

📤 Uploading images...
✅ Uploaded: hero.jpg
✅ Uploaded: logo.png

📝 Creating Homepage Content...
✅ Homepage Content created

Creating Site Settings...
✅ Site Settings created

🎉 Seed completed successfully!
```

### 4.3 Verify in Admin Panel

1. Visit `http://localhost:3000/admin`
2. Create your admin account
3. Check each global to see your migrated content
4. Edit something and save to verify it works

---

## Step 5: Refactor Components to Use CMS Data (60 minutes)

Now gradually replace hardcoded content with CMS data.

### 5.1 Start with One Component

**Before (Hardcoded):**

```typescript
// app/page.tsx (existing)
export default function HomePage() {
  const heroData = {
    title: "Welcome to Our Site",
    subtitle: "We do amazing things"
  }

  return (
    <div>
      <h1>{heroData.title}</h1>
      <p>{heroData.subtitle}</p>
    </div>
  )
}
```

**After (From CMS):**

```typescript
// app/page.tsx (refactored)
import { getHomePageContent } from '@/src/lib/payload'

export default async function HomePage() {
  // Fetch from CMS instead of hardcoded
  const data = await getHomePageContent()

  return (
    <div>
      <h1>{data.hero.title}</h1>
      <p>{data.hero.subtitle}</p>
    </div>
  )
}
```

**Add getter function:**

```typescript
// src/lib/payload.ts
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getHomePageContent() {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({
    slug: 'homePageContent',
    depth: 2, // Populates image relationships
  })
  return data
}

export async function getSiteSettings() {
  const payload = await getPayload({ config })
  return await payload.findGlobal({
    slug: 'siteSettings',
    depth: 2,
  })
}

// Add getters for all your globals
```

### 5.2 Refactor One Section at a Time

**Order of refactoring (recommended):**

1. ✅ **Start with simplest component** (e.g., Footer)
   - Test thoroughly
   - Verify admin edits work

2. ✅ **Move to medium complexity** (e.g., Navigation)
   - More fields but still straightforward

3. ✅ **Tackle complex sections** (e.g., Homepage with images)
   - Handle image relationships
   - Test all functionality

4. ✅ **Refactor remaining pages** (About, Contact, etc.)

**Testing checklist after each refactor:**
- [ ] Page renders correctly
- [ ] Content matches exactly
- [ ] Images display properly
- [ ] Links work
- [ ] Admin edits reflect on the site
- [ ] No console errors

### 5.3 Handle Images Properly

**Before (Static import):**

```typescript
import heroImage from '@/public/images/hero.jpg'

<Image src={heroImage} alt="Hero" />
```

**After (From CMS):**

```typescript
import Image from 'next/image'

const data = await getHomePageContent()

// The CMS provides the full image object with URL
<Image
  src={data.hero.backgroundImage.url}
  alt={data.hero.backgroundImage.alt}
  width={data.hero.backgroundImage.width}
  height={data.hero.backgroundImage.height}
/>
```

**Handle missing images gracefully:**

```typescript
{data.hero.backgroundImage?.url && (
  <Image
    src={data.hero.backgroundImage.url}
    alt={data.hero.backgroundImage.alt || 'Hero background'}
    width={data.hero.backgroundImage.width || 1920}
    height={data.hero.backgroundImage.height || 1080}
  />
)}
```

---

## Step 6: Deploy (30 minutes)

### 6.1 Setup Production Database

1. Go to Vercel Dashboard → your project
2. Storage tab → Add Postgres Database
3. Add Blob Storage
4. Copy connection strings

### 6.2 Add Environment Variables to Vercel

In Vercel Dashboard → Settings → Environment Variables:

```env
PAYLOAD_SECRET=your-production-secret
POSTGRES_URL=your-production-db-url
BLOB_READ_WRITE_TOKEN=your-blob-token
NEXT_PUBLIC_SERVER_URL=https://your-site.vercel.app
PAYLOAD_PUBLIC_SERVER_URL=https://your-site.vercel.app
```

### 6.3 Deploy

```bash
# Commit all changes
git add .
git commit -m "Add Payload CMS integration"
git push

# Vercel will auto-deploy
```

### 6.4 Seed Production Database

```bash
# Pull production environment variables
vercel env pull .env.production

# Run seed script with production env
export $(cat .env.production | xargs) && npm run seed
```

### 6.5 Verify Production

1. Visit `https://your-site.vercel.app/admin`
2. Login with your admin account
3. Verify all content is present
4. Make a test edit
5. Check that changes appear on the live site

---

## 🎯 Success Checklist

You're done when:

- [ ] All existing content migrated to CMS
- [ ] Admin panel accessible and working
- [ ] Client can edit content successfully
- [ ] Changes save and appear on the site
- [ ] Images upload and display correctly
- [ ] Site performs as well as before (or better!)
- [ ] No hardcoded content remaining
- [ ] Production deployment successful
- [ ] Client trained on how to use admin panel

---

## 🚨 Common Pitfalls & Solutions

### Pitfall 1: TypeScript Errors After Refactoring

**Problem:** Components expect old data structure

```typescript
// Error: Property 'hero' does not exist on type 'never'
const title = data.hero.title
```

**Solution:** Add proper TypeScript types

```typescript
// Create types that match your CMS schema
type HomePageContent = {
  hero: {
    title: string
    subtitle: string
    backgroundImage: {
      url: string
      alt: string
      width: number
      height: number
    }
  }
  features: Array<{
    title: string
    description: string
    icon: string
  }>
}

// Use in your component
const data: HomePageContent = await getHomePageContent()
```

### Pitfall 2: Images Don't Load

**Problem:** 404 errors for images

**Solution:** Ensure Next.js Image config includes Vercel Blob:

```javascript
// next.config.mjs
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**.public.blob.vercel-storage.com',
    },
  ],
}
```

### Pitfall 3: Admin Saves Don't Reflect on Site

**Problem:** Edits in admin don't appear on frontend

**Solution:** Clear Next.js cache

```bash
rm -rf .next
npm run dev
```

Or add ISR with revalidation:

```typescript
// app/page.tsx
export const revalidate = 60 // Revalidate every 60 seconds
```

### Pitfall 4: Seed Script Fails

**Problem:** Database connection errors

**Solution:** Verify environment variables:

```bash
# Check if variables are set
echo $POSTGRES_URL
echo $PAYLOAD_SECRET

# If empty, source your env file
source .env.local  # or export $(cat .env.local | xargs)
```

---

## 📊 Migration Timeline

Typical timeline for different project sizes:

| Project Size | Setup | Schema Creation | Seed Script | Refactoring | Total |
|--------------|-------|-----------------|-------------|-------------|-------|
| Small (1-3 pages) | 15 min | 30 min | 30 min | 30 min | **2 hours** |
| Medium (5-10 pages) | 15 min | 45 min | 45 min | 60 min | **3 hours** |
| Large (10+ pages) | 20 min | 60 min | 60 min | 120 min | **4-5 hours** |

---

## 🎓 Best Practices

### Do's ✅

- **Start with a single page** - Test the full flow before migrating everything
- **Keep your old code** - Comment it out instead of deleting until verified
- **Test locally first** - Never seed production until you've tested locally
- **Commit frequently** - Small commits make it easy to roll back if needed
- **Document custom fields** - Add descriptions to all CMS fields for your client

### Don'ts ❌

- **Don't rush** - Take time to properly map your content structure
- **Don't skip TypeScript types** - They catch errors early
- **Don't forget depth: 2** - Images won't load without it
- **Don't deploy without testing** - Always verify locally first
- **Don't delete old code immediately** - Keep it commented for reference

---

## 🆘 Troubleshooting

### Problem: "Module not found: Can't resolve 'payload'"

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run generate:importmap
```

### Problem: "CORS blocked" in admin panel

**Solution:** Check payload.config.ts:

```typescript
export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || ''].filter(Boolean),
})
```

### Problem: Changes in admin don't save

**Solution:** Check access controls in your globals:

```typescript
access: {
  read: () => true,
  update: isAdminOrEditor, // ← Must have this!
}
```

---

## 📚 Next Steps

After successful migration:

1. **Train your client** - Show them how to use the admin panel
2. **Add more features** - Blog, portfolio, team members, etc.
3. **Customize admin panel** - See [4-ADMIN-CUSTOMIZATION.md](./4-ADMIN-CUSTOMIZATION.md)
4. **Optimize performance** - Add ISR, image optimization
5. **Monitor usage** - Check database and blob storage usage

---

## 💡 Tips for Client Training

Create a simple guide for your client:

**Editing Content:**
1. Go to `your-site.com/admin`
2. Login with your credentials
3. Click the section you want to edit
4. Make changes
5. Click "Save"
6. Changes appear on the site within 60 seconds

**Uploading Images:**
1. Go to Media section
2. Click "Create New"
3. Drag and drop image
4. Add alt text (description)
5. Save

---

## 🎉 Success!

You've successfully added Payload CMS to your existing project!

**Benefits achieved:**
- ✅ Client can edit content themselves
- ✅ No more code deployments for content changes
- ✅ Structured, validated content
- ✅ Image optimization built-in
- ✅ Professional admin interface
- ✅ Zero downtime migration

**Your client is now empowered to manage their own website!** 🚀

---

## Related Documentation

- [2-QUICK-START-15MIN.md](./2-QUICK-START-15MIN.md) - New project setup
- [3-COMMON-ISSUES.md](./3-COMMON-ISSUES.md) - Troubleshooting
- [4-ADMIN-CUSTOMIZATION.md](./4-ADMIN-CUSTOMIZATION.md) - Customize the admin panel

---

**Questions?** Check [3-COMMON-ISSUES.md](./3-COMMON-ISSUES.md) for common problems and solutions.
