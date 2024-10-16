import woman from 'assets/woman.png'
import { StaticImageData } from 'next/image'
import { TActionsProps } from 'src/components/ui/Actions/Actions'

export interface IPost {
  author: string
  categories: string[]
  tags: string[]
  title: string
  text: string
}
export interface IAlbum extends IPost {
  images: StaticImageData
  isSub?: boolean
  actions: TActionsProps
}
export const API_URL = process.env.SERVER_URL,
  IS_DEV: boolean = process.env.NODE_ENV === 'development',
  CLIENT_URL: string = `${process.env.CLIENT_URL}`,
  posts: IPost[] = [
    {
      author: 'Иван Иваныч',
      categories: ['Категория', 'Подкатегория'],
      tags: ['животные', 'праздник', 'лето'],
      title: 'Название поста, вид поста в ленте ',
      text: 'Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.',
    },
    {
      author: 'Иван Иваныч',
      categories: ['Категория', 'Подкатегория'],
      tags: ['животные', 'праздник', 'лето'],
      title: 'Название поста, вид поста в ленте ',
      text: 'Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.',
    },
    {
      author: 'Иван Иваныч',
      categories: ['Категория', 'Подкатегория'],
      tags: ['животные', 'праздник', 'лето'],
      title: 'Название поста, вид поста в ленте ',
      text: 'Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.',
    },
    {
      author: 'Иван Иваныч',
      categories: ['Категория', 'Подкатегория'],
      tags: ['животные', 'праздник', 'лето'],
      title: 'Название поста, вид поста в ленте ',
      text: 'Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.',
    },
  ],
  albums: IAlbum[] = [
    {
      author: 'Иван Иваныч',
      categories: ['Категория', 'Подкатегория'],
      tags: ['животные', 'праздник', 'лето'],
      title: 'Название поста, вид поста в ленте ',
      text: 'Обладая ключом к знаниям, что могут изменить реальный мир, сможешь ли ты остаться безучастным к судьбе цифрового мира, частью которого стал? Миссию, что была возложена на тебя надо завершить во чтобы-то ни стало, но к конечной точке всегда ведет не одна дорога, и даже не две. Цель выбрана, осталось лишь выбрать дорогу.',
      images: woman,
      isSub: false,
      actions: {
        actionsInfo: {
          comments: 124,
          date: new Date('2024-10-10T16:05:22.149821Z'),
          likes: 1235,
          views: 75129,
        },
      },
    },
  ]
