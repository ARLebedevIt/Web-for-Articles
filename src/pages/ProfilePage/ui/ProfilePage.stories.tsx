import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import storybookImg from 'shared/assets/tests/storybook.png'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import ProfilePage from './ProfilePage'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [StoreDecorator({
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
  })],
}

export const Dark: Story = {
  decorators: [StoreDecorator({
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
  }), ThemeDecorator(Theme.DARK)],
}
