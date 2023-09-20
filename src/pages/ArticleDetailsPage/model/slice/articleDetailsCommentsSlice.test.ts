import { Comment } from 'entities/Comment'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

describe('articleDetailsCommentsSlice test', () => {
  test('fetchCommentsByArticleId test', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      ids: [],
      entities: {},
    }
    const comments: Comment[] = [
      {
        id: '1',
        text: 'text',
        user: {
          id: '1',
          username: 'user',
        },
      },
      {
        id: '2',
        text: 'text2',
        user: {
          id: '2',
          username: 'user2',
        },
      },
    ]
    const normalyze = {
      entities: {
        1: { id: '1', text: 'text', user: { id: '1', username: 'user' } },
        2: { id: '2', text: 'text2', user: { id: '2', username: 'user2' } },
      },
      ids: ['1', '2'],
      isLoading: false,
    }
    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentsSchema,
      fetchCommentsByArticleId.fulfilled(comments, '', ''),
    ))
      .toEqual(normalyze)
  })
})
