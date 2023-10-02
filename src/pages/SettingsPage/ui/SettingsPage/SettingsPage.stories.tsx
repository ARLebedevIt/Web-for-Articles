import type { Meta, StoryObj } from '@storybook/react'
import SettingsPage from './SettingsPage'

const meta = {
  title: 'pages/SettingsPage',
  component: SettingsPage,
  tags: ['autodocs'],
} satisfies Meta<typeof SettingsPage>

export default meta

type Story = StoryObj<typeof meta>;

export const Light: Story = {

}