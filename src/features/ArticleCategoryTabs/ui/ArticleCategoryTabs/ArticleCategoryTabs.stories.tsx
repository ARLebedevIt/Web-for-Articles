import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCategoryTabs } from './ArticleCategoryTabs'

const meta = {
  title: 'features/ArticleCategoryTabs',
  component: ArticleCategoryTabs,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCategoryTabs>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {

}
