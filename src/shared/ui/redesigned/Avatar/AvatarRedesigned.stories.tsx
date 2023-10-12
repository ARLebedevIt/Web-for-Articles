import type { Meta, StoryObj } from '@storybook/react'
import storybook from '@/shared/assets/tests/storybook.png'
import { Avatar } from './Avatar'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/AvatarRedesigned',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 100,
    src: storybook,
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const Small: Story = {
  args: {
    size: 50,
    src: storybook,
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
