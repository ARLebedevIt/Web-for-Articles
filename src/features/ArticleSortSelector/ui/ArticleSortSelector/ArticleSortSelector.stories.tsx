import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'
import { ArticleSortFields } from '@/entities/Article'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleSortSelector>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    order: 'desc',
    sort: ArticleSortFields.TITLE,
  },
}

export const DefaultRedesigned: Story = {
  args: {
    order: 'desc',
    sort: ArticleSortFields.TITLE,
  },
  decorators: [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
