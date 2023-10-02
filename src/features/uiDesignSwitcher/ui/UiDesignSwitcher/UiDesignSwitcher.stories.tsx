import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta = {
  title: 'features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof UiDesignSwitcher>

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {

};