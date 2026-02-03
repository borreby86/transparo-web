'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'
import { useParams } from 'next/navigation'
import { useTransition } from 'react'

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const switchLocale = () => {
    const nextLocale = locale === 'da' ? 'en' : 'da'
    startTransition(() => {
      // @ts-expect-error -- pathname includes dynamic routes; params provides the values
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className={`text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 disabled:opacity-50 ${className}`}
      aria-label={locale === 'da' ? 'Switch to English' : 'Skift til dansk'}
    >
      {locale === 'da' ? 'EN' : 'DA'}
    </button>
  )
}
