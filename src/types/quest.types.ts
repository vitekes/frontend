import type { IGlobalLines, TTag } from './global.types'

export interface IQuest extends IGlobalLines {
  history_date: Date | null
}

export interface IQuestUniq {
  data: {
    questions: string[]
    tags: TTag[]
    content: string
    timer: number
    scores: number
    voice: number | null
    voice_loading: boolean
    in_not_subscribed: boolean
  } & Omit<IQuest, 'description'>
}
