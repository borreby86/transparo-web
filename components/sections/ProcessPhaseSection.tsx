'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Target, FileText, Palette, Code, TestTube, Rocket, Headphones } from 'lucide-react'

type BackgroundStyle = 'light' | 'dark' | 'navy' | 'gold' | 'warmgray' | 'success'
type IconName = 'Target' | 'FileText' | 'Palette' | 'Code' | 'TestTube' | 'Rocket' | 'Headphones'

interface ProcessPhaseSectionProps {
  phaseNumber: number
  title: string
  subtitle: string
  timeline: string
  description: string
  keyPoints: string[]
  iconName: IconName
  backgroundStyle?: BackgroundStyle
  hasCheckpoint?: boolean
  checkpointText?: string
  imageUrl?: string
}

const iconMap = {
  Target,
  FileText,
  Palette,
  Code,
  TestTube,
  Rocket,
  Headphones
}

const backgroundStyles = {
  light: 'bg-white',
  dark: 'bg-navy-dark',
  navy: 'bg-navy',
  gold: 'bg-gold/10',
  warmgray: 'bg-warmgray/10',
  success: 'bg-gradient-to-br from-green-50 to-emerald-50'
}

const textColorStyles = {
  light: 'text-navy',
  dark: 'text-white',
  navy: 'text-white',
  gold: 'text-navy-dark',
  warmgray: 'text-navy-dark',
  success: 'text-navy-dark'
}

const subtextColorStyles = {
  light: 'text-navy/70',
  dark: 'text-white/80',
  navy: 'text-white/80',
  gold: 'text-navy-dark/80',
  warmgray: 'text-navy-dark/80',
  success: 'text-navy-dark/80'
}

export function ProcessPhaseSection({
  phaseNumber,
  title,
  subtitle,
  timeline,
  description,
  keyPoints,
  iconName,
  backgroundStyle = 'light',
  hasCheckpoint = false,
  checkpointText,
  imageUrl
}: ProcessPhaseSectionProps) {
  const Icon = iconMap[iconName]
  const bgClass = backgroundStyles[backgroundStyle]
  const textClass = textColorStyles[backgroundStyle]
  const subtextClass = subtextColorStyles[backgroundStyle]
  const isDark = backgroundStyle === 'dark' || backgroundStyle === 'navy'

  return (
    <section id={`fase-${phaseNumber}`} className={`relative ${bgClass} px-6 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden`}>
      {/* Timeline Connector */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-current to-transparent opacity-10 z-0"
        style={{ color: isDark ? '#fff' : '#000' }} />

      {/* Background decorative elements */}
      {isDark && (
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-warmgray rounded-full blur-3xl" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto z-10">
        <div className={`grid ${imageUrl ? 'lg:grid-cols-2' : ''} gap-12 lg:gap-16 items-center`}>
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={phaseNumber % 2 === 0 && imageUrl ? 'lg:order-2' : ''}
          >
            {/* Phase header */}
            <div className="flex items-start gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Icon circle */}
              <motion.div
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center relative z-10 ${isDark ? 'bg-gold/20 backdrop-blur-sm' : 'bg-navy/10 backdrop-blur-sm'
                  }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <Icon className={`w-8 h-8 md:w-10 md:h-10 ${isDark ? 'text-gold' : 'text-navy'}`} strokeWidth={1.5} />
              </motion.div>

              {/* Title section */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-gold' : 'text-gold'}`}>
                    Fase {phaseNumber}
                  </span>
                  <span className={`text-sm font-semibold ${subtextClass}`}>
                    {timeline}
                  </span>
                </div>

                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${textClass} mb-3 leading-tight`}>
                  {title}
                </h2>

                <p className={`text-lg md:text-xl ${subtextClass} font-light`}>
                  {subtitle}
                </p>
              </div>

              {/* Checkpoint badge */}
              {hasCheckpoint && checkpointText && (
                <motion.div
                  className="hidden lg:block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className={`px-4 py-2 rounded-full border-2 ${isDark
                    ? 'border-gold/50 bg-gold/10 text-gold'
                    : 'border-navy/20 bg-navy/5 text-navy'
                    } text-xs font-bold uppercase tracking-wider whitespace-nowrap`}>
                    ✓ {checkpointText}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Description */}
            <motion.p
              className={`text-base md:text-lg ${subtextClass} mb-8 md:mb-10 max-w-3xl leading-relaxed`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* Key points */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${isDark ? 'bg-gold/30' : 'bg-navy/10'
                    }`}>
                    <span className={`text-sm ${isDark ? 'text-gold' : 'text-navy'}`}>✓</span>
                  </div>
                  <p className={`text-base md:text-lg ${textClass} leading-relaxed`}>
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile checkpoint badge */}
            {hasCheckpoint && checkpointText && (
              <motion.div
                className="lg:hidden mt-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className={`inline-flex px-4 py-2 rounded-full border-2 ${isDark
                  ? 'border-gold/50 bg-gold/10 text-gold'
                  : 'border-navy/20 bg-navy/5 text-navy'
                  } text-xs font-bold uppercase tracking-wider`}>
                  ✓ {checkpointText}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Image Section */}
          {imageUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative ${phaseNumber % 2 === 0 && imageUrl ? 'lg:order-1' : ''}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3]">
                <Image
                  src={imageUrl}
                  alt={`${title} illustration`}
                  width={800}
                  height={600}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  priority={phaseNumber <= 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute -z-10 top-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-30 ${isDark ? 'bg-gold' : 'bg-navy'
                  }`}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
