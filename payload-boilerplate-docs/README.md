# Payload CMS Boilerplate Documentation

**Version:** 2.0 (Phase 1 Complete)
**Date:** November 10, 2025
**Stack:** Next.js 15.5.6 + Payload CMS 3.62.1 + Vercel + Resend

This boilerplate was created after successfully implementing Payload CMS in production environments. It contains everything needed to set up a professional CMS-managed website with advanced features including SEO, email notifications, versioning, and blog functionality.

---

## 📚 Documentation Files

### Start Here

1. **[2-QUICK-START-15MIN.md](./2-QUICK-START-15MIN.md)** ⭐
   - **15-minute setup guide**
   - Step-by-step checklist
   - Perfect for starting new projects
   - **Use this first!**

2. **[5-ADDING-TO-EXISTING-PROJECT.md](./5-ADDING-TO-EXISTING-PROJECT.md)** 🔄
   - **Add CMS to existing sites**
   - Migration guide (2-3 hours)
   - Seed script tutorial
   - Zero-downtime deployment
   - **For sites already built!**

3. **[3-COMMON-ISSUES.md](./3-COMMON-ISSUES.md)** 🔧
   - All problems we encountered and solutions
   - Quick troubleshooting reference
   - Save hours of debugging

4. **[4-ADMIN-CUSTOMIZATION.md](./4-ADMIN-CUSTOMIZATION.md)** 🎨
   - Customize admin panel
   - Add client branding
   - Professional polish tips

5. **[1-IMPLEMENTATION-GUIDE.md](./1-IMPLEMENTATION-GUIDE.md)** 📖
   - Complete technical documentation
   - Architecture decisions
   - Advanced topics
   - Reference material

6. **[What_A_Professional_CMS_Can_Do.md](./What_A_Professional_CMS_Can_Do.md)** 💼
   - **Complete CMS capabilities guide**
   - 17 levels: Basic to Enterprise
   - Real-world use cases
   - Sales strategies & pitches
   - Client objection handling
   - **Perfect for selling CMS to clients!**

---

## 📦 Code Examples

All working code from the successful implementation:

```
code-examples/
├── payload.config.ts          # Main Payload configuration
├── next.config.mjs            # Next.js configuration
├── .env.example               # Environment variables template
├── collections/
│   └── Media.ts               # Image upload handling
├── lib/
│   └── payload.ts             # Data fetching utilities
└── seed/
    ├── seed.ts                # Data migration script
    └── README.md              # How to use seed script
```

---

## 🚀 Quick Start

**Want to start a new project right now?**

```bash
# 1. Create project
npx create-next-app@latest my-client-website
cd my-client-website

# 2. Install Payload and dependencies
npm install payload @payloadcms/next @payloadcms/db-vercel-postgres @payloadcms/richtext-lexical @payloadcms/storage-vercel-blob sharp graphql resend

# 3. Copy configuration files
# (From code-examples/ folder)

# 4. Setup environment
cp .env.example .env.local
# Fill in database and storage credentials

# 5. Run
npm run dev
```

**Then follow:** [2-QUICK-START-15MIN.md](./2-QUICK-START-15MIN.md)

---

## 💡 What's Included

### Core Features

- ✅ **Payload CMS 3.x** - Latest version
- ✅ **Next.js 15** - App Router
- ✅ **Vercel Postgres** - Serverless database
- ✅ **Vercel Blob Storage** - CDN for images
- ✅ **TypeScript** - Full type safety
- ✅ **Image Optimization** - Auto-resizing
- ✅ **Admin Panel** - `/admin` route
- ✅ **Seed Script** - Migrate existing content
- ✅ **Access Control** - Admin permissions

### Professional Features (Phase 1)

- ✅ **SEO System** - Complete SEO optimization
  - Reusable SEO fields (meta title, description, OG images)
  - Site-wide SEO settings global
  - Google Analytics, Tag Manager, Search Console integration
  - Schema.org structured data
- ✅ **Email Notifications** - Resend integration
  - Professional HTML email templates
  - Auto-notify on form submissions
  - Customizable sender/recipient
- ✅ **Version History** - All globals tracked
  - 50 versions per document
  - Restore previous versions
  - Compare changes
- ✅ **Blog System** - Full blogging functionality
  - Posts with rich text editor
  - Categories and tags
  - Auto-calculated reading time
  - SEO optimized
- ✅ **URL Redirects** - SEO-friendly redirect management
  - 301/302/307/308 support
  - Hit tracking
  - Priority system

### Pre-configured Collections

