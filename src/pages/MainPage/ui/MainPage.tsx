import { BugButton } from 'app/providers/ErrorBoundary'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

type MainPageType = {}

const MainPage = memo((props: MainPageType) => {
  const { t } = useTranslation()
  return (
    <Page>
      {t('Главная страница')}
      <BugButton />
    </Page>
  )
})

export default MainPage
