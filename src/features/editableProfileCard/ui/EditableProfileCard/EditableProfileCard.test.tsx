import { screen } from '@testing-library/react'
import userEvenet from '@testing-library/user-event'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { Country } from '@/entities/Country'
import { Profile } from '@/entities/Profile'
import { $api } from '@/shared/api/api'
import { Currency } from '@/entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import { EditableProfileCard } from './EditableProfileCard'

const profile: Profile = {
  id: '1',
  age: 10,
  city: 'Moscow',
  currency: Currency.RUB,
  country: Country.Russia,
  username: 'admin',
  first: 'test1',
  lastname: 'test2',
}

const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      form: profile,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
}

describe('EditableProfileCard tests', () => {
  test('readonly mode change', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelBtn')).toBeInTheDocument()
  })

  test('on cancel data doesn\'t change', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))

    await userEvenet.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvenet.clear(screen.getByTestId('ProfileCard.LastName'))

    await userEvenet.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvenet.type(screen.getByTestId('ProfileCard.LastName'), 'user')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user')

    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.CancelBtn'))

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('test1')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('test2')
  })

  test('validate error on empty field', async () => {
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))

    await userEvenet.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvenet.clear(screen.getByTestId('ProfileCard.LastName'))

    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('valide form, success case', async () => {
    const mockPutReq = jest.spyOn($api, 'put')
    componentRender(<EditableProfileCard id="1" />, options)
    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.EditBtn'))

    await userEvenet.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvenet.clear(screen.getByTestId('ProfileCard.LastName'))

    await userEvenet.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvenet.type(screen.getByTestId('ProfileCard.LastName'), 'user')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user')

    await userEvenet.click(screen.getByTestId('EditableProfileCardHeader.SaveBtn'))
    expect(mockPutReq).toHaveBeenCalled()
  })
})