- **Media** - Image uploads with auto-resize
- **Users** - Admin accounts
- **FormSubmissions** - Contact forms with email notifications
- **Posts** - Blog posts with rich text, reading time, SEO
- **Categories** - Blog categories with SEO
- **Redirects** - URL redirect management for SEO

### Pre-configured Globals

- **Site Settings** - Logo, contact info, social media (with versioning)
- **SEO Settings** - Site-wide SEO, analytics, verification codes
- **Navigation** - Menu items, CTA button (with versioning)
- **Footer** - Links, copyright, legal (with versioning)
- **Page Content** - Homepage, About, Contact, Erhverv, Private (all with SEO + versioning)

---

## 🎯 Use Cases

**Perfect for:**
- Client websites (agency use)
- Small business sites
- Landing pages with CMS
- Content-managed portfolios
- Marketing sites

**Not ideal for:**
- E-commerce (use Shopify/WooCommerce)
- Complex applications
- Real-time apps
- User-generated content platforms

---

## ⚡ Key Decisions Made

### Why Vercel Postgres?
- Serverless (scales automatically)
- Generous free tier
- Easy setup
- Reliable

### Why Vercel Blob Storage?
- CDN included
- Simple API
- Integrates with Next.js Image
- Cost-effective

### Why Payload v3?
- Modern architecture
- TypeScript-first
- Great admin UI
- Active development

### Why Globals over Collections?
- Page content is singleton (only one homepage)
- Simpler for clients to edit
- No pagination needed
- Cleaner admin UI

---

## 🔧 Customization

### Adding a New Page

1. Create global in `src/globals/NewPage.ts`
2. Add to `payload.config.ts` globals array
3. Create getter in `src/lib/payload.ts`
4. Build page component
5. Fetch data in page

### Adding a Blog

1. Create `src/collections/Posts.ts`
2. Add to `payload.config.ts` collections
3. Create list page: `app/blog/page.tsx`
4. Create single post page: `app/blog/[slug]/page.tsx`

### Adding More Image Sizes

Edit `src/collections/Media.ts`:
```typescript
imageSizes: [
  {
    name: 'og-image',
    width: 1200,
    height: 630,
  },
]
```

---

## 📊 Performance

**Typical Performance:**
- Admin panel load: ~1s
- API response: ~200ms
- Image optimization: Automatic
- CDN delivery: Global

**Optimization Tips:**
- Use Next.js Image component
- Enable ISR with revalidate
- Optimize image sizes in Media collection
- Use depth: 1 when depth: 2 not needed

---

## 🐛 Troubleshooting

**See [3-COMMON-ISSUES.md](./3-COMMON-ISSUES.md) for:**
- Permission errors
- Image loading problems
- Build errors
- CORS issues
- Database connection problems

**Quick Fixes:**
```bash
# Clear cache
rm -rf .next

# Regenerate import map
npm run generate:importmap

# Reinstall
rm -rf node_modules && npm install
```

---

## 📈 Roadmap / Future Improvements

**Phase 1 - Complete ✅**
- [x] Blog collection with reading time
- [x] Categories collection
- [x] Email notification system
- [x] SEO meta tags global
- [x] Versioning on all globals
- [x] URL redirects collection

**Phase 2 - Potential Additions:**
- [ ] Team members collection
- [ ] Services/Portfolio collection
- [ ] Testimonials collection
- [ ] Multi-language support
- [ ] Custom dashboard widgets
- [ ] Advanced analytics dashboard
- [ ] Content scheduling
- [ ] A/B testing framework

---

## 🤝 Contributing

**Found an issue or improvement?**
1. Document it in 3-COMMON-ISSUES.md
2. Update relevant code examples
3. Test thoroughly
4. Update this README

---

## 📝 License

Free to use for your agency or personal projects.

---

## 🙏 Credits

Built with industry best practices and real-world production experience.

**Tech Stack:**
- [Payload CMS](https://payloadcms.com)
- [Next.js](https://nextjs.org)
- [Vercel](https://vercel.com)
- [TypeScript](https://www.typescriptlang.org)

---

## 📞 Support

**Questions?**
- Check [3-COMMON-ISSUES.md](./3-COMMON-ISSUES.md)
- Review [1-IMPLEMENTATION-GUIDE.md](./1-IMPLEMENTATION-GUIDE.md)
- Search [Payload Docs](https://payloadcms.com/docs)
- Search [Next.js Docs](https://nextjs.org/docs)

---

**Last Updated:** November 10, 2025
**Version:** 2.0 (Phase 1 Complete)
**Tested With:** Next.js 15.5.6, Payload CMS 3.62.1, Resend 6.4.2
