import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { BugButton } from '@/app/providers/ErrorBoundary'
import { ListBox } from '@/shared/ui/Popups'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { RatingCard } from '@/entities/Rating'

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
