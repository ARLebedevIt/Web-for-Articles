import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { AppLink } from './AppLink'

const meta = {
  title: 'shared/AppLinkRedesigned',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
  args: {
    children: 'TEXT',
    variant: 'primary',
  },
}

export const INVERTED_DARK: Story = {
  args: {
    children: 'TEXT',
    variant: 'primary',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
