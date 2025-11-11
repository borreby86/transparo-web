# Transparo Website

**Tagline:** Unique designs. Built on trust.

Professional web design for Danish small businesses with zero scope creep guarantee.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Update database connection string
   - Generate a secure `PAYLOAD_SECRET`

   ```bash
   cp .env.example .env
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

---

## 📁 Project Structure

```
Transparo/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Homepage sections
│   └── ui/                # Reusable UI components
├── payload.config.ts      # Payload CMS configuration
├── tailwind.config.ts     # Tailwind CSS config
└── next.config.ts         # Next.js config
```

---

## 🎨 Tech Stack

- **Framework:** Next.js 15.5.6 (App Router)
- **CMS:** Payload CMS 3.62.1
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** PostgreSQL (Vercel Postgres)
- **Storage:** Vercel Blob Storage
- **Hosting:** Vercel
- **Language:** TypeScript

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Navy** | `#0E1D3D` | Main brand color, CTAs |
| **Black** | `#1A1A1A` | Text, logo |
| **Off-White** | `#FAFAFA` | Backgrounds |
| **Warm Gray** | `#A39B96` | Secondary elements |
| **Gold Accent** | `#B89245` | Highlights, premium feel |

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Other
npm run lint         # Run ESLint
```

---

## 📦 Homepage Sections

The homepage includes these sections:

1. **Hero Section** - Zero scope creep value proposition
2. **Trust Indicators** - 4 key trust signals
3. **Packages Section** - 3 pricing tiers with full features
4. **How It Works** - 4-week structured process
5. **Differentiators** - Why choose Transparo
6. **Social Proof** - Testimonials (placeholder)
7. **Final CTA** - Book discovery call

---

## 🎯 Key Features

### Animations
- Smooth scroll-triggered reveals (Framer Motion)
- Hover state transitions (200ms)
- Respects `prefers-reduced-motion`
- Hardware-accelerated (60fps)

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly (min 44px targets)

### Performance
- Optimized for Lighthouse 90+ scores
- Fast page loads (<2 seconds)
- Image optimization ready
- SEO-friendly meta tags

---

## 📝 Content Management

### Payload CMS
- Admin panel: `http://localhost:3000/admin`
- Collections: Pages, Media, Users
- Rich text editor with Lexical
- Image uploads with Vercel Blob

### Creating Content
1. Go to `/admin`
2. Login with admin credentials
3. Navigate to Pages or Media
4. Create/edit content
5. Changes are live immediately

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import repository
   - Add environment variables
   - Deploy

3. **Environment Variables:**
   - `DATABASE_URI` or `POSTGRES_URL`
   - `PAYLOAD_SECRET`
   - `BLOB_READ_WRITE_TOKEN`
   - `NEXT_PUBLIC_SERVER_URL`

---

## 🔐 Environment Variables

Required environment variables:

```env
# Database
DATABASE_URI=postgresql://user:password@host:5432/database
POSTGRES_URL=                    # Alternative to DATABASE_URI

# Payload CMS
PAYLOAD_SECRET=your-secret-key   # Generate a secure random string
NEXT_PUBLIC_SERVER_URL=https://your-domain.com

# Storage (Production only)
BLOB_READ_WRITE_TOKEN=vercel_blob_token
```

---

## 📱 Adding New Pages

To add a new page:

1. Create route in `app/` directory:
   ```typescript
   // app/pakker/page.tsx
   export default function PakkerPage() {
     return <div>Pakker content</div>
   }
   ```

2. Add to navigation in `components/layout/Header.tsx`

3. Update sitemap and SEO metadata

---

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  navy: { DEFAULT: '#0E1D3D' },
  gold: { DEFAULT: '#B89245' },
  // Add more colors
}
```

### Fonts
Update fonts in `app/layout.tsx`:

```typescript
import { Inter, Your_Font } from 'next/font/google'
```

### Components
All reusable components are in `components/ui/`:
- `Button.tsx` - CTA buttons
- `Card.tsx` - Content cards
- `Section.tsx` - Page sections

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Database Connection Issues
- Check `DATABASE_URI` in `.env`
- Ensure PostgreSQL is running
- Verify credentials are correct

### Build Errors
```bash
# Clean build cache
rm -rf .next
npm run build
```

---

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Payload CMS Docs](https://payloadcms.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 👥 Team

- **Dennis** - Design & Development
- **Christina** - Design & Development

---

## 📄 License

Copyright © 2025 Transparo. All rights reserved.

---

## 🚀 Next Steps

1. ✅ Homepage is complete
2. 📋 Create Pakker (Services) page
3. 📞 Create Kontakt (Contact) page
4. ℹ️ Create Om Os (About) page
5. 🔄 Create Proces page
6. 🖼️ Add real logo and images
7. 📝 Add real testimonials
8. 🚀 Deploy to production

---

**Built with ❤️ using AI-assisted development + expert design**
