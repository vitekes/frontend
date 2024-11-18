import { useRouter } from 'next/navigation'
import { PUBLIC_PAGES } from 'src/config/pages/public.config'

export function AuthToggle({ isLogin }: { isLogin: boolean }) {
  const { push } = useRouter()

  return (
    <section className='auth-form__toggle'>
      {isLogin ? (
        <p>
          Нет аккаунта?
          <button type='button' onClick={() => push(PUBLIC_PAGES.REGISTER)}>
            Зарегистрироваться
          </button>
        </p>
      ) : (
        <p>
          Уже есть аккаунт?
          <button type='button' onClick={() => push(PUBLIC_PAGES.LOGIN)}>
            Войти
          </button>
        </p>
      )}
    </section>
  )
}
