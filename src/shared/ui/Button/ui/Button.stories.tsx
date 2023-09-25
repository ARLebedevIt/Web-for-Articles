import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'
import { Button, ButtonSize, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
  },
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
}

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Sqaure: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
}

export const SqaureSizeM: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
}

export const SqaureSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
}

export const SqaureSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
}

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
}
