import type { Meta, StoryObj } from '@storybook/react'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NotificationItem } from './NotificationItem'

const meta = {
  title: 'entities/NotificationItem',
  component: NotificationItem,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>

export default meta

type Story = StoryObj<typeof meta>;

const data = {
    id: '1',
    title: 'comment 1',
    description: 'Notification',
}

export const Default: Story = {
  args: {
    item: data,
  },
}

export const Redesign: Story = {
  args: {
    item: data,
  },
  decorators: [FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')]
}