import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Card } from './Card'
import { Text } from '../Text/ui/Text'

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: <Text text="text" title="title" />,
  },
}

export const Dark: Story = {
  args: {
    children: <Text text="text" title="title" />,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
  args: {
    children: <Text text="text" title="title" />,
  },
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}
