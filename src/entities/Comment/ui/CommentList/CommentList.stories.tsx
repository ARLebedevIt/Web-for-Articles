import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { CommentList } from './CommentList'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentList>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: 'user 1' },
      },
      {
        id: '2',
        text: 'comment 2',
        user: { id: '2', username: 'user 2' },
      },
    ],
  },
}

export const LoadingList: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
}

export const DefaultRedesigned: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: 'user 1' },
      },
      {
        id: '2',
        text: 'comment 2',
        user: { id: '2', username: 'user 2' },
      },
    ],
  },
  decorators: [ThemeDecorator('redesigned'), FeatureFlagsDecorator({isAppRedesigned: true})],
}

export const LoadingListRedesigned: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
  decorators: [ThemeDecorator('redesigned'), FeatureFlagsDecorator({isAppRedesigned: true})],
}


