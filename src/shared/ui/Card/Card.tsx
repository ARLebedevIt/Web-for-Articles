import React, { HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
  className?: string
}

export const Card = ({ children, className, ...otherProps }: CardProps) => {
  return (
    <div {...otherProps} className={classNames(cls.Card, {}, [className])}>{children}</div>
  )
}
