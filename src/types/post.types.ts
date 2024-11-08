import type { IGlobalLines } from './global.types'

export interface IPost extends Omit<IGlobalLines, 'description'> {
  content: string
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
