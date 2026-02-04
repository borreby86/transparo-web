'use client'

import dynamic from 'next/dynamic'
import { LenisProvider } from '@/components/providers/LenisProvider'
import { DesignProposalProvider } from '@/components/ui/DesignProposalContext'

// Lazy load CustomCursor on client side only
const CustomCursor = dynamic(() => import('@/components/ui/CustomCursor').then((mod) => mod.CustomCursor), {
  ssr: false,
})

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <DesignProposalProvider>
        <CustomCursor />
        {children}
      </DesignProposalProvider>
    </LenisProvider>
  )
}
