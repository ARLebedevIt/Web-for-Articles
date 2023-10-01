
describe('Articles List', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })

  it.skip('Articles shoud be loaded', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('Articles shoud be loaded on Sbabs(fixtures)', () => {
    cy.intercept('GET', '**/articles?*', {fixture: 'articles.json'})
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })


  it.skip('Filter search testing', () => {
    cy.getByTestId('ArticlesPageFilters.Input').scrollIntoView().clear().type('Not Existed Article')
    cy.getByTestId('ArticleListItem').should('have.length', 0)
  })

  it.skip('View Selector testing', () => {
    cy.getByTestId(`ArticleViewSelector`).should('exist')
    cy.getByTestId(`ArticleViewSelector.TEMPLATE`).click()
    cy.getByTestId('ArticleListItem.ReadMore.Btn').should('exist')
  })

  it.skip('Category tabs testing', () => {
    cy.getByTestId(`Tabs`).should('exist')
    cy.getByTestId(`Tabs.IT`).click()
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2)
    cy.getByTestId('ArticleListItem.Catergory.Paragraph').each((item) => {
      expect(item.text()).equal('IT')
    })
  })

  it.skip('Sort by title testing', () => {
    cy.getByTestId(`ArticleSortSelector`).should('exist')
    cy.getByTestId(`Select.createdAt`).select('title').should('have.value', 'title')
    cy.getByTestId('ArticleListItem.Title.Paragraph').first().should('have.text', 'Golang news')
  })

  it.skip('Sort in asc', () => {
    cy.getByTestId(`ArticleSortSelector`).should('exist')
    cy.getByTestId(`Select.asc`).select('desc').should('have.value', 'desc')
  })
})

