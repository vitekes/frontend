import { Button } from 'ui/Button/Button'
import { Field } from 'ui/Fields/Field/Field'
import { Heading } from 'ui/Heading/Heading'

const page = () => {
  return (
    <div>
      <Heading>Новый альбом</Heading>
      <form>
        <Field placeholder='Введите название' />
        <Field placeholder='Введите описание' isTextarea />
        <Button variant='black'>Опубликовать</Button>
      </form>
    </div>
  )
}
export default page
