import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileError } from '../../consts/consts'

const data = {
  age: 10,
  city: 'Moscow',
  currency: Currency.RUB,
  country: Country.Russia,
  username: 'Test',
  first: '123',
  lastname: '321',
}

describe('validateProfileData.test', () => {
  test('success', () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('without first and last name', () => {
    const result = validateProfileData({ ...data, lastname: '', first: '' })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test('without age', () => {
    const result = validateProfileData({ ...data, age: undefined })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })

  test('without country', () => {
    const result = validateProfileData({ ...data, country: undefined })
    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY])
  })

  test('form with all types of errors', () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ])
  })
})
