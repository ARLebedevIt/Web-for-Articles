import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/TextRedesigned',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Text Example',
    title: 'Title Example',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const OnlyTitle: Story = {
  args: {
    title: 'Title only',
  },
}

export const OnylText: Story = {
  args: {
    text: 'Text only',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const Error: Story = {
  args: {
    text: 'Error',
    title: 'Error',
    variant: 'error',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const WithSizeL: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'l',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const WithSizeM: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    size: 'm',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}

export const WithSizeS: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    size: 's',
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
