import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUserName'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextTheme } from '@/shared/ui/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/notificationsButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import cls from './Navbar.module.scss'
import { getRouteArticleCreate } from '@/shared/const/router'

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()

  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthOpen(true)
  }, [])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('Article app')} />
        <div className={cls.navigation}>
          <AppLink theme={AppLinkTheme.INVERTED} to={getRouteArticleCreate()}>{t('Создать статью')}</AppLink>
          <HStack gap="16" className={cls.actions}>
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
        </div>
      </header>
    )
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        onClick={onOpenModal}
        className={cls.links}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {t('Войти')}
      </Button>
      {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
    </header>
  )
})
