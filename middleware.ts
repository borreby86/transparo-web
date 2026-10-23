import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

// Pages that are not ready yet. They redirect to the front page until removed from this list.
const HIDDEN_PAGES = [
  'workshops',
  'pakker',
  'packages',
  'proces',
  'process',
  'mascot-test',
  'faq',
  'prisberegner',
  'price-calculator',
]

const hiddenPattern = new RegExp(`^/(da|en)/(${HIDDEN_PAGES.join('|')})(/|$)`)

export default function middleware(request: NextRequest) {
  const match = request.nextUrl.pathname.match(hiddenPattern)
  if (match) {
    return NextResponse.redirect(new URL(`/${match[1]}`, request.url))
  }
  return intlMiddleware(request)
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - _next (Next.js internals)
    // - api (API routes)
    // - static files (images, fonts, etc.)
    '/((?!_next|api|favicon|apple-touch-icon|og-image|twitter-image|portfolio-images|images|hero-optimized|.*\\..*).*)',
  ],
}
