import React, { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/shared/ui/redesigned/Card'
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo'
import { getArticleDetailsData } from '@/entities/Article'
import cls from './AdditionalInfoContainer.module.scss'
import { getRouteArticleEdit } from '@/shared/const/router'

type AdditionalInfoContainerProps = {
  className?: string
}

export const AdditionalInfoContainer = memo(
  (props: AdditionalInfoContainerProps) => {
    const { className } = props

    const article = useSelector(getArticleDetailsData)

    const navigate = useNavigate()

    const onEditArticle = useCallback(() => {
      if (article?.id) {
        navigate(getRouteArticleEdit(article?.id))
      }
    }, [article, navigate])

    if (!article) {
      return null
    }

    return (
      <Card paddings="24" border="partial" className={cls.card}>
        <ArticleAdditionalInfo
          onEdit={onEditArticle}
          className={className}
          author={article.user}
          createdAt={article.createdAt}
          views={article.views}
        />
      </Card>
    )
  },
)
