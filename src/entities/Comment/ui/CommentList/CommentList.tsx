import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from '@/shared/ui/deprecated/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'

type CommentListProps = {
  className?: string
  isLoading?: boolean
  comments?: Comment[]
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    )
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length! > 0
        ? comments?.map(comment => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
        : <Text text={t('Комментарии отсутствуют')} />}
    </VStack>
  )
})
