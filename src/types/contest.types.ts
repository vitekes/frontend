import type { TLanguage } from './global.types'

export interface IContest {
  id: number
  preview: string
  title: string
  description: string
  start_date: Date
  end_date: Date
  language: TLanguage
}
