import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
    // Optimize package imports for better tree-shaking
    optimizePackageImports: ['motion', 'lucide-react'],
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
  // Enable gzip compression
  compress: true,
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Reduce bundle size
  poweredByHeader: false,
  // Optimize for Vercel deployment
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://transparo.dk',
  },
}

export default nextConfig
