/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  swcMinify: true,
  images: 
  {
    unoptimized: true,
  }
}

module.exports = nextConfig
