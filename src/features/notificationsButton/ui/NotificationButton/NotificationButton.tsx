import React, { memo, useCallback, useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon'
import bellIconDeprecated from '@/shared/assets/icons/deprecated/bell.svg'
import bellIcon from '@/shared/assets/icons/redesigned/bell.svg'
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups'
import { NotificationList } from '@/entities/Notification'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import cls from './NotificationButton.module.scss'
import { ToggleFeatures } from '@/shared/lib/features'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Popover } from '@/shared/ui/redesigned/Popups'

type NotificationButtonProps = {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = useState(false)

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={bellIcon} clickable onClick={onOpenDrawer} />}
      off={
        <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <IconDeprecated Svg={bellIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
  )

  return (
    <>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Popover
              className={classNames(cls.NotificationButton, {}, [className])}
              direction="bottom left"
              trigger={trigger}>
              <NotificationList className={cls.noticitations} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={classNames(cls.NotificationButton, {}, [className])}
              direction="bottom left"
              trigger={trigger}>
              <NotificationList className={cls.noticitations} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  )
})
