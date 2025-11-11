# Common Issues & Solutions

**Last Updated:** November 10, 2025

This document contains all issues we encountered during implementation and their solutions.

---

## Table of Contents

1. [Permission Errors](#1-permission-errors)
2. [Image Loading Issues](#2-image-loading-issues)
3. [Build Errors](#3-build-errors)
4. [React Rendering Errors](#4-react-rendering-errors)
5. [CORS & Authentication Issues](#5-cors--authentication-issues)
6. [Database Connection Issues](#6-database-connection-issues)

---

## 1. Permission Errors

### Issue: "You are not allowed to perform this action"

**Symptoms:**
- Admin panel shows permission error when trying to save
- Changes don't persist in CMS

**Root Cause:**
Globals only had `read` access control, missing `update` permission.

**Solution:**

Add `update` access control to all globals:

```typescript
// src/globals/YourGlobal.ts
import { isAdminOrEditor } from '../access/isAdminOrEditor'

export const YourGlobal: GlobalConfig = {
  slug: 'yourGlobal',
  access: {
    read: () => true,           // Public can read
    update: isAdminOrEditor,    // Only admins can update ✅
  },
  fields: [
    // ...
  ],
}
```

**Files to Fix:**
- All files in `src/globals/` directory

---

## 2. Image Loading Issues

### Issue A: Images Return 404 Errors

**Symptoms:**
- Images work in admin panel
- Frontend shows broken images
- Console shows 404 errors

**Root Cause:**
Next.js Image component requires external hostnames to be configured.

**Solution:**

Update `next.config.mjs`:

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'your-site.vercel.app',  // Your domain
      },
      {
        protocol: 'http',
        hostname: 'localhost',  // For local dev
      },
    ],
  },
}
```

---

### Issue B: Logo or Media Relations Not Populating

**Symptoms:**
- Logo field returns just an ID instead of full object
- `logo.url` is undefined
- Other media relationships don't populate

**Root Cause:**
Payload doesn't automatically populate relationships. Need to specify `depth`.

**Solution:**

Add `depth: 2` to data fetching:

```typescript
// src/lib/payload.ts
export async function getGlobal(slug: string) {
  const payload = await getPayload({ config })
  const data = await payload.findGlobal({
    slug,
    depth: 2,  // ✅ Populate relationships
  })
  return data
}
```

**Why depth: 2?**
- `depth: 0` = No relationships populated (just IDs)
- `depth: 1` = First level relationships populated
- `depth: 2` = Nested relationships populated (recommended)

---

### Issue C: Images Uploaded Locally Don't Appear in Production

**Symptoms:**
- Images work locally
- Production shows 404
- Media collection has entries but no files

**Root Cause:**
Local images stored in filesystem, not in Vercel Blob Storage.

**Solution:**

Seed production database with production environment:

```bash
# 1. Pull production env variables
vercel env pull .env.production

# 2. Run seed with production env
set -a && . .env.production && set +a && npm run seed
```

This uploads images to Vercel Blob Storage.

---

## 3. Build Errors

### Issue: Webpack Module Not Found (fs, dns, net, tls)

**Symptoms:**
```
Module not found: Can't resolve 'fs'
Module not found: Can't resolve 'dns'
```

**Root Cause:**
Client components ('use client') importing server-only code that uses Node.js modules.

**Solution:**

Separate client and server components:

```typescript
// ❌ WRONG: Client component importing Payload
'use client'
import { getNavigation } from '@/lib/payload'  // Uses Node.js!

// ✅ CORRECT: Server wrapper + Client component

// page.tsx (Server Component - no 'use client')
import NavigationWrapper from './NavigationWrapper'
import ClientContent from './ClientContent'

export default function Page() {
  return (
    <>
      <NavigationWrapper />  {/* Fetches data */}
      <ClientContent />      {/* Has animations */}
    </>
  )
}

// ClientContent.tsx
'use client'
import { motion } from 'framer-motion'

export default function ClientContent() {
  return (
    <motion.div>
      {/* Animations here */}
    </motion.div>
  )
}
```

**Pattern:**
- Server components: Fetch Payload data
- Client components: Handle interactivity
- Separate them cleanly

---

## 4. React Rendering Errors

### Issue: React Error #31 - "Objects are not valid as a React child"

**Symptoms:**
```
Error: Objects are not valid as a React child
(found: object with keys {feature})
```

**Root Cause:**
Mismatch between CMS data structure and component expectations.

**Example:**

```typescript
// CMS Returns:
features: [
  { feature: "Text 1" },
  { feature: "Text 2" }
]

// Component Expects:
features: ["Text 1", "Text 2"]

// Component Tries to Render:
{features.map(item => <span>{item}</span>)}  // ❌ Renders object!
```

**Solution:**

Match component TypeScript types to CMS schema:

```typescript
// ✅ CORRECT
type Group = {
  features?: Array<{ feature: string }>  // Match CMS schema
}

// Render correctly
{features.map(item => (
  <span>{item.feature}</span>  // Extract the property
))}
```

**Debug Steps:**
1. Add console.log to see exact data structure
2. Update TypeScript types to match
3. Update rendering logic to extract nested properties

---

## 5. CORS & Authentication Issues

### Issue: CORS 403 Forbidden / Authentication Fails

**Symptoms:**
```
Access to fetch at 'https://site.vercel.app/api/users/me'
from origin 'https://other-site.vercel.app' has been blocked
```

**Root Cause:**
Missing `serverURL` in `payload.config.ts` - cookies don't work across domains.

**Solution:**

Add `serverURL` to config:

```typescript
// payload.config.ts
export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ||
             process.env.NEXT_PUBLIC_SERVER_URL ||
             '',  // ✅ Required for auth

  // Also configure CORS
  cors: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),

  csrf: [
    process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
  ].filter(Boolean),
})
```

**Environment Variables:**
```env
PAYLOAD_PUBLIC_SERVER_URL=https://your-site.vercel.app
NEXT_PUBLIC_SERVER_URL=https://your-site.vercel.app
```

---

## 6. Database Connection Issues

### Issue: "Cannot connect to database"

**Symptoms:**
- Site won't start
- Error: ECONNREFUSED
- Database timeout errors

**Solutions:**

### A. Check Environment Variables

```bash
# Verify variables are set
echo $POSTGRES_URL

