import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Comment } from '../../model/types/comment'
import cls from './CommentCard.module.scss'
import { getRouteProfile } from '@/shared/const/router'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Text } from '@/shared/ui/redesigned/Text'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'

type CommentCardProps = {
  comment?: Comment
  isLoading?: boolean
  className?: string
}

export const CommentCard = (props: CommentCardProps) => {
  const { className, comment, isLoading } = props

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  })

  if (isLoading) {
    return (
      <VStack
        data-testid="CommentCard.Loading"
        max
        gap="8"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} />
        </div>
        <Skeleton width="100%" height={50} />
      </VStack>
    )
  }

  if (!comment) {
    return null
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card paddings="24" border="partial" max>
          <VStack
            data-testid="CommentCard.Content"
            max
            gap="8"
            className={classNames(cls.CommentCardRedesigned, {}, [className])}>
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack gap="8">
                {comment.user.avatar ? (
                  <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text bold title={comment.user.username} />
              </HStack>
            </AppLink>
            <Text text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          data-testid="CommentCard.Content"
          max
          gap="8"
          className={classNames(cls.CommentCard, {}, [className])}>
          <AppLinkDeprecated
            to={getRouteProfile(comment.user.id)}
            className={cls.header}>
            {comment.user.avatar ? (
              <AvatarDeprecated size={30} src={comment.user.avatar} />
            ) : null}
            <TextDeprecated title={comment.user.username} />
          </AppLinkDeprecated>
          <Text text={comment.text} />
        </VStack>
      }
    />
  )
}
