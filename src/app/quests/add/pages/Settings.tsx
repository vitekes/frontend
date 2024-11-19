import { useForm } from 'react-hook-form'
import { Field } from 'ui/Fields/Field/Field'
import { Heading } from 'ui/Heading/Heading'
import Selectors from '../components/Settings/Selectors'

const Settings = () => {
  const { handleSubmit } = useForm()
  const onSubmit = () => console.log('Submit')

  return (
    <div className='newQuest__settings'>
      <Heading>Новая работа</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field placeholder='Введите название' />
        <Field placeholder='Введите аннотацию' isTextarea />
        <Field placeholder='Примечания автора (необязательно)' isTextarea />
        <Selectors />
        <Field placeholder='Введите теги через запятую' label='Теги' />
      </form>
    </div>
  )
}
export default Settings
