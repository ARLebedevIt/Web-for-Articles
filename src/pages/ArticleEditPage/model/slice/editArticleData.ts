import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '@/entities/Article'
import { getArticleEditData } from '../selectors/getEditArticleData'

export const editArticleData = createAsyncThunk<Article, void, ThunkConfig<string>>(
  'article/editArticleData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const articleData = getArticleEditData(getState())
    try {
      const response = await extra.api.put<Article>(`/articles/${articleData?.id}`, articleData)

      if (!response.data) {
        throw new Error()
      }
      
      return response.data
    } catch (e) {
      return rejectWithValue('')
    }
  },
)
