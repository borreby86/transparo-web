import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Transparo Brand Colors
        navy: {
          DEFAULT: '#0E1D3D',
          dark: '#0A1529',
        },
        black: {
          DEFAULT: '#1A1A1A',
        },
        offwhite: {
          DEFAULT: '#FAFAFA',
        },
        warmgray: {
          DEFAULT: '#A39B96',
          light: '#D4CEC9',
        },
        gold: {
          DEFAULT: '#B89245',
          light: '#D4B366',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      backgroundSize: {
        'size-[54px_54px]': '54px 54px',
      },
      maskImage: {
        'radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)':
          'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
