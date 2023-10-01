import React, { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import './Loader.scss'

type LoaderType = {
  className?: string
}

/**
 * Компонент устарел, новые компоненты в папке redesigned
 * @deprecated
 */
export const Loader: FC<LoaderType> = ({ className }) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
