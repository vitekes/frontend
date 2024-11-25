import type { Metadata } from 'next'
import { ALL_ITEMS } from 'src/constants/constants'
import contestService from 'src/services/contest.service'
import type { IContest } from 'src/types/contest.types'
import type { IOneRes, TParams } from 'src/types/global.types'
import ContestPage from './ContestPage'
async function getOneContest(id: number): Promise<IOneRes<IContest>> {
  const data = await contestService.getOne(id)
  // @ts-ignore
  return data
}
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string }
}): Promise<Metadata> {
  const {
    data: { title, description, language, preview },
  } = (await getOneContest(+id)).data
  return {
    title,
    description,

    openGraph: {
      locale: language,
      title,
      description,
      images: preview,
    },
  }
}
export async function generateStaticParams() {
  const { array } = await contestService.getAll(ALL_ITEMS)

  return array.map(({ id }) => ({
    id: id.toString(),
  }))
}

export default async function page({ params: { id } }: TParams) {
  const data = await getOneContest(id)
  return <ContestPage initialData={data} />
}
