import { axiosClassic } from 'src/api/axios'

class PostService {
  private BASE_URL = '/posts'
  public async getAll() {
    const { data } = await axiosClassic(this.BASE_URL)
    return data
  }
}
const postService = new PostService()
export default postService
