import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
  title: 'shared/FlexRedesigned',
  component: Flex,
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>

export default meta

type Story = StoryObj<typeof meta>;

export const WithACenterDColumnJCenter: Story = {
  args: {
    children: (
      <>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
      </>
    ),
    align: 'center',
    direction: 'column',
    justify: 'center',
  },
}

export const WithAEndDRowJEnd: Story = {
  args: {
    children: (
      <>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
      </>
    ),
    align: 'end',
    direction: 'row',
    justify: 'end',
  },
}

export const RowGap4: Story = {
  args: {
    children: (
      <>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
      </>
    ),
    gap: '4',
    align: 'start',
    direction: 'row',
    justify: 'start',
  },
}

export const RowGap8: Story = {
  args: {
    children: (
      <>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
      </>
    ),
    gap: '8',
    align: 'start',
    direction: 'row',
    justify: 'start',
  },
}

export const RowGap16: Story = {
  args: {
    children: (
      <>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
      </>
    ),
    gap: '16',
    align: 'start',
    direction: 'row',
    justify: 'start',
  },
}

export const RowGap32: Story = {
  args: {
    children: (
      <>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
        <div>SomeText</div>
      </>
    ),
    gap: '32',
    align: 'start',
    direction: 'row',
    justify: 'start',
  },
}
