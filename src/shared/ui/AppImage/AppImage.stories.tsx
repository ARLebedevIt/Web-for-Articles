import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'
import { Skeleton } from '../Skeleton'

const meta = {
  title: 'shared/AppImage',
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
