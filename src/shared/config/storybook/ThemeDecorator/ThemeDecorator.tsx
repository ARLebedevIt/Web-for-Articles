import { Decorator } from '@storybook/react'
// eslint-disable-next-line my-fsd-helper/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider'

export const ThemeDecorator = (redsigned: 'redesigned' | 'old' = 'old' ): Decorator => (Story) => {
  return (
    <ThemeProvider>
      <div className={`${redsigned === 'redesigned' ? 'app_redesigned' : 'app'}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
