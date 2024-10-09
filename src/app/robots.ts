import { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/profile'],
      },
    ],
    sitemap: `${CLIENT_URL}/sitemap.xml`,
  }
}
