import React, { HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
  className?: string
  theme?: CardTheme
}

export const Card = ({
  children, className, theme = CardTheme.NORMAL, ...otherProps
}: CardProps) => {
  return (
    <div {...otherProps} className={classNames(cls.Card, {}, [className, cls[theme]])}>{children}</div>
  )
}
