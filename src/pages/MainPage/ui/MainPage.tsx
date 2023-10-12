import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { MainPageItems } from './MainPageItems/MainPageItems'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text} from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/lib/features'
import { Text as TextDeprecated} from '@/shared/ui/deprecated/Text'

const MainPage = memo(() => {
  const { t } = useTranslation('main')
  return (
    <Page data-testid="MainPage">
      <VStack gap="24">
        <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Text title={t('Связаться со мной')} />
        }
        off={
          <TextDeprecated title={t('Связаться со мной')} />
        }
        />
        <MainPageItems />
      </VStack>
    </Page>
  )
})

export default MainPage
