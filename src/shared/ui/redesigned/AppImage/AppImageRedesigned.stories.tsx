import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'
import { Skeleton } from '../Skeleton'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/AppImageRedesigned',
  component: AppImage,
  tags: ['autodocs'],
} satisfies Meta<typeof AppImage>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: <Skeleton width={200} height={200} />,
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
