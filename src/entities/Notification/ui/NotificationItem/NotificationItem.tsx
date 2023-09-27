import { classNames } from '@/shared/lib/classNames/classNames'
import { Card, CardTheme } from '@/shared/ui/Card'
import { Text } from '@/shared/ui/Text'
import { AppLink } from '@/shared/ui/AppLink'
import { Notification } from '../../model/types/notifications'
import cls from './NotificationItem.module.scss'

type NotificationItemProps = {
  className?: string
  item: Notification
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { item, className } = props

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationList, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return (
      <AppLink className={cls.link} to={item.href} target="_blank">
        {content}
      </AppLink>
    )
  }

  return content
}
