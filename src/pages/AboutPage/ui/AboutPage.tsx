import { useTranslation } from 'react-i18next'

type Props = {}

const AboutPage = (props: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      {t('О сайте')}
    </div>
  )
}

export default AboutPage
