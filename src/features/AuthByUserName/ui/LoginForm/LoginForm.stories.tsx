import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import LoginForm from './LoginForm'

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: 'User', password: 'Password' },
  })],
}

export const WithError: Story = {
  decorators: [StoreDecorator({
    loginForm: { username: 'User', password: 'Password', error: 'Some Error' },
  })],
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    loginForm: { isLoading: true },
  })],
}
