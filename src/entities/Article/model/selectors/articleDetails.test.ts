import { StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from './articleDetails'

describe('articleDetails.test', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('test with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toBe(undefined)
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false)
    expect(getArticleDetailsData(state as StateSchema)).toBe(undefined)
  })

  test('getArticleDetailsIsLoading test', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true)
  })

  test('getArticleDetailsError test', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'Some Error',
      },
    }
    expect(getArticleDetailsError(state as StateSchema)).toBe('Some Error')
  })
})
