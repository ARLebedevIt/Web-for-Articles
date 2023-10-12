import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>

export default meta

type Story = StoryObj<typeof meta>;

const data = {
    id: '1',
    text: 'comment 1',
    user: { id: '1', username: 'user 1', avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png' },
}

export const Default: Story = {
  args: {
    comment: data,
  },
}

export const Redesign: Story = {
  args: {
    comment: data,
  },
  decorators: [FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')]
}

export const LoadingCard: Story = {
  args: {
    comment: data,
    isLoading: true,
  },
}

export const LoadingCardRedesign: Story = {
  args: {
    comment: data,
    isLoading: true,
  },
  decorators: [StoreDecorator({
    articleDetailsPage: {
      comments: {
        isLoading: true
      }
    }
  }), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')]
}
