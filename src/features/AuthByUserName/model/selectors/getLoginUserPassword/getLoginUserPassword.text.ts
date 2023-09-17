import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUserPassword } from './getLoginUserPassword'

describe('getLoginUserPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: 'pass' },
    }
    expect(getLoginUserPassword(state as StateSchema)).toEqual('pass')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUserPassword(state as StateSchema)).toEqual('')
  })
})
