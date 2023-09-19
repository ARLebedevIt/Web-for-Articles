import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { fetchProfileData } from './fetchProfileData'

const data = {
  age: 10,
  city: 'Moscow',
  currency: Currency.RUB,
  country: Country.Russia,
  username: 'Test',
  first: '123',
  lastname: '321',
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('with error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
