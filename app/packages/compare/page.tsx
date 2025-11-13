import { Metadata } from 'next';
import PackageComparison from '@/components/packages/PackageComparison';

export const metadata: Metadata = {
  title: 'Sammenlign Pakker - Transparo',
  description: 'Sammenlign vores website pakker side om side. Se alle funktioner, priser og leveringstider.',
};

export default function ComparePage() {
  return <PackageComparison />;
}