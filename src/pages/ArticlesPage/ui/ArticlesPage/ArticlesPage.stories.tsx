import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPage>

export default meta

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200,
  },
}

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100,
  },
}
