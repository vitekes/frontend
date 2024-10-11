import appRootPath from 'app-root-path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
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
