import type { Meta, StoryObj } from '@storybook/react'
import { ListBox } from './ListBox'

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  tags: ['autodocs'],
} satisfies Meta<typeof ListBox>

export default meta

type Story = StoryObj<typeof meta>;

export const TopLeft: Story = {
  args: {
    items: [
      { value: 'test', content: 'test' },
      { value: 'test1', content: 'test1' },
      { value: 'test2', content: 'test2' },
      { value: 'test3', content: 'test3' },
    ],
    defaultValue: 'Введите значение',
    direction: 'top left',
  },
}

export const WithValue: Story = {
  args: {
    items: [
      { value: 'test', content: 'test' },
      { value: 'test1', content: 'test1' },
      { value: 'test2', content: 'test2' },
      { value: 'test3', content: 'test3' },
    ],
    defaultValue: 'Введите значение',
    value: 'test1',
  },
}

export const ReadOnly: Story = {
  args: {
    value: '123',
    items: [
      { value: 'test', content: 'test' },
      { value: 'test1', content: 'test1' },
      { value: 'test2', content: 'test2' },
      { value: 'test3', content: 'test3' },
    ],
    defaultValue: 'Введите значение',
    readonly: true,
  },
}

export const TopRight: Story = {
  args: {
    value: '123',
    items: [
      { value: 'test', content: 'test' },
      { value: 'test1', content: 'test1' },
      { value: 'test2', content: 'test2' },
      { value: 'test3', content: 'test3' },
    ],
    defaultValue: 'Введите значение',
    direction: 'top right',
  },
}

export const BottomRight: Story = {
  args: {
    value: '123',
    items: [
      { value: 'test', content: 'test' },
      { value: 'test1', content: 'test1' },
      { value: 'test2', content: 'test2' },
      { value: 'test3', content: 'test3' },
    ],
    defaultValue: 'Введите значение',
    direction: 'bottom right',
  },
}

export const BottomLeft: Story = {
  args: {
    value: '123',
    items: [
      { value: 'test', content: 'test' },
      { value: 'test1', content: 'test1' },
      { value: 'test2', content: 'test2' },
      { value: 'test3', content: 'test3' },
    ],
    defaultValue: 'Введите значение',
    direction: 'bottom left',
  },
}
