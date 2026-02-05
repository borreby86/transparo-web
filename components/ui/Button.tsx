import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'gold' | 'black' | 'white' | 'outline'
  href?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  uppercase?: boolean
}

export function Button({
  children,
  variant = 'gold',
  href,
  size = 'md',
  fullWidth = false,
  uppercase = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-sans font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantStyles = {
    gold:
      'bg-gold text-black hover:bg-gold/90 hover:shadow-lg active:scale-[0.98]',
    black:
      'bg-black text-white hover:bg-black/80 hover:shadow-lg active:scale-[0.98]',
    white:
      'bg-white text-black hover:bg-white/90 hover:shadow-lg active:scale-[0.98]',
    outline:
      'border-2 border-black text-black hover:bg-black hover:text-white',
  }

  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-sm',
  }

  const uppercaseStyles = uppercase ? 'uppercase tracking-[0.15em]' : ''

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${uppercaseStyles} ${
    fullWidth ? 'w-full' : ''
  } ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
