import type { Meta, StoryObj } from '@storybook/react'
import { Article, ArticleBlockType, ArticleCategoryType } from 'entities/Article/model/types/article'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { action } from '@storybook/addon-actions'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comment: {
      id: '1',
      text: 'comment 1',
      user: { id: '1', username: 'user 1', avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png' },
    },
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  args: {
    comment: {
      id: '1',
      text: 'comment 1',
      user: { id: '1', username: 'user 1', avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png' },
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
  args: {
    comment: {
      id: '1',
      text: 'comment 1',
      user: { id: '1', username: 'user 1', avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png' },
    },
  },
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}

export const LoadingCard: Story = {
  args: {
    isLoading: true,
    comment: {
      id: '1',
      text: 'comment 1',
      user: { id: '1', username: 'user 1', avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png' },
    },
  },
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}
