import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'pages/ArticleDetailsComments',
  component: ArticleDetailsComments,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsComments>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({})],
}

export const DefaultRedesigned: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
