import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import Loader from './Loader'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const DARK: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
