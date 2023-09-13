import React, { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonTypes> = (props) => {
  const {
    children, className, theme, square, size, ...otherProps
  } = props
  return (
    <button
      {...otherProps}
      type="button"
      className={classNames(cls.Button, { [cls.square]: square }, [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  )
}
