import React, { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from '@/shared/ui/deprecated/Loader'

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
