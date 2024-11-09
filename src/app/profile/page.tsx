import Profile from 'src/components/Profile/Profile'

import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from 'src/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Профиль',
  ...NO_INDEX_PAGE,
}

export default function Page() {
  return <Profile />
}
