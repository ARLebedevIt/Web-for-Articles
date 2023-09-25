import React, { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import { ArticleCategoryType } from '../../model/consts/consts'

interface ArticleCategoryTabsProps {
  className?: string
  value: ArticleCategoryType
  onChangeCategory: (category: ArticleCategoryType) => void
}

export const ArticleCategoryTabs = memo((props: ArticleCategoryTabsProps) => {
  const { t } = useTranslation()
  const { value, className, onChangeCategory } = props
  const categoryTabs = useMemo<TabItem<ArticleCategoryType>[]>(() => [
    {
      value: ArticleCategoryType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleCategoryType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleCategoryType.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleCategoryType.SCIENCE,
      content: t('Наука'),
    },
  ], [t])

  const onChange = useCallback((tab: TabItem<ArticleCategoryType>) => {
    onChangeCategory(tab.value)
  }, [onChangeCategory])

  return (
    <Tabs tabs={categoryTabs} className={classNames('', {}, [className])} value={value} onTabChange={onChange} />
  )
})
