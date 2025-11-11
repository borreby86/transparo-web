# New Client Website - 15 Minute Payload CMS Setup

**Last Updated:** November 10, 2025
**Tested With:** Next.js 15.5.6, Payload CMS 3.62.1, Vercel Deployment

This guide will help you set up a fully functional Payload CMS website in 15 minutes.

---

## Prerequisites

Before starting, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Vercel account (free tier is fine)
- ✅ Git installed
- ✅ Code editor (VS Code recommended)

---

## Step 1: Clone & Install Dependencies (3 minutes)

```bash
# 1. Create new Next.js project
npx create-next-app@latest client-website-name
# Choose: TypeScript, App Router, Tailwind CSS

# 2. Navigate to project
cd client-website-name

# 3. Install Payload CMS dependencies
npm install payload @payloadcms/next @payloadcms/db-vercel-postgres @payloadcms/richtext-lexical @payloadcms/storage-vercel-blob sharp graphql

# 4. Install dev dependencies
npm install -D tsx @types/node
```

---

## Step 2: Configure Environment Variables (2 minutes)

### 2.1 Create `.env.local` file

```bash
# Create file
touch .env.local
```

### 2.2 Add these variables:

```env
# Payload Secret (generate with: openssl rand -base64 32)
PAYLOAD_SECRET=your-secret-here

# Database - Get from Vercel Storage
POSTGRES_URL=your-postgres-url
POSTGRES_DATABASE_URL=your-postgres-url

# Vercel Blob Storage - Get from Vercel
BLOB_READ_WRITE_TOKEN=your-blob-token

# Server URLs
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
```

### 2.3 Setup Vercel Storage (via Vercel Dashboard)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Create new project (or select existing)
3. Go to Storage tab
4. **Add Postgres Database** (Neon)
   - Copy connection strings to `.env.local`
5. **Add Blob Storage**
   - Copy `BLOB_READ_WRITE_TOKEN` to `.env.local`

---

## Step 3: Copy Payload Configuration Files (5 minutes)

### 3.1 Project Structure

Create this folder structure:

```
your-project/
├── app/
│   ├── (site)/          # Public website
│   └── api/             # (auto-created by Payload)
├── src/
│   ├── access/          # Permission functions
│   ├── collections/     # Media collection
│   ├── globals/         # CMS content schemas
│   └── lib/
│       └── payload.ts   # Data fetching utilities
├── components/          # React components
├── scripts/
│   └── seed.ts          # Data migration script
├── payload.config.ts    # Main Payload config
├── next.config.mjs      # Next.js config
└── .env.local
```

### 3.2 Copy Core Files

From the boilerplate repo, copy these files:

**Required Files (Priority 1):**
1. `payload.config.ts` → root
2. `next.config.mjs` → root (merge with existing)
3. `src/access/isAdminOrEditor.ts`
4. `src/collections/Media.ts`
5. `src/lib/payload.ts`

**Content Schema Files (Priority 2):**
6. `src/globals/SiteSettings.ts`
7. `src/globals/Navigation.ts`
8. `src/globals/Footer.ts`
9. `src/globals/HomePageContent.ts`

**Optional (add as needed):**
- Additional page content globals
- Additional collections (Blog, Team, Services, etc.)

---

## Step 4: Update package.json Scripts (1 minute)

Add these scripts to your `package.json`:

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

---

## Step 5: Initialize Database & Run Locally (2 minutes)

```bash
# 1. Generate Payload import map (required for v3)
npm run generate:importmap

# 2. Start dev server
npm run dev
```

**First run will:**
- ✅ Auto-create database tables
- ✅ Start Next.js on http://localhost:3000
- ✅ Start Payload admin on http://localhost:3000/admin

### 5.1 Create Admin User

1. Visit http://localhost:3000/admin
2. Create your admin account:
   - Email: your@email.com
   - Password: (secure password)
3. Login to admin panel

---

## Step 6: Seed Content (Optional - 2 minutes)

If migrating from hardcoded content:

```bash
# 1. Copy seed script
# (from boilerplate-docs/code-examples/seed/seed.ts)

# 2. Place images in public/images/

# 3. Run seed script
npm run seed
```

This will populate all CMS globals with your content.

---

## Step 7: Deploy to Vercel (5 minutes)

### 7.1 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit with Payload CMS"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 7.2 Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. **Add Environment Variables:**
   - Click "Environment Variables"
   - Add all variables from `.env.local` (except localhost URLs)
   - Update `NEXT_PUBLIC_SERVER_URL` to your Vercel URL
   - Update `PAYLOAD_PUBLIC_SERVER_URL` to your Vercel URL

### 7.3 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes
3. Visit `your-site.vercel.app/admin`

### 7.4 Seed Production (if needed)

```bash
# Pull production environment variables
vercel env pull .env.production

# Seed production database
set -a && . .env.production && set +a && npm run seed
```

---

## ✅ Checklist - You're Done When:

- [ ] Local dev server runs without errors
- [ ] Can access `/admin` panel
- [ ] Can create/edit content in admin
- [ ] Images upload successfully
- [ ] Content appears on frontend
- [ ] Site deploys to Vercel
- [ ] Production admin panel works
- [ ] Production images load correctly

---

## 🎉 Success!

Your Payload CMS website is live!

**Next Steps:**
- Customize your content schemas in `src/globals/`
- Build your frontend components
- Style with Tailwind CSS
- Add more collections as needed

---

## Need Help?

See `3-COMMON-ISSUES.md` for troubleshooting.

---

## Time Breakdown

| Step | Task | Time |
|------|------|------|
| 1 | Clone & Install | 3 min |
| 2 | Environment Setup | 2 min |
| 3 | Copy Config Files | 5 min |
| 4 | Update Scripts | 1 min |
| 5 | Run Locally | 2 min |
| 6 | Seed Content | 2 min |
| 7 | Deploy | 5 min |
| **Total** | | **15-20 min** |
