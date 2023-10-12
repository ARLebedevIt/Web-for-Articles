import type { Meta, StoryObj } from '@storybook/react'
import { ArticlePageGreeting } from './ArticlePageGreeting'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlePageGreeting>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
}

export const DefaultRedesigned: Story = {
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}