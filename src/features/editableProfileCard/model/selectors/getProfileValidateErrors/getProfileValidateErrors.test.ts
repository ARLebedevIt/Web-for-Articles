import { StateSchema } from '@/app/providers/StoreProvider'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../consts/consts'

describe('getProfileValidateErrors.test', () => {
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })

  test('should return validate name and lastname', () => {
    const erors = [
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
    ]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: erors,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(erors)
  })
})
