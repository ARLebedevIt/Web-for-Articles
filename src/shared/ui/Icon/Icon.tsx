import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

type IconProps = {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
}

export const Icon = ({ className, Svg }: IconProps) => {
  return (
    <Svg className={classNames(cls.Icon, {}, [className])} />
  )
}
