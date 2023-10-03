import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>

export default meta

type Story = StoryObj<typeof meta>;

const data = {
  comment: {
    id: '1',
    text: 'comment 1',
    user: { id: '1', username: 'user 1', avatar: 'https://teknotower.com/wp-content/uploads/2020/11/js.png' },
  },
}

export const Primary: Story = {
  args: data,
}

export const LoadingCard: Story = {
  args: data,
}
