import type { EnumItemType, EnumLanguage, IGlobalForm } from './global.types'

export enum EnumCriteries {
  LIKES = 'likes',
  VIEWS = 'views',
  ASSESSMENT = 'assessment ',
}

export interface IContest {
  id: number
  preview: string
  title: string
  description: string
  start_date: Date
  end_date: Date
  language: EnumLanguage
  item_type: EnumItemType
  criteries: EnumCriteries
}
export interface IContest {
  id: number
  preview: string
  title: string
  description: string
  start_date: Date
  end_date: Date
  language: EnumLanguage
  item_type: EnumItemType
  criteries: EnumCriteries
}
export interface IContestForm
  extends Omit<IGlobalForm, 'content' | 'level_access'> {
  item_type: EnumItemType
  criteries: EnumCriteries
  end_date: Date
  start_date: Date
}
