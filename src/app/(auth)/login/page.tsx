import type { Metadata } from 'next'
import { AuthForm } from 'src/components/Auth/AuthForm'

export const metadata: Metadata = {
  title: 'Войти',
}
export default function page() {
  return <AuthForm isLogin />
}
