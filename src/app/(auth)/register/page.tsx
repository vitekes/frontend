import type { Metadata } from 'next'
import { AuthForm } from 'src/components/Auth/AuthForm'
import { NO_INDEX_PAGE } from 'src/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Регистрация',
  ...NO_INDEX_PAGE,
}
export default function page() {
  return <AuthForm isLogin={false} />
}
