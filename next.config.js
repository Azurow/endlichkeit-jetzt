/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["endlichkeit-jetzt.vercel.app"],
  }
}

module.exports = nextConfig
