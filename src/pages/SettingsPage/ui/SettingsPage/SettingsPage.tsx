import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { Page } from '@/widgets/Page'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher'

interface SettingsPageProps {
  className?: string
}

const SettingsPage = (props: SettingsPageProps) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <Page>
      <Text title={t('Настройки пользователя')} />
      <VStack gap="16">
        <Text />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  )
}

export default memo(SettingsPage)
