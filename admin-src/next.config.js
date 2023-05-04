/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/desarrollo-frontend-banco',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
