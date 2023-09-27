let currentArticleID = ''
describe('User visit current article', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleID = article.id
      cy.visit(`/articles/${article.id}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArticleID)
  })

  it('User see article template', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })

  it('Article Recommendations List should be mounted', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })

  it('New comment should be added', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('Love test')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })

  it('New comment should be added', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate(4, 'feedback')
  })
})
