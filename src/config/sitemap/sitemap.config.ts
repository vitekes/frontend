import type { MetadataRoute } from 'next'
import { ALL_ITEMS, CLIENT_URL } from 'src/constants/constants'
import { LANGUAGES } from 'src/constants/seo.constants'
import albumService from 'src/services/album.service'
import contestService from 'src/services/contest.service'
import postService from 'src/services/post.service'
import questService from 'src/services/quest.service'
import testService from 'src/services/test.service'

type TNamespaces = 'contests' | 'tests' | 'albums' | 'quests' | 'posts'

const fetchData = async (service: any) =>
  (await service.getAll(ALL_ITEMS)).array

const generateSitemap = (data: any, key: TNamespaces) =>
  LANGUAGES.map(lng =>
    data.map(({ id }: { id: number }) => ({
      url: `${CLIENT_URL}/${lng}/${key}/${id}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    })),
  )

export const addLanguages = (
  array: MetadataRoute.Sitemap[],
): MetadataRoute.Sitemap => array.reduce((acc, val) => acc.concat(val), [])

export const getData = async (): Promise<MetadataRoute.Sitemap> => {
  const services = {
    contests: contestService,
    tests: testService,
    albums: albumService,
    quests: questService,
    posts: postService,
  }

  const data = {}
  for (const [key, service] of Object.entries(services)) {
    // @ts-ignore
    data[key] = await fetchData(service)
  }

  const sitemapData = []
  for (const key of Object.keys(data)) {
    // @ts-ignore
    sitemapData.push(...addLanguages(generateSitemap(data[key], key)))
  }

  return sitemapData
}
