import React, { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useGetProfileRating, useSetProfileRating } from '../api/profileRatingApi'
import { getUserAuthData } from '@/entities/User'
import { RatingCard } from '@/entities/Rating'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text, TextAlign } from '@/shared/ui/deprecated/Text'
import { Card } from '@/shared/ui/deprecated/Card'

export interface ProfileRatingProps {
  className?: string
  profileId: string
}

const ProfileRating = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props
  const userData = useSelector(getUserAuthData)
  const { t } = useTranslation()

  const { data, isLoading } = useGetProfileRating({
    profileId,
    userId: userData?.id ?? '',
  })

  const [rateProfileMutation] = useSetProfileRating()

  const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateProfileMutation({
        profileId,
        rate: starsCount,
        userId: userData?.id ?? '',
        feedback,
      })
    } catch (e) {
      console.log(e)
    }
  }, [profileId, rateProfileMutation, userData?.id])

  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateProfile(starsCount, feedback)
  }, [handleRateProfile])

  const onCancel = useCallback((starsCount: number) => {
    handleRateProfile(starsCount)
  }, [handleRateProfile])

  if (isLoading) {
    return <Skeleton width="100%" height={120} />
  }

  const rating = data?.[0]

  const canRateProfile = profileId !== userData?.id

  if (!canRateProfile) {
    return (
      <Card>
        <Text align={TextAlign.CENTER} title={t('Вы не можете оценить свой профиль')} />
      </Card>
    )
  }

  return (
    <RatingCard
      hasFeedback
      className={className}
      feedbackTitle={t('Вы так же можете оставить комментарий')}
      title={t('Оцените профиль данного пользователя')}
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
    />
  )
})

export default ProfileRating
