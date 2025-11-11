import type { NextConfig } from 'next'

// Temporary config without Payload CMS - use this to preview the site
// Switch to next.config.ts when database is ready

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
