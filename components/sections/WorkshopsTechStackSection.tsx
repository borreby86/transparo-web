'use client'

import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const techStack = [
  {
    name: 'Next.js',
    description: 'Det framework, som Notion, TikTok og Netflix bruger. Lynhurtige sider og perfekt SEO-struktur.',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 180 180" fill="none" className="w-14 h-14">
        <mask id="mask0" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black"/>
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill="black"/>
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0)"/>
          <rect x="115" y="54" width="12" height="72" fill="url(#paint1)"/>
        </g>
        <defs>
          <linearGradient id="paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="paint1" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: 'Tailwind',
    description: 'Det designsystem, professionelle udviklere vælger. Fleksibilitet uden rod.',
    color: '#06B6D4',
    icon: (
      <svg viewBox="0 0 54 33" className="w-14 h-10" fill="#06B6D4">
        <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    description: 'Platformen bag Next.js. Gratis hosting, automatiske opdateringer, lynhurtig global distribution.',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 76 65" className="w-12 h-12" fill="currentColor">
        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
      </svg>
    ),
  },
]

export function WorkshopsTechStackSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative py-28 md:py-36 lg:py-44 bg-offwhite overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-navy/10 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Premium Teknologi
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
            Hvorfor tech-stacken betyder noget
          </h2>
          <p className="text-xl md:text-2xl text-navy/60 max-w-2xl mx-auto">
            Det er industristandard. Og nu kan du lære at bruge det selv.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.8,
                delay: shouldReduceMotion ? 0 : index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <motion.div
                className="relative h-full bg-white rounded-3xl p-8 md:p-10 shadow-lg overflow-hidden group"
                whileHover={shouldReduceMotion ? {} : {
                  y: -8,
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Accent line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gold"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                />

                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-8 text-navy">
                    {tech.icon}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-navy mb-4">
                    {tech.name}
                  </h3>
                  <p className="text-navy/60 text-lg leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
