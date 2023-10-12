import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ListBox } from './ListBox'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/ListBoxRedesigned',
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
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
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
