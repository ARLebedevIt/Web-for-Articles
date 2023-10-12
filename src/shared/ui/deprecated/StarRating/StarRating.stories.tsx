import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
} satisfies Meta<typeof StarRating>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedStars: 0,
  },
  decorators: [StoreDecorator({})],
}

export const WithAllStars: Story = {
  args: {
    selectedStars: 5,
  },
  decorators: [StoreDecorator({})],
}
