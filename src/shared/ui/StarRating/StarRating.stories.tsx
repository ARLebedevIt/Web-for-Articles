import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StarRating } from './StarRating'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Theme } from '@/shared/const/theme'

const meta = {
  title: 'shared/StarRating',
  component: StarRating,
  tags: ['autodocs'],
} satisfies Meta<typeof StarRating>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    selectedStars: 0,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Dark: Story = {
  args: {
    selectedStars: 0,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Crimson: Story = {
  args: {
    selectedStars: 0,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const WithAllStars: Story = {
  args: {
    selectedStars: 5,
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}
