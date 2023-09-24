import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { profileActions, profileReducer } from './profileSlice'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { ProfileSchema } from '../types/editableProfileCardSchema'
import { ValidateProfileError } from '../consts/consts'

const data = {
  age: 10,
  city: 'Moscow',
  currency: Currency.RUB,
  country: Country.Russia,
  username: 'Test',
  first: '123',
  lastname: '321',
}

describe('profileSlice test', () => {
  test('test setReadOnly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadOnly(true),
    ))
      .toEqual({ readonly: true })
  })

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      validateErrors: [ValidateProfileError.INCORRECT_AGE],
      form: { username: '' },
    }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    ))
      .toEqual({
        readonly: true, validateErrors: undefined, form: data, data,
      })
  })

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '' },
    }
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile(data),
    ))
      .toEqual({ form: data })
  })

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    ))
      .toEqual({ isLoading: true, validateErrors: undefined })
  })

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    ))
      .toEqual({
        data, isLoading: false, readonly: true, validateErrors: undefined, form: data,
      })
  })
})
