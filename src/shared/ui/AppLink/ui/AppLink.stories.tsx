import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
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
    theme: AppLinkTheme.PRIMARY,
  },
}

export const INVERTED_DARK: Story = {
  args: {
    children: 'TEXT',
    theme: AppLinkTheme.INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
