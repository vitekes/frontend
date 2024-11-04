export enum UserRole {
  USER = 'USER',
  PREMIUM = 'PREMIUM',
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}
export interface IUser {
  pk: number
  email: string
  avatar: string | null
  last_name: string
  first_name: string
  username: string
  referral_code: string
}

export interface IFormData extends Pick<IUser, 'username'> {
  password: string
}
export interface ITokenInside {
  id: number
  token_type: 'refresh' | 'access'
  user_id: number
  iat: number
  exp: number
}
export interface IAuthResponse {
  accessToken: string
  user: IUser
}

export enum EnumTokens {
  'ACCESS_TOKEN' = 'access_token',
  'REFRESH_TOKEN' = 'refresh_token',
}

export type TProtectUserData = Omit<ITokenInside, 'iat' | 'exp'>
