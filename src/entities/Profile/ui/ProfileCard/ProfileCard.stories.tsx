import type { Meta, StoryObj } from '@storybook/react'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import storybookImg from '@/shared/assets/tests/storybook.png'
import { ProfileCard } from './ProfileCard'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const DefaultRedesigned: Story = {
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
  decorators: [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}


export const IsLoadingRedesigned: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}

export const WithErrorRedesigned: Story = {
  args: {
    error: 'Some Error',
  },
  decorators: [
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
