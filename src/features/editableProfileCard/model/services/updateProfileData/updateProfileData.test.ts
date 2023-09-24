import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { updateProfileData } from './updateProfileData'
import { ValidateProfileError } from '../../consts/consts'

const data = {
  id: '1',
  age: 10,
  city: 'Moscow',
  currency: Currency.RUB,
  country: Country.Russia,
  username: 'Test',
  first: '123',
  lastname: '321',
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('with error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, age: undefined },
      },
    })
    const result = await thunk.callThunk()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
})
