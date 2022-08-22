import { ActionSubjectAbility } from './ability'

export type UserType = 'admin' | 'user'

export const getAbilityByUser = (user: UserType) => {
  const abilities: Record<UserType, ActionSubjectAbility[]> = {
    user: [{ action: 'search', subject: 'Transaction' }],
    admin: [
      { action: 'create', subject: 'Transaction' },
      { action: 'search', subject: 'Transaction' },
    ],
  }

  return abilities[user]
}
