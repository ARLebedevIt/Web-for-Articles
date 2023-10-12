import { memo } from 'react'
import { Page } from '@/widgets/Page'
import { ToggleFeatures } from '@/shared/lib/features'
import { AboutPageRedesigned } from './AboutPageRedesigned/AboutPageRedesigned'
import { AboutPageDeprecated } from './AboutPageDeprecated/AboutPageDeprecated'

const AboutPage = memo(() => {
  return (
    <Page data-testid="AboutPage">
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <AboutPageRedesigned />
        }
        off={
          <AboutPageDeprecated />
        }
      />
    </Page>
  )
})

export default AboutPage
