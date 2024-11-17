import type { Metadata } from 'next'
import { Button } from 'src/components/ui/Button/Button'
import { Field } from 'ui/Fields/Field/Field'
import { Heading } from 'ui/Heading/Heading'
import './Add.sass'
export const metadata: Metadata = {
  title: 'Добавление цикла произведений',
}
const page = () => {
  // const {} = useForm()
  return (
    <div className='surveys__add'>
      <Heading>Добавление цикла произведений</Heading>
      <form>
        <Field label='Название' placeholder='Введите название' />
        <Field label='Описание' placeholder='Введите описание' isTextarea />
        <Field label='От автора' isTextarea />
        <section className='surveys__add-checkbox'>
          <input type='checkbox' />
          Цикл завершён
        </section>
        <section className='surveys__add-button'>
          <Button variant='black'>Создать</Button>
          <Button variant='grey'>Отменить</Button>
        </section>
      </form>
    </div>
  )
}
export default page
