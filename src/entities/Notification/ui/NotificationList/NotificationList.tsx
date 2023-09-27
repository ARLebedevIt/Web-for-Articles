import { VStack } from '@/shared/ui/Stack'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Skeleton } from '@/shared/ui/Skeleton'
import { useNotifications } from '../../api/notificationApi'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import cls from './NotificationList.module.scss'

type NotificationListProps = {
  className?: string
}

export const NotificationList = (props: NotificationListProps) => {
  const { className } = props
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  })

  if (isLoading) {
    return (
      <VStack
        gap="8"
        max
        className={classNames(cls.NotificationList, {}, [className])}
     >
        <Skeleton width="100%" height={80} />
        <Skeleton width="100%" height={80} />
        <Skeleton width="100%" height={80} />
      </VStack>
    )
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.NotificationList, {}, [className])}
     >
      {data?.map(item => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  )
}
