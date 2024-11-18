import type { EnumLanguage } from './global.types'

export interface IContest {
  id: number
  preview: string
  title: string
  description: string
  start_date: Date
  end_date: Date
  language: EnumLanguage
  item_type: 'post' | 'album' | 'quest'
  criteries: 'likes' | 'views' | 'assessment '
}
export interface IContest {
  id: number
  preview: string
  title: string
  description: string
  start_date: Date
  end_date: Date
  language: EnumLanguage
  item_type: 'post' | 'album' | 'quest'
  criteries: 'likes' | 'views' | 'assessment '
}
