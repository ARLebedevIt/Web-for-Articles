import { classNames } from '@/shared/lib/classNames/classNames'
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink'
import { Notification } from '../../model/types/notifications'
import cls from './NotificationItem.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'

type NotificationItemProps = {
  className?: string
  item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { item, className } = props

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={classNames(cls.NotificationList, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationList, {}, [className])}>
          <TextDeprecated title={item.title} text={item.description} />
        </CardDeprecated>
      }
    />
  )

  if (item.href) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <AppLink className={cls.linkRedesigned} to={item.href} target="_blank">
          {content}
          </AppLink>
        }
        off={
          <AppLinkDeprecated className={cls.link} to={item.href} target="_blank">
            {content}
          </AppLinkDeprecated>
        }
      />
    )
  }

  return content
}
