import { BugButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const MainPage = (props: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      {t('Главная страница')}
      <BugButton />
    </div>
  )
}

export default MainPage
