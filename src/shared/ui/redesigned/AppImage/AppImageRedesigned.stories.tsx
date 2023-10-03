import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'
import { Skeleton } from '../../deprecated/Skeleton'

const meta = {
  title: 'shared/AppImageRedesigned',
  component: AppImage,
  tags: ['autodocs'],
} satisfies Meta<typeof AppImage>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    fallback: <Skeleton width={200} height={200} />,
  },
}
