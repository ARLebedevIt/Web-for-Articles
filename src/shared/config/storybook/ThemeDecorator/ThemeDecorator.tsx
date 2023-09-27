import { Decorator } from '@storybook/react'
import { Theme } from '@/shared/const/theme'
// eslint-disable-next-line my-fsd-helper/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
