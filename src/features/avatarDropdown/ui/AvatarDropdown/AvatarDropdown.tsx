import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import cls from './AvatarDropdown.module.scss'

type AvatarDropdownProps = {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const authData = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return null
  }

  const isAdminPanelAvailable = isAdmin || isManager

  return (
    <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        {
          content: t('Профиль'),
          href: RoutePath.profile + authData.id,
        },
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: RoutePath.admin_panel,
        }] : []),
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
    />
  )
})
