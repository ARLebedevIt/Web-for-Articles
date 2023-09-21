import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page/Page'
import cls from './NotFoundPage.module.scss'

type NotFoundPageType = {
  className?: string
}

export const NotFoundPage: FC<NotFoundPageType> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <Page className={classNames(cls.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</Page>
  )
}
