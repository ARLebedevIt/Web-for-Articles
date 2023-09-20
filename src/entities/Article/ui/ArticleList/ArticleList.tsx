import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Article, ArticleView } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

type ArticleListProps = {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return (
    new Array(view === ArticleView.GRID ? 18 : 3)
      .fill(0)
      .map((_, idx) => (
        <ArticleListItemSkeleton key={idx} view={view} />
      ))
  )
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    articles, className, isLoading, view = ArticleView.GRID,
  } = props

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
  //       {getSkeletons(view)}
  //     </div>
  //   )
  // }

  const renderArticle = (article: Article) => {
    return (
      <ArticleListItem
        key={article.id}
        className={classNames(cls.card, {}, [className])}
        article={article}
        view={view}
      />
    )
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
})
