import type { IGlobalForm, IGlobalLines, TIdsArray, TTag } from './global.types'

export interface IQuestUniq extends Omit<IGlobalLines, 'description'> {
  questions: string[]
  tags: TTag[]
  content: string
  timer: number
  scores: number
  voice: number | null
  voice_loading: boolean
  in_not_subscribed: boolean
}

export interface IQuestForm extends IGlobalForm {
  user: number
  blog: number
  genres_set: TIdsArray
  in_progress: boolean
  tags: string
  timer: number
}
