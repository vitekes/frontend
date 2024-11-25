import analyzer from '@next/bundle-analyzer'
import appRootPath from 'app-root-path'
/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   defaultLocale: 'ru',
  //   locales: ['en', 'ru'],
  //   localeDetection: true,
  // },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
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
const withBundleAnalyzer = analyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
