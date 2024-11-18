import type { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'
const disallow: string[] = [
  '*?query=',
  '*?page=',
  '*?perPage=',
  '/login',
  '/register',
  '/profile',
  '/admin',
  '/surveys/add',
  '/posts/add',
  '/albums/add',
  '/tests/add',
  '/tests/results/*',
  '/contests/add',
]
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow,
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${CLIENT_URL}/sitemap.xml`,
  }
}
