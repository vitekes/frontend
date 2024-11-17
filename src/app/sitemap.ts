import type { MetadataRoute } from 'next'
import { allItems, CLIENT_URL } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import contestService from 'src/services/contest.service'
import postService from 'src/services/post.service'
import questService from 'src/services/quest.service'
import testService from 'src/services/test.service'

class ServerData {
  public readonly albums = async () =>
    (await albumService.getAll(allItems)).array
  public readonly posts = async () => (await postService.getAll(allItems)).array
  public readonly contests = async () =>
    (await contestService.getAll(allItems)).array
  public readonly quests = async () =>
    (await questService.getAll(allItems)).array
  public readonly tests = async () => (await testService.getAll(allItems)).array
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
      priority: 0.9,
    },
    {
      url: `${CLIENT_URL}/albums`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${CLIENT_URL}/podcasts`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${CLIENT_URL}/quests`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${CLIENT_URL}/tests`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${CLIENT_URL}/contests`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${CLIENT_URL}/rates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${CLIENT_URL}/surveys`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...albums,
    ...posts,
    ...quests,
    ...contests,
    ...tests,
  ]
}
