import React, { HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
  className?: string
  theme?: CardTheme
  max?: boolean
}

export const Card = ({
  children, className, max, theme = CardTheme.NORMAL, ...otherProps
}: CardProps) => {
  return (
    <div {...otherProps} className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}>{children}</div>
  )
}
