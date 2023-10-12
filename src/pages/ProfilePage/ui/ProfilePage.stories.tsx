import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import storybookImg from '@/shared/assets/tests/storybook.png'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import ProfilePage from './ProfilePage'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
}

export const DefaultRedesigned: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
    FeatureFlagsDecorator({ isAppRedesigned: true }),
    ThemeDecorator('redesigned'),
  ],
}
