import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ArticleList } from '@/entities/Article'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { getArticles } from '../../model/slice/articlesPageSlice'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView }
  from '../../model/selectors/articlesPageSelector'
import { ToggleFeatures } from '@/shared/lib/features'

type ArticleInfiniteListProps = {
  className?: string
}

export const ArticleInfiniteList = memo(({ className }: ArticleInfiniteListProps) => {
  const { t } = useTranslation('articles')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  if (error) {
    return (
      <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Text title={t('Ошибка при подгрузке статей')} />
      }
      off={
        <TextDeprecated title={t('Ошибка при подгрузке статей')} />
      }
      />
    )
  }

  return (
    <ArticleList
      className={className}
      isLoading={isLoading}
      view={view}
      articles={articles}
      />
  )
})
