describe('Articles List', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })

  it('Articles shoud be loaded', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})
