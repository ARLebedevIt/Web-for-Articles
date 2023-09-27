import { EntityState } from '@reduxjs/toolkit'
import {
  Article, ArticleView, ArticleCategoryType, ArticleSortFields,
} from '@/entities/Article'

import { SortOrder } from '@/shared/types/sort'

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  view: ArticleView
  page: number
  limit: number
  hasMore: boolean
  // filters
  order: SortOrder
  sort: ArticleSortFields
  search: string
  category: ArticleCategoryType

  _inited: boolean
}
