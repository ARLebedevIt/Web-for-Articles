import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink } from './AppLink'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'shared/AppLinkRedesigned',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'TEXT',
    variant: 'primary',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const DefaultRedVariant: Story = {
  args: {
    children: 'TEXT',
    variant: 'red',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}


