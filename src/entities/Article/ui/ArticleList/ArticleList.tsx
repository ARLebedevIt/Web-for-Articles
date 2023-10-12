import React, { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleView } from '../../model/consts/consts'
import { ToggleFeatures } from '@/shared/lib/features'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'

type ArticleListProps = {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.GRID ? 18 : 3)
    .fill(0)
    .map((_, idx) => (
      <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    articles,
    className,
    target,
    isLoading,
    view = ArticleView.GRID,
  } = props
  const { t } = useTranslation('articles')

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        target={target}
        key={article.id}
        article={article}
        view={view}
      />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Card border="partial" max>
              <Text align="center" size="l" title={t('Статьи не найдены')} />
            </Card>
          }
          off={
            <TextDeprecated size={TextSize.L} title={t('Статьи не найдены')} />
          }
        />
      </div>
    )
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack
          className={classNames(cls.ArticleListItemRedesigned, {}, [])}
          wrap="wrap"
          gap="16"
          data-testid="ArticleList">
          {articles.length > 0 ? articles.map(renderArticle) : null}
          {isLoading && getSkeletons(view)}
        </HStack>
      }
      off={
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles.length > 0 ? articles.map(renderArticle) : null}
          {isLoading && getSkeletons(view)}
        </div>
      }
    />
  )
})
