import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'offwhite' | 'navy' | 'warmgray'
  spacing?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

export function Section({
  children,
  className = '',
  background = 'offwhite',
  spacing = 'lg',
  id,
}: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    offwhite: 'bg-offwhite',
    navy: 'bg-navy text-white',
    warmgray: 'bg-warmgray-light',
  }

  const spacingStyles = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28',
    xl: 'py-28 md:py-36',
  }

  return (
    <section
      id={id}
      className={`${bgStyles[background]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}
