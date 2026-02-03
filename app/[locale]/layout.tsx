import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { ClientProviders } from '@/components/ClientProviders'
import { CookieBanner } from '@/components/ui/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
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

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

const baseUrl = 'https://transparo.dk'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const isDA = locale === 'da'

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: isDA
        ? 'Transparo | Professionel Webudvikling Danmark'
        : 'Transparo | Professional Web Development Denmark',
      template: '%s | Transparo',
    },
    description: isDA
      ? 'Professionel hjemmeside udvikling til danske virksomheder. Fast pris (8.995-27.995 kr), 2-4 ugers levering. Webbureau København specialiseret i moderne hjemmesider med SEO, responsivt design og Payload CMS.'
      : 'Professional website development for Danish businesses. Fixed price (8,995-27,995 DKK), 2-4 weeks delivery. Web agency Copenhagen specializing in modern websites with SEO, responsive design and Payload CMS.',
    keywords: isDA
      ? ['webudvikling', 'webudvikling danmark', 'webbureau københavn', 'hjemmeside udvikling', 'professionel hjemmeside']
      : ['web development', 'web development denmark', 'web agency copenhagen', 'website development', 'professional website'],
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
      locale: isDA ? 'da_DK' : 'en_US',
      url: baseUrl,
      siteName: 'Transparo',
      title: isDA
        ? 'Transparo | Professionel Webudvikling Danmark'
        : 'Transparo | Professional Web Development Denmark',
      description: isDA
        ? 'Webbureau København specialiseret i moderne hjemmesider. Fast pris, hurtig levering, professionel hjemmeside udvikling til danske virksomheder.'
        : 'Web agency Copenhagen specializing in modern websites. Fixed price, fast delivery, professional website development for Danish businesses.',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isDA
            ? 'Transparo - Professionel Webudvikling Danmark'
            : 'Transparo - Professional Web Development Denmark',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isDA
        ? 'Transparo | Professionel Webudvikling Danmark'
        : 'Transparo | Professional Web Development Denmark',
      description: isDA
        ? 'Webbureau København - Moderne hjemmesider med fast pris og hurtig levering'
        : 'Web Agency Copenhagen - Modern websites with fixed price and fast delivery',
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
      canonical: `${baseUrl}/${locale}`,
      languages: {
        da: `${baseUrl}/da`,
        en: `${baseUrl}/en`,
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

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
        description: locale === 'da'
          ? 'Professionel webudvikling og webbureau i København.'
          : 'Professional web development and web agency in Copenhagen.',
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
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Transparo',
        publisher: { '@id': `${baseUrl}/#organization` },
        inLanguage: locale === 'da' ? 'da-DK' : 'en-US',
      },
    ],
  }

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-offwhite text-black cursor-none" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <div className="lg:ml-16 xl:ml-20 lg:mr-16 xl:mr-20">
              {children}
            </div>
          </ClientProviders>
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
