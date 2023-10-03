import React, { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs'
import { ArticleCategoryType } from '@/entities/Article'
import { ToggleFeatures } from '@/shared/lib/features'
import { Tabs } from '@/shared/ui/redesigned/Tabs'

interface ArticleCategoryTabsProps {
  className?: string
  value: ArticleCategoryType
  onChangeCategory: (category: ArticleCategoryType) => void
}

export const ArticleCategoryTabs = memo((props: ArticleCategoryTabsProps) => {
  const { t } = useTranslation()
  const { value, className, onChangeCategory } = props
  const categoryTabs = useMemo<TabItem<ArticleCategoryType>[]>(
    () => [
      {
        value: ArticleCategoryType.ALL,
        content: t('Все статьи'),
      },
      {
        value: ArticleCategoryType.IT,
        content: t('IT'),
      },
      {
        value: ArticleCategoryType.ECONOMICS,
        content: t('Экономика'),
      },
      {
        value: ArticleCategoryType.SCIENCE,
        content: t('Наука'),
      },
    ],
    [t],
  )

  const onChange = useCallback(
    (tab: TabItem<ArticleCategoryType>) => {
      onChangeCategory(tab.value)
    },
    [onChangeCategory],
  )

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs
          direction='column'
          tabs={categoryTabs}
          className={classNames('', {}, [className])}
          value={value}
          onTabChange={onChange}
        />
      }
      off={
        <TabsDeprecated
          tabs={categoryTabs}
          className={classNames('', {}, [className])}
          value={value}
          onTabChange={onChange}
        />
      }
    />
  )
})
