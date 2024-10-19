import { axiosClassic } from 'src/api/axios'

class BlogService {
  private readonly BASE_URL = '/blogs/'
  public async getAll() {
    const { data } = await axiosClassic.get(this.BASE_URL)
    return data
  }
  public async getOne(id: number) {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}`)
    return data
  }
  public async getBest() {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/best_blogs`)
    return data
  }

  public async follow(id: number, type: 'follow' | 'unfollow') {
    const { data } = await axiosClassic.get(`${this.BASE_URL}/${id}/${type}`)
    return data
  }
}
const blogService = new BlogService()
export default blogService
