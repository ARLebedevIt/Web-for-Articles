import React, { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export type ButtonVariant =
  | 'clear'
  | 'outline'
  | 'background'
  | 'backgroundInverted'
  | 'outline_red'
  | 'filled'

export type ButtonSize = 'm' | 'l' | 'xl'

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children?: ReactNode
  fullWidth?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
}

export const Button = memo((props: ButtonTypes) => {
  const {
    children,
    className,
    variant = 'outline',
    square,
    size = 'm',
    fullWidth,
    disabled,
    addonLeft,
    addonRight,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  }

  return (
    <button
      {...otherProps}
      type="button"
      disabled={disabled}
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
      ])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  )
})
