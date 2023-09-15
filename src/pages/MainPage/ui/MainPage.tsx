import { BugButton } from 'app/providers/ErrorBoundary'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const MainPage = memo((props: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>
  )
})

export default MainPage
