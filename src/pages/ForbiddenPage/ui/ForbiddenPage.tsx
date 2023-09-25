import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

type ForbiddenPageProps = {}

const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { t } = useTranslation()
  return (
    <Page>{t('У вас нет доступа к этой странице')}</Page>
  )
}

export default memo(ForbiddenPage)
