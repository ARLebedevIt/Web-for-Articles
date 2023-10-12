import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './TextArea'

const meta = {
  title: 'shared/TextAreaRedesigned',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloribus?'
  },
}

export const DefaultWithLabel: Story = {
  args: {
    value: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloribus?',
    label: 'Label'
  },
}