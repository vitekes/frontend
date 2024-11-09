import type { MetadataRoute } from 'next'
import { allItems, CLIENT_URL } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import contestService from 'src/services/contest.service'
import postService from 'src/services/post.service'
import questService from 'src/services/quest.service'
import testService from 'src/services/test.service'

async function getData() {
  const serverData = {
    albums: await albumService.getAll(allItems),
    posts: await postService.getAll(allItems),
    contests: await contestService.getAll(allItems),
    quests: await questService.getAll(allItems),
    tests: await testService.getAll(allItems),
  }
  const contests = serverData.contests.array.map(({ id }) => ({
    url: `${CLIENT_URL}/contests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const tests = serverData.tests.array.map(({ id }) => ({
    url: `${CLIENT_URL}/tests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const albums = serverData.albums.array.map(({ id }) => ({
    url: `${CLIENT_URL}/albums/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const quests = serverData.quests.array.map(({ id }) => ({
    url: `${CLIENT_URL}/quests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const posts = serverData.posts.array.map(({ id }) => ({
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
    ...albums,
    ...posts,
    ...quests,
    ...contests,
    ...tests,
  ]
}
