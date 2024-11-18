import type { MetadataRoute } from 'next'
import { ALL_ITEMS, CLIENT_URL } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import contestService from 'src/services/contest.service'
import postService from 'src/services/post.service'
import questService from 'src/services/quest.service'
import testService from 'src/services/test.service'

class ServerData {
  public readonly albums = async () =>
    (await albumService.getAll(ALL_ITEMS)).array
  public readonly posts = async () =>
    (await postService.getAll(ALL_ITEMS)).array
  public readonly contests = async () =>
    (await contestService.getAll(ALL_ITEMS)).array
  public readonly quests = async () =>
    (await questService.getAll(ALL_ITEMS)).array
  public readonly tests = async () =>
    (await testService.getAll(ALL_ITEMS)).array
}

async function getData() {
  const serverData = new ServerData()
  const contests = (await serverData.contests()).map(({ id }) => ({
    url: `${CLIENT_URL}/contests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const tests = (await serverData.tests()).map(({ id }) => ({
    url: `${CLIENT_URL}/tests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const albums = (await serverData.albums()).map(({ id }) => ({
    url: `${CLIENT_URL}/albums/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const quests = (await serverData.quests()).map(({ id }) => ({
    url: `${CLIENT_URL}/quests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const posts = (await serverData.posts()).map(({ id }) => ({
    url: `${CLIENT_URL}/posts/${id}`,
    priority: 0.6,
  }))
  return { posts, albums, contests, quests, tests }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { albums, posts, contests, quests, tests } = await getData()

  return [
    {
      url: `${CLIENT_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: `${CLIENT_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${CLIENT_URL}/albums`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${CLIENT_URL}/podcasts`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${CLIENT_URL}/quests`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${CLIENT_URL}/tests`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${CLIENT_URL}/contests`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.8,
    },
    {
      url: `${CLIENT_URL}/rates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...albums,
    ...posts,
    ...quests,
    ...contests,
    ...tests,
  ]
}
// import type { MetadataRoute } from 'next'
// import { addLanguages, getData } from 'src/config/sitemap/sitemap.config'
// import { CLIENT_URL } from 'src/constants/constants'
// import { LANGUAGES } from 'src/constants/seo.constants'

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const data = await getData()
//   const array: MetadataRoute.Sitemap[] = LANGUAGES.map(lng => [
//     {
//       url: `${CLIENT_URL}/${lng}/`,
//       lastModified: new Date(),
//       changeFrequency: 'always',
//       priority: 1,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/posts`,
//       lastModified: new Date(),
//       changeFrequency: 'hourly',
//       priority: 0.9,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/albums`,
//       lastModified: new Date(),
//       changeFrequency: 'hourly',
//       priority: 0.9,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/podcasts`,
//       lastModified: new Date(),
//       changeFrequency: 'hourly',
//       priority: 0.9,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/quests`,
//       lastModified: new Date(),
//       changeFrequency: 'hourly',
//       priority: 0.9,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/tests`,
//       lastModified: new Date(),
//       changeFrequency: 'hourly',
//       priority: 0.9,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/contests`,
//       lastModified: new Date(),
//       changeFrequency: 'hourly',
//       priority: 0.9,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/rates`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.7,
//     },
//     {
//       url: `${CLIENT_URL}/${lng}/surveys`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.9,
//     },
//     ...data,
//   ])
//   return addLanguages(array)
// }
