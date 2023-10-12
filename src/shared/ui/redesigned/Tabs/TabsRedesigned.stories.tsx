import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/TabsRedesigned',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab2',
      },
      {
        value: 'tab 2',
        content: 'tab3',
      },
      {
        value: 'tab 4',
        content: 'tab5',
      },
    ],
    value: 'tab 2',
    onTabChange: action('onTabChange'),
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
