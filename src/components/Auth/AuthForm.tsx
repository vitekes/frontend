'use client'

import { Button } from 'ui/Button/Button'
import { Field } from 'ui/Fields/Field/Field'
import './AuthForm.sass'
import { AuthToggle } from './AuthToggle'
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
        {!isLogin && (
          <Field
            label='Email'
            type='email'
            placeholder='Введите email'
            {...register('email', { required: true })}
          />
        )}

        <Field
          label='Пароль'
          type='password'
          placeholder='Введите пароль'
          {...register('password', { required: true })}
        />
        {!isLogin && (
          <Field
            label='Повторите пароль'
            type='password'
            placeholder='Повторите пароль'
            {...register('retry_password', { required: true })}
          />
        )}

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

        <AuthToggle isLogin={isLogin} />
        <p className='auth-form__rules'>
          {isLogin
            ? 'Авторизуясь на сайте, вы принимаете условия оказания услуг, условия платежей, политику конфиденциальности и файлов cookie'
            : 'Регистрируясь, Вы соглашаетесь с пользовательским соглашением и политикой конфиденциальности.'}
        </p>
      </form>
    </div>
  )
}
