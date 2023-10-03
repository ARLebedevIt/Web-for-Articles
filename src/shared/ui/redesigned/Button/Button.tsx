import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export type ButtonVariant =
  | 'clear'
  | 'outline'
  | 'filled'

export type ButtonColor =
  | 'normal'
  | 'success'
  | 'error'

export type ButtonSize = 'm' | 'l' | 'xl'

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
  disabledBtn?: boolean
  children?: ReactNode
  fullWidth?: boolean
  addonLeft?: ReactNode
  addonRight?: ReactNode
  color?: ButtonColor
}

export const Button = forwardRef((props: ButtonTypes, ref: ForwardedRef<HTMLButtonElement>) => {
  const {
    children,
    className,
    variant = 'outline',
    square,
    size = 'm',
    fullWidth,
    disabledBtn,
    addonLeft,
    color = 'normal',
    addonRight,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabledBtn]: disabledBtn,
    [cls.fullWidth]: fullWidth,
    [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
  }

  return (
    <button
      {...otherProps}
      ref={ref}
      type="button"
      disabled={disabledBtn}
      className={classNames(cls.Button, mods, [
        className,
        cls[variant],
        cls[size],
        cls[color],
      ])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  )
})
