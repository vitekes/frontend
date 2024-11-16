import type { Metadata } from 'next'
import { Heading } from 'src/components/ui/Heading/Heading'

import { NO_INDEX_PAGE } from 'src/constants/seo.constants'

export const metadata: Metadata = {
  title: 'Статистика',
  ...NO_INDEX_PAGE,
}

export default function Page() {
  return (
    <div>
      <Heading>Статистика</Heading>
    </div>
  )
}
