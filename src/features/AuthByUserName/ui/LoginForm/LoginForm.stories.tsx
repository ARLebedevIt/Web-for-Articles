import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import LoginForm from './LoginForm'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: 'User', password: 'Password' },
    }),
  ],
}

export const WithError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'User',
        password: 'Password',
        error: 'Some Error',
      },
    }),
  ],
}

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
  ],
}

export const DefaultRedesigned: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: 'User', password: 'Password' },
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const WithErrorRedesigned: Story = {
  decorators: [
    StoreDecorator({
      loginForm: {
        username: 'User',
        password: 'Password',
        error: 'Some Error',
      },
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const LoadingRedesigned: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { isLoading: true },
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
