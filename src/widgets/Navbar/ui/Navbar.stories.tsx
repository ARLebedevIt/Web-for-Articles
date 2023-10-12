import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { UserRole } from '@/entities/User'
import { Navbar } from './Navbar'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

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

export const Default: Story = {
  decorators: [StoreDecorator(data)],
}

export const Auth: Story = {
  decorators: [StoreDecorator(data)],
}

export const NoAuth: Story = {
  decorators: [StoreDecorator({})],
}

export const WithAdminManagerRoles: Story = {
  decorators: [
    StoreDecorator({
      ...data,
      user: {
        authData: {
          ...data.user.authData,
          roles: [UserRole.ADMIN, UserRole.MANAGER],
        },
      },
    }),
  ],
}

export const DefaultRedesigned: Story = {
  decorators: [
    StoreDecorator(data),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const AuthRedesigned: Story = {
  decorators: [
    StoreDecorator(data),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const NoAuthRedesigned: Story = {
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const WithAdminManagerRolesRedesigned: Story = {
  decorators: [
    StoreDecorator({
      ...data,
      user: {
        authData: {
          ...data.user.authData,
          roles: [UserRole.ADMIN, UserRole.MANAGER],
        },
      },
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
