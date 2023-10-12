import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleCategoryTabs } from '@/features/ArticleCategoryTabs'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { Card } from '@/shared/ui/redesigned/Card'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleCategoryType, ArticleSortFields } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ArticlesFilters.module.scss'
import { Input } from '@/shared/ui/redesigned/Input'
import SearchIcon from '@/shared/assets/icons/redesigned/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'

type ArticlesFiltersProps = {
  className?: string
  sort: ArticleSortFields
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortFields) => void
  category: ArticleCategoryType
  onChangeCategory: (category: ArticleCategoryType) => void
  search: string
  onChangeSearch: (value: string) => void
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const { t } = useTranslation('articles')
  const {
    className,
    onChangeCategory,
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    order,
    search,
    sort,
    category,
  } = props
  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      border='partial'
      paddings="24">
      <VStack gap="32">
        <Input
          size='m'
          data-testid="ArticlesPageFilters.Input"
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <ArticleCategoryTabs
          value={category}
          onChangeCategory={onChangeCategory}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  )
})
