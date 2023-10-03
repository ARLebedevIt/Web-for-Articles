import React, {
  ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef,
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
  disabledBtn?: boolean
  children?: ReactNode
  fullWidth?: boolean
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Button = forwardRef((props: ButtonTypes, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    children, className, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, fullWidth, disabledBtn, ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabledBtn]: disabledBtn,
    [cls.fullWidth]: fullWidth,
  }

  return (
    <button
      {...otherProps}
      type="button"
      ref={ref}
      disabled={disabledBtn}
      className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
    >
      {children}
    </button>
  )
})
