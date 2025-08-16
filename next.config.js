/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: false,
    domains: ['localhost'],
  },
  
  // Basic optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
}

module.exports = nextConfig
