import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { User, getUserAuthData } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'

type ArticleAdditionalInfoProps = {
  className?: string
  author?: User
  createdAt?: string
  views?: number
  onEdit?: () => void
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const { t } = useTranslation('article-details')
    const { className, author, createdAt, views, onEdit } = props
    const user = useSelector(getUserAuthData)

    const canEdit = author?.id === user?.id

    return (
      <VStack gap="32" className={className}>
        <HStack gap="8">
          <Avatar src={author?.avatar} size={32} />
          <Text text={author?.username} bold />
          <Text text={createdAt} bold />
        </HStack>
        {canEdit && <Button onClick={onEdit}>{t('Редактировать')}</Button>}
        <Text text={t('{{count}} просмотров', { count: views })} />
      </VStack>
    )
  },
)
