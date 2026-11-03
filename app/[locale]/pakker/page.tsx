import { redirect } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'

// Skjult indtil videre – må ikke indekseres
export const metadata: Metadata = { robots: { index: false, follow: false } }

export default async function PakkerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  redirect(`/${locale}`)
}
