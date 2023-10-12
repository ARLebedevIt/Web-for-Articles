import type { Meta, StoryObj } from '@storybook/react'
import { UiDesignSwitcher } from './UiDesignSwitcher'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof UiDesignSwitcher>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [StoreDecorator({})],
}

export const DefaultRedesigned: Story = {
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}