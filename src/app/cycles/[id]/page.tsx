import type { Metadata } from 'next'
import { Heading } from 'src/components/ui/Heading/Heading'
import cyclesService from 'src/services/cycles.service'
import viewsService from 'src/services/views.service'
import type { ICycle } from 'src/types/cycles.types'
import type { IOneRes } from 'src/types/global.types'
import CyclePage from './CyclePage'

const getOneCycle = async (id: number): Promise<IOneRes<ICycle>> => {
  const data = await cyclesService.getOne(id)
  if (data.status === 404) {
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
  const { title } = (await getOneCycle(+id)).data.data
  return {
    title,
    description: title,
  }
}
export async function generateStaticParams() {
  const data = await cyclesService.getAll()

  return data.map(({ id }) => ({
    id: id.toString(),
  }))
}

export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  const data = await getOneCycle(id)
  await viewsService.addView('surveys', id)
  return (
    <div>
      <Heading>Цикл “Северокорейский хакер”</Heading>
      <CyclePage initialData={data} />
    </div>
  )
}
