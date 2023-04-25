/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '/admin/out',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
