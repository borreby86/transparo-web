# Web Design Company - AI Development Context

## Company Overview
Danish web design agency combining AI-driven development (Cursor/Windsurf) with expert design. Fixed-price packages targeting Danish SMBs with focus on preventing scope creep through structured processes.

## Target Market
- Danish small to medium businesses
- Modern, professional web presence
- Budget-conscious but quality-focused

---

## Core Technology Stack

### Required Stack (Non-Negotiable)
- **CMS**: Payload CMS (headless, Next.js-native)
- **Framework**: Next.js 15+ (App Router)
- **Hosting**: Vercel
- **Database**: MongoDB (via Vercel Postgres also supported)
- **Storage**: Vercel Blob Storage (for images/media)
- **Language**: TypeScript required
- **Styling**: Tailwind CSS

### CMS Documentation Location
**CRITICAL:** Always reference project knowledge for Payload CMS implementation:
- Quick Start Guide: `/mnt/project/2-QUICK-START-15MIN.md`
- Common Issues: `/mnt/project/3-COMMON-ISSUES.md`
- Admin Customization: `/mnt/project/4-ADMIN-CUSTOMIZATION.md`
- Adding to Existing Projects: `/mnt/project/5-ADDING-TO-EXISTING-PROJECT.md`
- Full Implementation Guide: `/mnt/project/Payload_CMS_Integration_Guide.docx`
- CMS Capabilities Guide: `/mnt/project/What_A_Professional_CMS_Can_Do.md`

**When working with Payload CMS:**
1. **ALWAYS** search project knowledge first before implementing
2. Reference the documented patterns and solutions
3. Follow the exact configuration from code examples
4. Check Common Issues doc if you encounter problems
5. Use the admin customization guide for branding

### Payload CMS Key Principles
- **Image Handling:** Always use `depth: 2` when fetching data with images
- **Collections:** Media, Pages, Posts are standard - customize per project
- **Admin URL:** Always `/admin` (never `/wp-admin`)
- **Access Control:** Properly configure read/update permissions
- **Client Training:** 30-45 minutes for admin panel training
- **Environment Variables:** Must be configured for database, storage, and secrets

---

## Animation Stack (Best-in-Class)

### Primary: Motion (formerly Framer Motion)
- **Default animation library for ALL projects**
- React-first, Next.js-optimized
- Hardware-accelerated, 60fps guaranteed
- MIT licensed (no restrictions)
- Modern, declarative API
- Smallest bundle size when tree-shaken
- **Most popular and fastest-growing animation library in 2025**

**Install:**
```bash
npm install motion
```

**When to Use Motion (95% of projects):**
- Page transitions (all projects)
- Component animations (cards, buttons, modals)
- Scroll-triggered reveals
- Layout animations
- Hover/tap interactions
- List animations (stagger effects)

### Secondary: GSAP (Special Cases Only)
- Only for complex timeline-based animations
- Story-driven scrolling experiences
- Advanced SVG animations
- Complex sequential animations
- **Use sparingly - Motion handles most needs**

### Utility: AutoAnimate
- Zero-config animations for lists/simple UI changes
- Use for admin panels, dashboards
- When animation is needed but not the focus

### Performance-First Animation Principles

**Always Follow These Rules:**
1. **Hardware-Accelerated Only**: Animate `transform`, `opacity`, `filter` - NEVER animate `width`, `height`, `top`, `left`
2. **Respect Accessibility**: Always implement `prefers-reduced-motion`
3. **Keep It Fast**: Interactions under 300ms, transitions under 600ms
4. **Test on Mobile**: Animations must be smooth on mid-range Android devices
5. **Lazy Load**: Load animation libraries only when needed
6. **60fps or Don't Ship**: No exceptions

---

## Package-Level Guidelines

### All Packages Get Premium Quality
- We deliver the BEST possible experience regardless of price
- Use Motion for all animation needs
- Professional, smooth, purposeful animations
- Payload CMS with full admin customization
- Never skimp on performance or quality
- **Package price determines SCOPE, not QUALITY**

### Essentials (8,995 DKK)
**Animations:**
- Clean page transitions
- Smooth hover states on buttons/links
- Fade-in on scroll for key sections
- Professional micro-interactions
- **Estimated animation time: 2-3 hours**

**CMS:**
- Basic Pages collection
- Media uploads
- Simple content structure
- Admin panel with client branding
- **Training: 30 minutes**

### Professional (16,995 DKK)
**Animations:**
- Everything in Essentials
- Parallax effects (subtle, performant)
- Staggered list animations
- Interactive hover effects
- Animated reveals
- **Estimated animation time: 4-6 hours**

