import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button } from '@/shared/ui/Button'
import cls from './PageError.module.scss'

type PageErrorType = {
  className?: string
}

export const PageError: FC<PageErrorType> = ({ className }) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload()
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  )
}
