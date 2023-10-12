import React, { ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  INVERTED = 'inverted',
  PRIMARY = 'primary'
}

interface AppLinkTypes extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const AppLink = (props: AppLinkTypes) => {
  const {
    to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps
  } = props
  return (
    <Link
      {...otherProps}
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  )
}