**CMS:**
- Pages + Blog + Portfolio collections
- Advanced custom fields
- Rich text editor
- SEO metadata
- Image optimization
- **Training: 45 minutes**

### Business (27,995 DKK)
**Animations:**
- Everything in Professional
- Custom scroll-driven narratives
- Advanced interactive experiences
- Complex transitions between sections
- GSAP for story-telling if needed
- **Estimated animation time: 8-12 hours**

**CMS:**
- Full multi-collection setup
- Team members, testimonials, services
- Advanced relationships between content
- Custom admin workflows
- Comprehensive training materials
- **Training: 60 minutes + documentation**

---

## Code Examples & Patterns

### Motion Animation Examples

**Basic Fade In:**
```typescript
import { motion } from 'motion/react'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

**Scroll Reveal (Use Everywhere):**
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  Content
</motion.div>
```

**Stagger Children (Lists):**
```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.div variants={container} initial="hidden" animate="show">
  {items.map(item => (
    <motion.div key={item.id} variants={item}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Accessibility-First:**
```typescript
'use client'

import { motion, useReducedMotion } from 'motion/react'

export function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : 0.5 
      }}
    >
      Content
    </motion.div>
  )
}
```

**Page Transitions (Next.js App Router):**
```typescript
// app/template.tsx
'use client'

import { motion } from 'motion/react'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
```

### Payload CMS Patterns

**Fetching Data with Images:**
```typescript
import { getPayload } from 'payload'

const payload = await getPayload()

