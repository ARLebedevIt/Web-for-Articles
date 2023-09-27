import React, { ReactNode, memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

interface AppLinkTypes extends LinkProps {
  className?: string
  theme?: AppLinkTheme
  children?: ReactNode
}

export const AppLink = memo((props: AppLinkTypes) => {
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
})
