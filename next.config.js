/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '8080',
        pathname: '/images/**',

      },
    ],
  },
  
}

module.exports = nextConfig
