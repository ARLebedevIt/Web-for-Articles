import { Article } from '../../../src/entities/Article'

const defaulArticle = {
  title: 'TESTING',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://miro.medium.com/max/1200/1*FNakkrty3kjOvNU8m5iQfw.png',
  views: 94002,
  createdAt: '26.02.2019',
  userId: '1',
  category: [
    'IT',
  ],
  blocks: [],
}

export const createArticle = (article?: Article) => {
  return cy.request({
    method: 'POST',
    url: 'http://localhost:8000/articles',
    headers: { Authorization: 'QWERTY' },
    body: article ?? defaulArticle,
  }).then(resp => resp.body)
}

export const removeArticle = (articleID: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleID}`,
    headers: { Authorization: 'QWERTY' },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>
      removeArticle(articleID: string): Chainable<void>
    }
  }
}
