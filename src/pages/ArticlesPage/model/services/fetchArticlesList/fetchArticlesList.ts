import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article, ArticleCategoryType } from '@/entities/Article'
import { addQueryParams } from '@/shared/url/addQueryParams'
import {
  getArticlesPageCategory,
  getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort,
} from '../../selectors/articlesPageSelector'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (args, thunkApi) => {
    const {
      extra, rejectWithValue, getState,
    } = thunkApi

    const limit = getArticlesPageLimit(getState())
    const order = getArticlesPageOrder(getState())
    const sort = getArticlesPageSort(getState())
    const search = getArticlesPageSearch(getState())
    const page = getArticlesPageNum(getState())
    const category = getArticlesPageCategory(getState())

    try {
      addQueryParams({
        sort, order, search, category,
      })
      
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _order: order,
          _sort: sort,
          q: search,
          category: category === ArticleCategoryType.ALL ? undefined : category,
        },
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
