import { StateSchema } from '@/app/providers/StoreProvider'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })

  test('should return form', () => {
    const form = {
      age: 10,
      city: 'Moscow',
      currency: Currency.RUB,
      country: Country.Russia,
      username: 'Test',
      first: '123',
      lastname: '321',
    }
    const state: DeepPartial<StateSchema> = {
      profile: { form },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(form)
  })
})
