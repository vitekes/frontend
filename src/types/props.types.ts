export type TActionsProps = {
  actionsInfo: {
    date: Date
    likes: number
    views: number
    comments: number
  }
}

export interface IPostProps {
  author: string
  categories: string[]
  tags: string[]
  title: string
  text: string
}
export interface IAlbumProps extends IPostProps {
  images: string
  isSub?: boolean
  actions: TActionsProps
}
