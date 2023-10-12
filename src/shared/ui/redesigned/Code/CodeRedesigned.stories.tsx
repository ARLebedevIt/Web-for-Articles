import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { FeatureFlagsDecorator } from '@/shared/config/storybook/FeatureFlagsDecorator/FeatureFlagsDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'shared/CodeRedesigned',
  component: Code,
  tags: ['autodocs'],
} satisfies Meta<typeof Code>

export default meta

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `const meta = {
      title: 'shared/Code',
      component: Code,
      tags: ['autodocs'],
    } satisfies Meta<typeof Code>
    `,
  },
  decorators: [StoreDecorator({}), FeatureFlagsDecorator({isAppRedesigned: true}), ThemeDecorator('redesigned')],
}
