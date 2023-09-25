import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { CommentList } from './CommentList'

const meta = {
  title: 'entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentList>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
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

export const Dark: Story = {
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
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
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
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}

export const LoadingList: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}
