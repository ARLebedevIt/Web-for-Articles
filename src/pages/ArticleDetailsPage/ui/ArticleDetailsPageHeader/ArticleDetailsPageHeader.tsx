import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button/ui/Button'
import { getArticleDetailsData } from '@/entities/Article'
import { HStack } from '@/shared/ui/Stack'
import { getCanEditArticle } from '../../model/selectors/article'

type ArticleDetailsPageHeaderProps = {
  className?: string
}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation()
  const navigate = useNavigate()
  const article = useSelector(getArticleDetailsData)

  const canEdit = useSelector(getCanEditArticle)
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
      {canEdit && <Button onClick={onEditArticle}>{t('Редактировать')}</Button>}
    </HStack>
  )
}
