import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../Button/ui/Button'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'item',
      },
      {
        content: 'item2',
      },
      {
        content: 'item3',
      },
    ],
  },
}
