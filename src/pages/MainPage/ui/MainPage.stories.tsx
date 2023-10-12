import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import MainPage from './MainPage'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
}

export const DefaultRedesigned: Story = {
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
