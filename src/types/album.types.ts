export interface IAlbum {
  id: number
  title: string
  description: string
  language: 'russian' | 'english'
  user: string
  date: Date
  count_comments: number
  count_views: number
  count_likes: number
  namespace: string
  preview: string
}
