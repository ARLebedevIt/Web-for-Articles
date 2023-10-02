import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { User } from '@/entities/User'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Text } from '@/shared/ui/redesigned/Text'
import { Button } from '@/shared/ui/redesigned/Button'

type ArticleAdditionalInfoProps = {
  className?: string
  author: User
  createdAt: string
  views: number
  onEdit?: () => void
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
  const { id } = useParams<{ id: string }>()
  const {t} = useTranslation()
  const { className, author, createdAt, views, onEdit } = props
  return (
    <VStack gap='32' className={className}>
      <HStack gap='8' >
        <Avatar src={author.avatar} size={32} />
        <Text text={author.username} bold />
        <Text text={createdAt} bold />
      </HStack>
      <Button onClick={onEdit}>{t('Редактировать')}</Button>
      <Text text={t('{{count}} просмотров', {count: views})}/>
    </VStack>
  ) 
})
