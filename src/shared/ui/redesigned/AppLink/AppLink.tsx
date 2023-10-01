import React, { ReactNode, memo } from 'react'
import { LinkProps , NavLink } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkTypes extends LinkProps {
  className?: string
  variant?: AppLinkVariant
  children?: ReactNode
  activeClassName?: string
}

export const AppLink = memo((props: AppLinkTypes) => {
  const {
    to, className, activeClassName = '', children, variant = 'primary', ...otherProps
  } = props
  return (
    <NavLink
      {...otherProps}
      to={to}
      className={({isActive}) => classNames(cls.AppLink, {[activeClassName]: isActive}, [className, cls[variant]])}
    >
      {children}
    </NavLink>
  )
})