# If empty, source .env file
set -a && . .env.local && set +a
```

### B. Verify Postgres URL Format

```env
# ✅ CORRECT
POSTGRES_URL=postgresql://user:pass@host.com/database?sslmode=require

# ❌ WRONG
POSTGRES_URL=postgresql://user@host.com  # Missing password
POSTGRES_URL=postgres://...              # Wrong protocol
```

### C. Check Vercel Postgres Connection

1. Go to Vercel Dashboard → Storage → Postgres
2. Click "Connect"
3. Copy connection strings
4. Update all `POSTGRES_*` variables

---

## Quick Diagnostic Commands

```bash
# Check environment
npm run dev 2>&1 | grep -i error

# Test database connection
# (Add to package.json scripts)
"test:db": "tsx -e 'import {getPayload} from \"payload\"; getPayload({config: require(\"./payload.config\").default}).then(() => console.log(\"✅ DB Connected\"))'"

# Check for missing dependencies
npm list payload @payloadcms/next

# Verify TypeScript compilation
npx tsc --noEmit
```

---

## Still Having Issues?

### Debug Checklist

- [ ] Clear `.next` cache: `rm -rf .next`
- [ ] Reinstall dependencies: `rm -rf node_modules && npm install`
- [ ] Check Node version: `node -v` (should be 18+)
- [ ] Verify all env variables are set
- [ ] Check browser console for errors
- [ ] Check server terminal for errors
- [ ] Try incognito mode (cache issues)

### Common "Gotchas"

1. **Forgot to run `generate:importmap`** after changing collections
2. **Using wrong environment** (local env in production)
3. **CORS issues** from wrong URLs
4. **Image paths** starting with `/` vs without
5. **TypeScript errors ignored** - they cause runtime errors!

---

## Prevention Checklist

Before deploying, always check:

- [ ] All globals have `update: isAdminOrEditor`
- [ ] `next.config.mjs` has image domains configured
- [ ] `payload.config.ts` has `serverURL` set
- [ ] Data fetching uses `depth: 2` for relationships
- [ ] Client/server components properly separated
- [ ] TypeScript types match CMS schemas
- [ ] Environment variables set in Vercel
- [ ] Seed script run on production (if needed)

---

## Getting More Help

- **Payload Docs:** https://payloadcms.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **This Project's Docs:** See `1-IMPLEMENTATION-GUIDE.md`
