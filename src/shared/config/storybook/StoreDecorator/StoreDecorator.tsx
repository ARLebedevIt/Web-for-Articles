import { DeepPartial } from '@reduxjs/toolkit'
import { Decorator } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export const StoreDecorator = (state?: DeepPartial<StateSchema>): Decorator => (Story) => {
  return (
    <StoreProvider initialState={state}>
      <Story />
    </StoreProvider>
  )
}
