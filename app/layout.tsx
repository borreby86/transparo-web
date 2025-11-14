import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/ui/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Transparo | Unique designs. Built on trust.',
  description: 'Professional web design for Danish small businesses. Fixed prices (8,995-27,995 DKK), 2-4 week delivery, and zero scope creep guarantee.',
  keywords: ['webdesign', 'Danmark', 'small business', 'fast pris', 'custom website'],
  authors: [{ name: 'Transparo' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: 'Transparo | Unique designs. Built on trust.',
    description: 'Professional web design for Danish small businesses with zero scope creep guarantee.',
    type: 'website',
    locale: 'da_DK',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da" className={inter.variable}>
      <body className="font-sans antialiased bg-offwhite text-black cursor-none" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
