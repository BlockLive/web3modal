/** @type {import('next').NextConfig} */

// Only required within the scope of this monorepo
const nextConfig = {
  transpilePackages: [
    '@spatializes/ethereum',
    '@spatializes/react',
    '@spatializes/ui',
    '@spatializes/core'
  ],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
