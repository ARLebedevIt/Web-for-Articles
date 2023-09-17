import { BugButton } from 'app/providers/ErrorBoundary'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

type MainPageType = {}

const MainPage = memo((props: MainPageType) => {
  const { t } = useTranslation()
  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>
  )
})

export default MainPage
