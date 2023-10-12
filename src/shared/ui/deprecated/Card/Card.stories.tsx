import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Text } from '../Text/Text'

const meta = {
  title: 'shared/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: <Text text="text" title="title" />,
  },
}