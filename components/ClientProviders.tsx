'use client'

import dynamic from 'next/dynamic'

// Lazy load CustomCursor on client side only
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor').then((mod) => mod.CustomCursor), {
  ssr: false,
})

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
}
