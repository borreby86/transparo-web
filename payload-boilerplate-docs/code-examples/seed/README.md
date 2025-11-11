# Seed Script

This script populates your Payload CMS with initial content from your website.

## What it does

The seed script will:
1. Upload all required images to the Media collection
2. Create content for all CMS globals:
   - **Site Settings** - Contact info, logo, social media
   - **Navigation** - Menu items and CTA button
   - **Footer** - Brand info, links, contact, legal
   - **Home Page Content** - All homepage sections (hero, forbes, impact, process, target groups, testimonials, contact)

## How to run

### Locally

1. Make sure you have all dependencies installed:
   ```bash
   npm install
   ```

2. Make sure your `.env.local` file has the correct database connection:
   ```
   POSTGRES_URL=your-database-url
   PAYLOAD_SECRET=your-secret
   ```

3. Run the seed script:
   ```bash
   npm run seed
   ```

### On Vercel (Production)

To seed production with images stored in Vercel Blob Storage:

1. Pull production environment variables:
   ```bash
   vercel env pull .env.production
   ```

2. Run the seed script with production env:
   ```bash
   export $(cat .env.production | xargs) && npm run seed
   ```

3. Or, manually upload images through the admin panel:
   - Visit: https://your-site.vercel.app/admin
   - Go to Media collection
   - Upload images from `/public/images/`

**Important:** When seeding production, the script will upload images to Vercel Blob Storage using your `BLOB_READ_WRITE_TOKEN`.

## What happens after seeding

Once seeded:
- All CMS globals will be populated with your current website content
- You can edit content through `/admin`
- Changes save instantly and appear on the website
- No more "required field" validation errors

## Images

The script uploads these images:
- `horse-eye-hero.jpg` - Hero background
- `forbes-article-nobg.png` - Forbes section
- `leadership-horses.jpeg` - Impact & process sections
- `coaching-session.jpeg` - Impact & process sections
- `horse-course.jpeg` - Impact & process sections
- `team-workshop.jpeg` - Impact section
- `logo.png` - Navigation logo

Make sure these files exist in `/public/images/` before running the script.

## Troubleshooting

**Error: Image not found**
- Check that all images exist in `/public/images/`
- The script will warn but continue if images are missing

**Error: Database connection failed**
- Verify `POSTGRES_URL` in your `.env.local`
- Make sure the database is accessible

**Error: Payload initialization failed**
- Check that `PAYLOAD_SECRET` is set
- Verify all Payload dependencies are installed

## Re-running the script

You can safely run this script multiple times. It will:
- Update existing globals (not duplicate)
- Upload images only if they don't exist
