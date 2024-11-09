export interface IComment {
  id: number
  text: string
  date: Date
  album: number
  user: string
  delete_from_user: boolean
  count_likes: number
}
export interface ICommentArray {
  data: IComment[]
}
