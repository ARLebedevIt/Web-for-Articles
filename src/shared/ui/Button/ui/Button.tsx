import React, {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  OUTLINE_RED = 'outline_red',
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
  children?: ReactNode
  fullWidth?: boolean
}

export const Button = memo((props: ButtonTypes) => {
  const {
    children, className, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, fullWidth, disabled, ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
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
})
