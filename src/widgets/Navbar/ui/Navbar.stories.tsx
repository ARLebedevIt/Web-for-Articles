import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { UserRole } from 'entities/User'
import { Navbar } from './Navbar'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

const data = {
  user: {
    authData: {
      avatar: 'https://goo.su/pf4UVR',
      roles: [UserRole.USER],
    },
  },
}

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator(data)],
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(data)],
}

export const Crimson: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON), StoreDecorator(data)],
}

export const Auth: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON), StoreDecorator(data)],
}

export const NoAuth: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON), StoreDecorator({})],
}

export const WithAdminManagerRoles: Story = {
  decorators: [ThemeDecorator(Theme.CRIMSON), StoreDecorator({
    ...data,
    user: {
      authData: {
        ...data.user.authData, roles: [UserRole.ADMIN, UserRole.MANAGER],
      },
    },
  }),
  ],
}
