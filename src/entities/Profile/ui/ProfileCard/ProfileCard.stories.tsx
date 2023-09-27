import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import storybookImg from '@/shared/assets/tests/storybook.png'
import { ProfileCard } from './ProfileCard'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    data: {
      age: 10,
      avatar: storybookImg,
      city: 'Moscow',
      currency: Currency.RUB,
      country: Country.Russia,
      username: 'Test',
      first: '123',
      lastname: '321',
    },
  },
}

export const Dark: Story = {
  args: {
    data: {
      age: 10,
      avatar: storybookImg,
      city: 'Moscow',
      currency: Currency.RUB,
      country: Country.Russia,
      username: 'Test',
      first: '123',
      lastname: '321',
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
}

export const Crimson: Story = {
  args: {
    data: {
      age: 10,
      avatar: storybookImg,
      city: 'Moscow',
      currency: Currency.RUB,
      country: Country.Russia,
      username: 'Test',
      first: '123',
      lastname: '321',
    },
  },
  decorators: [ThemeDecorator(Theme.CRIMSON)],
}

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
}

export const WithError: Story = {
  args: {
    error: 'Some Error',
  },
}
