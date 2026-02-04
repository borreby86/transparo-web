'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface DesignProposalContextType {
  isOpen: boolean
  open: () => void
  close: () => void
}

const DesignProposalContext = createContext<DesignProposalContextType | null>(null)

export function useDesignProposal() {
  const ctx = useContext(DesignProposalContext)
  if (!ctx) throw new Error('useDesignProposal must be used within DesignProposalProvider')
  return ctx
}

export function DesignProposalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DesignProposalContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </DesignProposalContext.Provider>
  )
}
