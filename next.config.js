/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable server-side features for static export
  experimental: {
    appDir: true,
  },
  
  // Basic optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig
