// import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
// import { ArticleSortFields } from 'entities/Article'
// import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
// import { initArticlesPage } from './initArticlesPage'

// jest.mock('./initArticlesPage')

// describe('initArticlesPage.test', () => {
//   test('should return more data from page 3', async () => {
//     const thunk = new TestAsyncThunk(initArticlesPage, {
//       articlesPage: {
//         _inited: false,
//         sort: ArticleSortFields.CREATED,
//       },
//     })
//     await thunk.callThunk()

//     expect(fetchArticlesList).toEqual({})
//   })
// })
