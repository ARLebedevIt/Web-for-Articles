import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleCategoryType, ArticleSortFields, ArticleView } from '@/entities/Article'
import { articlesPageActions } from '../../model/slice/articlesPageSlice'
import { SortOrder } from '@/shared/types/sort'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import {
  getArticlesPageCategory,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'


export const useArticleFilters = () => {
  const dispatch = useAppDispatch()
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const category = useSelector(getArticlesPageCategory)
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSort = useCallback(
    (newSort: ArticleSortFields) => {
      dispatch(articlesPageActions.setSort(newSort))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData],
  )

  const onChangeCategory = useCallback(
    (value: ArticleCategoryType) => {
      dispatch(articlesPageActions.setCategory(value))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData],
  )

  return {
    order,
    sort,
    search,
    category,
    view,
    fetchData,
    onChangeCategory,
    onChangeSearch,
    onChangeSort,
    onChangeView,
    onChangeOrder,
  }
}
