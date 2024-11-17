import type { Metadata } from 'next'
import { Heading } from 'src/components/ui/Heading/Heading'
import { allItems } from 'src/constants/constants'
import surveysService from 'src/services/surveys.service'
import viewsService from 'src/services/views.service'
import type { IOneRes } from 'src/types/global.types'
import type { IUniqSurvey } from 'src/types/survey.types'

const getOneSurvey = async (id: number): Promise<IOneRes<IUniqSurvey>> => {
  const data = await surveysService.getOne(id)
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
  const {
    title,
    description,
    language,
    preview,
    user: { username: name, last_name, first_name },
    // @ts-ignore
  } = (await getOneSurvey(+id)).data
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
  const { array } = await surveysService.getAll(allItems)

  return array.map(({ id }) => ({
    id: id.toString(),
  }))
}

export default async function Page({
  params: { id },
}: {
  params: { id: number }
}) {
  const data = await getOneSurvey(id)
  await viewsService.addView('surveys', id)
  return (
    <div>
      <Heading>Цикл “Северокорейский хакер”</Heading>
    </div>
  )
}
// const Page = () => {
//   return <div>Page</div>
// }
// export default Page
