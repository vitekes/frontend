import type { Metadata } from 'next'
import { Album } from 'ui/Albums/Album'

import { notFound } from 'next/navigation'
import albumService from 'src/services/album.service'

async function getOnePost(id: number) {
  const { data, status } = await albumService.getOne(id)
  if (status === 404) notFound()
  return data
}
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}): Promise<Metadata> {
  const { title, description } = (await getOnePost(+id)).data
  return { title, description }
}
export async function generateStaticParams() {
  const { results } = await albumService.getAll()

  return results.map(({ id }) => ({
    id: id.toString(),
  }))
}

export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  const {
    count_comments,
    date,
    count_likes,
    count_views,
    description,
    user,
    title,
    preview,
    id: paramId,
  } = (await getOnePost(id)).data

  return (
    <Album
      author={user.username}
      title={title}
      images={preview}
      categories={['']}
      tags={['']}
      text={description}
      id={paramId}
      actions={{
        actionsInfo: {
          comments: count_comments,
          date,
          likes: count_likes,
          views: count_views,
        },
      }}
    />
  )
}
