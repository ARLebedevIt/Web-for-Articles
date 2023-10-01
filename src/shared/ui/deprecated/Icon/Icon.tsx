import React, { SVGProps } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps extends SVGProps<SVGSVGElement> {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  inverted?: boolean
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Icon = (props: IconProps) => {
  const {
    className, Svg, inverted, ...otherProps
  } = props
  return (
    <Svg {...otherProps} className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
  )
}
