import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { Page } from '@/widgets/Page'

type NotFoundPageType = {
  className?: string
}

const NotFoundPage: FC<NotFoundPageType> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  )
}

export default memo(NotFoundPage)
