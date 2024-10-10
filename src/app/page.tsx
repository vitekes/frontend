'use server'

import { Tabs } from 'src/components/Main/Tabs'
import { IPostProps, Post } from 'src/components/ui/Post/Post'
import './Main.sass'
const posts: IPostProps[] = [
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
]

export default async function Home() {
  return (
    <div className=''>
      <Tabs />
      <section className='posts'>
        {posts.map(({ author, categories, tags, text, title }, index) => (
          <Post
            author={author}
            categories={categories}
            tags={tags}
            text={text}
            title={title}
            key={index}
          />
        ))}
      </section>
    </div>
  )
}
