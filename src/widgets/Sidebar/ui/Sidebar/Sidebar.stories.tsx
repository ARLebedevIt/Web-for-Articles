import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Sidebar } from './Sidebar'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
}

export const Auth: Story = {
  decorators: [StoreDecorator({ user: { authData: {} } })],
}

export const NoAuth: Story = {
  decorators: [StoreDecorator({ user: {} })],
}

export const DefaultRedesigned: Story = {
  decorators: [
    StoreDecorator({ user: { authData: {} } }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const AuthRedesigned: Story = {
  decorators: [
    StoreDecorator({ user: { authData: {} } }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const NoAuthRedesigned: Story = {
  decorators: [
    StoreDecorator({ user: {} }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
