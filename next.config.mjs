import appRootPath from 'app-root-path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   defaultLocale: 'ru',
  //   locales: ['en', 'ru'],
  //   localeDetection: true,
  // },
  env: {
    SERVER_URL: process.env.SERVER_URL,
    MEDIA_URL: process.env.MEDIA_URL,
    DOMAIN: process.env.DOMAIN,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTOCOL,
        hostname: process.env.DOMAIN,
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      styles: appRootPath + '/src/styles',
      vars: appRootPath + '/src/styles/_system.sass',
    }
    return config
  },
  async rewrites() {
    return [
      {
        source: '/media/uploads/:path*',
        destination: `${process.env.MEDIA_URL}/media/uploads/:path*`,
      },
    ]
  },
}
export default nextConfig
