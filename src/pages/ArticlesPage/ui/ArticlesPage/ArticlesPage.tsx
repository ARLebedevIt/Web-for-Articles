import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const ArticlesPage = (props: Props) => {
  const { t } = useTranslation()
  return (
    <div>{t('ArticlesPage')}</div>
  )
}

export default memo(ArticlesPage)
