import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { caseStudiesDetailed, getCaseStudyBySlug } from '@/data/caseStudies'
import CaseStudyClient from './CaseStudyClient'

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudiesDetailed.map((study) => ({
    slug: study.slug,
  }))
}

// Generate metadata for each case study
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug)

  if (!caseStudy) {
    return {
      title: 'Case ikke fundet - Transparo',
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | Transparo`,
    description: `${caseStudy.subtitle}. Se hvordan vi hjalp ${caseStudy.author} hos ${caseStudy.role.split(', ')[1] || caseStudy.role} med professionel webudvikling.`,
    keywords: [
      'case study',
      'webudvikling eksempel',
      'hjemmeside portfolio',
      ...caseStudy.labels.map((l) => l.toLowerCase()),
      ...caseStudy.technologies.map((t) => t.toLowerCase()),
    ],
    openGraph: {
      title: `${caseStudy.title} - Transparo Case Study`,
      description: caseStudy.subtitle,
      type: 'article',
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
  const resolvedParams = await params
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug)

  if (!caseStudy) {
    notFound()
  }

  return <CaseStudyClient caseStudy={caseStudy} />
}
