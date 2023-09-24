import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ArticlesPage from './ArticlesPage'

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticlesPage>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
}

export const Crimson: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON), StoreDecorator({})],
}
