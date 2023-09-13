import React, { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import Loader from 'shared/ui/Loader/ui/Loader'
import cls from './PageLoader.module.scss'

type PageLoaderType = {
  className?: string
}

export const PageLoader: FC<PageLoaderType> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
