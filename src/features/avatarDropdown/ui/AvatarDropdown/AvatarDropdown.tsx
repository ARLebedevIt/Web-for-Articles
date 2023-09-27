import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router'

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
          href: getRouteProfile(authData.id),
        },
        ...(isAdminPanelAvailable ? [{
          content: t('Админка'),
          href: getRouteAdmin(),
        }] : []),
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
    />
  )
})
