import React, { HTMLAttributes, ReactNode } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPaddings = '0' | '8' | '16' | '24'
export type CardBorder = 'round' | 'normal' | 'partial'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  variant?: CardVariant
  max?: boolean
  paddings?: CardPaddings
  border?: CardBorder
}

export const Card = ({
  children,
  className,
  max,
  variant = 'normal',
  paddings = '8',
  border = 'normal',
  ...otherProps
}: CardProps) => {
  const mapPaddingsToClass: Record<CardPaddings, string> = {
    '0': 'pd_0',
    '8': 'pd_8',
    '16': 'pd_16',
    '24': 'pd_24',
  }

  const additionalPaddings = mapPaddingsToClass[paddings]

  return (
    <div
      {...otherProps}
      className={classNames(cls.Card, { [cls.max]: max }, [
        className,
        cls[variant],
        cls[additionalPaddings],
        cls[border],
      ])}>
      {children}
    </div>
  )
}
