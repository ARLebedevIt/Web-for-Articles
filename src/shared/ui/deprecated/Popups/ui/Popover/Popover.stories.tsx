import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Popover } from './Popover'

const meta = {
  title: 'shared/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
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
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.LIGHT)],
}

export const Dark: Story = {
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
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
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
  decorators: [StoreDecorator({}), ThemeDecorator(Theme.CRIMSON)],
}
