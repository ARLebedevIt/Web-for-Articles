import type { Preview } from '@storybook/react'
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'

initialize()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, mswDecorator],
  loaders: [mswLoader],
}

export default preview
