import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Comment } from 'entities/Comment'
import { addCommentForArticle } from './addCommentForArticle'

const thunk = new TestAsyncThunk(addCommentForArticle, {
  user: {
    authData: {
      id: '1',
      username: 'user',
    },
  },
  articleDetails: {
    data: {
      id: '1',
    },
  },
})
const comment = {
  articleId: '1',
  id: '_dS8nv2',
  text: '123',
  userId: '2',
}

describe('addCommentForArticle test', () => {
  test('success post comment', async () => {
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }))
    const result = await thunk.callThunk('123')

    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comment)
  })

  test('validate error', async () => {
    const result = await thunk.callThunk('')
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
