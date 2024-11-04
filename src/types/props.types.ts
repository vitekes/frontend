import type { IUserElement } from './user.types'

export type TActionsProps = {
  actionsInfo: {
    date: Date
    likes: number
    views: number
    comments: number
  }
}

export interface IPostProps {
  categories: string[]
  tags: string[]
  title: string
  text: string
  preview: string | null
  user: IUserElement
}
export interface IAlbumProps extends IPostProps {
  images: string
  isSub?: boolean
  actions: TActionsProps
}
