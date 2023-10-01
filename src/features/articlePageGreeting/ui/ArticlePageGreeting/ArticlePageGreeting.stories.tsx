import type { Meta, StoryObj } from '@storybook/react'
import { ArticlePageGreeting } from './ArticlePageGreeting'

const meta = {
  title: 'features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlePageGreeting>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {

}