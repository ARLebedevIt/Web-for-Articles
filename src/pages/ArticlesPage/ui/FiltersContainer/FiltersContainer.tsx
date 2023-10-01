import React, { memo } from 'react'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

type FiltersContainerProps = {
  className?: string
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { className } = props

  const {
    category,
    fetchData,
    onChangeCategory,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    order,
    search,
    sort,
  } = useArticleFilters()


  return (
    <ArticlesFilters category={category} onChangeCategory={onChangeCategory} onChangeOrder={onChangeOrder}
    sort={sort} search={search} onChangeSearch={onChangeSearch} onChangeSort={onChangeSort} order={order}
     />
  )
})