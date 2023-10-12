import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import AdminPanelPage from './AdminPanelPage'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  tags: ['autodocs'],
} satisfies Meta<typeof AdminPanelPage>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
}

export const DefaultRedesigned: Story = {
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

