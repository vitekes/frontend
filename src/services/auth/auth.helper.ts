import Cookies from 'js-cookie'

import { IS_DEV } from 'src/constants/constants'
import { EnumTokens } from './auth.types'

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenStorage = (token: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, token, {
    domain: IS_DEV ? 'localhost' : process.env.DOMAIN,
    sameSite: 'none',
    expires: 1,
  })
}

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
