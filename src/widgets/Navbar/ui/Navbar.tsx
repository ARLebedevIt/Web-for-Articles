import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarType {
  className?: string
}

export const Navbar: FC<NavbarType> = ({ className }) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <h1>My App</h1>
    <div className={classNames(cls.links)}>
      <AppLink theme={AppLinkTheme.INVERTED} to="/">На главную</AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="/about">О сайте</AppLink>
    </div>
  </div>
)
