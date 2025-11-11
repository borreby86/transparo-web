import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'highlighted' | 'hover'
  padding?: 'sm' | 'md' | 'lg'
}

export function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}: CardProps) {
  const baseStyles =
    'bg-white rounded-xl shadow-sm border border-warmgray-light/20'

  const variantStyles = {
    default: '',
    highlighted:
      'border-2 border-gold shadow-md relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-gold before:to-gold-light',
    hover: 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
  }

  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  )
}
