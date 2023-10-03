import type { Meta, StoryObj } from '@storybook/react'
import storybook from '@/shared/assets/tests/storybook.png'
import { Avatar } from './Avatar'

const meta = {
  title: 'shared/AvatarRedesigned',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 100,
    src: storybook,
  },
}

export const Small: Story = {
  args: {
    size: 50,
    src: storybook,
  },
}
