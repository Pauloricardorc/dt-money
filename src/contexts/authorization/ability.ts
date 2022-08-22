import { Ability } from '@casl/ability'

export type Action = 'create' | 'search'
export type Subject = 'Transaction'

export type ActionSubjectAbility = {
  action: Action
  subject: Subject
}

export const buildAbility = (abilities: ActionSubjectAbility[]) => {
  const ability = new Ability<[Action, Subject]>()

  ability.update(abilities)

  return ability
}
