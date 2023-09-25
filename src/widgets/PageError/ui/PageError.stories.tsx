import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { PageError } from './PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs'],
} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}
