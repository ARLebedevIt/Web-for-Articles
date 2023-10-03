import { StateSchema } from '@/app/providers/StoreProvider'
import { ArticleCategoryType, ArticleSortFields, ArticleView } from '@/entities/Article'

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.GRID
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortFields.VIEWS
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
export const getArticlesPageCategory = (state: StateSchema) => state.articlesPage?.category ?? ArticleCategoryType.ALL
