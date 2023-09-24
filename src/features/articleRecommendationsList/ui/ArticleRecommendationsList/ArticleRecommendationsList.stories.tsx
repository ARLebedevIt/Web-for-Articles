import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Article } from 'entities/Article'
import { rest } from 'msw'
import { mswLoader } from 'msw-storybook-addon'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleRecommendationsList>

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

export const Light: Story = {
  parameters: {
    msw: [
      rest.get(`${__API__}/articles?_limit=3`, (_req, res, ctx) => {
        return res(ctx.json([
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' }]))
      }),
    ],
  },
  decorators: [StoreDecorator({})],
}
