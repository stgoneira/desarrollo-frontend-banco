/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/admin',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
