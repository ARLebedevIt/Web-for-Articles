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
  disabled?: boolean
}

export const Button: FC<ButtonTypes> = (props) => {
  const {
    children, className, theme, square, size, disabled, ...otherProps
  } = props

  const mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button
      {...otherProps}
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  )
}
