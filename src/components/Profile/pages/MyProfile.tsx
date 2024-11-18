import { Field } from 'ui/Fields/Field/Field'
import { Heading } from 'ui/Heading/Heading'
import { Select } from 'ui/Select/Select'
const data = [
  { key: 'man', label: 'Мужчина' },
  { key: 'women', label: 'Женщина' },
  { key: 'not', label: 'Не показывать' },
]
export const MyProfile = () => {
  const handleChange = (selectedPlatform: { key: string; label: string }) =>
    console.log(selectedPlatform.key)

  return (
    <div className='my__profile'>
      <Heading>Моя страница</Heading>
      <form>
        <Field
          label='Имя пользователя или псевдоним'
          placeholder='Введите ваше имя или псевдоним'
        />
        <div className='my__profile-select'>
          <span>Пол</span>
          <Select
            data={data}
            onChange={handleChange}
            value={data.find(option => option.key === 'not')}
          />
        </div>
        <Field label='О себе' />
      </form>
    </div>
  )
}
