import type { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'entities/NotificationList',
  component: NotificationList,
  tags: ['autodocs'],
} satisfies Meta<typeof NotificationList>

export default meta

type Story = StoryObj<typeof meta>

const data = [
  {
    id: '1',
    title: 'comment 1',
    description: 'Notification',
  },
  {
    id: '2',
    title: 'comment 1',
    description: 'Notification',
  },
  {
    id: '3',
    title: 'comment 1',
    description: 'Notification',
  },
]

export const Default: Story = {
  parameters: {
    msw: [
      rest.get(`${__API__}/notifications`, (_req, res, ctx) => {
        return res(ctx.json(data))
      }),
    ],
  },
  decorators: [StoreDecorator({})]
}

export const Redesign: Story = {
  parameters: {
    msw: [
      rest.get(`${__API__}/notifications`, (_req, res, ctx) => {
        return res(ctx.json(data))
      }),
    ],
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
