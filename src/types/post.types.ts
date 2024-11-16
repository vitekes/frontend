import type { IGlobalLines, IOneRes, TTag } from './global.types'

export type TPostArray = { array: IPost[]; length: number }
export type TOnePost = IOneRes<{ data: IUniqPost }>

export interface IPost extends Omit<IGlobalLines, 'description'> {
  content: string
}
export interface IUniqPost extends IPost {
  tags: TTag[]
  pinned_comment: number | null
  is_not_subscribed: boolean
  is_not_bought: boolean
  amount: null
  is_paid: false
  category: number
  answers: string[]
  test: null
}
export interface IPopularPosts {
  popular_week: IPost[]
  popular_day: IPost[]
}
