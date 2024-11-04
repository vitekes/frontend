import appRootPath from 'app-root-path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   defaultLocale: 'ru',
  //   locales: ['en', 'ru'],
  //   localeDetection: true,
  // },

  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_DOMAIN,
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
