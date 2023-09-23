import { BugButton } from 'app/providers/ErrorBoundary'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Listbox } from 'shared/ui/ListBox/ListBox'
import { Page } from 'widgets/Page/Page'

type MainPageType = {}

const MainPage = memo((props: MainPageType) => {
  const { t } = useTranslation()
  return (
    <Page>
      {t('Главная страница')}
      <Listbox
        value="1"
        items={[
          { value: '123', content: '321' },
          { value: 'qqwe', content: 'vcb', disabled: true },
          { value: 'safds', content: 'sdf' },
        ]}
        defaultValue="Выберите значение"
        onChange={() => {}} />
      <BugButton />
    </Page>
  )
})

export default MainPage
