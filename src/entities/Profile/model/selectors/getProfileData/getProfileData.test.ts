import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { getProfileData } from './getProfileData'

describe('getProfileData.test', () => {
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })

  test('should return data', () => {
    const data = {
      age: 10,
      city: 'Moscow',
      currency: Currency.RUB,
      country: Country.Russia,
      username: 'Test',
      first: '123',
      lastname: '321',
    }
    const state: DeepPartial<StateSchema> = {
      profile: { data },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
})
