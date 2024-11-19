import type { IGlobalForm, IGlobalLines, IOneRes, TTag } from './global.types'

export type TPostArray = { array: IPost[]; length: number }
export type TOnePost = IOneRes<IUniqPost>

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
export interface IPopular<T> {
  popular_week: T[]
  popular_day: T[]
}
export interface IPostForm extends IGlobalForm {
  category: number
  blog: number
  is_paid: boolean
  add_survey: boolean
  amount: number
  is_progress: boolean
  is_create_test: boolean
  tags: string
}
