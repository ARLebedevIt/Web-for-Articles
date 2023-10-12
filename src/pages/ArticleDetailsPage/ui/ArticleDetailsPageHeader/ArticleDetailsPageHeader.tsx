import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/deprecated/Button'
import { getArticleDetailsData } from '@/entities/Article'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { getCanEditArticle } from '../../model/selectors/article'
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'

type ArticleDetailsPageHeaderProps = {
  className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)

  const canEdit = useSelector(getCanEditArticle)
  
  const onBackToList = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    if (article?.id) {
      navigate(getRouteArticleEdit(article?.id))
    }
  }, [article, navigate])

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('Редактировать')}</Button>}
    </HStack>
  )
}
