import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Test',
    options: [
      { value: '123', content: 'Первый пункт' },
      { value: 'qwe', content: 'Второй пункт' },
    ],
  },
}
