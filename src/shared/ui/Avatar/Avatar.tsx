import React, { CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'

type AvatarType = {
  src?: string
  className?: string
  size?: number
}

export const Avatar = ({ src, className, size }: AvatarType) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  return (
    <img
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
      alt="Ошибка загрузки изображение"
    />
  )
}
