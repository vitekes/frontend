import type { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import contestService from 'src/services/contest.service'
import postService from 'src/services/post.service'
import questService from 'src/services/quest.service'

async function getData() {
  const serverData = {
    albums: await albumService.getAll(),
    posts: await postService.getAll(),
    contests: await contestService.getAll(),
    quests: await questService.getAll(),
  }
  const contests = serverData.contests.results.map(({ id }) => ({
    url: `${CLIENT_URL}/contests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const albums = serverData.albums.results.map(({ id }) => ({
    url: `${CLIENT_URL}/albums/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const quests = serverData.quests.results.map(({ id }) => ({
    url: `${CLIENT_URL}/quests/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const posts = serverData.posts.results.map(({ id }) => ({
    url: `${CLIENT_URL}/posts/${id}`,
    priority: 0.6,
  }))
  return { posts, albums, contests, quests }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { albums, posts, contests, quests } = await getData()

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
    ...albums,
    ...posts,
    ...quests,
    ...contests,
  ]
}
