import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ClientProviders } from '@/components/ClientProviders'
import { CookieBanner } from '@/components/ui/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Use swap for better performance
  variable: '--font-inter',
  weight: ['400', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})

const baseUrl = 'https://transparo.dk'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Transparo | Professionel Webudvikling Danmark',
    template: '%s | Transparo',
  },
  description:
    'Professionel hjemmeside udvikling til danske virksomheder. Fast pris (8.995-27.995 kr), 2-4 ugers levering. Webbureau København specialiseret i moderne hjemmesider med SEO, responsivt design og Payload CMS.',
  keywords: [
    'webudvikling',
    'webudvikling danmark',
    'webbureau københavn',
    'hjemmeside udvikling',
    'professionel hjemmeside',
    'responsiv hjemmeside',
    'SEO optimeret hjemmeside',
    'moderne hjemmeside design',
    'hjemmeside med SEO',
    'webbureau priser',
    'hjemmeside til virksomhed',
    'få lavet hjemmeside københavn',
  ],
  authors: [{ name: 'Transparo', url: baseUrl }],
  creator: 'Transparo',
  publisher: 'Transparo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: baseUrl,
    siteName: 'Transparo',
    title: 'Transparo | Professionel Webudvikling Danmark',
    description:
      'Webbureau København specialiseret i moderne hjemmesider. Fast pris, hurtig levering, professionel hjemmeside udvikling til danske virksomheder.',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Transparo - Professionel Webudvikling Danmark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparo | Professionel Webudvikling Danmark',
    description: 'Webbureau København - Moderne hjemmesider med fast pris og hurtig levering',
    images: [`${baseUrl}/twitter-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Transparo',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
        description:
          'Professionel webudvikling og webbureau i København. Specialiseret i moderne hjemmesider med fast pris og hurtig levering.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'København',
          addressCountry: 'DK',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          availableLanguage: ['Danish', 'English'],
        },
        sameAs: [],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Transparo',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        inLanguage: 'da-DK',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/#localbusiness`,
        name: 'Transparo Webbureau',
        image: [
          `${baseUrl}/logo.png`,
          `${baseUrl}/og-image.jpg`,
        ],
        url: baseUrl,
        telephone: '+45-12345678',
        email: 'kontakt@transparo.dk',
        priceRange: '8995-27995 DKK',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'København',
          addressCountry: 'DK',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 55.6761,
          longitude: 12.5683,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Denmark',
        },
        sameAs: [
          // Add social media URLs here when available
        ],
      },
    ],
  }

  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-offwhite text-black cursor-none" suppressHydrationWarning>
        <ClientProviders>
          {children}
        </ClientProviders>
        <CookieBanner />
      </body>
    </html>
  )
}
