import type { Meta, StoryObj } from '@storybook/react'
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

export const Default: Story = {
  args: {
    children: 'TEXT',
    theme: AppLinkTheme.INVERTED,
  },
}

export const Inverted: Story = {
  args: {
    children: 'TEXT',
    theme: AppLinkTheme.INVERTED,
  },
}
