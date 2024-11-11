import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { allItems } from 'src/constants/constants'
import albumService from 'src/services/album.service'
import viewsService from 'src/services/views.service'
import { Album } from 'ui/Albums/Album'

const Comments = dynamic(() =>
  import('src/components/ui/Comments/Comments').then(mod => mod.Comments),
)

async function getOnePost(id: number) {
  const { data, status } = await albumService.getOne(id)
  if (status === 404) {
    const { notFound } = await import('next/navigation')
    notFound()
  }
  return data
}
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}): Promise<Metadata> {
  const {
    title,
    description,
    language,
    preview,
    user: { username: name, last_name, first_name },
    // @ts-ignore
  } = (await getOnePost(+id)).data
  return {
    title,
    description,
    authors: { name },
    openGraph: {
      lastName: last_name,
      firstName: first_name,
      locale: language,
      title,
      description,
      images: preview,
    },
  }
}
export async function generateStaticParams() {
  const { array } = await albumService.getAll(allItems)

  return array.map(({ id }) => ({
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
    // @ts-ignore
  } = (await getOnePost(id)).data
  await viewsService.addView('albums', id)
  return (
    <>
      <Album
        user={user}
        title={title}
        images={preview}
        preview={preview}
        categories={['']}
        tags={[{ title: '', id: 1 }]}
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
      <Comments namespace='albums' id={id} />
    </>
  )
}
