import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCategoryTabs } from './ArticleCategoryTabs'
import { ArticleCategoryType } from '@/entities/Article'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/ArticleCategoryTabs',
  component: ArticleCategoryTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCategoryTabs>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: ArticleCategoryType.ALL,
  },
}

export const DefaultRedesigned: Story = {
  args: {
    value: ArticleCategoryType.ALL,
  },
  decorators: [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
