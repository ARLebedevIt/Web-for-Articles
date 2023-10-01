import React from 'react'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

type Props = {}

export const ViewSelectorContainer = (props: Props) => {
  const {onChangeView, view} = useArticleFilters()

  return (
      <ArticleViewSelector onViewClick={onChangeView} view={view} />
  )
}