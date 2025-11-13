import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { packages } from '@/components/packages/packageData';
import PackageDetailView from '@/components/packages/PackageDetailView';

interface PackagePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all packages
export async function generateStaticParams() {
  return packages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

// Generate metadata for each package
export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const pkg = packages.find((p) => p.slug === params.slug);

  if (!pkg) {
    return {
      title: 'Pakke ikke fundet - Transparo',
    };
  }

  return {
    title: `${pkg.name} Pakke - ${pkg.priceFormatted} DKK - Transparo`,
    description: `${pkg.tagline}. Fast pris ${pkg.priceFormatted} DKK. Levering ${pkg.duration}. Se alle funktioner og book et møde.`,
    openGraph: {
      title: `${pkg.name} Website Pakke - Transparo`,
      description: pkg.tagline,
      type: 'website',
    },
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  const pkg = packages.find((p) => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailView pkg={pkg} />;
}