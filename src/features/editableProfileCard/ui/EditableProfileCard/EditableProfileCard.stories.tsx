import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { EditableProfileCard } from './EditableProfileCard'

const meta = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof EditableProfileCard>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({})],
}
