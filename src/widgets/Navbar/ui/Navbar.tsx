import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUserName'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Text, TextTheme } from 'shared/ui/Text/ui/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown/Dropdown'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthOpen(false)
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthOpen(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text theme={TextTheme.INVERTED} className={cls.appName} title={t('Article app')} />
        <div className={cls.navigation}>
          <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.article_create}>{t('Создать статью')}</AppLink>
          <Dropdown
            direction="bottom left"
            trigger={<Avatar size={30} src={authData.avatar} />}
            items={[
              {
                content: t('Профиль'),
                href: RoutePath.profile + authData.id,
              },
              {
                content: t('Выйти'),
                onClick: onLogout,
              },
            ]}
            className={cls.links}
          />
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
