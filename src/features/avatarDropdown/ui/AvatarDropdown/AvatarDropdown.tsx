import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups'
import { getRouteAdmin, getRouteProfile, getRouteSettings } from '@/shared/const/router'
import { ToggleFeatures } from '@/shared/lib/features'
import { Dropdown } from '@/shared/ui/redesigned/Popups'
import { Avatar } from '@/shared/ui/redesigned/Avatar'

type AvatarDropdownProps = {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation('navbar')
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

  const items = [
    {
      content: t('Профиль'),
      href: getRouteProfile(authData.id),
    },
    ...(isAdminPanelAvailable ? [{
      content: t('Админка'),
      href: getRouteAdmin(),
    }] : []),
    {
      content: t('Настройки'),
      href: getRouteSettings(),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ]

  return (
    <ToggleFeatures
    feature='isAppRedesigned'
    on={
      <Dropdown
      className={classNames('', {}, [className])}
      direction="bottom left"
      trigger={<Avatar size={40} src={authData.avatar} />}
      items={items}
    />
    }
    off={
      <DropdownDeprecated
      className={classNames('', {}, [className])}
      direction="bottom left"
      trigger={<AvatarDeprecated fallbackInverted size={30} src={authData.avatar} />}
      items={items}
    />
    }
    />

  )
})
