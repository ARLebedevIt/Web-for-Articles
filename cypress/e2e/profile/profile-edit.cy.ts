let profileId = ''

describe('User visit self profile', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      profileId = data.id
      cy.visit(`/profile/${data.id}`)
    })
  })

  afterEach(() => {
    cy.resetProfile(profileId)
  })

  it('Profile success loaded', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'testuser')
  })

  it('Update profile functionality', () => {
    const newName = 'newFirst'
    const lastName = 'newLast'
    cy.updateProfile(newName, lastName)
    cy.getByTestId('ProfileCard.FirstName').should('have.value', newName)
    cy.getByTestId('ProfileCard.LastName').should('have.value', lastName)
  })
})
