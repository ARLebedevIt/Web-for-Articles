import type { Preview } from '@storybook/react'
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon'
import { FeatureFlagsDecorator } from "../../src/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator"
import { Theme } from '../../src/shared/const/theme'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'

initialize()

const preview: Preview = {
  parameters: {
    previewTabs: {
      docs: {
        hidden: true,
      },
    },
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      default: 'Light',
      list: [
        { name: 'Light', class: [Theme.LIGHT, 'app'], color: '#b6b6b6' },
        { name: 'Dark', class: [Theme.DARK, 'app'], color: '#0b0085' },
        { name: 'Crmison', class: [Theme.CRIMSON, 'app'], color: '#570101' },
      ],
    },
  },
  decorators: [StyleDecorator, RouterDecorator, mswDecorator, FeatureFlagsDecorator({})],
  loaders: [mswLoader],
}

export default preview
