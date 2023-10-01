import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RatingCard } from '@/entities/Rating'
import { useGetArticleRating, useSetArticleRating } from '../../api/articleRatingApi'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'

export type ArticleRatingProps = {
  className?: string
  articleId: string
}

const ArticleRating = memo(({ className, articleId }: ArticleRatingProps) => {
  const { t } = useTranslation()
  const userData = useSelector(getUserAuthData)
  const { data, isLoading } = useGetArticleRating({ userId: userData?.id ?? '', articleId })

  const [rateArticleMutation] = useSetArticleRating()

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id ?? '',
        articleId,
        rate: starsCount,
        feedback,
      })
    } catch (e) {
      console.log(e)
    }
  }, [articleId, rateArticleMutation, userData?.id])

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount)
  }, [handleRateArticle])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback)
  }, [handleRateArticle])

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  const rating = data?.[0]

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте свой отзыв о статье')}
      hasFeedback
    />
  )
})

export default ArticleRating
