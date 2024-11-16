'use client'

import { Button } from 'ui/Button/Button'
import { Field } from 'ui/Fields/Field/Field'
import './AuthForm.sass'
import { useAuthForm } from './useAuthForm'
interface AuthFormProps {
  isLogin: boolean
}

export function AuthForm({ isLogin }: AuthFormProps) {
  const { handleSubmit, isLoading, onSubmit, register } = useAuthForm(isLogin)

  return (
    <div className='auth-form__wrapper'>
      <form onSubmit={handleSubmit(onSubmit)} className='auth-form'>
        <h1>{isLogin ? 'Войти' : 'Регистрация'}</h1>
        <Field
          label='Имя'
          type='text'
          placeholder='Введите имя'
          {...register('username', { required: true })}
        />

        <Field
          label='Пароль'
          type='password'
          placeholder='Введите пароль'
          {...register('password', { required: true })}
        />

        {/* <ReCAPTCHA
					ref={recaptchaRef}
					size='normal'
					sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					theme='light'
					className={styles.recaptcha}
				/> */}

        <Button size='md' variant='black' type='submit' disabled={isLoading}>
          {isLoading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
        </Button>

        {/* <SocialMediaButtons /> */}

        {/* <AuthToggle isLogin={isLogin} /> */}
      </form>
    </div>
  )
}
