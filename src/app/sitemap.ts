import { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const { data } = await postServices.getAll()
  // const entries: MetadataRoute.Sitemap = data.map(({ id }) => ({
  // 	url: `${CLIENT_URL}/article/${id}`,
  // 	// lastModified: new Date(),
  // 	// changeFrequency: "yearly",
  // 	priority: 0.6,
  // }))
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
  ]
}
