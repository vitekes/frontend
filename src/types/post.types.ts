import type { TLanguage } from './global.types'

export interface IPost {
  id: number
  title: string
  content: string
  preview: string | null
  language: TLanguage
  user: number
  count_views: number
  count_comments: number
  count_likes: number
  namespace: string
  date: Date
}
export interface IUniqPost extends IPost {
  tags: string[]
  pinned_comment: number | null
  is_not_subscribed: boolean
  is_not_bought: boolean
  amount: null
  is_paid: false
  category: number
  answers: string[]
  test: null
}
