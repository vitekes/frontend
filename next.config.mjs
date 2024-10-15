import appRootPath from 'app-root-path'
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTOCOL,
        hostname: process.env.DOMAIN,
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      styles: appRootPath + '/src/styles',
    }
    return config
  },
}

export default nextConfig
