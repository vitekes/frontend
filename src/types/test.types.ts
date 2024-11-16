import type { IGlobalLines, TTag } from './global.types'

export interface ITest {
  data: {
    questions: any[]
    scores: number
    pinned_comment: null
    content: string
    tags: TTag[]
    is_not_subscribed: boolean
  } & IGlobalLines
}
