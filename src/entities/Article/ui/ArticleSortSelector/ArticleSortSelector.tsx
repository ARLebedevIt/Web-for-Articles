import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { SortOrder } from 'shared/types'
import cls from './ArticleSortSelector.module.scss'
import { ArticleSortFields } from '../../model/consts/consts'

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
      value: ArticleSortFields.CREATED,
      content: t('Дате создания'),
    },
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
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select options={sortFieldOptions} label={t('Сортировать по')} value={sort} onChange={onChangeSort} />
      <Select options={orderOptions} label={t('по')} value={order} onChange={onChangeOrder} />
    </div>
  )
})
