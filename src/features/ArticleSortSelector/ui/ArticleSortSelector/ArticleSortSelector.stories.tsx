import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'
import { ArticleSortFields } from '@/entities/Article'

const meta = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    order: 'desc',
    sort: ArticleSortFields.TITLE,
  },
}
