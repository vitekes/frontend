import type { Metadata } from 'next'
import { Button } from 'ui/Button/Button'
import { Field } from 'ui/Fields/Field/Field'
import { Heading } from 'ui/Heading/Heading'
import './NewPost.sass'
export const metadata: Metadata = {
  title: 'Новый пост',
}

const page = () => {
  return (
    <div className='posts__new'>
      <Heading>Новый пост</Heading>
      <form>
        <Field placeholder='Введите название' />
        <Field placeholder='Введите текст' isTextarea />
        <section className='posts__new-buttons'>
          <Button variant='grey'>Сохранить черновик</Button>
          <Button variant='black'>Далее</Button>
        </section>
      </form>
    </div>
  )
}
export default page
