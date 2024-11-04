import type { TProtectUserData } from 'src/services/auth/auth.types'

export type TUserDataState = {
  user_id: number
}

export const transformUserToState = (
  user: TProtectUserData,
): TUserDataState | null => {
  return { user_id: user.user_id }
}
