import type { MetadataRoute } from 'next'
import { CLIENT_URL } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import postService from 'src/services/post.service'

async function getData() {
  const serverData = {
    albums: await albumService.getAll(),
    posts: await postService.getAll(),
  }
  const albums = serverData.albums.results.map(({ id }) => ({
    url: `${CLIENT_URL}/albums/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  const posts = serverData.posts.results.map(({ id }) => ({
    url: `${CLIENT_URL}/posts/${id}`,
    priority: 0.6,
  }))
  return { posts, albums }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { albums, posts } = await getData()

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
    ...posts,
  ]
}
