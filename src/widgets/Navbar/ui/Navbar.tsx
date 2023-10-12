import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { LoginModal } from '@/features/AuthByUserName'
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { NotificationButton } from '@/features/notificationsButton'
import { AvatarDropdown } from '@/features/avatarDropdown'
import cls from './Navbar.module.scss'
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features'
import { Button } from '@/shared/ui/redesigned/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar')

  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthOpen(true)
  }, [])

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar
  })


  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <header className={classNames(mainClass, {}, [className])}>
            <TextDeprecated
              theme={TextTheme.INVERTED}
              className={cls.appName}
              title={t('Article app')}
            />
            <div className={cls.navigation}>
              <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
              </HStack>
            </div>
          </header>
        }
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack gap="16">
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    )
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button
            onClick={onOpenModal}
            className={cls.links}
            variant="filled">
            {t('Войти')}
          </Button>
        }
        off={
          <ButtonDeprecated
            onClick={onOpenModal}
            className={cls.links}
            theme={ButtonTheme.BACKGROUND_INVERTED}>
            {t('Войти')}
          </ButtonDeprecated>
        }
      />
      {isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
    </header>
  )
})
