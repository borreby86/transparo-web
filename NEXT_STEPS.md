# Next Steps for Transparo Website

## ✅ What's Done

The homepage is complete with:
- ✅ Full Next.js 15 + Payload CMS 3 setup
- ✅ Header with mobile navigation
- ✅ Hero section with zero scope creep messaging
- ✅ Trust indicators strip
- ✅ 3 pricing packages with full features
- ✅ 4-week process timeline
- ✅ Differentiators section
- ✅ Social proof placeholders
- ✅ Final CTA section
- ✅ Footer with contact info
- ✅ Responsive design (mobile-first)
- ✅ Smooth animations with Framer Motion
- ✅ Brand colors and typography

---

## 🚀 Immediate Actions (Before You Can Launch)

### 1. Set Up Database
The site needs a PostgreSQL database to run Payload CMS.

**Option A: Local Development**
```bash
# Install PostgreSQL locally
# Create database
createdb transparo

# Update .env
DATABASE_URI=postgresql://localhost:5432/transparo
```

**Option B: Vercel Postgres (Recommended)**
1. Go to [vercel.com/storage](https://vercel.com/storage)
2. Create new Postgres database
3. Copy connection string to `.env`

### 2. Add Your Logo
Replace the text logo in these files:
- `components/layout/Header.tsx` (line 30-36)
- `components/layout/Footer.tsx` (line 13-18)

**Your logo location:** Place SVG/PNG in `/public/logo.svg`

### 3. Update Contact Information
Edit `components/layout/Footer.tsx`:
- Line 54: Email address
- Line 61: Phone number
- Line 68: Location

### 4. Generate Secure PAYLOAD_SECRET
```bash
# Generate a secure random string
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Add to `.env`:
```
PAYLOAD_SECRET=<generated-string>
```

---

## 📋 Content Tasks (Can Do Now)

### Replace Placeholder Content

1. **Hero Section** (`components/sections/HeroSection.tsx`)
   - Add real hero image/graphic
   - Refine Danish copy if needed

2. **Testimonials** (`components/sections/SocialProofSection.tsx`)
   - Replace with real client testimonials
   - Add client photos/logos
   - Remove "placeholder" disclaimer

3. **About Section**
   - Add team photos (Dennis & Christina)
   - Write your story

---

## 🎨 Design Assets Needed

### Priority
- [ ] Transparo logo (SVG format preferred)
- [ ] Favicon (create from logo)
- [ ] Hero section image/graphic
- [ ] Team photos (300x300px minimum)

### Nice to Have
- [ ] Client logos for social proof
- [ ] Process illustrations
- [ ] Custom icons

### Where to Add Assets
```
/public/
  ├── logo.svg
  ├── favicon.ico
  ├── images/
  │   ├── hero.jpg
  │   ├── team/
  │   │   ├── dennis.jpg
  │   │   └── christina.jpg
  │   └── clients/
```

---

## 📄 Additional Pages to Build

### 1. Pakker (Packages) Page
**Priority:** HIGH
- Full feature comparison table
- Detailed explanation of each package
- Add-ons pricing
- FAQ section
- CTA to book discovery call

### 2. Kontakt (Contact) Page
**Priority:** HIGH
- Contact form (need to set up email service)
- Calendly embed for booking
- Office location (if applicable)
- Alternative contact methods

### 3. Proces (Process) Page
**Priority:** MEDIUM
- Detailed day-by-day breakdown
- Sign-off points explained
- Client time commitment
- What to expect at each stage

### 4. Om Os (About) Page
**Priority:** MEDIUM
- Your story (why you started)
- Team intro (Dennis & Christina)
- Values and approach
- AI + Expert model explained

### 5. Portfolio Page
**Priority:** LOW (can launch without)
- Case studies (add as you complete projects)
- "Coming Soon" is fine initially

---

## 🔧 Technical Setup

### 1. Test the Site
```bash
# Make sure dev server is running
npm run dev

# Visit http://localhost:3003
# Test all sections
# Check mobile responsiveness
# Test navigation
```

### 2. Set Up Git (If Not Done)
```bash
git init
git add .
git commit -m "Initial Transparo website"
git remote add origin <your-github-repo>
git push -u origin main
```

### 3. Deploy to Vercel
1. Connect GitHub repo to Vercel
2. Add environment variables
3. Deploy
4. Test production site

---

## 📧 Email & Forms

You'll need to set up email functionality for:
- Contact form submissions
- Discovery call confirmations
- Client notifications

**Recommended Services:**
- [Resend](https://resend.com) - Modern email API
- [SendGrid](https://sendgrid.com) - Reliable email service
- [Mailgun](https://mailgun.com) - Developer-friendly

---

## 📊 Analytics & Tracking

### Add Google Analytics
1. Get GA4 tracking ID
2. Add to `.env`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Install analytics package:
   ```bash
   npm install @next/third-parties
   ```

### GDPR Cookie Consent
Consider adding:
- Cookie consent banner
- Privacy policy page
- Terms & conditions page

---

## 🎯 Pre-Launch Checklist

### Content
- [ ] All Danish copy reviewed and approved
- [ ] Contact information is correct
- [ ] Pricing is finalized
- [ ] Logo is added
- [ ] Favicon is set

### Technical
- [ ] Database is connected
- [ ] Payload CMS admin works
- [ ] All pages load correctly
- [ ] Mobile version works perfectly
- [ ] Forms submit successfully
- [ ] Email notifications work

### Legal
- [ ] Privacy policy created
- [ ] Cookie consent implemented
- [ ] Terms & conditions written
- [ ] GDPR compliance reviewed

### Performance
- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] Page load under 2 seconds
- [ ] No console errors

### SEO
- [ ] Meta descriptions written
- [ ] OpenGraph images set
- [ ] Sitemap generated
- [ ] robots.txt configured

---

## 🚀 Launch Day

1. **Final checks:**
   - Test all forms
   - Verify contact info
   - Check mobile version
   - Test booking calendar

2. **Deploy:**
   - Push to production
   - Verify environment variables
   - Monitor for errors

3. **Announce:**
   - Update social media
   - Email existing contacts
   - Update business cards
   - Add to portfolios

---

## 📞 Need Help?

### Common Issues

**"Database connection error"**
- Check `DATABASE_URI` in `.env`
- Ensure database exists
- Verify credentials

**"Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"Port in use"**
```bash
npx kill-port 3000
```

### Resources
- Next.js Docs: https://nextjs.org/docs
- Payload CMS Docs: https://payloadcms.com/docs
- Tailwind Docs: https://tailwindcss.com/docs

---

## 🎉 You're Almost There!

The homepage is built and ready. Focus on:
1. ✅ Getting database connected
2. ✅ Adding your logo
3. ✅ Building Kontakt page (for conversions)
4. ✅ Testing everything
5. ✅ Deploy!

**Estimated time to launch:** 2-3 days if you focus on essentials.

Good luck! 🚀
