import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article } from '@/entities/Article'
import ArticleRating from './ArticleRating'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleRating>

export default meta

type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: 'admin' },
  blocks: [],
  category: [],
  title: 'story',
  subtitle: 'test story',
}

export const Default: Story = {
  args: {
    articleId: '1',
  },
  decorators: [StoreDecorator({})],
}


export const DefaultRedesigned: Story = {
  args: {
    articleId: '1',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
