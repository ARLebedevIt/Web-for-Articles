import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'
import { ToggleFeatures } from '@/shared/lib/features'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = (props: SettingsPageProps) => {
  const { className } = props
  const { t } = useTranslation('settings')

  return (
    <Page>
      <VStack gap="16">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={t('Настройки пользователя')} />}
          off={<TextDeprecated title={t('Настройки пользователя')} />}
        />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  )
}

export default memo(SettingsPage)
