import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/deprecated/Card'
import { Input } from '@/shared/ui/deprecated/Input'


import cls from './ArticlesPageFilters.module.scss'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleCategoryTabs } from '@/features/ArticleCategoryTabs'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

type ArticlesPageFiltersProps = {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation('articles')

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
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <HStack justify="between">
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ViewSelectorContainer />
      </HStack>
      <Card className={cls.search}>
        <Input
          data-testid="ArticlesPageFilters.Input"
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleCategoryTabs
        value={category}
        onChangeCategory={onChangeCategory}
      />
    </div>
  )
})
