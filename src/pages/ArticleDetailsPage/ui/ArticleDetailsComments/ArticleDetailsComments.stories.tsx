import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ArticleDetailsComments } from './ArticleDetailsComments'

const meta = {
  title: 'pages/ArticleDetailsComments',
  component: ArticleDetailsComments,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDetailsComments>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({})],
}
