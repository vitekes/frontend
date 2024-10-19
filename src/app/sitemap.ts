import { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'
import albumService from 'src/services/album.service'

async function getData() {
  const { results } = await albumService.getAll()
  return { results }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { results } = await getData()
  const albums: MetadataRoute.Sitemap = results.map(({ id }) => ({
    url: `${CLIENT_URL}/albums/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  return [
    {
      url: `${CLIENT_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    {
      url: `${CLIENT_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...albums,
  ]
}
