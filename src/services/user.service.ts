class UserService {
  private readonly _BASE_URL = '/users'

  public async myProfile() {
    // const { data } = axiosWithAuth<IUser>(`${this._BASE_URL}/my_profile`)
    // return data
  }

  public async fetchPremium() {
    // return instance.get<{ text: string }>(`${this._BASE_URL}/premium`)
  }

  public async fetchManagerContent() {
    // return instance.get<{ text: string }>(`${this._BASE_URL}/manager`)
  }

  public async fetchList() {
    // return instance.get<IUser[]>(`${this._BASE_URL}/list`)
  }
}
const userService = new UserService()
export default userService
