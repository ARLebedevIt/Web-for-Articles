import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { ArticleCategoryType, ArticleSortFields } from '@/entities/Article'
import { SortOrder } from '@/shared/types'
import {
  getArticlesPageInited,
} from '../../selectors/articlesPageSelector'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi

    const inited = getArticlesPageInited(getState())

    if (!inited) {
      searchParams.forEach((value, key) => {
        if (value) {
          switch (key) {
            case 'order':
              dispatch(articlesPageActions.setOrder(value as SortOrder))
              break
            case 'sort':
              dispatch(articlesPageActions.setSort(value as ArticleSortFields))
              break
            case 'category':
              dispatch(articlesPageActions.setCategory(value as ArticleCategoryType))
              break
            case 'search':
              dispatch(articlesPageActions.setSearch(value))
              break
            default:
              break
          }
        }
      })

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  },
)
