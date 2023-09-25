import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { AvatarDropdown } from './AvatarDropdown'

const meta = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarDropdown>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.CRIMSON)],
}
