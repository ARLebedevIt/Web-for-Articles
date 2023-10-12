import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Article, ArticleBlockType, ArticleDetailsSchema , fetchArticleById } from '@/entities/Article'

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
}

export const articleEditPageSlice = createSlice({
  name: 'articleEditPageSlice',
  initialState,
  reducers: {
    updateArticle: (state, action: PayloadAction<Article>) => {      
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    updateArticleBlocks: (state, {payload}: PayloadAction<{value: string, paragraphId?: number, blockId?: string}>) => {
      state.data?.blocks?.forEach((item) => {
          switch (item.type) {
            case ArticleBlockType.CODE:
              if (item.id === payload.blockId) {
                item.code = payload.value
              } 
              break
            case ArticleBlockType.IMAGE:
              if (item.id === payload.blockId) {
                item.src = payload.value
              }
              break
            case ArticleBlockType.TEXT:
              if (item.id === payload.blockId && payload.paragraphId !== undefined) {
                item.paragraphs[payload?.paragraphId] = payload.value
              }
              break
            default:
              return state.data?.blocks
          }
          return state.data?.blocks
        })
    },  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articleEditActions } = articleEditPageSlice
export const { reducer: articleEditReducer } = articleEditPageSlice