const data = await payload.find({
  collection: 'pages',
  where: { slug: { equals: 'about' } },
  depth: 2, // CRITICAL: Required for image URLs
})
```

**Admin Panel Customization:**
```typescript
// payload.config.ts
export default buildConfig({
  admin: {
    meta: {
      titleSuffix: '- Client Name',
      favicon: '/favicon.ico',
    },
    components: {
      graphics: {
        Logo: './src/admin/Logo',
      },
    },
  },
})
```

**Field with Client Instructions:**
```typescript
{
  name: 'title',
  type: 'text',
  required: true,
  label: '📄 Page Title',
  maxLength: 60,
  admin: {
    description: 'The main title of your page. Keep it between 50-60 characters for best SEO.',
    placeholder: 'Enter your page title...',
  },
}
```

---

## Quality Standards (ALL Packages)

### Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 100
- First Contentful Paint: <1.5s
- Interaction to Next Paint: <200ms
- Cumulative Layout Shift: <0.1

### Animation Quality Checklist
- [ ] All animations at 60fps (test on mobile)
- [ ] Respects `prefers-reduced-motion`
- [ ] No layout shift during animations
- [ ] Animations add value (not decoration)
- [ ] Loading states are animated
- [ ] Interactions feel instant (<100ms feedback)

### CMS Quality Checklist
- [ ] Admin panel has client branding
- [ ] All fields have clear descriptions
- [ ] Images configured with depth: 2
- [ ] Access controls properly set
- [ ] Training materials prepared
- [ ] Client can login and edit successfully

---

## Development Philosophy

### Quality Over Price
- **Every client gets the best technology**
- Package price determines scope, not quality
- Motion is used for ALL projects
- Payload CMS is always fully configured
- Professional animations enhance conversion rates
- Good UX = fewer support tickets = better business

### Scope Management (CRITICAL)
- Animation estimates built into each package
- CMS collections defined before starting
- Hours allocated based on package tier
- Additional features = additional cost
- Client sign-off before adding motion/collections
- Document all features in spec

### Documentation First
- Always check project knowledge before implementing
- Reference established patterns
- Follow the boilerplate structure
- Document client-specific customizations
- Create training materials for each client

---

## Client Communication

### Explaining Our Tech Stack
**CMS:**
- "Your website uses Payload CMS - the same modern technology used by enterprise companies"
- "You can edit content yourself through a clean admin panel at yoursite.com/admin"
- "No more WordPress plugins or security issues"
- "Training takes 30-45 minutes - it's very intuitive"

**Animations:**
- "Smooth transitions guide users through your site"
- "Professional motion increases trust and conversion"
- "All animations are optimized for mobile performance"
- "We use Motion - the same library used by Apple and Tesla websites"

### Setting Expectations
**CMS:**
- Content changes take 1-2 minutes to go live
- Admin panel is accessible 24/7
- No technical knowledge required
- Training is included in all packages
- Changes won't break the website

**Animations:**
- Animations enhance UX, not replace content
- Subtle is better than flashy
- Mobile performance is priority #1
- Accessibility is non-negotiable
- All animations are tested on real devices

---

## Workflow & Process

### Starting a New Project

1. **Kickoff (Day 1)**
   - Review project scope document
   - Identify CMS collections needed
   - Estimate animation complexity
   - Set up Next.js + Payload boilerplate

2. **CMS Setup (Day 1-2)**
   - Configure collections (reference Quick Start guide)
   - Set up admin branding
   - Create seed data if migrating
   - Test admin panel

3. **Development (Week 1-2)**
   - Build components with Motion animations
   - Integrate CMS data fetching
   - Implement scroll reveals
   - Test on mobile devices

4. **Client Handoff (Final Week)**
   - Conduct admin training (30-60 min)
   - Provide training documentation
   - Do final QA
   - Deploy to production

### When Issues Arise

1. **Check Project Knowledge First**
   - Search `/mnt/project/3-COMMON-ISSUES.md`
   - Review implementation examples
   - Check admin customization guide

2. **Common CMS Issues:**
   - Images not loading? Check `depth: 2`
   - Permission errors? Check access controls
   - Build failing? Check environment variables

3. **Common Animation Issues:**
   - Janky motion? Check hardware acceleration
   - Layout shift? Use Motion layout animations
   - Slow on mobile? Reduce animation complexity

---

## Anti-Patterns to Avoid

### CMS
- ❌ Don't skip `depth: 2` for images (they won't load)
- ❌ Don't forget access controls (clients can't edit)
- ❌ Don't skip admin customization (looks unprofessional)
- ❌ Don't deploy without testing admin panel
- ❌ Don't forget to train the client

### Animations
- ❌ Don't animate width/height (causes reflow)
- ❌ Don't use animations as loading indicators only
- ❌ Don't add animations that don't serve a purpose
- ❌ Don't forget `prefers-reduced-motion`
- ❌ Don't use GSAP when Motion will do
- ❌ Don't animate everything (choice is powerful)
- ❌ Don't sacrifice performance for "cool" effects

### General
- ❌ Don't start coding without checking documentation
- ❌ Don't skip mobile testing
- ❌ Don't ignore accessibility
- ❌ Don't deploy without client sign-off
- ❌ Don't over-promise on timeline

---

## Resources & Documentation

### Internal Documentation
- Quick Start Guide: `/mnt/project/2-QUICK-START-15MIN.md`
- Common Issues: `/mnt/project/3-COMMON-ISSUES.md`
- Admin Customization: `/mnt/project/4-ADMIN-CUSTOMIZATION.md`
- Migration Guide: `/mnt/project/5-ADDING-TO-EXISTING-PROJECT.md`
- CMS Integration: `/mnt/project/Payload_CMS_Integration_Guide.docx`

### Official Documentation
- **Payload CMS:** https://payloadcms.com/docs
- **Motion:** https://motion.dev
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

### Design Inspiration
- https://www.awwwards.com (but keep it realistic)
- https://land-book.com
- Apple.com (gold standard for web animations)

---

## Success Metrics

### Technical
- Page load time with animations: <2s
- Animation frame rate: 60fps constant
- Lighthouse scores: 90+ all categories
- CMS admin load time: <1s
- Image optimization: WebP with fallbacks

### Business
- Client can edit content independently: Yes
- Support tickets reduced: 50%+
- Client satisfaction: High-quality feel
- Zero performance complaints
- Positive feedback on admin panel

### Client Experience
- Admin training completion: 30-45 min
- First successful content edit: Within 24 hours
- Comfort level after 1 week: Independent
- Additional training needed: Minimal

---

## Critical Reminders

1. **Always Check Documentation First**
   - Project knowledge has battle-tested solutions
   - Common issues are already documented
   - Don't reinvent the wheel

2. **Motion is the Default**
   - Use for 95% of animation needs
   - Don't overthink it
   - Performance > Flashiness

3. **CMS Configuration Matters**
   - `depth: 2` for images - always
   - Access controls must be set
   - Admin branding is non-negotiable

4. **Quality is Constant**
   - Every client gets the best tech
   - Package determines scope, not quality
   - Professional appearance at every price point

5. **Mobile First**
   - Test on real devices
   - Animations must be smooth
   - Admin panel must work on tablets

6. **Documentation Saves Time**
   - 15 minutes reading docs = 2 hours saved
   - Reference patterns prevent errors
   - Common issues already solved

---

**Remember: We build websites that feel expensive, regardless of the package price. Motion animations and Payload CMS are key parts of that perception.**

**When in doubt, check `/mnt/project/` documentation first!**