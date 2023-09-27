import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeSwither } from './ThemeSwither'
import { Theme } from '@/shared/const/theme'

const meta = {
  title: 'widgets/ThemeSwither',
  component: ThemeSwither,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwither>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
}
