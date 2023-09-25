import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'

type Props = {}

const AboutPage = memo((props: Props) => {
  const { t } = useTranslation()
  return (
    <Page>
      {t('О сайте')}
    </Page>
  )
})

export default AboutPage
