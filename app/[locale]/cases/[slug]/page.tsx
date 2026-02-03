import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import { caseStudiesDetailed, getCaseStudyBySlug } from '@/data/caseStudies'
import CaseStudyClient from './CaseStudyClient'

interface CaseStudyPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  return caseStudiesDetailed.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: locale === 'da' ? 'Case ikke fundet - Transparo' : 'Case not found - Transparo',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | Transparo`,
    description: `${caseStudy.subtitle}. ${locale === 'da' ? 'Se hvordan vi hjalp' : 'See how we helped'} ${caseStudy.author} ${locale === 'da' ? 'hos' : 'at'} ${caseStudy.role.split(', ')[1] || caseStudy.role} ${locale === 'da' ? 'med professionel webudvikling' : 'with professional web development'}.`,
    keywords: [
      'case study',
      locale === 'da' ? 'webudvikling eksempel' : 'web development example',
      locale === 'da' ? 'hjemmeside portfolio' : 'website portfolio',
      ...caseStudy.labels.map((l) => l.toLowerCase()),
      ...caseStudy.technologies.map((t) => t.toLowerCase()),
    ],
    openGraph: {
      title: `${caseStudy.title} - Transparo Case Study`,
      description: caseStudy.subtitle,
      type: 'article',
      locale: locale === 'da' ? 'da_DK' : 'en_US',
      images: [
        {
          url: caseStudy.imageUrl,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.title} - Transparo`,
      description: caseStudy.subtitle,
      images: [caseStudy.imageUrl],
    },
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyClient caseStudy={caseStudy} />
}
