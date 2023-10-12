import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { Popover } from './Popover'

const meta = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <div>123</div>,
    children: (
      <>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </>
    ),
    direction: 'bottom right',
  },
  decorators: [StoreDecorator({})],
}
