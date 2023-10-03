import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select'
import { SortOrder } from '@/shared/types/sort'
import { ArticleSortFields } from '@/entities/Article'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ToggleFeatures } from '@/shared/lib/features'
import { ListBox } from '@/shared/ui/redesigned/Popups'
import { Text } from '@/shared/ui/redesigned/Text'

type ArticleSortSelectorProps = {
  className?: string
  sort: ArticleSortFields,
  order: SortOrder,
  onChangeOrder: (newOrder: SortOrder) => void,
  onChangeSort: (newSort: ArticleSortFields) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, onChangeOrder, onChangeSort, order, sort,
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('Возрастанию'),
    },
    {
      value: 'desc',
      content: t('Убыванию'),
    },
  ], [t])

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortFields>[]>(() => [
    {
      value: ArticleSortFields.TITLE,
      content: t('Заголовку'),
    },
    {
      value: ArticleSortFields.VIEWS,
      content: t('Кол-ву просмотров'),
    },
  ], [t])

  return (
    <ToggleFeatures
    feature='isAppRedesigned'
    on={
      <VStack data-testid='ArticleSortSelector' gap="8" className={classNames('', {}, [className])}>
      <Text text={t('Сортировать по:')} />
      <ListBox items={sortFieldOptions} value={sort} onChange={onChangeSort} />
      <ListBox items={orderOptions} value={order} onChange={onChangeOrder} />
    </VStack>
    }
    off={
      <HStack data-testid='ArticleSortSelector' gap="16" className={classNames('', {}, [className])}>
      <Select options={sortFieldOptions} label={t('Сортировать по')} value={sort} onChange={onChangeSort} />
      <Select options={orderOptions} label={t('по')} value={order} onChange={onChangeOrder} />
    </HStack>
    }
    />

  )
})
