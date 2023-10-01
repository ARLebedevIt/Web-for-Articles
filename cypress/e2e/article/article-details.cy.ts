let currentArticleID = ''

describe('User visit current article', () => {
  describe('Work on Stabs', () => {
    it('Rating should be added', () => {
      cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
      cy.getByTestId('ArticleDetails.Info').should('exist')
      cy.getByTestId('RatingCard').scrollIntoView()
      cy.setRate(4, 'feedback')
    })
  })

  describe('Work on API', () => {
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

    it.skip('User see article template', () => {
      cy.getByTestId('ArticleDetails.Info').should('exist')
    })

    it.skip('Article Recommendations List should be mounted', () => {
      cy.getByTestId('ArticleRecommendationsList').should('exist')
    })

    it.skip('New comment should be added', () => {
      cy.getByTestId('ArticleDetails.Info').should('exist')
      cy.getByTestId('AddCommentForm').scrollIntoView()
      cy.addComment('Love test')
      cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
  })
})
