import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import AddCommentForm from './AddCommentForm'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddCommentForm>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({})],
}

export const DefaultRedesigned: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
