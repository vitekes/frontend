// import type { Metadata } from 'next'
// import { Heading } from 'src/components/ui/Heading/Heading'
// import { allItems } from 'src/constants/constants'
// import surveysService from 'src/services/surveys.service'
// import viewsService from 'src/services/views.service'

// async function getOnePost(id: number) {
//   const { data, status } = await surveysService.getOne(id)
//   if (status === 404) {
//     const { notFound } = await import('next/navigation')
//     notFound()
//   }
//   return data
// }
// export async function generateMetadata({
//   params: { id },
// }: {
//   params: { id: string }
// }): Promise<Metadata> {
//   const {
//     title,
//     description,
//     language,
//     preview,
//     user: { username: name, last_name, first_name },
//     // @ts-ignore
//   } = (await getOnePost(+id)).data
//   return {
//     title,
//     description,
//     authors: { name },
//     openGraph: {
//       lastName: last_name,
//       firstName: first_name,
//       locale: language,
//       title,
//       description,
//       images: preview,
//     },
//   }
// }
// export async function generateStaticParams() {
//   const { array } = await surveysService.getAll(allItems)

//   return array.map(({ id }) => ({
//     id: id.toString(),
//   }))
// }

// export default async function Page({
//   params: { id },
// }: {
//   params: { id: number }
// }) {
//   const {

//     data:count_comments,
//     date,
//     count_likes,
//     count_views,
//     description,
//     user,
//     title,
//     preview,
//     id: paramId,
//     // @ts-ignore
//   } = (await getOnePost(id)).data
//   await viewsService.addView('surveys', id)
//   return (
//     <div>
//       <Heading>Циклы</Heading>
//     </div>
//   )
// }
const Page = () => {
  return <div>Page</div>
}
export default Page
