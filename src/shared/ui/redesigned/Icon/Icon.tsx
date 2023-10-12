import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  className?: string
  hovered?: boolean
}

interface NonClickableIcon extends IconBaseProps {
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  clickable?: false
}

interface ClickableIcon extends IconBaseProps { 
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  clickable?: true
  onClick: () => void
}

type IconProps = ClickableIcon | NonClickableIcon

export const Icon = (props: IconProps) => {
  const {
    className = '',
    clickable,
    Svg,
    width = 32,
    hovered = false,
    height = 32,
    ...otherProps
  } = props

  const icon = (
    <Svg
      {...otherProps}
      onClick={undefined}
      width={width}
      height={height}
      className={classNames(cls.Icon, {[className]: !clickable, [cls.hovered]: hovered}, [])}
    />
  )

  if (clickable) {
    return (
      <button
        style={{ width, height }}
        className={classNames(cls.btn, {}, [className])}
        onClick={props.onClick}
        type="button">
        {icon}
      </button>
    )
  }

  return icon
}
