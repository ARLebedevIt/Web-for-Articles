import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Sidebar } from './Sidebar'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Light: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })],
}

export const Crimson: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON), StoreDecorator({ user: { authData: {} } })],
}

export const Auth: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
}

export const NoAuth: Story = {
  decorators: [StoreDecorator({ user: {} })],
}
