import type { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/register', '/profile'],
      },
    ],
    sitemap: `${CLIENT_URL}/sitemap.xml`,
  }
}
