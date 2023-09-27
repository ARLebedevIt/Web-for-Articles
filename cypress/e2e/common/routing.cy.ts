import { selectByTestId } from 'cypress/helpers/selectByTestId'

describe('Routing', () => {
  describe('User is not logged in', () => {
    it('Route on Main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Redirect on MainPage', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
    it('Redirect on NotFoundPage', () => {
      cy.visit('/dont-existing-route')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('Auth User', () => {
    beforeEach(() => {
      cy.login('testuser ', '123')
    })
    it('Users profile', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('Articles page should work for authorized user', () => {
      cy.visit('/articles/')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
  })
})
