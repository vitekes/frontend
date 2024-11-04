import { axiosClassic } from 'src/api/axios'
import { removeFromStorage, saveTokenStorage } from './auth.helper'
import type { IAuthResponse, IFormData } from './auth.types'

class AuthService {
  private readonly _BASE_URL = '/auth'

  public async main(type: 'login' | 'register', data: IFormData) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._BASE_URL}/${type}/`,
      data,
    )
    const cookies = response.headers['Cookie']
    if (cookies.access_token) saveTokenStorage(cookies.access_token)
    if (cookies.refresh_token) saveTokenStorage(cookies.refresh_token)

    return response
  }

  public async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._BASE_URL}/access-token`,
    )

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

    return response
  }

  public async getNewTokensByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._BASE_URL}/access-token`,
      {},
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      },
    )

    return response.data
  }

  public async logout() {
    const response = await axiosClassic.post<boolean>(
      `${this._BASE_URL}/logout`,
    )

    if (response.data) removeFromStorage()

    return response
  }
}

export default new AuthService()
