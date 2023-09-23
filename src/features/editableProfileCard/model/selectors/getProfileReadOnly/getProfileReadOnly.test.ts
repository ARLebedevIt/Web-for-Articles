import { StateSchema } from 'app/providers/StoreProvider'
import { getProfileReadOnly } from './getProfileReadOnly'

describe('getProfileReadOnly.test', () => {
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined)
  })

  test('should return readonly', () => {
    const state: DeepPartial<StateSchema> = {
      profile: { readonly: true },
    }
    expect(getProfileReadOnly(state as StateSchema)).toBe(true)
  })
})
