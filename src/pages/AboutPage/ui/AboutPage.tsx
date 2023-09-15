import { memo } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const AboutPage = memo((props: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      {t('О сайте')}
    </div>
  )
})

export default AboutPage
