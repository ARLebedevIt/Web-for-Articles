import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../Button/Button'
import { Dropdown } from './Dropdown'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/DropdownRedesigned',
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
