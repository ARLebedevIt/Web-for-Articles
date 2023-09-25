import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Text, TextSize, TextTheme } from './Text'

const meta = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Text Example',
    title: 'Title Example',
  },
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
}

export const PrimaryDark: Story = {
  args: {
    text: 'Text Example',
    title: 'Title Example',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title only',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OnylTextDark: Story = {
  args: {
    text: 'Text only',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Error: Story = {
  args: {
    text: 'Error',
    title: 'Error',
    theme: TextTheme.ERROR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const WithSizeL: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    size: TextSize.L,
  },
}

export const WithSizeM: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    size: TextSize.M,
  },
}

export const WithSizeS: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet.',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    size: TextSize.S,
  },
}
