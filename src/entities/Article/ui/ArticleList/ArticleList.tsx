/* eslint-disable react/no-unstable-nested-components */
import React, { HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { VirtuosoGrid } from 'react-virtuoso'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextSize } from '@/shared/ui/Text'
import { Article } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { ArticleView } from '../../model/consts/consts'

type ArticleListProps = {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  onLoadNextPart?: () => void
  virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => {
  return (
    new Array(view === ArticleView.GRID ? 18 : 3)
      .fill(0)
      .map((_, idx) => (
        <ArticleListItemSkeleton className={cls.card} key={idx} view={view} />
      ))
  )
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    articles, className, onLoadNextPart, target, isLoading, view = ArticleView.GRID, virtualized = true,
  } = props
  const { t } = useTranslation()

  const Footer = memo(() => {
    if (isLoading) {
      return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {getSkeletons(view)}
        </div>
      )
    }
    return null
  })

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        target={target}
        key={article.id}
        className={cls.card}
        article={article}
        view={view}
      />
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }

  return (
    <div>
      {virtualized
        ? (
          <VirtuosoGrid
            listClassName={classNames(cls.ArticleList, {}, [className, cls[view]])}
            useWindowScroll
            style={{ height: '100%' }}
            data={articles}
            components={{
              Footer,
              ScrollSeekPlaceholder: ({ height, width, index }) => (
                <div>
                  --
                </div>
              ),
            }}
            // endReached={onLoadNextPart}
            itemContent={(idx_, item) => (
              renderArticle(item)
            )}
          />
        ) : (
          <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
              ? articles.map(renderArticle)
              : null}
            {isLoading && getSkeletons(view)}
          </div>
        )}
    </div>
  )
})
