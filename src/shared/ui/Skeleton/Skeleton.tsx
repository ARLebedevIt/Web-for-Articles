import React, { CSSProperties } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

type SkeletonProps = {
  height?: string | number
  width?: string | number
  border?: string
  className?: string
}

export const Skeleton = (props: SkeletonProps) => {
  const {
    border, height, width, className,
  } = props

  const styles: CSSProperties = {
    width,
    borderRadius: border,
    height,
  }

  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  )
}
