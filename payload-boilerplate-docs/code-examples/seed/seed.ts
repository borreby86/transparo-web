/**
 * SEED SCRIPT - TEMPLATE EXAMPLE
 *
 * ⚠️ IMPORTANT: This file contains EXAMPLE content for demonstration purposes.
 *
 * Before using this script in your project:
 * 1. Replace all placeholder text with your actual client's content
 * 2. Update image paths to match your project's images
 * 3. Customize the data structure to match your globals schema
 * 4. Test locally before running in production
 *
 * This script uploads images and populates CMS globals with initial content.
 * It's designed to migrate hardcoded content into your Payload CMS.
 */

import { getPayload } from 'payload'
import config from '../payload.config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper to upload an image file
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
      data: {
        alt,
      },
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

    // Upload images (avoiding duplicates)
    console.log('📤 Uploading images...')
    const heroImage = await uploadImage(payload, 'images/horse-eye-hero.jpg', 'Hero background - horse eye')
    const forbesImage = await uploadImage(payload, 'images/forbes-article-nobg.png', 'Forbes article')
    const impactImage1 = await uploadImage(payload, 'images/leadership-horses.jpeg', 'Leadership with horses')
    const impactImage2 = await uploadImage(payload, 'images/coaching-session.jpeg', 'Coaching session')
    const impactImage3 = await uploadImage(payload, 'images/horse-course.jpeg', 'Horse course')
    const impactImage4 = await uploadImage(payload, 'images/team-workshop.jpeg', 'Team workshop')
    const logoImage = await uploadImage(payload, 'images/logo.png', 'Company logo')

    // Reuse images for process section
    const processImage1 = impactImage2  // coaching-session.jpeg
    const processImage2 = impactImage3  // horse-course.jpeg
    const processImage3 = impactImage1  // leadership-horses.jpeg

    console.log('\n📝 Creating globals...\n')

    // 1. Site Settings
    console.log('Creating Site Settings...')
    await payload.updateGlobal({
      slug: 'siteSettings',
      data: {
        contactEmail: 'contact@yourclient.com',
        contactPhone: '+45 12 34 56 78',
        logo: logoImage,
        socialMedia: {
          linkedin: 'https://linkedin.com/in/yourcompany',
          facebook: 'https://facebook.com/yourcompany',
          instagram: 'https://instagram.com/yourcompany',
        },
      },
    })
    console.log('✅ Site Settings created\n')

    // 2. Navigation
    console.log('Creating Navigation...')
    await payload.updateGlobal({
      slug: 'navigation',
      data: {
        mainNav: [
          { label: 'Services', href: '/services' },
          { label: 'About', href: '/about' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact', href: '/contact' },
        ],
        ctaButtonText: 'Get Started',
        ctaButtonLink: '/contact',
      },
    })
    console.log('✅ Navigation created\n')

    // 3. Footer
    console.log('Creating Footer...')
    await payload.updateGlobal({
      slug: 'footer',
      data: {
        brandHeading: 'Your Company Name',
        brandTagline: 'Your company tagline or mission statement goes here.',
        navigationHeading: 'Navigation',
        navigationLinks: [
          { label: 'Services', href: '/services' },
          { label: 'About', href: '/about' },
          { label: 'Portfolio', href: '/portfolio' },
          { label: 'Blog', href: '/blog' },
        ],
        contactHeading: 'Contact',
        showEmail: true,
        showPhone: true,
        ctaButtonText: 'Get Started',
        ctaButtonLink: '/contact',
        copyrightText: '© {year} Your Company Name. All rights reserved.',
        legalLinks: [
          { label: 'Privacy Policy', href: '/privacy' },
          { label: 'Terms & Conditions', href: '/terms' },
        ],
      },
    })
    console.log('✅ Footer created\n')

    // 4. Home Page Content
    console.log('Creating Home Page Content...')
    await payload.updateGlobal({
      slug: 'homePageContent',
      data: {
        hero: {
          headingPart1: 'Ledelse',
          headingPart2: 'fra kernen',
          subheadline: 'Hestene spejler din essens',
          bodyText: 'Autentisk ledelse gennem nærvær og indsigt',
          primaryCtaText: 'Book konsultation',
          primaryCtaLink: '/kontakt',
          secondaryCtaText: 'Udforsk metoden',
          secondaryCtaLink: '/#hvorfor',
          backgroundImage: heroImage,
        },
        forbes: {
          eyebrowTag: 'Videnskabeligt funderet',
          mainQuote: 'One of the most powerful tools for executives',
          quoteAttribution: '— Forbes Magazine',
          bodyParagraph1: 'Forbes har anerkendt hestestøttet coaching som en af de mest effektive metoder til lederudvikling. Forskning viser, at 95% af vores adfærd er ubevidst – og hestene reagerer præcis på denne del af os.',
          bodyParagraph2: 'Gennem over 100 peer-reviewed studier er det dokumenteret, at arbejdet med heste skaber markant forbedring i selvbevidsthed, emotionel intelligens og autentisk ledelse.',
          stat1Number: '100+',
          stat1Text: 'Peer-reviewed studier',
          stat2Number: '95%',
          stat2Text: 'Ubevidst adfærd',
          forbesImage: forbesImage,
        },
        impact: {
          eyebrow: 'Hvad du lærer',
          mainHeading: 'Essensen',
          subheading: 'Fire fundamenter for autentisk ledelse – opdaget gennem mødet med heste.',
          impactCards: [
            {
              title: 'Autenticitet',
              description: 'Hestene reagerer på hvem du er – ikke på din titel eller din facade. De spejler din sande tilstand og tvinger dig til at være ægte.',
              image: impactImage1,
            },
            {
              title: 'Tilstedeværelse',
              description: 'I mødet med hesten lærer du at være fuldt til stede. Ingen multitasking, ingen distraktioner – kun nuet og relationen.',
              image: impactImage2,
            },
            {
              title: 'Tillid',
              description: '95% af kommunikation er nonverbal. Hestene lærer dig at skabe tillid gennem nærvær, rolig energi og autentisk lederskab.',
              image: impactImage3,
            },
            {
              title: 'Klarhed',
              description: 'Gennem refleksion og coaching finder du klarhed i komplekse udfordringer. Hestene viser vejen – du finder svarene.',
              image: impactImage4,
            },
          ],
          bottomStatementHeading: 'Dit team mærker det du ikke siger.',
          bottomStatementBody: 'Lad os arbejde med din autenticitet, så dit lederskab får den effekt, du ønsker.',
          ctaText: 'Start din samtale',
          ctaLink: '/kontakt',
        },
        process: {
          eyebrow: 'Sådan foregår det',
          headingPart1: 'Fra møde til',
          headingPart2: 'transformation',
          subheading: 'Et typisk forløb består af 3-5 sessioner, hvor du arbejder med heste og får coaching. Hver session varer 2-3 timer og giver dig dybe indsigter i dit lederskab.',
          processSteps: [
            {
              stepNumber: '01',
              title: 'Introduktion',
              description: 'Vi starter med en grundig samtale om dine udfordringer, mål og den kontekst du arbejder i. Her finder vi sammen ud af, hvad der giver mest mening for dig.',
            },
            {
              stepNumber: '02',
              title: 'Mødet med hesten',
              description: 'Du arbejder med hesten fra jorden – ingen ridning. Gennem simple øvelser opdager du, hvordan hesten reagerer på din energi, dit nærvær og din autenticitet.',
            },
            {
              stepNumber: '03',
              title: 'Refleksion',
              description: 'Vi reflekterer sammen over, hvad der skete i interaktionen. Hvad opdagede du? Hvilke mønstre genkender du fra din hverdag som leder?',
            },
            {
              stepNumber: '04',
              title: 'Integration',
              description: 'Du får konkrete redskaber til at arbejde videre med din udvikling. Vi laver en plan for, hvordan du integrerer læringen i din lederrolle.',
            },
          ],
          bottomHeading: 'Ingen tidligere erfaring med heste er nødvendig.',
          bottomBody: 'Alt du skal have med er nysgerrighed, åbenhed og mod til at se dig selv i spejlet.',
          tagline: 'Autentisk · Indsigtsfuld · Transformerende',
          processImages: [
            { image: processImage1 },
            { image: processImage2 },
            { image: processImage3 },
          ],
        },
        targets: {
          mainHeading: 'Find dit forløb',
          subheading: 'Vælg det forløb der passer til dine behov.',
          groups: [
            {
              title: 'Til Erhverv',
              description: 'Lederudvikling der skaber resultater gennem autentisk nærvær og tillidsbaseret ledelse.',
              features: [
                { feature: 'Teambuilding og samarbejde' },
                { feature: 'Ledelsesudvikling for ledere og mellemledere' },
                { feature: 'Konfliktløsning og kommunikation' },
                { feature: 'Forandrings- og kulturledelse' },
              ],
              ctaText: 'Læs mere',
              ctaLink: '/erhverv',
              accentColor: 'navy',
            },
            {
              title: 'Til Private',
              description: 'Personlig udvikling og coaching for dig der ønsker mere nærvær og klarhed i dit liv.',
              features: [
                { feature: 'Personlig coaching og udvikling' },
                { feature: 'Stress- og burnout coaching' },
                { feature: 'Relationsudvikling' },
                { feature: 'Livscoaching og retningsfinding' },
              ],
              ctaText: 'Læs mere',
              ctaLink: '/private',
              accentColor: 'bronze',
            },
          ],
        },
        testimonials: [
          {
            quote: 'I samarbejdet med hesten lærte jeg at være HELT tilstede.',
            authorName: 'Kim Høgh',
            authorRole: 'Tidl. CEO, Hjerteforeningen',
          },
          {
            quote: 'At arbejde med min egen kontakt via en hest var en fantastisk mulighed for at reflektere.',
            authorName: 'Mads Elk',
            authorRole: 'CEO, Mind Balance System',
          },
        ],
        contactSection: {
          heading: 'Lad os tage en samtale',
          subheading: 'Lad os tage en uforpligtende samtale om, hvordan du leder med mere nærvær',
        },
      },
    })
    console.log('✅ Home Page Content created\n')

    console.log('🎉 Seed completed successfully!')
    console.log('\n✨ You can now access the admin panel and see all the content.')
    console.log('   Visit: https://your-site.vercel.app/admin\n')

    process.exit(0)
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

seed()
