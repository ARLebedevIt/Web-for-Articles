import React, { CSSProperties, useMemo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { AppImage } from '../../redesigned/AppImage'
import UserIcon from '../../../assets/icons/deprecated/user.svg'
import { Icon } from '../Icon'
import { Skeleton } from '../Skeleton'

type AvatarType = {
  src?: string
  className?: string
  size?: number
  alt?: string
  fallbackInverted?: boolean
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Avatar = ({
  src, className, size = 100, alt, fallbackInverted,
}: AvatarType) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    }
  }, [size])

  const fallback = <Skeleton width={size} height={size} border="50%" />
  const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />

  return (
    <AppImage
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      style={styles}
      className={classNames(cls.Avatar, {}, [className])}
    />
  )
}
