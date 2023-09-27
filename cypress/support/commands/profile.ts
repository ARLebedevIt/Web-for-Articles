import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage'

export const updateProfile = (first: string, last: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditBtn').click()
  cy.getByTestId('ProfileCard.FirstName').clear().type(first)
  cy.getByTestId('ProfileCard.LastName').clear().type(last)
  cy.getByTestId('EditableProfileCardHeader.SaveBtn').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      authorization: 'qwerty',
    },
    body: {
      id: '4',
      first: 'testuser',
      lastname: 'testuser',
      age: 20,
      currency: 'RUB',
      country: 'Russia',
      city: 'Moscow',
      username: 'testuser',
      avatar: 'https://clck.ru/35soXf',
    },

  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    return body
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(first: string, last: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
