import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Input } from './Input'

const meta = {
  title: 'shared/InputRedesigned',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Type text',
    value: 'qwerty123',
  },
}

export const Dark: Story = {
  args: {
    placeholder: 'Type text',
    value: 'qwerty123',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}
