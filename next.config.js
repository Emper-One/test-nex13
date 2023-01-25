/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.picsum.photos',
        port: '',
        pathname: '/id/**',
      },
    ],
  },
}

module.exports = nextConfig
