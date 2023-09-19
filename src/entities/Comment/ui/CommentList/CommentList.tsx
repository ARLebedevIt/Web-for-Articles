import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/ui/Text'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Comment } from '../../model/types/comment'
import { CommentCard } from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

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
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length
        ? comments.map(comment => <CommentCard isLoading={isLoading} comment={comment} className={cls.comment} />)
        : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  )
})
