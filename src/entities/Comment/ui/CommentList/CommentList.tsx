import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Text } from '@/shared/ui/redesigned/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import { ToggleFeatures } from '@/shared/lib/features'

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
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
        <CommentCard isLoading={isLoading} />
      </VStack>
    )
  }

  return (
    <VStack gap="16" max className={classNames('', {}, [className])}>
      {comments?.length! > 0 ? (
        comments?.map(comment => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
      ) : (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={t('Комментарии отсутствуют')} />}
          off={<TextDeprecated text={t('Комментарии отсутствуют')} />}
        />
      )}
    </VStack>
  )
})
