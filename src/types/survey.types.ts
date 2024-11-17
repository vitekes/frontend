import type { IGlobalLines, TAnswer, TTag } from './global.types'

export interface IUniqSurvey extends IGlobalLines {
  tags: TTag[]
  pinned_comment: number | null
  content: string
  is_not_subscribed: boolean
  answers: TAnswer[]
}
