import { Button } from 'ui/Button/Button'
import { Field } from 'ui/Fields/Field/Field'

const SetPassword = () => {
  return (
    <div className='set_password'>
      <Field
        type='password'
        placeholder='Пароль'
        label='Повторите текущий пароль'
      />
      <Field
        type='password'
        placeholder='Пароль'
        label='Введите новый пароль'
      />
      <Field
        type='password'
        placeholder='Пароль'
        label='Введите новый пароль повторно'
      />
      <Button className='save__btn' variant='black'>
        Сохранить
      </Button>
    </div>
  )
}
export default SetPassword
