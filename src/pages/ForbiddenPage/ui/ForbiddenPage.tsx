import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

type ForbiddenPageProps = {}

const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { t } = useTranslation()
  return (
    <Page data-testid="ForbiddenPage">{t('У вас нет доступа к этой странице')}</Page>
  )
}

export default memo(ForbiddenPage)
