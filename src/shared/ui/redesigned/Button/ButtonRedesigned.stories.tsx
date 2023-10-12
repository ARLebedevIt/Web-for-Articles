import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/ButtonRedesigned',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    padding: '20px',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Text',
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
}

export const Filled: Story = {
  args: {
    children: 'Text',
    variant: 'filled',
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    size: 'l',
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    size: 'xl',
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const Sqaure: Story = {
  args: {
    children: '>',
    square: true,
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const Disabled: Story = {
  args: {
    children: '>',
    disabledBtn: true,
  },
  decorators: [
    StoreDecorator({}),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
