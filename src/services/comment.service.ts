import { axiosClassic } from 'src/api/axios'
import type { ICommentArray } from 'src/types/comment.types'

import type { IOneRes, TNamespaces } from 'src/types/global.types'

interface ICommentService {
  readonly BASE_URL: string
  getComments: (
    namespace: TNamespaces,
    id: number,
  ) => Promise<IOneRes<ICommentArray>>
}

class CommentService implements ICommentService {
  readonly BASE_URL: string = '/comments'
  public async getComments(namespace: TNamespaces, id: number) {
    const { data, status } = await axiosClassic.get<ICommentArray>(
      `${this.BASE_URL}/index_comment/${namespace}/${id}`,
    )
    return { data, status }
  }
}

export default new CommentService()
